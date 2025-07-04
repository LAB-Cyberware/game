import '../app/css/missionsModal.css'
import { useState } from 'react';
import { MineriaMission1, ConstruccionMission1 } from './missions';

console.log('MineriaMission1:', MineriaMission1);

function MissionsModal({ missionType, onClose }) {
    const [selectedMissionCode, setSelectedMissionCode] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const missionsData = {
        minería_mission: {
            name: "Extracción de Minerales",
            place: "Minería",
            reward: "$10",
            missionCode: "mineria1"
        },
        construccion_mission: {
            name: "Fabricación de Muebles",
            place: "Construcción",
            reward: "$10",
            missionCode: "construccion1"
        },
        hotel_mission: {
            name: "Hospedaje de Turistas",
            place: "Hotel",
            reward: "$10"
        },
        gobierno_mission: {
            name: "Tramites Ciudadanos",
            place: "Gobierno",
            reward: "$10"
        },
        exploracion_mission: {
            name: "Visita a Edificio Abandonado",
            place: "Exploración",
            reward: "$10"
        },
        desconocido_mission: {
            name: "???",
            place: "???",
            reward: "???",
            missionCode: "desconocido1"
        },
        milicia_mission: {
            name: "Servicio de Guardia en Base Militar",
            place: "Milicia",
            reward: "$10"
        },
        fabrica_mission: {
            name: "Limpieza de Fábrica",
            place: "Fábrica",
            reward: "$10"
        }
    }

    const [isClosing, setIsClosing] = useState(false);
    const [isVisible] = useState(true);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsClosing(true);
            setTimeout(() => {
                onClose();
            }, 300);
            }
    };

    const handleMissionAcceptClick = (missionCode) => {
        setSelectedMissionCode(missionCode);
        setIsModalOpen(true);
    };

    /* renderMissionModal se encargará de comprobar en qué edificio (mineria o
    construcción por ejemplo) uno se encuentra
    ubicado, y de esa forma ejecutará el componente correcto al momento de pulsar
    Aceptar en el Modal. */
    const renderMissionModal = () => {
        /* if (!isModalOpen) return null buscará la verificación de que se esté con el
        Modal abierto, pues si no está abierto, este enviará null, osease, nada. */
        if (!isModalOpen) return null;

        /* switch (missionType) se encargará de tomar el missionType en el que se 
        está, y así de esta forma ejecutar el respectivo componente de misión. Se podría
        decir que funciona como al decir "depende el caso". */
        switch (missionType) {
            case 'minería_mission':
                return (
                    <MineriaMission1
                        missionCode={selectedMissionCode}
                        onClose={closeModal}
                    />
                );
            case 'construccion_mission':
                return (
                    <ConstruccionMission1
                        missionCode={selectedMissionCode}
                        onClose={closeModal}
                    />
                );
            default:
                return null;
            /* default dirá que es el caso por defecto, donde, si no recibe ningún
            missionType, regresará un null, osea, nada. Es más que nada para evitar
            errores. */
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMissionCode(null);
    };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 300);
    };

    const currentMission = missionsData[missionType] || missionsData.desconocido_mission;

    return (
        <>
        <div className={`modal-mission-overlay 
        ${isVisible ? 'fade-in' : ''} 
        ${isClosing ? 'fade-out' : ''}`} 
        onClick={handleOverlayClick}>
            <div className={`modal-mission-content 
                ${isVisible ? 'slide-in' :''} 
                ${isClosing ? 'slide-out' : ''}`}>
                <div className="modal-mission-top">
                    <h2>{currentMission.name}</h2>
                </div>
                
                <div className="modal-mission-description">
                    <p>Lugar: {currentMission.place}</p>
                    <p>Recompensa: {currentMission.reward}</p>
                </div>
                
                <span className='modal-mission-buttons'>
                    <button className='modal-mission-accept' onClick={() => handleMissionAcceptClick(currentMission.missionCode)}>Aceptar</button>
                    <button className='modal-mission-exit' onClick={handleClose}>Salir</button>
                 </span>
            </div>
        </div>

        {renderMissionModal()}
        </>
    )
}

export default MissionsModal
