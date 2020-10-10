document.addEventListener('DOMContentLoaded',()=> {

    var purchase = JSON.parse(localStorage.getItem("purchase"));
    
    document.getElementById("orderID").innerHTML = purchase.orderID;

    document.getElementById("name").innerHTML = purchase.name;

    
    document.getElementById("address").innerHTML = purchase.address;

    var cardno = purchase.cardno;

    var str = "";
    for(var i=0;i<=13;i++){
        str += 'x'
    }
    str += cardno[14];
    str += cardno[15];
    document.getElementById("creditno").innerHTML = str;

    document.getElementById("totalprice").innerHTML = "Rs. "+ purchase.totalprice;


    
});
