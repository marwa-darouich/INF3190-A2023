const polices = ["Arial", "Georgia", "Times New Roman"];
let policeIndex = 0;

function changePolice() {
    const paragraphes = document.querySelectorAll("p");

    policeIndex = (policeIndex + 1) % polices.length;

    paragraphes.forEach(paragraphe => {
        paragraphe.style.fontFamily = polices[policeIndex];
    });
}

function ordre(){

    let p1 = document.getElementById("p1").innerHTML;
    let p2 = document.getElementById("p2").innerHTML;
    let p3 = document.getElementById("p3").innerHTML;

    document.getElementById("p1").innerHTML = p3;
    document.getElementById("p2").innerHTML = p1;
    document.getElementById("p3").innerHTML = p2;


}

let estAfficher = true;

function afficheTitre() {

    const titre = document.getElementById("titre");
    estAfficher = !estAfficher;
    titre.style.display = estAfficher ? "block" : "none";

}

function titreEnRouge(){

    document.getElementById("titre").style.color ="red";

}

function ajoutDunParagraphe() {
    const texteLoremIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";

    const nouveauParagraphe = document.createElement("p");
    nouveauParagraphe.textContent = texteLoremIpsum;

    const container = document.getElementById("ajout-paragraphe");
    container.appendChild(nouveauParagraphe);
}
