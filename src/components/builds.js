import React from 'react';
import "@/components/ui";

function builds() {
    const mineriaOpen = document.getElementById("mineria");
    const construccionOpen = document.getElementById("construccion");
    const hotelOpen = document.getElementById("hotel");
    const gobiernoOpen = document.getElementById("gobierno");
    const exploracionOpen = document.getElementById("exploracion");
    const desconocidoOpen = document.getElementById("desconocido");
    const miliciaOpen = document.getElementById("milicia");
    const fabricaOpen = document.getElementById("fabrica");
}

mineriaOpen.addEventListener('click', () => {
    showModal();
})

export default builds