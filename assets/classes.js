class Game {

    constructor() {
        this.rock = document.querySelector('#rock');
        this.paper = document.querySelector('#paper');
        this.scissors = document.querySelector('#scissors');
        this.effectSounds(1);
    }

    startGame() {

        this.rock.addEventListener('click', () => this.play(1));
        if (this.rock.addEventListener('click', () => {
            let img = document.querySelector('#rock img');
            img.classList.toggle('blinking-onetime');
            this.effectSounds(2);
        }));

        this.paper.addEventListener('click', () => this.play(2));
        if (this.paper.addEventListener('click', () => {
            let img = document.querySelector('#paper img');
            this.effectSounds(3);
        }));

        this.scissors.addEventListener('click', () => this.play(3));
        if (this.scissors.addEventListener('click', () => {
            let img = document.querySelector('#scissors img');
            img.classList.toggle('blinking-onetime');
            this.effectSounds(4);
        }));
    }

    play(item) {
        let computer = Math.floor(Math.random() * 3) + 1;
        let player = item;

        console.log(player);
        console.log(computer);


        if (player != computer) {
            if (player === 1 && computer === 2) {
                this.updateScoreBorde(2);
                placarDiv2Text.innerHTML = '';
                placarDiv2Text.classList.remove('blinking');
                placarDiv2Text.innerHTML = 'You choose <i>Rock</i> <br/>';
                placarDiv2Text.innerHTML += 'and the Player 2 choosed <i>Paper</i> <br /> ';
                placarDiv2Text.classList.remove('branco');
                placarDiv2Text.classList.add('texto-vermelho');
                placarDiv2Text.innerHTML += 'You LOST this round';
    
            } else if (player === 1 && computer === 3) {
                this.updateScoreBorde(1);
                placarDiv2Text.innerHTML = '';
                placarDiv2Text.classList.remove('blinking');
                placarDiv2Text.innerHTML = 'You choose <i>Rock</i> <br/>';
                placarDiv2Text.innerHTML += 'and the Player 2 choosed <i>Scissors</i> <br /> ';
                placarDiv2Text.classList.remove('branco');
                placarDiv2Text.classList.add('texto-amarelo');
                placarDiv2Text.innerHTML += 'You GAIN this round';

            }

            if (player === 2 && computer === 3) {
                this.updateScoreBorde(2);
                placarDiv2Text.innerHTML = '';
                placarDiv2Text.classList.remove('blinking');
                placarDiv2Text.innerHTML = 'You choose <i>Paper</i> <br/>';
                placarDiv2Text.innerHTML += 'and the Player 2 choosed <i>Scissors</i> <br /> ';
                placarDiv2Text.classList.remove('branco');
                placarDiv2Text.classList.add('texto-vermelho');
                placarDiv2Text.innerHTML += 'You LOST this round';

            } else if (player === 2 && computer === 1) {
                this.updateScoreBorde(1);
                placarDiv2Text.innerHTML = '';
                placarDiv2Text.classList.remove('blinking');
                placarDiv2Text.innerHTML = 'You choose <i>Paper</i> <br/>';
                placarDiv2Text.innerHTML += 'and the Player 2 choosed <i>Rock</i> <br /> ';
                placarDiv2Text.classList.remove('branco');
                placarDiv2Text.classList.add('texto-amarelo');
                placarDiv2Text.innerHTML += 'You GAIN this round';

            }

            if (player === 3 && computer === 1) {
                this.updateScoreBorde(2);
                placarDiv2Text.innerHTML = '';
                placarDiv2Text.classList.remove('blinking');
                placarDiv2Text.innerHTML = 'You choose <i>Scissor</i> <br/>';
                placarDiv2Text.innerHTML += 'and the Player 2 choosed <i>Rock</i> <br /> ';
                placarDiv2Text.classList.remove('branco');
                placarDiv2Text.classList.add('texto-vermelho');
                placarDiv2Text.innerHTML += 'You LOST this round';


            } else if (player === 3 && computer === 2) {
                this.updateScoreBorde(1);
                placarDiv2Text.innerHTML = '';
                placarDiv2Text.classList.remove('blinking');
                placarDiv2Text.innerHTML = 'You choose <i>Scissors</i> <br/>';
                placarDiv2Text.innerHTML += 'and the Player 2 choosed <i>Paper</i> <br /> ';
                placarDiv2Text.classList.remove('branco');
                placarDiv2Text.classList.add('texto-amarelo');
                placarDiv2Text.innerHTML += 'You GAIN this round';

            }
        } else {
            console.log('empatou');
            placarDiv2Text.innerHTML = '';
            placarDiv2Text.innerHTML = 'Empate <br/>';
            placarDiv2Text.classList.remove('blinking');

        }
    }

    updateScoreBorde(item) {
        if (item === 1) {
            placar1++;
            placarDiv1Text.innerText = placar1;
        } else {
            placar2++
            placarDiv3Text.innerText = placar2;
        }
    }

    effectSounds(item) {
        switch (item) {
            case 1:
                const audio = new Audio('assets/sounds/starting.mp3');
                audio.play();
                break;
            case 2:
                const audioRock = new Audio('assets/sounds/rock.mp3');
                audioRock.play();
                break;
            case 3:
                const audioPaper = new Audio('assets/sounds/paper.mp3');
                audioPaper.play();
                break;
            case 4:
                const audioScissors = new Audio('assets/sounds/scissors.mp3');
                audioScissors.play();
                break;

            default:
                break;
        }
    }
}



document.addEventListener('DOMContentLoaded', function () {
    var video = document.querySelector('.video-background video');
    video.removeAttribute('controls'); // Remove os controles de vídeo

    let menu = document.getElementById('navbarHeader');
    let btnStartingGame = document.getElementById('btnStartingGame');
    let gameStarted = document.getElementById('gameStarted')

    setTimeout(function () {
        const collapseElementList = document.querySelectorAll('.collapse')
        const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl));
        btnStartingGame.classList.toggle('blinking');
    }, 1000);
});

document.getElementById('btnStartingGame').addEventListener('click', function () {
    var overlay = document.getElementById('overlay');
    var loadingContainer = document.getElementById('loadingContainer');

    overlay.style.display = 'block';
    loadingContainer.style.display = 'block';

    // Força um repaint antes de aplicar a transição
    overlay.offsetHeight;
    loadingContainer.offsetHeight;

    overlay.style.opacity = '1'; // Exibe o overlay suavemente
    loadingContainer.style.opacity = '1'; // Exibe o container de loading suavemente

    setTimeout(function () {
        overlay.style.opacity = '0'; // Esconde o overlay suavemente
        loadingContainer.style.opacity = '0'; // Esconde o container de loading suavemente
        gameStarting();

        // Esconde os elementos após a transição
        setTimeout(function () {
            overlay.style.display = 'none';
            loadingContainer.style.display = 'none';
        }, 500); // Tempo igual à duração da transição em milissegundos
    }, 1000); // Exibe por 5 segundos (5000 milissegundos);
});