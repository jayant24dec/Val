const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive? Cutu ji",
    "Cutu ji pleaseeeeeee....",
    "If you say no, I will be really sad....",
    "I will be very sad...",
    "I will be very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please Cutu ji! ❤️",
];

let msgIndex=0;

function handleNoClick(){

    const noButton=document.querySelector('.b2');
    const yesButton=document.querySelector('.b1');
    noButton.textContent = messages[msgIndex];
    msgIndex = (msgIndex + 1) % messages.length;

    const currSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currSize *1.5}px`;
}

function handleYesClick(){
    window.location.href = "yes_page.html";
}