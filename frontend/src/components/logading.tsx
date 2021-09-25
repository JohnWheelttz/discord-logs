import React from 'react';

import { Load } from './styled';

export default function Loading({ displays }: { displays: boolean}): JSX.Element {
    return (
        <Load displays={displays ? true : false}>
            <img src="https://c.tenor.com/5o2p0tH5LFQAAAAi/hug.gif"/>
        </Load>
    );
}