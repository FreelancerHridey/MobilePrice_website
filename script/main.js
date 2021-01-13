        // when Mobile plus button click 
const plusBtn = document.getElementById("plusBtn");
plusBtn.addEventListener("click", function(){
    
    updateMobileCount('mobileCount','mobilePrice','totalMobilePrice',1,1219);
    TotalAmountUpdate('totalAmount');
})


        // when Mobile minus button click
const minusBtn = document.getElementById("minusBtn");
minusBtn.addEventListener("click", function(){
            
    updateMobileCount('mobileCount','mobilePrice','totalMobilePrice',-1,-1219);
    TotalUpdateAmount('totalAmount',1219)
})


        // when click case plus button 
const CasePlusBtn = document.getElementById("CasePlus");
    CasePlusBtn.addEventListener("click", function(){
                    
        updateMobileCount('CaseInput','CasePrice','totalCasePrice',1,59);
        TotalAmountUpdate('totalAmount')
                
})
                // when click case minus button 
const CaseMinusBtn = document.getElementById("CaseMinus");
CaseMinusBtn.addEventListener("click", function(){
                
    updateMobileCount('CaseInput','CasePrice','totalCasePrice',-1,-59,);
    TotalUpdateAmount('totalAmount',59)
            
})

function updateMobileCount(id,priceId,totalMobilePrice,UpdateInput,PriceUpdate){
    const addNumber =document.getElementById(id).value;
    const current = parseFloat(addNumber);
    const total = current + UpdateInput;
    document.getElementById(id).value = total;
  
    const mobilePrice = document.getElementById(priceId).innerText;
    const currentPrice = parseFloat(mobilePrice);
    const totalPrice =  currentPrice + PriceUpdate;
    document.getElementById(priceId).innerText = totalPrice;

    document.getElementById(totalMobilePrice).innerText= totalPrice;

}

function TotalAmountUpdate(id){
    
    const mobilePriceValue = document.getElementById('totalMobilePrice').innerText;
    const CurrentMobileValue = parseFloat(mobilePriceValue);
    
    const CasePriceUpdate = document.getElementById('totalCasePrice').innerText;
    const CurrentCaseValue = parseFloat(CasePriceUpdate);

    const TotalPriceAmount = CurrentMobileValue + CurrentCaseValue;
    document.getElementById(id).innerText = TotalPriceAmount;
    
}
function TotalUpdateAmount (amountId,currentPriceUpdate){
    const totalAmount = document.getElementById(amountId).innerText;
    const CurrentTotalAmount = parseFloat(totalAmount);

    // const UpdatePrice = document.getElementById(id).innerText;
    // const currentPriceUpdate = parseFloat(UpdatePrice);

    const totalUpdateAmount = CurrentTotalAmount - currentPriceUpdate;
    document.getElementById(amountId).innerText = totalUpdateAmount;
}