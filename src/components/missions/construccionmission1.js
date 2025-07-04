import React from 'react'
import "../missions/css/construccionmission1.css"
import { useState } from 'react';

function ConstruccionMission1({ missionCode, onClose }) {
    const [isClosing, setIsClosing] = useState(false);
    const [isVisible] = useState(true);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 300);
    };
    
    const missionconstruccion1Data = {
        name: "Fabricación de Muebles",
        play: "Jugar",
        options: "Opciones",
        exit: "Salir"
    }

    const currentConstruccionMission = missionconstruccion1Data[missionCode];

    return (
        <div className={`construccion-mission-1
            ${isVisible ? 'fade-in' : ''} 
            ${isClosing ? 'fade-out' : ''}`} ></div>
    )
}

export default ConstruccionMission1