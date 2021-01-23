var compteur_kills = document.getElementById("compteur_kills");

var evtSource = new EventSource('/GET/brawks/kill');

evtSource.addEventListener('connected', (e) => {
  var data = JSON.parse(e.data);
  compteur_kills.innerHTML = data.kill;
});