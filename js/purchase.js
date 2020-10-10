
document.addEventListener('DOMContentLoaded',()=> {

    var totalprice = parseInt(localStorage.getItem("totalprice"));
    document.getElementById("total").innerHTML = "Rs. " + totalprice;
});

var valid = false;

document.getElementById("creditno").addEventListener("keyup",function(){
    var num = document.getElementById("creditno").value.split(" ").join(""); 
    if (num.length > 0) {
        num = num.match(new RegExp('.{1,4}', 'g')).join(" ");
    }
    this.value=num;


    //credit card validation luhn's algorithm
    var numText = document.getElementById("creditno").value;
    num = numText.split(" ").join("");
    
    var oddSum = 0;
    var evenSum = 0;
    


    if(num.length == 16)
    {
        for(var i = 0; i < num.length; i++){
        if(i % 2 === 0){
            if(num[i] * 2 >= 10){
                evenSum += ((num[i] * 2) - 9 );
            }
                else {
                evenSum += num[i] * 2;
            }
        }
        else {
            oddSum += parseInt(num[i]);
        }
        }
        if((oddSum + evenSum) % 10 === 0){
            document.getElementById("msg").innerHTML = "Valid number";
            valid=true;
            

        }
        else{
        
            document.getElementById("msg").innerHTML = "Invalid number";
           
        }
    }
    
    else{
        
        document.getElementById("msg").innerHTML = "Invalid number";
       
    }


});

function validate(){



    if(valid == true){
        var name = document.getElementById("name").value;
        var no = document.getElementById("mobile").value;
        var address = document.getElementById("addressLine1").value;
        address += ", ";
        address += document.getElementById("addressLine2").value;
        address += ", ";
        if(document.getElementById("addressLine3").value != null)
        {
            address += document.getElementById("addressLine3").value;
            address += ", ";
        }
        
        address += document.getElementById("addressLine4").value;
        address += ", ";
        address += document.getElementById("addressLine5").value;
        address += ", ";
        
        address = address + " PIN. " + document.getElementById("pin").value;

        var cardno = document.getElementById("creditno").value.split(" ").join(""); 

        var orderID = generateID();

        
        var purchase ={
            "orderID":orderID,
            "name":name,
            "address":address,
            "cardno":cardno,
            "totalprice":localStorage.getItem("totalprice")
            
        };

        localStorage.setItem("purchase",JSON.stringify(purchase));
        location.href = "thankyou.html";

    }
    else{
        alert("enter Valid Details");
    }
    //console.log(valid);
    //
}

function generateID(){
    return 'OID' + Math.random().toString(36).substr(2, 9);
}