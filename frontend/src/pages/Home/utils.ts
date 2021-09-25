interface PayloadBase {
    t: string;
    d: {
        content: string;
        author: {
        username: string;
        public_flags: string;
        id: string;
        discriminator: string;
        avatar: string
    }
    };
}

export interface User {
    user: string;
    msg: string;    
}

export type Payload = Partial<PayloadBase> & Record<string, unknown>;