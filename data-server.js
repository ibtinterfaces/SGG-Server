// Module: data-server.js   
// v.1.0
//
var fs = require('fs');

// import fileStartliste from './startliste.json'

// Evermore
const port = 8000

var json // Buffer
// empty config file
// var trackerConfig = [{
//     orgaselect: 0,
// }]

var orgaselect = 0
var votedteam = 0
var starterList = []

const io = require("socket.io")
const server = io.listen(port)

console.log('Websocket Server is listening on Port: '+port)
// event fired every time a new client connects:
server.on("connection", (socket) => {
    server.emit('sync_orgaselect', orgaselect)
    server.emit('sync_votedteam', votedteam)
    server.emit('sync_starterlist', starterList)
    console.info(`Client connected [id=${socket.id}]`);
   
  
    socket.on("disconnect", () => {
        console.info(`Client gone [id=${socket.id}]`);
    });
  
    socket.on('sync_orgaselect', (data) => {
        orgaselect = data
        server.emit('sync_orgaselect', orgaselect)
        console.info(data);
    });
    socket.on('sync_votedteam', (data) => {
        votedteam = data
        server.emit('sync_votedteam', votedteam)
        console.info(data);
    });
    socket.on('sync_final_results', (data) => {
        server.emit('sync_final_results', data)
        console.info(data);
    });
    
    socket.on('sync_starterlist', (data) => {
        starterList = data
        server.emit('sync_starterlist', starterList)
        // do local Backup FS or database

        console.info(data);
    });
    socket.on('mob_vote_t1', (data) => {
        server.emit('mob_vote_t1', data)
        console.info('Receive mob_vote_t1');
        console.info(data);
    });
    socket.on('mob_vote_t2', (data) => {
        server.emit('mob_vote_t2', data)
        console.info('Receive mob_vote_t2');
        console.info(data);
    });
    socket.on('mob_vote_t3', (data) => {
        server.emit('mob_vote_t3', data)
        console.info('Receive mob_vote_t3');
        console.info(data);
    });
    socket.on('mob_vote_t4', (data) => {
        server.emit('mob_vote_t4', data)
        console.info('Receive mob_vote_t4');
        console.info(data);
    });

    socket.on('mob_resp_t1', (data) => {
        server.emit('mob_resp_t1', data)
        console.info('Receive mob_resp_t1');
        console.info(data);
    });
    socket.on('mob_resp_t2', (data) => {
        server.emit('mob_resp_t2', data)
        console.info('Receive mob_resp_t2');
        console.info(data);
    });
    socket.on('mob_resp_t3', (data) => {
        server.emit('mob_resp_t3', data)
        console.info('Receive mob_resp_t3');
        console.info(data);
    });
    socket.on('mob_resp_t4', (data) => {
        server.emit('mob_resp_t4', data)
        console.info('Receive mob_resp_t4');
        console.info(data);
    });




    socket.on('mob_vote_a1', (data) => {
        server.emit('mob_vote_a1', data)
        console.info('Receive mob_vote_a1');
        console.info(data);
    });
    socket.on('mob_vote_a2', (data) => {
        server.emit('mob_vote_a2', data)
        console.info('Receive mob_vote_a2');
        console.info(data);
    });
    socket.on('mob_vote_a3', (data) => {
        server.emit('mob_vote_a3', data)
        console.info('Receive mob_vote_a3');
        console.info(data);
    });
    socket.on('mob_vote_a4', (data) => {
        server.emit('mob_vote_a4', data)
        console.info('Receive mob_vote_a4');
        console.info(data);
    });

    socket.on('mob_resp_a1', (data) => {
        server.emit('mob_resp_a1', data)
        console.info('Receive mob_resp_a1');
        console.info(data);
    });
    socket.on('mob_resp_a2', (data) => {
        server.emit('mob_resp_a2', data)
        console.info('Receive mob_resp_a2');
        console.info(data);
    });
    socket.on('mob_resp_a3', (data) => {
        server.emit('mob_resp_a3', data)
        console.info('Receive mob_resp_a3');
        console.info(data);
    });
    socket.on('mob_resp_a4', (data) => {
        server.emit('mob_resp_a4', data)
        console.info('Receive mob_resp_a4');
        console.info(data);
    });


    socket.on('mob_vote_dj', (data) => {
        server.emit('mob_vote_dj', data)
        console.info('Receive mob_vote_dj');
        console.info(data);
    });
    socket.on('mob_resp_dj', (data) => {
        server.emit('mob_resp_dj', data)
        console.info('Receive mob_resp_dj');
        console.info(data);
    });



    socket.on('mob_vote_cjp', (data) => {
        server.emit('mob_vote_cjp', data)
        console.info('Receive mob_vote_cjp');
        console.info(data);
    });
    socket.on('mob_resp_cjp', (data) => {
        server.emit('mob_resp_cjp', data)
        console.info('Receive mob_resp_cjp');
        console.info(data);
    });



    // socket.on('mobile_vote', (data) => {
    //     server.emit('mobile_vote', data)
    //     console.info('Receive vote data');
    //     console.info(data);
    // });
    socket.on('mobile_busy', (data) => {
        server.emit('mobile_busy', data)
        console.info('Receive busy data');
        console.info(data);
    });
    socket.on('orga_busy', (data) => {
        server.emit('orga_busy', data)
        console.info('Receive orga busy data');
        console.info(data);
    });
    socket.on('orga_pause', (data) => {
        server.emit('orga_pause', data)
        console.info('Receive orga pause data');
        console.info(data);
    });
    socket.on('cleanup_mobile', (data) => {
        server.emit('cleanup_mobile', data)
        console.info('Receive cleanup mobile');
        console.info(data);
    });
    
    
  });
  