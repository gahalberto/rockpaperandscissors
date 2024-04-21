let placar1 = 0;
let placar2 = 0;
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
            img.classList.toggle('blinking-onetime');
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
            } else if (player === 1 && computer === 3) {
                this.updateScoreBorde(1);
            }

            if (player === 2 && computer === 3) {
                this.updateScoreBorde(2);
            } else if (player === 2 && computer === 1) {
                this.updateScoreBorde(1);
            }

            if (player === 3 && computer === 1) {
                this.updateScoreBorde(2);

            } else if (player === 3 && computer === 2) {
                this.updateScoreBorde(1);
            }
        } else {
            console.log('empatou');
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

function gameStarting() {
    let conteudoMain = document.querySelector('#content');
    conteudoMain.innerHTML = '';

    let newRow = document.createElement('div');

    newRow.classList.add('row');
    let col1 = document.createElement('div');
    col1.classList.add('col-lg-4');

    let col2 = document.createElement('div');
    col2.classList.add('col-lg-4');

    let col3 = document.createElement('div');
    col3.classList.add('col-lg-4');

    newRow.appendChild(col1);
    newRow.appendChild(col2);
    newRow.appendChild(col3);
    col1.innerHTML = `
    <a href="#" id="rock">
    <img class="class='bd-placeholder-img rounded-circle" width="140" height="140" src="assets/2.png" alt="Descrição da imagem">
    </a>
    `

    col2.innerHTML = `
    <a href="#" id="paper">
    <img class="class='bd-placeholder-img rounded-circle" width="140" height="140" src="assets/3.png" alt="Descrição da imagem">
    </a>
    `

    col3.innerHTML = `
    <a href="#" id="scissors">
    <img class="class='bd-placeholder-img rounded-circle" width="140" height="140" src="assets/4.png" alt="Descrição da imagem">
    </a>
    `

    conteudoMain.appendChild(newRow);


    let placar = document.createElement('div');
    placar.classList.add = 'px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center';
    let placarText = document.createElement('h1');
    placarText.innerText = 'Score Board';
    placar.style.marginTop = '50px';
    placarText.style.color = 'white';

    placar.appendChild(placarText);
    conteudoMain.appendChild(placar);

    const placarDiv1 = document.createElement('div');
    const placarDiv2 = document.createElement('div');
    const placarDiv3 = document.createElement('div');

    placarDiv1.classList.add('col-lg-4');
    placarDiv2.classList.add('col-lg-4');
    placarDiv3.classList.add('col-lg-4');

    placarDiv3Text = document.createElement('h1');
    placarDiv1Text = document.createElement('h1');
    placarDiv2Text = document.createElement('h4');

    placarDiv2Text.classList.add('press-start-2p-regular');

    placarDiv2Text.innerHTML = 'Click an item to start to play';

    placarDiv1.appendChild(placarDiv1Text);
    placarDiv2.appendChild(placarDiv2Text);
    placarDiv3.appendChild(placarDiv3Text);


    const novaDivRow = document.createElement('div');
    novaDivRow.classList.add('row');

    placar.appendChild(novaDivRow);


    novaDivRow.appendChild(placarDiv1);
    novaDivRow.appendChild(placarDiv2);
    novaDivRow.appendChild(placarDiv3);


    const game = new Game;
    game.startGame();
}

// Mostrar quem está ganhando, com umdelay mostrando o jogo acontecendo
// Mostrar o resultadp 
// 1 ganhou de 2 ou EMPATE e colocar som
// 