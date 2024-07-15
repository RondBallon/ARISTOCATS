


function getPositionCat() {

    const container = document.querySelector(".line")
    const containerWidth = container.offsetWidth


    let nbSecondesJour = 86400 ;
    let ajd = new Date();
        console.log(ajd);
    let heure = ajd.getHours()
    let minute = ajd.getMinutes()
    let seconde = ajd.getSeconds()

    let secondesEcoulees = seconde + (minute * 60) + (heure * 60 * 60);
    console.log(secondesEcoulees);

    let positionPourcents = (secondesEcoulees / nbSecondesJour);
    console.log(positionPourcents)
 
    let positionEnPixels = positionPourcents * containerWidth;

    return positionEnPixels
}

console.log(getPositionCat())


function updateCatPosition() {

}
