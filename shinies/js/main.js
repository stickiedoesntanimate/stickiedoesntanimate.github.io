const descriptions = document.getElementsByClassName("desc");
const phasedivs = document.getElementsByClassName("phase");
const ribbondivs = document.getElementsByClassName("ribbon");
const ivs = document.getElementsByClassName("ivs");


function collapse() {
    if (document.getElementById("shrink").checked) {
        for (i = 0; i < descriptions.length; i++) {
            descriptions[i].hidden = true;
        }
        for (i = 0; i < phasedivs.length; i++) {
            phasedivs[i].hidden = true;
        }
        for (i = 0; i < ribbondivs.length; i++) {
            ribbondivs[i].hidden = true;
        }
        for (i = 0; i < ivs.length; i++) {
            ivs[i].hidden = true;
        }
    } 
    else {
        for (i = 0; i < descriptions.length; i++) {
            descriptions[i].hidden = false;
        }
        for (i = 0; i < phasedivs.length; i++) {
            phasedivs[i].hidden = false;
        }
        for (i = 0; i < ribbondivs.length; i++) {
            ribbondivs[i].hidden = false;
        }
        for (i = 0; i < ivs.length; i++) {
            ivs[i].hidden = false;
        }
    }
}