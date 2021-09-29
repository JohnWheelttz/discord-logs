import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Home from '../pages/Home';
import { User } from '../pages/Home/utils';

function createWebSocketMock(data: User[]): void {
    (global as any).WebSocket = class WebSockets {
        set onmessage(call: (data: { data: string }) => void){
            call({ data: JSON.stringify(data)});
        }
    }
    
}

describe('Home', () => {
    it('should display message with messages', () => {
        const data = [{user: 'eae',msg: 'mensagem'}] as User[];
        createWebSocketMock(data);

        const { queryByText, queryByAltText } = render(<Home />);

        const p = queryByText('mensagem');
        const img = queryByAltText('user');

        expect(p).toHaveTextContent('mensagem');
        expect(img).toHaveAttribute('src', 'eae');
    });

    it('should no display messages without messages', () => {
        const data = [] as User[];
        createWebSocketMock(data);

        const { queryByText, queryByAltText } = render(<Home />);

        const p = queryByText('mensagem');
        const img = queryByAltText('user');

        expect(p).not.toBeInTheDocument();
        expect(img).not.toBeInTheDocument();
    });
});
