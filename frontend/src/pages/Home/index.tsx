import React from 'react';
import { Container, Title, Logs, UserBox } from './styled';

import Loading from '../../components/logading';
import { User } from './utils';

export default function Home(): JSX.Element {
    const [messages, setMessages] = React.useState<Partial<User[]>>([]);
    const [connected, setConnected] = React.useState(false);
    /* eslint-disable no-case-declarations*/ /*
    /*eslint-disable @typescript-eslint/no-non-null-assertion*/
    React.useEffect(() => {
        const url = process.env.REACT_APP_BASE_URL;
        const ws = new WebSocket(url as string);
        ws.binaryType = 'arraybuffer';

        ws.onopen = function() {
            console.log('Conected');
        }
        /* eslint-disable no-case-declarations */
        ws.onmessage = function(res) {
            const payload: User[] = JSON.parse(Buffer.from(res.data).toString());
            setConnected(true);
            setMessages(payload);
        }
    
        ws.onclose = function() {
            console.log('Desconected, Reconecting');
            //setConnected(false);
        }

    },[]);

    return (
        <Container>
            <Title>Logs discord</Title>
            <Loading displays={!connected}/>
            <Logs>
                {messages && connected && messages.length === 0 && <h1>Nada aqui</h1> || messages.map((value: User | undefined, index: number) => {
                    return (<UserBox key={index}>
                        <img 
                        src={ value?.user }
                            alt="user"
                        />
                        <p>{ value?.msg }</p>
                    </UserBox>
                    )
                })}
            </Logs>
        </Container>
    );
}