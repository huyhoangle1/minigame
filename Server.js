var express = require("express");
const { Socket } = require("socket.io");
var app = express();
app.use(express.static("public"))
app.set("view engine","ejs");
app.set("views","./views");
var Server = require("http").Server(app);
var io=require("Socket.io")(Server);
Server.listen(process.env.PORT || 3000)
var mang=[]

io.on("connection",(Socket)=>{
    console.log("Có người kết nối :" + Socket.id);
    Socket.on("hocvien-gui-thongtin",(data)=>{
        mang.push(
            new hocvien(data.hoten,data.email,data.dienthoai)
        );
        // console.log(data.hoten);
        io.sockets.emit('server-gui-ds',mang)
    })
})
function hocvien(hoten,email,sodt){
    this.HOTEN=hoten;
    this.EMAIL=email;
    this.SODT=sodt;
}


app.get("/",(req,res)=>{
    res.render("trangchu")
})