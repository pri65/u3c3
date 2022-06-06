function user(n,e,a,am) {
    this.name=n;
    this.email=e;
    this.address=a;
    this.wallet=am;
}

function addData(e) {
    e.preventDefault();
    let form=document.getElementById("form");
    let name=form.name.value;
    let email=form.email.value;
    let address=form.address.value;
    let wallet=form.amount.value;

    let i1=new user(name,email,address,wallet);
    let data=JSON.parse(localStorage.getItem("user")) || [];
    data.push(i1);
    localStorage.setItem("user",JSON.stringify(data));
    console.log(i1);
}