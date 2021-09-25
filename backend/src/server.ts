import { Bot } from 'discord-c';
import  WebSocket from 'ws';

const wss = new WebSocket.Server({ port: 8080 });

const bot = new Bot();

interface User {
    user: string;
    msg: string;
}

const logs: User[] = [];



bot.onmessage((ctx) => {
    const img = `https://cdn.discordapp.com/avatars/${ctx.author.id}/${ctx.author.avatar}`;
    const content = { user: img, msg: ctx.author.content ?? '' };

    logs.push(content);

    wss.clients.forEach((client) => {
        client.send(Buffer.from(JSON.stringify(logs)));
    });
    
    ctx.channel.send(ctx.author.mention, 'Sua mensagem foi registrada! onfira os logs em https://www.logsdiscord.ga');
});

bot.start('NDgwNDAzMTM4MTkzNjUzNzYx.W3hASQ.ic-759y06dLIcciFAgSWhgEKvUs');