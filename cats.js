document.addEventListener("DOMContentLoaded", function() {
    const cat = document.getElementById("cat");
    const container = document.querySelector(".container");
    const containerWidth = container.clientWidth;

    // Fonction pour obtenir la position du chat en fonction de l'heure
    function getCatPosition() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const totalSecondsInDay = 24 * 60 * 60;
        const secondsSinceStartOfDay = (hours * 60 * 60) + (minutes * 60) + (seconds);

        // Calculer la position en pourcentage
        const percentageOfDay = secondsSinceStartOfDay / totalSecondsInDay;

        // Convertir ce pourcentage en pixels
        return percentageOfDay * containerWidth;
    }

    // Fonction pour mettre à jour la position du chat
    function updateCatPosition() {
        const position = getCatPosition();
        cat.style.left = `${position}px`;

        // Sauvegarder la position dans le localStorage
        localStorage.setItem("catPosition", position);
    }

    // Restaurer la position du chat si elle est sauvegardée dans le localStorage
    function restoreCatPosition() {
        const savedPosition = localStorage.getItem("catPosition");
        if (savedPosition !== null) {
            cat.style.left = `${savedPosition}px`;
        } else {
            updateCatPosition();
        }
    }

    // Mettre à jour la position du chat immédiatement et toutes les secondes
    restoreCatPosition();
    setInterval(updateCatPosition, 1000);
});
