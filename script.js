const start = document.getElementById("start");
const temp = document.getElementById("show");
const text = document.getElementById("text");
const sub = document.getElementById("sub");
const boom = new Audio("./boom.mp3");
const fullName = ["A", "n", "u", "b", "h", "a", "v", " ", "B", "i", "s", "w", "a", "s"];

function delay(ms) {return new Promise(resolve => setTimeout(resolve, ms));}

let speech = new SpeechSynthesisUtterance();
function read(Atext) {
    console.log("Reading:", Atext);
    speech.text = Atext;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

start.addEventListener("click", async () => {
    await delay(500);
    start.style.display = "none";
    await delay(2000);
    temp.style.display = "flex";

    text.innerHTML = "A";
    await delay(1000);
    text.innerHTML = "A for ";
    await delay(1000);

    for (let i in fullName) {
        text.innerHTML += fullName[i];
        const audio = new Audio("./boom.mp3");
        audio.currentTime = 0.25;
        audio.play();
        await delay(250);
    }

    await delay(3000);
    text.innerHTML = "So?";
    await delay(2000);

    text.innerHTML = "";
    for (let i in fullName) {
        text.innerHTML += fullName[i];
        const audio = new Audio("./boom.mp3");
        audio.currentTime = 0.25;
        audio.play();
        await delay(250);
    }
    await delay(1000);
    text.innerHTML += ' cannot bangla enough';
    boom.play();
    await delay(2000)
    text.innerHTML = "Sure its a False negative right?"
    await delay(2000)
    for(let i = 3; i > 0; i--){
        sub.innerHTML = `Jumpscare in ${i}`;
        await delay(1000);
    }
    text.innerHTML = "Then read this <br> Bangla holo ekta bhalo bhasa. Toder shobai ke bangla mon diye pora uchit. <b>Bangla Bhasha ucharrito hole</b>, ki kore bhujbo <b>Shonkor o black mamba chelebela</b> te <b>samanya khoti</b> kore <b>barsharani</b> te bhijbe? Bangla porle tumake sobai bhalo bolbe aur tumi bhalo nomber pele tomar maa baba tomake kub porshkar debe"
    for(let i = 10; i > 0; i--){
        sub.innerHTML = `Answer in ${i}`
        await delay(1000);
    }
    sub.innerHTML = "";

    read("Bangla holo ekta bhalo bhasa. Toder shobai ke bangla mon diye pora uchit. Bangla Bhasha ucharrito hole, ki kore bhujbo Shonkor o black mamba chelebela te samanya khoti kore barsharani te bhijbe. Bangla porle tumake sobai bhalo bolbe aur tumi bhalo nomber pele tomar maa baba tomake kub porshkar debe");
});