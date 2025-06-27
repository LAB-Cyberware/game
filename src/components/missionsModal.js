import '../app/css/missionsModal.css'

function MissionsModal({ missionType, onClose }) {
    const missionsData = {
        minería_mission: {
            name: "Extracción de Minerales",
            place: "Minería",
            reward: "$10"
        }
    }

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const currentMission = missionsData[missionType] || missionsData.desconocido_mission;

    return (
        <div className="modal-mission-overlay" onClick={handleOverlayClick}>
            <div className="modal-mission-content">
                <div className="modal-mission-top">
                    <h2>{currentMission.name}</h2>
                </div>
                
                <div className="modal-mission-description">
                    <p>Lugar: {currentMission.place}</p>
                    <p>Recompensa: {currentMission.reward}</p>
                </div>
                
                <span className='modal-mission-buttons'>
                    <button className='modal-mission-accept'>Aceptar</button>
                    <button className='modal-mission-exit' onClick={onClose}>Salir</button>
                 </span>
            </div>
        </div>
    )
}

export default MissionsModal
