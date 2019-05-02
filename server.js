const ws = require('ws')

const server = new ws.Server({port:3000})

server.on('connection',ws=>{
    ws.on('message',massage=>{
        if(massage === 'exit'){
            ws.close()
        }else{
            server.clients.forEach(client=>{
                if (client.readyState === ws.OPEN){
                    client.send(massage)
                }
            })
        }
    })
})