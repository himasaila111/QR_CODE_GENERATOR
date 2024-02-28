let inputValue = document.querySelector(".text");
let qrImage = document.querySelector(".qrCode");
const qrCodeAPI = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const qrCodeSelector = async()=>{
     if(inputValue.value == ''){
        alert('Please enter any text or url')
     }
     else{
        qrImage.src = qrCodeAPI + inputValue.value
     }
     inputValue.value = ''
}