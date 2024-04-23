
let titleCount = 1;
let totalPtice = 0;
const card1 = document.querySelectorAll(".cards");


for(let i=0; i<card1.length; i++){
    const card = card1[i];

    card.addEventListener("click",function(){
      
     const title = card.querySelector("h2").innerText;
       
        const price = parseFloat(card.querySelector('p').innerText.split(" ")[1]);
    
        const titleContainer = document.getElementById('title-container');
        const p = document.createElement('p');
        p.innerHTML =titleCount + ' .' + title ;
        titleContainer.appendChild(p);
        titleCount++;

        // calculate price
        totalPtice += price;
       
        document.getElementById('total-price').innerText=totalPtice.toFixed(2);

    });
}

const btn = document.getElementById('apply-btn');
btn.addEventListener('click',function(){

    const apply =document.getElementById('input-field').value;
    const couponCode = apply.split(" ").join("").toUpperCase();
    console.log(couponCode);
    if(totalPtice>=200){
        if(couponCode=== "SELL200"){
            
            const disCountElement = document.getElementById("discountPrice");
            const disCountAmount = totalPtice * 0.2;
            disCountElement.innerText= disCountAmount.toFixed(2);
            
            const restTotal = document.getElementById('restPrice');
            restTotal.innerText = totalPtice -disCountAmount.toFixed(2);
            document.getElementById("input-field").value = "";
        }
        else{
            alert("Invalid coupone");
            document.getElementById("input-field").value = "";
        }
    }
    else{
        alert("please order at least  $200 ");
        document.getElementById("input-field").value = "";
    }

});