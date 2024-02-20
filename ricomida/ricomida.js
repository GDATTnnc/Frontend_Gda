$(document).ready(function(){
    $('#c1 .card-title').on('click',function(){
        $('#panqueque').toggle(1000);
    });

    $('#c2 .card-title').on('click',function(){
        $('#tiramisu').toggle(1000);
    });

    $('#c3 .card-title').on('click',function(){
        $('#plateada').toggle(1000);
    });
    $('#enviarCorreo').click(function(){
        alert('El correo fue enviado correctamente...');
    });
})