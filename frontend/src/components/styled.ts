import styled from 'styled-components';

interface Props {
    displays?: boolean;
}
export const Load = styled.div<Props>`
    & {
        display: ${(props) => (props.displays && 'flex' || 'none')};
        justify-content: center;
    }

    img {
        padding-block-start: 20px;
        padding-block-end: 40px;
        width: 50px;
    }
`;