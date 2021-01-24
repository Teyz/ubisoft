const express = require('express');
const path = require('path');
var cors = require('cors');
let sseExpress = require('sse-express');

const app = express();

var killBrawks = 0;
var killJbzz = 0;
var killLowan = 0;

function addKillBrawks() {
    killBrawks++;
}

function getKillBrawks() {
    return killBrawks;
}

function removeKillBrawks() {
    killBrawks--;
}

function resetKillBrawks() {
    killBrawks = 0;
}


function addKillJbzz() {
    killJbzz++;
}

function getKillJbzz() {
    return killJbzz;
}

function removeKillJbzz() {
    killJbzz--;
}

function resetKillJbzz() {
    killJbzz = 0;
}


function addKillLowan() {
    killLowan++;
}

function getKillLowan() {
    return killLowan;
}

function removeKillLowan() {
    killLowan--;
}

function resetKillLowan() {
    killLowan = 0;
}

app.use(function (req, res, next) {
    const auth = { login: 'Brawkscorp', password: 'Sasbbbiconic' }

    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')

    if (login && password && login === auth.login && password === auth.password) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        return next();
    }

    res.set('WWW-Authenticate', 'Basic realm="401"')
    res.status(401).send('Authentication required.')
});

app.use(cors())

app.get('/GET/status', sseExpress, (req, res) => {
    function sendMessage() {
        res.sse('connected', {
            status: '200'
        });
    }
    sendMessage();
    setInterval(sendMessage, 1000);
});

app.get('/GET/brawks/kill', sseExpress, function (req, res) {
    function sendMessage() {
        res.sse('connected', {
            kill: getKillBrawks(),
        });
    }
    sendMessage();
    setInterval(sendMessage, 1000);
});

app.get('/GET/jbzz/kill', sseExpress, function (req, res) {
    function sendMessage() {
        res.sse('connected', {
            kill: getKillJbzz(),
        });
    }
    sendMessage();
    setInterval(sendMessage, 1000);
});

app.get('/GET/lowan/kill', sseExpress, function (req, res) {
    function sendMessage() {
        res.sse('connected', {
            kill: getKillLowan(),
        });
    }
    sendMessage();
    setInterval(sendMessage, 1000);
});


app.get('/PUT/brawks/kill', (req, res) => {
    addKillBrawks();
    res.status(200).json({ 'status': 'ok' });
});

app.get('/PUT/jbzz/kill', (req, res) => {
    addKillJbzz();
    res.status(200).json({ 'status': 'ok' });
});

app.get('/PUT/lowan/kill', (req, res) => {
    addKillLowan();
    res.status(200).json({ 'status': 'ok' });
});

app.get('/UPDATE/brawks/kill', (req, res) => {
    removeKillBrawks();
    res.status(200).json({ 'status': 'ok' });
});

app.get('/UPDATE/jbzz/kill', (req, res) => {
    removeKillJbzz();
    res.status(200).json({ 'status': 'ok' });
});

app.get('/UPDATE/lowan/kill', (req, res) => {
    removeKillLowan();
    res.status(200).json({ 'status': 'ok' });
});

app.get('/DELETE/brawks/kill', (req, res) => {
    resetKillBrawks();
    res.status(200).json({ 'status': 'ok' });
});

app.get('/DELETE/jbzz/kill', (req, res) => {
    resetKillJbzz();
    res.status(200).json({ 'status': 'ok' });
});

app.get('/DELETE/lowan/kill', (req, res) => {
    resetKillLowan();
    res.status(200).json({ 'status': 'ok' });
});




app.get('/script', (req, res) => {
    res.sendFile(path.join(__dirname + '/assets/js/init.js'));
});

app.get('/scriptJbzz', (req, res) => {
    res.sendFile(path.join(__dirname + '/assets/js/jbzz.js'));
});

app.get('/scriptLowan', (req, res) => {
    res.sendFile(path.join(__dirname + '/assets/js/lowan.js'));
});

app.get('/dashboardScript', (req, res) => {
    res.sendFile(path.join(__dirname + '/assets/js/dashboard.js'));
});

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname + '/assets/css/init.css'));
});

app.get('/font', function (req, res) {
    res.sendFile(path.join(__dirname + '/assets/fonts/Montserrat.otf'));
});

app.get('/favicon', function (req, res) {
    res.sendFile(path.join(__dirname + '/assets/img/favicon.png'));
});

app.get('/brawks', function (req, res) {
    res.sendFile(path.join(__dirname + '/brawks.html'));
});

app.get('/jbzz', function (req, res) {
    res.sendFile(path.join(__dirname + '/jbzz.html'));
});

app.get('/lowan', function (req, res) {
    res.sendFile(path.join(__dirname + '/lowan.html'));
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dashboard.html'));
});

app.listen(8080, () => {
    console.log("Serveur Online");
});
