function nopanpyorautus() {

    let randomNumber = Math.floor(Math.random() * 6) + 1;
    const diceImage = document.querySelector('#dice img');
    diceImage.src = `./img/${randomNumber}.png`;
}

const diceElement = document.querySelector('#dice');
diceElement.addEventListener('click', nopanpyorautus);
