import React from 'react'
import '../app/css/buildsModal.css'
import { useState } from "react";
import MissionsModal from './missionsModal';

/* BuildsModal es el componente en sí */
/* buildingType y onClose son los props que son recibidos desde el componente padre,
osea, UI de ui.js. Para este caso se trataría del recibimiento de la selección de 
edificio y de la función para cerrar el Modal, estos necesitados para el
funcionamiento del componente. */
function BuildsModal({ buildingType, onClose }) { 
    const [selectedMission, setSelectedMission] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMissionClick = (missionType) => {
        setSelectedMission(missionType);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMission(null);
    };

    /* buildingsData actúa como si fuese una base de datos, posee los datos de cada
    edificio para así, estos mismos datos ser mostrados en el Modal. */
    const buildingsData = {
        /* minería: {, construccion: {, etc son las claves. Con las claves se puede
        llamar a todo lo que se contenga dentro de las mismas. */
        /* name y description son valores llamables a través de la clave. */
        minería: {
            name: "Minería",
            description: "Lugar de extracción y procesamiento de minerales.",
            mission: "Misión 1 [Extracción de Minerales]",
            missionType: "minería_mission"
        },
        construccion: {
            name: "Construcción",
            description: "Recinto encargado de diferentes actividades de construcción."
        },
        hotel: {
            name: "Hotel",
            description: "Dominio que puede alojar a personas con suma comodidad."
        },
        gobierno: {
            name: "Gobierno",
            description: "Establecimiento con acceso público a los funcionarios gubernamentales."
        },
        exploracion: {
            name: "Exploración",
            description: "Estructura que recibe cualquier espíritu aventurero."
        },
        desconocido: {
            name: "???",
            description: "???"
        },
        milicia: {
            name: "Milicia",
            description: "Cuartel compuesto de militares armados y preparados ante cualquier emergencia."
        },
        fabrica: {
            name: "Fabrica",
            description: "El hogar de diversos materiales necesarios para la elaboración y producción de gran cantidad de objetos o servicios."
        }
    };

    /* currentBuilding indica el edificio que se ha seleccionado, en el que se está. */
    /* El "=" indica que, el edificio en el que se está es igual a (el = es un operador
    de asignación, en este caso, el edificio pulsado). */
    /* buildingsData[buildingType] dice cual es el edificio exacto que está seleccionado,
    y con ello asegurar un envío correcto de información. */
    /* || es un operador que significa "o" en este caso dice que, si no encuentra el tipo
    de edificio desde buildingsData, dirá que, de hecho, se trata de el tipo de edificio
    "desconocido" */
    /* Esta línea está más que todo para evitar errores, no es tremendamente necesaria. */
    const currentBuilding = buildingsData[buildingType] || buildingsData.desconocido;

    /* handleOverlayClick es igual a un evento (e), y este evento ocurre con lo que sigue
    a la función flecha. */
    /* El if(si) es la condición. */
    /* e.target indica el elemento que está recibiendo el clic en el momento. */
    /* El "===" significa "igual", e indica que, en este caso, hay dos requerimientos 
    exactos por las que el Modal se cerraría. (e. target es igual a el e.currentTarget). */
    /* e.currentTarget dice que, lo que se está pulsando es el "currentTarget", osea,
    donde se encuentra el llamado de "handleOverlayClick", que, bueno, es el
    onClick={handleOverlayClick} de más abajo del código." */
    /* El onClose que cierra el Modal se activa al pulsar sobre el "modal-build-overlay",
    ya que cumpliría los requisitos para ello. */
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    
    return (
        <>
        <div className="modal-build-overlay" onClick={handleOverlayClick}>
            <div className="modal-build-content">
                <div className="modal-build-top">
                    <h2>{currentBuilding.name}</h2>
                    <button className="modal-build-close" onClick={onClose}
                    /* onClick={onClose} dice que si se pulsa este botón el Modal se
                    cierra. */
                    /* El svg es una imagen de un sitio web, la X para ser exactos. 
                    Al ser svg es bastante modificable, por ello se usa el path, elemento 
                    svg para lograr modificaciones de lineas y curvas en el mismo con
                    uso de coordenadas. */>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                <div className="modal-build-description">
                    <p>{currentBuilding.description}</p>
                </div>

                {currentBuilding.mission && (
                        <div className="modal-build-mission" 
                             onClick={() => handleMissionClick(currentBuilding.missionType)}>
                            <button>{currentBuilding.mission}</button>
                        </div>
                    )}
            </div>
        </div>

        {isModalOpen && (
                <MissionsModal
                    missionType={selectedMission}
                    onClose={closeModal} 
                />
            )}
        </>
    )
}

export default BuildsModal