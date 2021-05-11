//Variables
const speechResult = document.querySelector('#resultSpeech');
const startSpeech = document.querySelector('#startSpeech');

const panel = document.querySelector('#panelView');
const btnClear = document.querySelector('#clearResult');

//Eventos
document.addEventListener('DOMContentLoaded',()=>{
    startSpeech.addEventListener('click',startApp);
    btnClear.addEventListener('click',clearResult);
});
//Funciones
function clearResult(){
    speechResult.value = '';
};
function startApp(){

    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = 'es-ES';
    recognition.interimResults = false;

    recognition.start();

    recognition.onstart = () => {
        startSpeech.disabled = true;
        speechResult.classList.remove('hover:bg-blue-400');
        panel.textContent = 'Escuchando...'
    };
    recognition.onspeechend = () => {
        panel.textContent = 'Has terminado...';
    };
    recognition.onresult = (e) => {
        const {transcript} = e.results[0][0];
        speechResult.value += transcript;
    };
    recognition.onend = () => {
        panel.textContent = "Aqui verás tu texto";

        startSpeech.disabled = false;
        startSpeech.classList.add('hover:bg-blue-400');
    };
};