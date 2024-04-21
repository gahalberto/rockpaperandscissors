let placar1 = 0;
let placar2 = 0;

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
    <img class="class='bd-placeholder-img rounded-circle movendo-imagem" width="140" height="140" src="assets/2.png" alt="Descrição da imagem">
    </a>
    `

    col2.innerHTML = `
    <a href="#" id="paper">
    <img class="class='bd-placeholder-img rounded-circle movendo-imagem" width="140" height="140" src="assets/3.png" alt="Descrição da imagem">
    </a>
    `

    col3.innerHTML = `
    <a href="#" id="scissors">
    <img class="class='bd-placeholder-img rounded-circle movendo-imagem" width="140" height="140" src="assets/4.png" alt="Descrição da imagem">
    </a>
    `

    conteudoMain.appendChild(newRow);


    let placar = document.createElement('div');
    placar.classList.add = 'px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center';
    let placarText = document.createElement('h1');
    placarText.innerText = 'Score Board';
    placar.style.marginTop = '50px';
    placarText.style.color = 'white';
    placarText.classList.add('press-start-2p-regular');


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
    placarDiv2Text.classList.add('branco');
    placarDiv2Text.classList.add('divSpace');
    placarDiv2Text.classList.add('blinking');

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