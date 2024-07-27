const subscribe = document.getElementById("subscribe");
const sub1 = document.getElementById("sub1");
const sub2 = document.getElementById("sub2");
const sub3 = document.getElementById("sub3");
const submitbtn = document.getElementById("submitbtn");
const subop = document.getElementById("subop");
const sub = document.getElementById("sub");

submitbtn.onclick = function(){
    if(subscribe.checked){
        subop.textContent =`You have subscribed`;
    }
    else{
        subop.textContent =`You have not subscribed`;
    }
    if(sub1.checked){
        sub.textContent =`You have subscribed to amazon prime`;
    }
    
    else if(sub2.checked){
        sub.textContent =`You have subscribed to netflix`;
    }
    
    else if(sub3.checked){
        sub.textContent =`You have subscribed to Disney`;
    }
    else{
        sub.textContent =`You have not Selected`;
    }
}