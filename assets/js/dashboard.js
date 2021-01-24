var compteur_kills_brawks = document.getElementById("compteur_brawks");
var compteur_kills_jbzz = document.getElementById("compteur_jbzz");
var compteur_kills_lowan = document.getElementById("compteur_lowan");

var evtSource = new EventSource('/GET/brawks/kill');

evtSource.addEventListener('connected', (e) => {
  var data = JSON.parse(e.data);
  compteur_kills_brawks.innerHTML = data.kill;
});

var evtSourceJbzz = new EventSource('/GET/jbzz/kill');

evtSourceJbzz.addEventListener('connected', (e) => {
  var data = JSON.parse(e.data);
  compteur_kills_jbzz.innerHTML = data.kill;
});

var evtSourceLowan = new EventSource('/GET/lowan/kill');

evtSourceLowan.addEventListener('connected', (e) => {
  var data = JSON.parse(e.data);
  compteur_kills_lowan.innerHTML = data.kill;
});

const addKillBrawks = document.getElementsByClassName("addKillBrawks");
const removeKillBrawks = document.getElementsByClassName("removeKillBrawks");
const resetKillBrawks = document.getElementsByClassName("resetKillBrawks");

const addKillJbzz = document.getElementsByClassName("addKillJbzz");
const removeKillJbzz = document.getElementsByClassName("removeKillJbzz");
const resetKillJbzz = document.getElementsByClassName("resetKillJbzz");

const addKillLowan = document.getElementsByClassName("addKillLowan");
const removeKillLowan = document.getElementsByClassName("removeKillLowan");
const resetKillLowan = document.getElementsByClassName("resetKillLowan");

addKillBrawks[0].addEventListener("click", functionAddKillBrawks);
removeKillBrawks[0].addEventListener("click", functionRemoveKillBrawks);
resetKillBrawks[0].addEventListener("click", functionResetKillBrawks);

addKillJbzz[0].addEventListener("click", functionAddKillJbzz);
removeKillJbzz[0].addEventListener("click", functionRemoveKillJbzz);
resetKillJbzz[0].addEventListener("click", functionResetKillJbzz);

addKillLowan[0].addEventListener("click", functionAddKillLowan);
removeKillLowan[0].addEventListener("click", functionRemoveKillLowan);
resetKillLowan[0].addEventListener("click", functionResetKillLowan);

function functionAddKillBrawks() {
  fetch('/PUT/brawks/kill')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });
}

function functionRemoveKillBrawks() {
  fetch('/UPDATE/brawks/kill')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });
}

function functionResetKillBrawks() {
  fetch('/DELETE/brawks/kill')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });
}


function functionAddKillJbzz() {
  fetch('/PUT/jbzz/kill')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });
}

function functionRemoveKillJbzz() {
  fetch('/UPDATE/jbzz/kill')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });
}

function functionResetKillJbzz() {
  fetch('/DELETE/jbzz/kill')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });
}


function functionAddKillLowan() {
  fetch('/PUT/lowan/kill')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });
}

function functionRemoveKillLowan() {
  fetch('/UPDATE/lowan/kill')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });
}

function functionResetKillLowan() {
  fetch('/DELETE/lowan/kill')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });
}