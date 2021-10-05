// Creating a main outer box
var mainBox = document.createElement('div');
mainBox.setAttribute('class', 'container-flex')
mainBox.setAttribute('id', 'mainBox');
document.body.appendChild(mainBox);

// --------------------------------------------------------------------------------

//creating row1
var row1 = document.createElement('div');
row1.setAttribute('id', 'row1');
row1.setAttribute('class', 'row');
mainBox.appendChild(row1);

// Creating the title bar column 1
var titleBarCol1 = document.createElement('div');
titleBarCol1.setAttribute('id', 'titleBarCol1');
titleBarCol1.setAttribute('class', 'col-lg-3 col-md-2 col-sm-1');
// Creating the title bar column 2
var titleBarCol2 = document.createElement('div');
titleBarCol2.setAttribute('id', 'titleBarCol2');
titleBarCol2.setAttribute('class', 'col-lg-6 col-md-8 col-sm-10');
// Creating the title bar column 3
var titleBarCol3 = document.createElement('div');
titleBarCol3.setAttribute('id', 'titleBarCol3');
titleBarCol3.setAttribute('class', 'col-lg-3 col-md-2 col-sm-1');

row1.append(titleBarCol1, titleBarCol2, titleBarCol3);

// Adding title bar background image
var titleBarBackgroundImage = document.createElement('img');
titleBarBackgroundImage.setAttribute('src', 'img/titleimg.png');
titleBarBackgroundImage.setAttribute('class', 'rounded mx-auto d-block')
titleBarBackgroundImage.setAttribute('id', 'titleBcgImg');
titleBarCol2.appendChild(titleBarBackgroundImage);

// --------------------------------------------------------------------------------

// Creating row2
var row2 = document.createElement('div');
row2.setAttribute('id', 'row2');
row2.setAttribute('class', 'row mt-3');
mainBox.appendChild(row2);

// creating pokemon name input label
var nameInputDiv = document.createElement('div');
nameInputDiv.setAttribute('id', 'nameInputDiv')
nameInputDiv.setAttribute('class', 'col-lg-5 col-md-5 col-sm-6')
row2.appendChild(nameInputDiv);
// creating pokemon name input label
var nameInputLabel = document.createElement('label');
nameInputLabel.setAttribute('for', 'nameInput');
nameInputLabel.setAttribute('id', 'nameInputLabel');
nameInputLabel.innerHTML = "What is the name of the pokemon you are looking for?<br>";
// creating pokemon name input 
var nameInput = document.createElement('input');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('id', 'nameInput');
nameInput.setAttribute('class', 'inputBox');
nameInput.setAttribute('placeholder', 'Ex: bulbasaur');
// creating search by name button
var searchByName = document.createElement('button');
searchByName.setAttribute('type', 'button');
searchByName.setAttribute('class', 'button');
searchByName.addEventListener('click', createDiv)
searchByName.addEventListener('click', getPokemonByName);
searchByName.innerHTML = 'Search by Name';

nameInputDiv.append(nameInputLabel, nameInput, searchByName);

// Creating OR
var or = document.createElement('div');
or.setAttribute('id', 'or');
or.setAttribute('class', 'col-lg-1 col-md-1 col-sm-0 ');
or.innerHTML = 'OR'
row2.appendChild(or);

// creating pokemon id input div
var idInputDiv = document.createElement('div');
idInputDiv.setAttribute('id', 'idInputDiv')
idInputDiv.setAttribute('class', 'col-lg-5 col-md-5 col-sm-6')
row2.appendChild(idInputDiv);
// creating pokemon name input label
var idInputLabel = document.createElement('label');
idInputLabel.setAttribute('for', 'idInput');
idInputLabel.setAttribute('id', 'idInputLabel');
idInputLabel.innerHTML = "What is the id of the pokemon you are looking for?<br>";
// creating pokemon name input
var idInput = document.createElement('input');
idInput.setAttribute('type', 'number');
idInput.setAttribute('id', 'idInput');
idInput.setAttribute('class', 'inputBox');
idInput.setAttribute('min', '0');
idInput.setAttribute('max', '893');
idInput.setAttribute('placeholder', 'Ex: 10')
// creating search by name button
var searchById = document.createElement('button');
searchById.setAttribute('type', 'button');
searchById.setAttribute('class', 'button');
searchById.addEventListener('click', createDiv)
searchById.addEventListener('click', getPokemonById);
searchById.innerHTML = 'Search by ID'

idInputDiv.append(idInputLabel, idInput, searchById);

// --------------------------------------------------------------------------------

// creating row3
var row3 = document.createElement('div');
row3.setAttribute('id', 'row3');
row3.setAttribute('class', 'row mt-2');
row3.innerHTML = `Find the details of 50+ different pokemons.`
mainBox.appendChild(row3);


// --------------------------------------------------------------------------------

function refresh() {
    window.location.reload();
};


async function createDiv() {
    var row4 = document.createElement('div');
    row4.setAttribute('id', 'row4');
    row4.setAttribute('class', 'row mt-3');
    mainBox.appendChild(row4);

    // creating image display
    var imgDisplay = document.createElement('div');
    imgDisplay.setAttribute('id', 'imgDisplay');
    imgDisplay.setAttribute('class', 'col-lg-4 col-md-3 col-sm-6');
    row4.append(imgDisplay);

    var infoDisplay = document.createElement('div');
    infoDisplay.setAttribute('id', 'infoDisplay');
    infoDisplay.setAttribute('class', 'col-lg-6 col-md-5 col-sm-6');
    row4.append(infoDisplay);

    // --------------------------------------------------------------------------------

    // creating imgdisplay row 1
    var imgDispRow1 = document.createElement('div');
    imgDispRow1.setAttribute('id', 'imgDispRow1');
    imgDisplay.appendChild(imgDispRow1);

    var pokemonId = document.createElement('div');
    pokemonId.setAttribute('id', 'pokemonId');
    pokemonId.setAttribute('class', 'col-lg-2 col-md-2 col-sm-2');

    var pokemonName = document.createElement('div');
    pokemonName.setAttribute('id', 'pokemonName');
    pokemonName.setAttribute('class', 'col-lg-6 col-md-6 col-sm-6');

    imgDispRow1.append(pokemonId, pokemonName);

    // creating imgdisplay row 2
    var imgDispRow2 = document.createElement('div');
    imgDispRow2.setAttribute('id', 'imgDispRow2');
    imgDisplay.appendChild(imgDispRow2);

    var pokemonImg = document.createElement('img')
    pokemonImg.setAttribute('id', 'pokemonImg');
    pokemonImg.setAttribute('class', 'col-lg-8 col-md-8 col-sm-8')
    imgDispRow2.appendChild(pokemonImg);


    // creating imgdisplay row 3
    var imgDispRow3 = document.createElement('div');
    imgDispRow3.setAttribute('id', 'imgDispRow3');
    imgDisplay.appendChild(imgDispRow3);

    var baseExp = document.createElement('div');
    baseExp.setAttribute('id', 'baseExp');
    baseExp.setAttribute('class', 'imgdtl col-lg-4 col-md-6 col-sm-6')
    imgDispRow3.appendChild(baseExp);

    var weight = document.createElement('div');
    weight.setAttribute('id', 'weight');
    weight.setAttribute('class', 'imgdtl col-lg-5 col-md-6 col-sm-6')
    imgDispRow3.appendChild(weight);

//--------------------------------------------------------------------------------------------------------------------------------
    // creating infoDisplay row 1
    var abilityDisplay = document.createElement('div');
    abilityDisplay.setAttribute('id', 'abilityDisplay');
    abilityDisplay.setAttribute('class', 'infoDisplay')

    var moveDisplay = document.createElement('div');
    moveDisplay.setAttribute('id', 'moveDisplay');
    moveDisplay.setAttribute('class', 'infoDisplay')

    infoDisplay.append(abilityDisplay, moveDisplay);

    // creating row 5
    var row5 = document.createElement('div');
    row5.setAttribute('id', 'row5');
    row5.setAttribute('class', 'row mt-1');
    mainBox.appendChild(row5);

    var clear = document.createElement('button');
    clear.addEventListener('click', refresh);
    clear.setAttribute('id', 'clear');
    clear.innerHTML = 'Clear';
    row5.appendChild(clear);
}

async function getPokemonByName() {
    // creating row4
    let pokemonNameInput = document.getElementById('nameInput').value;
    let pokemonNameInputSmall = pokemonNameInput.toLowerCase();
    let pokemonid = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameInputSmall}/`);
    let pokemonidData = await pokemonid.json();
    document.getElementById('pokemonId').innerHTML = `#${pokemonidData.id}`;
    document.getElementById('pokemonName').innerHTML = `${pokemonidData.name}`;
    document.getElementById('pokemonImg').setAttribute('src', `https://img.pokemondb.net/artwork/${pokemonNameInputSmall}.jpg`);
    document.getElementById('baseExp').innerHTML = `Base Exp: ${pokemonidData.base_experience}`
    document.getElementById('weight').innerHTML = `Weight: ${pokemonidData.weight}`;
    console.log(pokemonNameInputSmall);
    let abilities = "";
    let moves = "";
    for(let i=0; i<pokemonidData.abilities.length; i++) {
        abilities += pokemonidData.abilities[i].ability.name + ", ";
    }
    for(let i=0; i<pokemonidData.moves.length; i++) {
        moves += pokemonidData.moves[i].move.name + ', ';
    }
    console.log(pokemonidData.abilities[0].ability.name);
    document.getElementById('abilityDisplay').innerHTML = `<u><b>Abilities:</b></u> ${abilities}`;
    document.getElementById('moveDisplay').innerHTML = `<u><b>Moves:</b></u> ${moves}`;

}

async function getPokemonById() {
    // creating row4
    let pokemonIdInput = document.getElementById('idInput').value;
    let pokemonid = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIdInput}/`);
    let pokemonidData = await pokemonid.json();
    document.getElementById('pokemonId').innerHTML = `#${pokemonidData.id}`;
    document.getElementById('pokemonName').innerHTML = `${pokemonidData.name}`;
    document.getElementById('pokemonImg').setAttribute('src', `https://img.pokemondb.net/artwork/${pokemonidData.name}.jpg`);
    document.getElementById('baseExp').innerHTML = `Base Exp: ${pokemonidData.base_experience}`
    document.getElementById('weight').innerHTML = `Weight: ${pokemonidData.weight}`;

    let abilities = "";
    let moves = "";
    for(let i=0; i<pokemonidData.abilities.length; i++) {
        abilities += pokemonidData.abilities[i].ability.name + ", ";
    }
    for(let i=0; i<pokemonidData.moves.length; i++) {
        moves += pokemonidData.moves[i].move.name + ', ';
    }
    document.getElementById('abilityDisplay').innerHTML = `<u><b>Abilities:</b></u> ${abilities}`;
    document.getElementById('moveDisplay').innerHTML = `<u><b>Moves:</b></u> ${moves}`;
}


//pokemon img link
// https://img.pokemondb.net/artwork/charmander.jpg