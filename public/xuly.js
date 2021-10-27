var socket = io("https://information-member.herokuapp.com")
socket.on('server-gui-ds',(data)=>{
    $('#ds').html("")
    data.map((hocvien)=>{
        $('#ds').append(`
        <div class="hocvien">
        <div  class="hang1">id : 1 || <span>`  +hocvien.HOTEN+ `</span></div>
        <div class="hang2"> `+hocvien.EMAIL+`  - `+ hocvien.SODT+`</div>

    </div>

        `)
    })
})
$(document).ready(()=>{
   $("#btnRegister").click(()=>{
       socket.emit('hocvien-gui-thongtin',
       {
           hoten:$("#txtHoten").val(),
           email:$("#txtEmail").val(),
           dienthoai:$("#txtSdt").val()
       })
   })
})