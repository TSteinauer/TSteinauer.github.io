var checked1 = document.getElementById("radio1").checked = true;
var checked2 = document.getElementById("radio2").checked = true;
var checked3 = document.getElementById("radio3").checked = true;
var checked4 = document.getElementById("radio4").checked = true;
var checked5 = document.getElementById("radio5").checked = true;
var checked6 = document.getElementById("radio6").checked = true;

checkbox1 = document.getElementById('radio1');
checkbox2 = document.getElementById('radio2');
checkbox3 = document.getElementById('radio3');
checkbox4 = document.getElementById('radio4');
checkbox5 = document.getElementById('radio5');
checkbox6 = document.getElementById('radio6');

checkbox1.addEventListener('change', e => {

    if(e.target.checked){
        document.getElementById("img1").style.marginLeft = "0";
    }

});
checkbox2.addEventListener('change', e => {

    if(e.target.checked){
        document.getElementById("img1").style.marginLeft = "-100%";
    }

});
checkbox3.addEventListener('change', e => {

    if(e.target.checked){
        document.getElementById("img1").style.marginLeft = "-200%";
    }

});
checkbox4.addEventListener('change', e => {

    if(e.target.checked){
        document.getElementById("img1").style.marginLeft = "-300%";
    }

});
checkbox5.addEventListener('change', e => {

    if(e.target.checked){
        document.getElementById("img1").style.marginLeft = "-400%";
    }

});
checkbox6.addEventListener('change', e => {

    if(e.target.checked){
        document.getElementById("img1").style.marginLeft = "-500%";
    }

});






