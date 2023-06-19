let counter = 0;
let counter1 = 0;
let counterElement = document.querySelector('#caja');
let caj = document.querySelector('#caj');
let caj1 = document.querySelector('#caj1');
let counterElement1 = document.querySelector('#caja1');
let coj = document.querySelector('#coj');
let coj1 = document.querySelector('#coj1');

let url1 = 'imgs/match1.png'
let url2 = 'imgs/match2.png'
let url3 = 'imgs/match3.png'
let url4 = 'imgs/match4.png'
let url5 = 'imgs/match5.png'
let image = new Image();
/*image.src = url;*/


/*$('#btn').on('click', function () {
    counter++;
    counterElement.textContent = counter;
});

$('#btn1').on('click', function () {
    counter1++;
    counterElement1.textContent = counter1;
});
*/
$('#btn').on('click', function () {
    switch (counter) {
        case 0:
            $(document).ready(function () {
                counter++;
                var image = new Image();
                image.src = url1;
                counterElement.append(image);
            });
            break;
        case 1:
            $(document).ready(function () {
                counter++;
                var image = new Image();
                image.src = url2;
                counterElement.replaceChildren(image);
            });
            break;
        case 2:
            $(document).ready(function () {
                counter++;
                var image = new Image();
                image.src = url3;
                counterElement.replaceChildren(image);
            });
            break;
        case 3:
            $(document).ready(function () {
                counter++;
                var image = new Image();
                image.src = url4;
                counterElement.replaceChildren(image);
            });
            break;
        case 4:
            $(document).ready(function () {
                counter++;
                var image = new Image();
                image.src = url5;
                counterElement.replaceChildren(image);
            });
            break;
        case 5:
            $(document).ready(function () {
                counter++;
                var image = new Image();
                image.src = url1;
                caj.append(image);
                /*let newDiv = document.createElement('div');
                newDiv.innerHTML = url1;/
                counterElement.append(newDiv);*/
            });
            break;
        case 6:
            $(document).ready(function () {
                counter++;
                var image = new Image();
                image.src = url2;
                caj.replaceChildren(image);
            });
            break;
        case 7:
            $(document).ready(function () {
                counter++;
                var image = new Image();
                image.src = url3;
                caj.replaceChildren(image);
            });
            break;
        case 8:
            $(document).ready(function () {
                counter++;
                var image = new Image();
                image.src = url4;
                caj.replaceChildren(image);
            });
            break;
        case 9:
            $(document).ready(function () {
                counter++;
                var image = new Image();
                image.src = url5;
                caj.replaceChildren(image);
            });
            break;
        case 10:
            $(document).ready(function () {
                counter++;
                var image = new Image();
                image.src = url1;
                caj1.append(image);
            });
            break;
        case 11:
            $(document).ready(function () {
                counter++;
                var image = new Image();
                image.src = url2;
                caj1.replaceChildren(image);
            });
            break;
        case 12:
            $(document).ready(function () {
                counter++;
                var image = new Image();
                image.src = url3;
                caj1.replaceChildren(image);
            });
            break;
        case 13:
            $(document).ready(function () {
                counter++;
                var image = new Image();
                image.src = url4;
                caj1.replaceChildren(image);
            });
            break;
        case 14:
            $(document).ready(function () {
                counter++;
                var image = new Image();
                image.src = url5;
                caj1.replaceChildren(image);
            });
            break;
    }
});

$('#btn1').on('click', function () {
    switch (counter1) {
        case 0:
            $(document).ready(function () {
                counter1++;
                var image = new Image();
                image.src = url1;
                counterElement1.append(image);
            });
            break;
        case 1:
            $(document).ready(function () {
                counter1++;
                var image = new Image();
                image.src = url2;
                counterElement1.replaceChildren(image);
            });
            break;
        case 2:
            $(document).ready(function () {
                counter1++;
                var image = new Image();
                image.src = url3;
                counterElement1.replaceChildren(image);
            });
            break;
        case 3:
            $(document).ready(function () {
                counter1++;
                var image = new Image();
                image.src = url4;
                counterElement1.replaceChildren(image);
            });
            break;
        case 4:
            $(document).ready(function () {
                counter1++;
                var image = new Image();
                image.src = url5;
                counterElement1.replaceChildren(image);
            });
            break;
        case 5:
            $(document).ready(function () {
                counter1++;
                var image = new Image();
                image.src = url1;
                coj.append(image);
            });
            break;
        case 6:
            $(document).ready(function () {
                counter1++;
                var image = new Image();
                image.src = url2;
                coj.replaceChildren(image);
            });
            break;
        case 7:
            $(document).ready(function () {
                counter1++;
                var image = new Image();
                image.src = url3;
                coj.replaceChildren(image);
            });
            break;
        case 8:
            $(document).ready(function () {
                counter1++;
                var image = new Image();
                image.src = url4;
                coj.replaceChildren(image);
            });
            break;
        case 9:
            $(document).ready(function () {
                counter1++;
                var image = new Image();
                image.src = url5;
                coj.replaceChildren(image);
            });
            break;
        case 10:
            $(document).ready(function () {
                counter1++;
                var image = new Image();
                image.src = url1;
                coj1.append(image);
            });
            break;
        case 11:
            $(document).ready(function () {
                counter1++;
                var image = new Image();
                image.src = url2;
                coj1.replaceChildren(image);
            });
            break;
        case 12:
            $(document).ready(function () {
                counter1++;
                var image = new Image();
                image.src = url3;
                coj1.replaceChildren(image);
            });
            break;
        case 13:
            $(document).ready(function () {
                counter1++;
                var image = new Image();
                image.src = url4;
                coj1.replaceChildren(image);
            });
            break;
        case 14:
            $(document).ready(function () {
                counter1++;
                var image = new Image();
                image.src = url5;
                coj1.replaceChildren(image);
            });
            break;
    }
});

$('#btnReset').on('click', function () {
    counter = 0
    counter1 = 0;
    counterElement.textContent = "";
    counterElement1.textContent = "";
    caj.textContent = "";
    caj1.textContent = "";
    coj.textContent = "";
    coj1.textContent = "";
});