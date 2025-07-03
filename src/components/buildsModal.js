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

    /* isClosing indica el estado inicial de cierre del Modal. */
    /* setIsClosing indica el cambio del estado inicial de cierre del Modal, esto
    pasando el useState a true con el handleClose. */
    /* useState(false) indica que, claramente el Modal no se está cerrando inicialmente,
    por lo que cargará las animaciones de cierre al actualizarse a true. */
    const [isClosing, setIsClosing] = useState(false);
    const [isVisible] = useState(true);
    /* isVisible = useState(true) indica que, mientras el componente esté activado, 
    siempre será visible y no tendrá ningún setIsVisible ni nada por el estilo para
    cambiar ele estado, pues, haría que este parpadee al iniciar las animaciones, y no
    funcionaría correctamente, ya de los demás cambios de cierre se encarga el
    isClosing. */

    const handleMissionClick = (missionType) => {
        setSelectedMission(missionType);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMission(null);
    };

    /* handleClose al completo será para indicar el cómo, la forma, de que el Modal se
    cierra. */
    /* setIsClosing(true) indica que se activará el setIsClosing visto anteriormente,
    este pasado a true, el cambio de estado en pocas palabras, para indicar que el Modal
    se está cerrando y que vaya activando animaciones y así. */
    /* setTimeout buscará que el cierre (onClose) demore cierta cantidad de tiempo, para
    el caso presente ha sido introducido el número "300", indicando que la cantidad de
    tiempo para que cierre el Modal será de 300 milisegundos (0.3 segundos), lo justo
    para que se active la animación, si no tuviera el setTimeout cerraría todo sin dar
    tiempo a que las animaciones se activen. */
    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 300);
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
            description: "Recinto encargado de diferentes actividades de construcción.",
            mission: "Misión 1 [Fabricación de Muebles]",
            missionType: "construccion_mission"
        },
        hotel: {
            name: "Hotel",
            description: "Dominio que puede alojar a personas con suma comodidad.",
            mission: "Misión 1 [Hospedaje de Turistas]",
            missionType: "hotel_mission"
        },
        gobierno: {
            name: "Gobierno",
            description: "Establecimiento con acceso público a los funcionarios gubernamentales.",
            mission: "Misión 1 [Tramites Ciudadanos]",
            missionType: "gobierno_mission"
        },
        exploracion: {
            name: "Exploración",
            description: "Estructura que recibe cualquier espíritu aventurero.",
            mission: "Misión 1 [Visita a Edificio Abandonado]",
            missionType: "exploracion_mission"
        },
        desconocido: {
            name: "???",
            description: "???",
            mission: "???",
            missionType: "desconocido_mission"
        },
        milicia: {
            name: "Milicia",
            description: "Cuartel compuesto de militares armados y preparados ante cualquier emergencia.",
            mission: "Misión 1 [Servicio de Guardia en Base Militar]",
            missionType: "milicia_mission"
        },
        fabrica: {
            name: "Fábrica",
            description: "El hogar de diversos materiales necesarios para la elaboración y producción de gran cantidad de objetos o servicios.",
            mission: "Misión 1 [Limpieza de Fábrica]",
            missionType: "fabrica_mission"
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
    /* Esta línea es perfecta para evitar errores. */
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
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 300);
        }
    };
    
    return (
        <>
        <div className={`modal-build-overlay 
        ${isVisible ? 'fade-in' : ''} 
        ${isClosing ? 'fade-out' : ''}`}
        /* Los {} están agrupando el contenido de forma compacta y así no implementar 
        tanto código. Y los `` sirven para poder usar expresiones JavaScript dentro del
        contenido agrupado. */ 
        /* ${isVisible ? 'fade-in}' : ''} indica que al momento de ser visible el Modal,
        este activará la animación de fade-in, el : '' sería si hubiera un caso alterno.
        Para ser más claros, el ? funciona como un if, osea, un si, y el : como un si
        no, pero para el presente caso no es necesario nada más ya que el isVisible siempre
        estará en true al activar el componente BuildsModal.  */
        /* ${isClosing ? 'fade-out'} : ''} indica que al momento de que el Modal se esté
        cerrando, osea, el isClosing pase a true, este active la animación de fade-out */
        onClick={handleOverlayClick}>
            <div className={`modal-build-content 
            ${isVisible ? 'slide-in' :''} 
            ${isClosing ? 'slide-out' : ''}`}
            /* El mismo funcionamiento que con el modal-build-overlay, pero en el
            modal-build-content y cambiando los fade-in y fade-out por slide-in y
            slide-out. */>
                <div className="modal-build-top">
                    <h2>{currentBuilding.name}</h2>
                    <button className="modal-build-close" onClick={handleClose}
                    /* onClick={handleclose} dice que si se pulsa este botón el Modal se
                    cierra, activando el timeout igualmente. */
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