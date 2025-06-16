import React from 'react'
import '../app/css/buildsModal.css'

function BuildsModal({ buildingType, onClose }) {
    const buildingsData = {
        minería: {
            name: "Minería",
            description: "Lugar de extracción y procesamiento de minerales."
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

    const currentBuilding = buildingsData[buildingType] || buildingsData.desconocido;

    // Manejar clic en el overlay para cerrar modal
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    
    return (
        <div className="modal-build-general" onClick={handleOverlayClick}>
            <div className="modal-build-content">
                <div className="modal-build-top">
                    <h2>{currentBuilding.name}</h2>
                    <button className="modal-build-close" onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                <div className="modal-build-bottom">
                    <p>{currentBuilding.description}</p>
                </div>
            </div>
        </div>
    )
}

export default BuildsModal