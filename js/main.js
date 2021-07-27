$('#transBtn').click(function(){
    $('.viewDiv').toggleClass('d-none');
    $('.searchDiv').toggleClass('d-none')
})
$('#viewBtn').click(function(){
    $('.viewDiv').toggleClass('d-none');
    $('.searchDiv').toggleClass('d-none')
})

$('#paypalBtn').click(function(){
    $('.card-payment').addClass('d-none');
    $('.paypal-payment').removeClass('d-none');
    $('#paypalBtn').css({'color':'#0F4ABD', 'font-weight':'600'});
    $('#cardBtn').css({'color':'#4A4A4A','font-weight':'500' });

})
$('#cardBtn').click(function(){
    $('.card-payment').removeClass('d-none');
    $('.paypal-payment').addClass('d-none');
    $('#cardBtn').css({'color':'#0F4ABD','font-weight':'600'});
    $('#paypalBtn').css({'color':'#4A4A4A','font-weight':'500'})
})

// sidebar
$('.sideicon span').click(function(){
    $('.sidebar2').slideToggle(300)
})
