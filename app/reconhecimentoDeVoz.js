window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const boxChute = document.querySelector("#chute")

recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(event) {
    var chute = event.results[0][0].transcript
    
    exibeChute(chute)
    verficaChute(chute)

}

function exibeChute(chute) {
    boxChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())