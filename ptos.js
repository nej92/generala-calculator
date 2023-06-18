let counter = 0;
let counter1 = 0;
let counterElement = document.querySelector('#caja');
let counterElement1 = document.querySelector('#caja1');
let url = 'imgs/match1.png'
let image = new Image();
image.src = url;


$('#btn').on('click', function () {
    counter++;
    counterElement.textContent = counter;
});

$('#btn1').on('click', function () {
    counter1++;
    counterElement1.textContent = counter1;
});

/*$('#btn').on('click', function () {
    $(document).ready(function () {
        counter++;
        var image = new Image();
        image.src = url;
        counterElement.append(image);
    });
});

$('#btn1').on('click', function () {
    $(document).ready(function () {
        var image = new Image();
        image.src = url;
        counterElement1.append(image);
    });
});
*/

$('#btnReset').on('click', function () {
    counter = 0
    counter1 = 0;
    counterElement.textContent = counter;
    counterElement1.textContent = counter1;
});

