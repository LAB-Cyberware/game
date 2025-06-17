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
                
                <div className="modal-mission-place">
                    <p>Lugar: {currentMission.place}</p>
                </div>
                <div className="modal-mission-reward">
                    <p>Recompensa: {currentMission.reward}</p>
                </div>
                
                <span>
                    <button>Aceptar</button>
                    <button>Salir</button>
                 </span>
            </div>
        </div>
    )
}

export default MissionsModal
