// Module: data-server.js   
// v.1.0
//

// Evermore
const port = 8000

var json // Buffer
// empty config file
var trackerConfig = [{
    orgaselect: 0,
}]

io = require("socket.io"),
server = io.listen(port);
console.log('Websocket Server is listening on Port: '+port)
// event fired every time a new client connects:
server.on("connection", (socket) => {
    console.info(`Client connected [id=${socket.id}]`);
   
  
    socket.on("disconnect", () => {
        console.info(`Client gone [id=${socket.id}]`);
    });
  
    socket.on('sync_orgaselect', (data) => {
        server.emit('sync_orgaselect', data)
        console.info('Receive Data from vote Server');
        console.info(data);
    });
    
  });
  