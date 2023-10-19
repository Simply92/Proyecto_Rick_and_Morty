const server = require("./app")
const { conn } = require('./DB_connection');

const PORT = 3001;

conn.sync({force: true}).then(() => {
server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});
});

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const {url} = req;
//     // if(url.includes("/rickandmorty/character")){
//     //     const id = Number(url.split('/').pop())
//     //     const character = characters.find((char)=> {
//     //         return char.id === id
//     //     })
//     if(url.includes("/rickandmorty/character")){
//         const id = Number(url.split('/').pop())
//         getCharById(res,id)
//     }
// })
// .listen(PORT, "localhost")

