const ticket=200;

function calculo(){
    var Cantidad=document.getElementById('Cantidad').value;
    var descuento=document.getElementById('Categoria').value;
    var Total=Cantidad*(ticket-((ticket*descuento)/100));
    document.getElementById('Monto').value='Total a pagar: $'+Total
}