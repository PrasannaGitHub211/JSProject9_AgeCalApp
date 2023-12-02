
let userInput = document.getElementById("date");

//it will make future date disable
userInput.max = new Date().toISOString().split("T")[0];

const calBtn = document.getElementById("calBtn");
let result = document.getElementById("result");
const audio = new Audio();


function calculateAge(params) {
    let birthDate = new Date(userInput.value);
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();


    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3,m3,y3;
    y3 = y2-y1;
   
    if(m2>=m1){
        m3 = m2-m1;
    }else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1){
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = getDaysInMonth(y1,m1)+d2-d1;
    }
    if(m3<0){
        m3 = 11;
        y3--;
    }
    result.innerHTML =`You are <span>${y3}</span> years <span>${m3}</span> months <span>${d3}</span> old`;

    const ageText = result.innerHTML;
    // Convert age text to speech and play audio
    textToSpeech(ageText);

}


//this function will give number of days in the month
function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
}


function textToSpeech(text) {
    // Using the SpeechSynthesis API
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}

calBtn.addEventListener("click",()=>{
    calculateAge();
});



