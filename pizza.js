function order(item){
alert("تم طلب " + item + " 🍕");
}

function sendReview(){
let n=document.getElementById("name").value;
let r=document.getElementById("review").value;

if(!n || !r){
alert("اكتب البيانات");
return;
}

alert("شكراً يا " + n);
}

function scrollToMenu(){
document.getElementById("menu").scrollIntoView({behavior:"smooth"});
}