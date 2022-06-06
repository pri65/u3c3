function append() {
    let voucher=JSON.parse(localStorage.getItem("voucher_list")) || [];
    let vouchers=document.getElementById("purchased_vouchers");

    voucher.forEach(function(el) {
        let div=document.createElement("div");

        let image=document.createElement("img");
        image.src=el.image;

        let name=document.createElement("p")
        name.innerText=el.name;

        let price=document.createElement("p")
        price.innerText=el.price;

        div.append(image,name,price);
        vouchers.append(div);
    });
}

append();