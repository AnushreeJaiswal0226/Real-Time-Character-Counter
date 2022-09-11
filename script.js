const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");
const changeEl = document.getElementById("change");
const wordCounterEl = document.getElementById("word-counter");
const okEl = document.getElementById("ok");
const optionsEl = document.querySelector('select');
const customCounterEl = document.getElementById("custom-counter");

var customLimit = +customCounterEl.value;

textareaEl.addEventListener("keyup", ()=>{
    updateCounter();
})

updateCounter();

function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length;
    remainingCounterEl.innerHTML = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}

changeEl.addEventListener("click",()=>{
    wordCounterEl.style.display = 'inline-block';
    okEl.style.display = 'inline-block';
    changeEl.style.display = 'none';
    remainingCounterEl.innerHTML = '';    
});

wordCounterEl.addEventListener("click",()=>{
    if(optionsEl.value==="custom"){
        wordCounterEl.style.display = 'none';
        customCounterEl.style.display = 'inline-block';               
    }
})

okEl.addEventListener("click",()=>{
    wordCounterEl.style.display = 'none';
    okEl.style.display = 'none';
    changeEl.style.display = 'inline-block';
    if(optionsEl.value==="custom"){
        customLimit = +customCounterEl.value; 
        textareaEl.setAttribute("maxlength", customLimit);
        customCounterEl.style.display = 'none';  
    }
    else{
        textareaEl.setAttribute("maxlength",optionsEl.value);
    }    
    remainingCounterEl.innerHTML = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
});