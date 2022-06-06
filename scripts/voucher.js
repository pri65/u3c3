let voucher=document.getElementById("voucher_list");

async function salonData() {
    
      try {
        let data= await fetch(`https://masai-vouchers-api.herokuapp.com/api/vouchers`);
        let res= await data.json();
        console.log(res[0].vouchers);
         for(var i=0; i<(res[0].vouchers).length; i++)
        {
            let div=document.createElement("div")

            let image=document.createElement("img")
            image.src=(res[0].vouchers)[i].image;

            let name=document.createElement("p")
            name.innerText=(res[0].vouchers)[i].name;

            let price=document.createElement("p")
            price.innerText=(res[0].vouchers)[i].price;

            let btn=document.createElement("button")
            btn.addEventListener("click",function(event) {
                console.log(event.target.parentElement)
                var purchase=localStorage.getItem("cart")
                console.log(purchase)
                var data=[]
                if(Object.keys(purchase).length===0) {
                    data.push(event.target.parentElement);
                    console.log(data)
                    localStorage.setItem("cart",JSON.stringify(data))
                } else {
                    var result=JSON.parse(localStorage.getItem("cart"))
                    console.log(result);
                    result.push(event.target.parentElement)
                    localStorage.setItem("cart",JSON.stringify(result));
                }
            });
            btn.innerText="Buy";
            btn.className="buy_voucher";
            
            div.append(image,name,price,btn);
            voucher.append(div);
        }
    }
       catch (error) {
          console.log(error)
      }
    
}

salonData()

let confirm=document.getElementsByClassName("buy_voucher");
            confirm.addEventListener("click",function() {
                let amo=document.getElementById("form")
                amo.innerText=form.amount.value;
                if(amo>500)
                {
                    alert("Sorry! insufficient balance")
                } else {
                    alert("Hurray! purchase successful")
                }
            });