//Holds the references to the HTML
const puppyDiv = document.querySelector("#puppyDiv");
const singlePuppDiv = document.querySelector("#singlePuppDiv");

//data fetched from the database
let player = [];

//gets data and fills previouisly mentoined array.
async function getPlayers() {
    const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2310/players"
    );
    const data = await response.json();
    player = data.data.players;
    renderPlayers();
}

//All puppys
function refreshPage() {
    location.reload();
}


async function renderPlayers() {
    //For each
    const playerList = player.map((pup) => {
        return ` <div class="theDiv">
            <a href="#${pup.name}" class="nameStyle">
                <h2>${pup.name}</h2>
                <img class="image" src=${pup.imageUrl} />
                <br>
            </a>
        </div>`;
    });

    //Gets single hash
    const name = window.location.hash.slice(1);
    const singlePupp = player.find((pupp) => {
        return pupp.name === name;
    });
    //Update single if single pup is clicked
    puppyDiv.innerHTML = singlePupp
        ? ""
        : "<button class='allPlayersButton' onclick='refreshPage()'><center>All Da Puppy </button>" +
        `<div class="allPuppies">${playerList.join("")}</div></center>`;

    //Update single if single pup is clicked 
    if (singlePupp) {
        singlePuppDiv.innerHTML = `<center>
            <h1>Selected Puppy</h1>
            <div class="otherDiv">
                <h1>${singlePupp.name}</h1>
                <h4 class="atag">${singlePupp.breed}</h4>
                <h4 class="atag">${singlePupp.status}</h4>
                <p></p>
                <center><img class="image" src=${singlePupp.imageUrl} height=auto width=50% /></center>
                
            </div>
        </center>`;
    } else {
        // if nobody is clicked
    if (singlePupp) {
        puppyDiv.innerHTML = "";
    } else {
        puppyDiv.innerHTML = `<div class="allPuppies">${playerList.join("")}</div></center>`;
    }
    }
}


getPlayers();

// Add event listener for hash changes
window.addEventListener("hashchange", renderPlayers);