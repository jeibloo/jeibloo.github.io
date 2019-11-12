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

// Makes things disappear and vertically elongates box.
var words_id = document.getElementById("words");
words_id.addEventListener('click', function(event){
    // Get all the boxes with text.
    var upr = document.getElementById('urighti');
    var upl = document.getElementById('ulefti');
    var dwr = document.getElementById('drighti');
    var dwl = document.getElementById('dlefti');
    // Goes through them and toggle class to hidden.
    element_list = [upr, upl, dwr, dwl];
    for (let index = 0; index < element_list.length; index++) {
        const element = element_list[index];
        element.classList.toggle("hidden");
    }
    // Make big column full height.
    var bigCol = document.getElementById("bigCol");
    bigCol.classList.toggle("tall");
    // And make sure the header is above it and whitish.
    var header = document.getElementById("header");
    header.classList.toggle("absolute");
    // Make sure the bottom button thingies are white too
    var words = document.getElementById("words");
    words.classList.toggle("activated");
    // No idea
    event.preventDefault();
})