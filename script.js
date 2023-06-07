let inFld = document.querySelector("#space");
let word = document.querySelector("#words");
let char = document.querySelector("#characters");
let clear = document.querySelector(".clear_btn");

let headerWord = document.querySelector(".word h3")
let headerchar = document.querySelector(".character h3")

clear.addEventListener("click", () => {
    inFld.value = null;
    char.innerHTML = "0";
    word.innerHTML = "0";
    headerWord.innerHTML = "Word"
    headerchar.innerHTML = "Character";
})

inFld.addEventListener('keyup', () => {
    let input = inFld.value;
    char.innerHTML = `${input.length}`;

    let trimmedInput = input.replace(/\s+/g, " ").trim();
    let numberOfWord = trimmedInput.split(" ");

    let finalWord = numberOfWord.length;
    if (numberOfWord[0] == "") {
        finalWord = 0;
    }
    word.innerHTML = finalWord;

    headerchar.innerText = input.length > 1 ? "Characters" : "Character";
    headerWord.innerText = numberOfWord.length > 1 ? "Words" : "Word";
})

let uprBtn = document.querySelector("#upper"),
    lowBtn = document.querySelector("#lower");

uprBtn.addEventListener("click", () => {
    inFld.classList.remove("active")
    let upperTxt = inFld.value.toUpperCase();
    inFld.value = upperTxt;
})

lowBtn.addEventListener("click", () => {
    inFld.classList.remove("active")
    let lowerTxt = inFld.value.toLowerCase();
    inFld.value = lowerTxt;
});
