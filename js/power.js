// Special console surprise :)
console.log("+---------------------------+\n| ///////////////////////// |\n+---------------------------+\n| [ Raw Energy WOW ]\t\t|\n+---------------------------+\n| \t\t\t\t\t\t\t|\n| \t\t\t\t\t\t\t|\n| [sto] [rcl] [<--] [AC/ON] |\n| \t\t\t\t\t\t\t|\n| [ ( ] [ ) ] [sqr] [ / ] \t|\n| \t\t\t\t\t\t\t|\n| [ 7 ] [ 8 ] [ 9 ] [ * ] \t|\n| \t\t\t\t\t\t\t|\n| [ 4 ] [ 5 ] [ 6 ] [ - ] \t|\n| \t\t\t\t\t\t\t|\n| [ 1 ] [ 2 ] [ 3 ] [ + ] \t|\n| \t\t\t\t\t\t\t|\n| [ 0 ] [ . ] [+/-] [ = ] \t|\n| \t\t\t\t\t\t\t|\n+---------------------------+\n")

// To tell when the state is toggled
var wordsToggle = 0;
var pictsToggle = 0;
var bigCol = document.getElementById("bigCol");
var header = document.getElementById("header");
var orient = document.getElementById("orient");
var saying = document.getElementById("saying");
var uin = document.getElementById("uin");

// Fake cookie, want to do something with this
window.onload = function uniqueID() {
    var uniqueSessionId = Math.random().toString().slice(-5);
    // bro these JS slices tho...
    document.getElementById("uin").innerHTML = "UIN - " + uniqueSessionId.slice(-3) + " " + uniqueSessionId.slice(-2);
}
function removeText(text) { // Removes all main screen text
    // Get all the boxes with text.
    let upr = document.getElementById('urighti');
    let upl = document.getElementById('ulefti');
    let dwr = document.getElementById('drighti');
    let dwl = document.getElementById('dlefti');
    // Goes through them and toggle class to hidden.
    elementList = [upr, upl, dwr, dwl];
    for (let index = 0; index < elementList.length; index++) {
        const element = elementList[index];
        element.classList.toggle("hidden");
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
// Calculates and sets the numbers in the header
function windowCalc(orientWord, toggle, sl1, sl2) {
    let randoN = bigCol.scrollHeight * bigCol.scrollWidth;
    randoN = randoN.toString();
    if (toggle == 1) {
        orient.innerHTML = orientWord + ": " + randoN.slice(0,6) + "-" + randoN.slice(sl1, sl2) ;
    } else {
        orient.innerHTML = "NORM: " + randoN.slice(0,6) + "-" + randoN.slice(sl1, sl2) ;
    }
}
// Iterate through the collections for a specified class and changes its colour
function iterateCs(className, color) {
    Array.from(document.getElementsByClassName(className)).forEach(e => {
        e.style.color = color;
    });
}
// COLOUR STUFF!!!! WEEEEEE
var colourId = document.getElementById("colour");
var colourDict = { //honestly just an excuse to use a dict
    redy: "#E72D9A",
    orng: "#FFC132",
    lime: "#88F230",
    blak: "#2F353A",
    blue: "#368AD5"
}; // Maybe make a hex maker so it's always random?
var colourList = [];
var gridList = ['urighti','ulefti','drighti','dlefti'];
for (const [key, value] of Object.entries(colourDict)) {
    colourList.push(value);
}
colourId.addEventListener('click', function(event) {
    // Make sure we're switching colours and moving the first
    // one to the last spot etc etc
    daColour = colourList.shift()
    console.log("SWITCHING COLOUR: " + daColour)
    bigCol.style.backgroundColor = daColour;
    colourList.push(daColour);

    // Switching when it turns black + going back when it ain't
    whiteness = "#fcfcfc";
    blackness = "#2F353A";
    specialLinks = document.getElementsByClassName("links");
    if (daColour == blackness) {
        for(let n of gridList) {
            document.getElementById(n).style.color = whiteness;
        }
        // Special case for those stupid links
        iterateCs("links",whiteness);
    } else {
        // I can do it this way to revert cause I want it all to be black.
        for(let n of gridList) {
            document.getElementById(n).style.color = blackness;
        }
        // Special case for those stupid links
        iterateCs("links",blackness);
    }
})

// VERT blog
// Makes things disappear and vertically elongates box.
var wordsId = document.getElementById("words");
wordsId.addEventListener('click', function(event){
    console.log("Here's a 'blog'");

    removeText("picts"); // Remove text (duh)
    pictsToggle = 0; // So disgusting I'm sorry
    wordsToggle = toggleArrow(wordsToggle, "tri1"); // Change arrows to hollow

    bigCol.classList.toggle("tall"); // Make bigCol elongate
    header.classList.toggle("absolute"); // Make sure header stays in place

    windowCalc("VERT", wordsToggle, 0, 3);

    event.preventDefault(); // I don't know what this does
})

// HORZ pictures, projects
// Makes things disappear and horizontally elongates box.
var pictsId = document.getElementById("picts");
pictsId.addEventListener('click', function(event){
    console.log("Here's some picts!!!");

    removeText("words"); // Remove text (duh)
    wordsToggle = 0;
    pictsToggle = toggleArrow(pictsToggle, "tri2"); // Change arrows to hollow

    bigCol.classList.toggle("wide");

    windowCalc("HORZ", pictsToggle, -4, -1);

    event.preventDefault(); // I don't know what this does
})

// ----------------------------------------------------------------------------
// --------------------------------We-go-old-skool-here------------------------
// ----------------------------------------------------------------------------
