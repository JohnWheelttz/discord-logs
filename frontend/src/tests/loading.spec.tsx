import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Loading from '../components/logading';

describe('Home', () => {
    it('should no display with displays false', () => {
        const { queryByRole, container } = render(<Loading displays={false} />);

        const element = container.querySelector('div');

        expect(element).toBeInTheDocument();
        expect(element).toHaveStyle('display: none;');
    });

    it('should no display with displays true', () => {
        const { queryByRole, container } = render(<Loading displays />);

        const element = container.querySelector('div');

        expect(element).toBeInTheDocument();
        expect(element).toHaveStyle('display: flex;');
    });
});
/* */