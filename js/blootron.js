var p1 = document.querySelector('p1');
var p2 = document.querySelector('p2');
var p3 = document.querySelector('p3');
var p4 = document.querySelector('p4');
var p5 = document.querySelector('p5');
var p6 = document.querySelector('p6');
var requestURL = 'https://api.github.com/users/jasonnawesome/repos';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

//Until Github API gives me pinned repos I'm just manually putting the repos in
/*
request.onload = function() {
  var jsonRepos = request.response;
  populateList(jsonRepos);
}

function populateList(jsonRepos) {

}*/
