//for access express and socket 
const express =  require("express") ;   
const socket =  require("socket.io");


const app = express() ;    //  applic.  initialize and server ready 

// for use the index.html  file in the public folder 
app.use(express.static("public"));

let port = 5000  ; 
let server  = app.listen(port , () => {
    console.log("Listening to the server" + port );
})







let io =  socket(server) ;  


io.on("connection"  , (socket) =>{
      console.log("Made socket Conncetion ");
            // transfer data from  frontend to the server throw  the listner 
            //  revieved data 
       socket.on("beginPath"  , (data) => {
         // transfer data to all connectors
         //data from frontend 
         io.sockets.emit("beginPath" , data );
       })


 
        socket.on("drawStroke"  , (data)  => {
            io.sockets.emit("drawStroke" , data );
        });

        socket.on("redoUndo" , (data) => {
            io.sockets.emit("redoUndo"  , data );
        })
})