console.log("hello from the script");

const synth = window.speechSynthesis;


document.querySelector("#my-button").onclick = ()=> {

    console.log("button click");

    let textInput = document.querySelector("#text-input").value;
    speak(textInput);

   
};



//function speak(text) {}

const speak = (text) => {

    if (synth.speaking){

        console.error("its speaking already");

        return;
         }

         let utterThis = new SpeechSynthesisUtterance(text);

         utterThis.lang = "fr -Fr"
         utterThis.pitch = 1.4 ;
         utterThis.rate = 0.2 ;
         

    synth.speak(utterThis);
    
    


}

