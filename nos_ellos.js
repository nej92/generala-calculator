$('#yo').click(() => {
    showNos();
});

$('#nos').click(() => {
    showYo();
});

$('#tu').click(() => {
    showEllos();
});

$('#ellos').click(() => {
    showTu();
});

function showNos() {
    document.getElementById('yo').style = 'display: none;'
    document.getElementById('nos').style = 'display: block;'
}

function showYo() {
    document.getElementById('yo').style = 'display: block;'
    document.getElementById('nos').style = 'display: none;'
}

function showTu() {
    document.getElementById('ellos').style = 'display: none;'
    document.getElementById('tu').style = 'display: block;'
}

function showEllos() {
    document.getElementById('tu').style = 'display: none;'
    document.getElementById('ellos').style = 'display: block;'
}
