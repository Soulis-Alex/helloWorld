
function sapin(iLongeurBase){
    let afficheSapin = document.getElementById("blink");
    let afficheSapin2 = document.getElementById("blink2");


let iMilieu = iLongeurBase / 2;
let iBlanc = iMilieu - 1;
let iSlash = iMilieu;
let iBackSlash = iMilieu + 1;
let iCellule;
  


for ( let iEtoile = 0; iEtoile <= iMilieu; iEtoile++) {
    if(iEtoile==iMilieu){
        afficheSapin2.innerHTML = "*";
    }else{
        afficheSapin.innerHTML = "&nbsp";
    }
}
afficheSapin.innerHTML = "<br>";
for (let iLigne = 0; iLigne < iMilieu; iLigne++) {


    for (iCellule = 0; iCellule <= iLongeurBase; iCellule++) {


        if (iLigne == (iMilieu / 2) && (iCellule == iMilieu - 1 || iCellule == iMilieu + 1)) {
            afficheSapin.innerHTML = "o";
        } else {
            if (iCellule <= iBlanc) {
                if (iLigne % 2 == 0 && (iCellule == (iBlanc))) {
                    afficheSapin.innerHTML = "*";
                }else if (iCellule == iBlanc && iCellule<=0){
                    afficheSapin.innerHTML = "*";
                }
                else{
                    afficheSapin.innerHTML  = "&nbsp";
                }
            } else if (iCellule <= iSlash) {
                afficheSapin.innerHTML = "/";


            } else if (iCellule <= iBackSlash) {
                afficheSapin.innerHTML = "\\";

            }
            else {
                if (iLigne % 2 == 0 && (iCellule == (iBackSlash + 1))) {
                    afficheSapin.innerHTML = "*";

                }
            }
        }

    }
    afficheSapin.innerHTML = "<br>";

    iBlanc -= 1;
    iBackSlash += 1;

}

// mise en place du tronc d'arbre
let iTroncMin = iMilieu/3*2;
let iTroncMax = iMilieu+(iMilieu/3);

for (let iHauteur = 0; iHauteur < iLongeurBase/4; iHauteur++) {

    for (iCellule = 0; iCellule <= iLongeurBase; iCellule++) {
        if(iCellule==iTroncMin || iCellule==(iTroncMax-2)){
            afficheSapin.innerHTML= "||";
        }else{
            afficheSapin.innerHTML  = "&nbsp";
        }

    }
    afficheSapin.innerHTML  = "<br>";
   
}
}

sapin(21);




