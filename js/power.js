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

// Fake cookie, want to do something with this
var uniqueSessionId = Math.random().toString().slice(-5);
// bro these JS slices tho...
document.getElementById("uin").innerHTML = "UIN - " + uniqueSessionId.slice(-3) + " " + uniqueSessionId.slice(-2);

function removeText(text) { // This function removes all main screen text
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

function toggleArrow(wpChoice, triType) {
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

// VERT
wordsId.addEventListener('click', function(event){
    console.log("Here's a 'blog'");
    // ------ Reset everything
    let bigCol = document.getElementById("bigCol");
    let header = document.getElementById("header");
    let orient = document.getElementById("orient");

    removeText("picts"); // Remove text (duh)
    pictsToggle = 0; // So disgusting I'm sorry
    wordsToggle = toggleArrow(wordsToggle, "tri1"); // Change arrows to hollow

    bigCol.classList.toggle("tall");
    header.classList.toggle("absolute");

    let randoN = bigCol.scrollHeight * bigCol.scrollWidth;
    randoN = randoN.toString();
    if (wordsToggle == 1) {
        orient.innerHTML = "VERT: " + randoN.slice(0,6) + "-" + randoN.slice(0,3,1) ;
    } else {
        orient.innerHTML = "NORM: " + randoN.slice(0,6) + "-" + randoN.slice(0,3,1) ;
    }
    
    event.preventDefault(); // I don't know what this does
})
// HORZ 
pictsId.addEventListener('click', function(event){
    console.log("Here's some picts!!!");
    // ------ Reset everything
    let bigCol = document.getElementById("bigCol");
    let header = document.getElementById("header");
    let orient = document.getElementById("orient");

    removeText("words"); // Remove text (duh)
    wordsToggle = 0;
    pictsToggle = toggleArrow(pictsToggle, "tri2"); // Change arrows to hollow

    bigCol.classList.toggle("wide");

    let randoN = bigCol.scrollHeight * bigCol.scrollWidth;
    randoN = randoN.toString();
    if (pictsToggle == 1) {
        orient.innerHTML = "HORZ: " + randoN.slice(0,6) + "-" + randoN.slice(-4,-1) ;
    } else {
        orient.innerHTML = "NORM: " + randoN.slice(0,6) + "-" + randoN.slice(-4,-1) ;
    }

    event.preventDefault(); // I don't know what this does
})

if (wordsToggle && pictsToggle) {
    console.log("Wow you hacker, good job...can't believe it.")
}