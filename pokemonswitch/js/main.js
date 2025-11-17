var swsh = 2 //1 is enabled, 2 is additive, 3 is disabled
var bdsp = 2
var pla = 2
var sv = 2
var plza = 2

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByClassName('pokemon');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }

    if (li[i].querySelector('.swshno') && swsh == 1) {//remove everything not in swsh if its enabled
        li[i].style.display = "none";
    }
    if (li[i].querySelector('.bdspno') && bdsp == 1) {
        li[i].style.display = "none";
    }
    if (li[i].querySelector('.plano') && pla == 1) {
        li[i].style.display = "none";
    }
    if (li[i].querySelector('.svno') && sv == 1) {
        li[i].style.display = "none";
    }
    if (li[i].querySelector('.plzano') && plza == 1) {
        li[i].style.display = "none";
    }

  }
}

var green = "#88F86E"
var yellow = "#EEE952"
var red = "#BA3B46"

function changeswsh() {
    swsh = swsh +1
    if (swsh == 3) {
        swsh = 1
    }
    if (swsh == 1) {
        document.getElementById("swsh").style.backgroundColor = green;
    }
    else if (swsh == 2) {
        document.getElementById("swsh").style.backgroundColor = yellow;
    }
    else if (swsh == 3) {
        document.getElementById("swsh").style.backgroundColor = red;
    }
    myFunction()
}
function changebdsp() {
    bdsp = bdsp +1
    if (bdsp == 3) {
        bdsp = 1
    }
    if (bdsp == 1) {
        document.getElementById("bdsp").style.backgroundColor = green;
    }
    else if (bdsp == 2) {
        document.getElementById("bdsp").style.backgroundColor = yellow;
    }
    else if (bdsp == 3) {
        document.getElementById("bdsp").style.backgroundColor = red;
    }
    myFunction()
}
function changepla() {
    pla = pla +1
    if (pla == 3) {
        pla = 1
    }
    if (pla == 1) {
        document.getElementById("pla").style.backgroundColor = green;
    }
    else if (pla == 2) {
        document.getElementById("pla").style.backgroundColor = yellow;
    }
    else if (pla == 3) {
        document.getElementById("pla").style.backgroundColor = red;
    }
    myFunction()
}
function changesv() {
    sv = sv +1
    if (sv == 3) {
        sv = 1
    }
    if (sv == 1) {
        document.getElementById("sv").style.backgroundColor = green;
    }
    else if (sv == 2) {
        document.getElementById("sv").style.backgroundColor = yellow;
    }
    else if (sv == 3) {
        document.getElementById("sv").style.backgroundColor = red;
    }
    myFunction()
}
function changeplza() {
    plza = plza +1
    if (plza == 3) {
        plza = 1
    }
    if (plza == 1) {
        document.getElementById("plza").style.backgroundColor = green;
    }
    else if (plza == 2) {
        document.getElementById("plza").style.backgroundColor = yellow;
    }
    else if (plza == 3) {
        document.getElementById("plza").style.backgroundColor = red;
    }
    myFunction()
}
