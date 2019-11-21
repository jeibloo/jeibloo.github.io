// Special console surprise :)
console.log("+---------------------------+\n| ///////////////////////// |\n+---------------------------+\n| [ Raw Energy WOW ]\t\t|\n+---------------------------+\n| \t\t\t\t\t\t\t|\n| \t\t\t\t\t\t\t|\n| [sto] [rcl] [<--] [AC/ON] |\n| \t\t\t\t\t\t\t|\n| [ ( ] [ ) ] [sqr] [ / ] \t|\n| \t\t\t\t\t\t\t|\n| [ 7 ] [ 8 ] [ 9 ] [ * ] \t|\n| \t\t\t\t\t\t\t|\n| [ 4 ] [ 5 ] [ 6 ] [ - ] \t|\n| \t\t\t\t\t\t\t|\n| [ 1 ] [ 2 ] [ 3 ] [ + ] \t|\n| \t\t\t\t\t\t\t|\n| [ 0 ] [ . ] [+/-] [ = ] \t|\n| \t\t\t\t\t\t\t|\n+---------------------------+\n")

// -------------------------------Global Variable Storage----------------------
// ----------------------------------------------------------------------------

// To tell when the state is toggled
var wordsToggle = 0;
var pictsToggle = 0;
// Global variable storage
var gridList = ['right','left', 'middle', 'bottom'];
var specialLinks = document.getElementsByClassName("links");
var colourId = document.getElementById("colour");
var bigCol = document.getElementById("bigCol");
var bigColInside = document.getElementById("bigColInside");
var header = document.getElementById("header");
var orient = document.getElementById("orient");
var saying = document.getElementById("saying");
var uin = document.getElementById("uin");
var colourList = [];
// Separate colours cause they so important
var cWhite = "#fcfcfc";
var cBlack = "#2F353A";

// Preparation for the COLOUR event listener.
var colourDict = { //honestly just an excuse to use a dict
    blue: "#368AD5",
    redy: "#E72D9A",
    lime: "#88F230",
    blak: "#2F353A",
    orng: "#FFC132"
}; // Maybe make a hex maker so it's always random?
for (const [key, value] of Object.entries(colourDict)) {
    colourList.push(value);
}

// -------------------------------Window onload stuff--------------------------
// ----------------------------------------------------------------------------

// Fake cookie, want to do something with this
window.onload = function uniqueID() {
    let uniqueSessionId = Math.random().toString().slice(-5);
    // bro these JS slices tho...
    document.getElementById("uin").innerHTML = "UIN - " + uniqueSessionId.slice(-3) + " " + uniqueSessionId.slice(-2);
}

// -------------------------------Functions------------------------------------
// ----------------------------------------------------------------------------

function spitTakes(type) { // DEBUG stuff
    console.log(type + " triggered!");
}
function removeMSText(text) { // Removes all main screen text
    for (let index = 0; index < gridList.length; index++) {
        document.getElementById(gridList[index]).classList.toggle("hidden");
    }
    // Hide other button so user doesn't scream when everything breaks.
    text = document.getElementById(text);
    text.classList.toggle("hidden");
}
function toggleArrow(wpChoice, triType) { // Toggles arrows for the two 'menus'
    // ------ Reset everything
    document.getElementById("tri1").innerHTML = "▵";
    document.getElementById("tri2").innerHTML = "▵";

    if (wpChoice == 0) {
        wpChoice = 1; // Choice is 1 then make triangle solid
        document.getElementById(triType).innerHTML = "▾";
        // Need to return wpChoice so it can register changes
        return wpChoice;
    } else {
        // Turn triangle it back to hollow if already solid
        wpChoice = 0;
        document.getElementById(triType).innerHTML = "▵";
        return wpChoice;
    }
}
function windowCalc(orientWord, toggle, sl1, sl2) { // Calculates and sets the numbers in the header
    let randoN = bigCol.scrollHeight * bigCol.scrollWidth;
    randoN = randoN.toString();
    if (toggle == 1) {
        orient.innerHTML = orientWord + ": " + randoN.slice(0,6) + "-" + randoN.slice(sl1, sl2) ;
    } else {
        orient.innerHTML = "NORM: " + randoN.slice(0,6) + "-" + randoN.slice(sl1, sl2) ;
    }
}
// TODO: make into a class
function iterateCs(className, colour) { // shortcut way of turning collection into array and iterating
    Array.from(document.getElementsByClassName(className)).forEach(it => {
        it.style.color = colour;
    });
}
function changeGridColours(colour) { // Change text colour of grids(textboxes)
    for(let n of gridList) {
        document.getElementById(n).style.color = colour;
    }
}
function colourRotate() { // Make sure we're switching colours and moving the first to last...like a carousel
    let cc = colourList.shift();
    bigCol.style.backgroundColor = cc;
    colourList.push(cc);
    return cc;
}
function tempDivDestroy(tempId='temp') {
    let tempDiv = document.getElementById(tempId);
    try {
        tempDiv.parentNode.removeChild(tempDiv);
    } catch (error) {
        console.log("Holy hell..."+error);
    }
}
function tempDivCreate(tempId='temp',innerText='<p>test</p>') {
    let tempDiv = document.createElement('div');
    tempDiv.id = tempId; tempDiv.className = 'container';
    tempDiv.innerHTML = innerText;
    bigColInside.appendChild(tempDiv);
}


// -------------------------------Event Listeners------------------------------
// ----------------------------------------------------------------------------

// COLOUR LISTENER: cycle thru colours
colourId.addEventListener('click', function(event) {
    // Rotate colours first so that next colour chosen is diff from initial
    daColour = colourRotate();
    spitTakes(daColour);

    // Switching when it turns black + going back when it ain't except links cause they need special treatment
    if (daColour == cBlack) {
        changeGridColours(cWhite);
        iterateCs("links",cWhite);
    } else {
        changeGridColours(cBlack);
        iterateCs("links",cBlack);
    }
})

// BLOG(WORDS) LISTENER: allows directory to be listed and interacted w/
var wordsId = document.getElementById("words");
wordsId.addEventListener('click', function(event){
    spitTakes("BLOG(WORDS)")
    removeMSText("picts");

    pictsToggle = 0;
    wordsToggle = toggleArrow(wordsToggle, "tri1");
    bigCol.classList.toggle("tall");
    header.classList.toggle("absolute");

    text = "<h4>In progress...</h4><br><a class='links' href='https://medium.com/@jsn404'>Temporary Blog: Medium</a>";
    if (wordsToggle == 0) {
        tempDivDestroy();
    }
    else {
        tempDivCreate('temp',text);
    }

    windowCalc("VERT", wordsToggle, 0, 3);

    event.preventDefault(); // I don't know what this does
})

// PICTS(IDK) LISTENER: unsure of what to do with this yet
var pictsId = document.getElementById("picts");
pictsId.addEventListener('click', function(event){
    spitTakes("PICTS(IDK)");
    removeMSText("words");

    wordsToggle = 0;
    pictsToggle = toggleArrow(pictsToggle, "tri2");
    bigCol.classList.toggle("wide");

    windowCalc("HORZ", pictsToggle, -4, -1);

    event.preventDefault(); // I don't know what this does
})

// --0----------------------------------------------------------------------0--
// -0------------------------------We-go-old-skool-here----------------------0-
// 0------------------------------------M47kd0wn------------------------------0
