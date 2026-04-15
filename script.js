
 function enterSite() {
    document.getElementById("agePopup").style.display = "none";
}

function exitSite() {
    alert("You must be 18+ to enter.");
}


function openLightbox(card) {
    const info = card.querySelector(".cocktail-info").innerHTML;
    document.getElementById("lightbox-body").innerHTML = info;
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

$(document).ready(function () {

    const tips = [
        "Always use fresh citrus juice for better flavour.",
        "Chill your glass before serving.",
        "Balance sweet, sour, and strong flavours.",
        "Use the right glassware for each cocktail.",
        "Ice is an ingredient — use it properly."
    ];

    $("#tip-button").click(function (event) {

        event.stopPropagation();

        const randomTip = tips[Math.floor(Math.random() * tips.length)];

        $("#tip-popup")
            .text(randomTip)
            .fadeToggle();
    });

    $(document).click(function () {
        $("#tip-popup").fadeOut();
    });

    $("#tip-popup").click(function (event) {
        event.stopPropagation();
    });

});