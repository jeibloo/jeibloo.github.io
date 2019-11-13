console.log("+---------------------------+\n| ///////////////////////// |\n+---------------------------+\n| [ Raw Energy WOW ]\t\t|\n+---------------------------+\n| \t\t\t\t\t\t\t|\n| \t\t\t\t\t\t\t|\n| [sto] [rcl] [<--] [AC/ON] |\n| \t\t\t\t\t\t\t|\n| [ ( ] [ ) ] [sqr] [ / ] \t|\n| \t\t\t\t\t\t\t|\n| [ 7 ] [ 8 ] [ 9 ] [ * ] \t|\n| \t\t\t\t\t\t\t|\n| [ 4 ] [ 5 ] [ 6 ] [ - ] \t|\n| \t\t\t\t\t\t\t|\n| [ 1 ] [ 2 ] [ 3 ] [ + ] \t|\n| \t\t\t\t\t\t\t|\n| [ 0 ] [ . ] [+/-] [ = ] \t|\n| \t\t\t\t\t\t\t|\n+---------------------------+\n")
/*+---------------------------+\n
| ///////////////////////// |\n
+---------------------------+\n
| [              1,264.45 ] |\n
+---------------------------+\n
|                           |\n
|                           |\n
| [sto] [rcl] [<--] [AC/ON] |\n
|                           |\n
| [ ( ] [ ) ] [sqr] [  /  ] |\n
|                           |\n
| [ 7 ] [ 8 ] [ 9 ] [  *  ] |\n
|                           |\n
| [ 4 ] [ 5 ] [ 6 ] [  -  ] |\n
|                           |\n
| [ 1 ] [ 2 ] [ 3 ] [  +  ] |\n
|                           |\n
| [ 0 ] [ . ] [+/-] [  =  ] |\n
|                           |\n
+---------------------------+\n
*/

// I don't know how else to toggle things in JS
var wordsToggle = 0;
var pictsToggle = 0;

// Makes things disappear and vertically/horizontally elongates box.
var wordsId = document.getElementById("words");
var pictsId = document.getElementById("picts");

console.log(wordsId);
console.log(pictsId);

function removeText() { // This function removes all main screen text
    // Get all the boxes with text.
    var upr = document.getElementById('urighti');
    var upl = document.getElementById('ulefti');
    var dwr = document.getElementById('drighti');
    var dwl = document.getElementById('dlefti');
    // Goes through them and toggle class to hidden.
    elementList = [upr, upl, dwr, dwl];
    for (let index = 0; index < elementList.length; index++) {
        const element = elementList[index];
        element.classList.toggle("hidden");
    }
}

function toggleArrow(wpChoice, triType) {
    // ------ Reset everything
    document.getElementById("tri1").innerHTML = "▵";
    document.getElementById("tri2").innerHTML = "▵";

    if (wpChoice == 0) {
        wpChoice = 1; // Choice is 1 then make triangle solid
        document.getElementById(triType).innerHTML = "▴";
        // Need to return wpChoice so it can register changes
        return wpChoice;
    } else {
        // Turn triangle it back to hollow if already solid
        wpChoice = 0;
        document.getElementById(triType).innerHTML = "▵";
        return wpChoice;
    }
}

// VERT
wordsId.addEventListener('click', function(event){
    console.log("Here's a 'blog'");
    // ------ Reset everything
    var bigCol = document.getElementById("bigCol");
    var header = document.getElementById("header");
    // ------ Reset everything
    removeText(); // Remove text (duh)
    console.log(wordsToggle); // debug
    pictsToggle = 0; // So disgusting I'm sorry
    wordsToggle = toggleArrow(wordsToggle, "tri1"); // Change arrows to hollow
    console.log(wordsToggle); // debug
    bigCol.classList.toggle("tall");
    header.classList.toggle("absolute");
    event.preventDefault(); // I don't know what this does
})
// HORZ 
pictsId.addEventListener('click', function(event){
    console.log("Here's some picts!!!");
    // ------ Reset everything
    var bigCol = document.getElementById("bigCol");
    var header = document.getElementById("header");
    bigCol.className = "container";
    header.className = "container";
    removeText(); // Remove text (duh)
    wordsToggle = 0;
    pictsToggle = toggleArrow(pictsToggle, "tri2"); // Change arrows to hollow
    event.preventDefault(); // I don't know what this does
})
