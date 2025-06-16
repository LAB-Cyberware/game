"use client";
import "../app/css/ui.css";
import { useState } from "react"; /* Uso de estados a través de React */
import BuildsModal from "./buildsModal";
export default function UI(){

    /* selectedBuilding representa el estado inicial */
    /* setSelectedBuilding representa el cambio de estado (al seleccionar edificio) */
    /* useState(null) dice que el estado inicial es nulo (no se está seleccionando edificio) */
    const [selectedBuilding, setSelectedBuilding] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    /* isModalOpen representa el estado inicial */
    /* setIsModalOpen representa el cambio de estado (se abre el Modal) */
    /* useState(false) dice que el estado inicial es falso (no está abierto el Modal) */


    /* handleBuildingClick toma el momento que se pulsa en un edificio, mientras que el "=" dice
    que esto significa que buildingType toma el edificio especifico que se está pulsando. La 
    función flecha(=>) dice que al ya tomar el edificio ocurre lo de debajo del const */
    /* setSelectedBuilding(buildingType) es el cambio de estado por selección de edificio, en
    este caso se deja claro que se está pulsando sobre un edificio específico, por lo que debe
    mostrar la información de aquel edificio */
    /* setIsModalOpen(true) es el cambio de estado del Modal al seleccionar un edificio, en este
    caso cambia a "true", que significa que debería abrir el Modal */
    const handleBuildingClick = (buildingType) => {
        setSelectedBuilding(buildingType);
        setIsModalOpen(true);
    };

    /* closeModal toma el momento cuando se cierra el Modal, acá no se toma un edificio
    especifico ni nada, solo el momento que se cierra. La función flecha dice que en el momento de
    cierre ocurre lo de debajo del const (lo que va a ocurrir) */
    /* setIsModalOpen(false) es el cambio de estado del Modal, en este caso, indica que este se
    debe cerrar gracias al (false) */
    /* setSelectedBuilding(null) es el cambio de estado de la selección de edificio, que en este
    caso dice "null", osease, al cerrar no se debe mostrar la información del edificio */
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedBuilding(null);
    };

    return(
        <>

    <div className="main-container">

        <div className="space-map">
            <span className="text-2xl font-bold">SpaceMap</span>
            </div>

        <div className="city-map">
            <div className="city-map-grid">
                <button className="city-build mineriaBuild"
                onClick={() => handleBuildingClick('minería')} /* onClick indica que al estar
                pulsando sobre el "button", este, con la función flecha dirá que debe tomar al
                respectivo edificio que se está pulsando, y así ejecutar el componente del Modal
                y mostrar la información del respectivo edificio que se está pulsando */>
                    CB 1
                </button>
                <button className="city-build construccionBuild" 
                onClick={() => handleBuildingClick('construccion')}>
                    CB 5
                </button>
                <button className="city-build hotelBuild" 
                onClick={() => handleBuildingClick('hotel')}>
                    CB 11
                </button>
                <button className="city-build gobiernoBuild" 
                onClick={() => handleBuildingClick('gobierno')}>
                    CB 13
                </button>
                <button className="city-build exploracionBuild" 
                onClick={() => handleBuildingClick('exploracion')}>
                   CB 15
                </button>
                <button className="city-build" 
                onClick={() => handleBuildingClick('desconocido')}>
                   CB 17
                </button>
                <button className="city-build miliciaBuild" 
                onClick={() => handleBuildingClick('milicia')}>
                    CB 21
                </button>
                <button className="city-build" 
                onClick={() => handleBuildingClick('desconocido')}>
                    CB 22
                </button>
                <button className="city-build fabricaBuild" 
                onClick={() => handleBuildingClick('fabrica')}>
                    CB 25
                </button>
            </div>
        </div>

        <div className="menu-container">
            <div className="slot-menu">
                <div className="avatar-circle" title="Avatar del jugador">
                    </div>
                <span>Perfil</span>
            </div>

            <div className="slot-menu">
                <button className="menu-button" title="Misiones">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Misiones</span>
                </button>
            </div>

            <div className="slot-menu">
                <button className="menu-button" title="Estadísticas">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                    <span>Estadís.</span>
                </button>
            </div>

            <div className="slot-menu">
                <button className="menu-button" title="Inventario">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                    <span>Inventario</span>
                </button>
            </div>

            <div className="slot-menu">
                <button className="menu-button" title="Configuración">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.646.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 1.905c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.333.183-.582.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-1.905c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Settings</span>
                </button>
            </div>
        </div>
    </div>
    
    {isModalOpen && (
                <BuildsModal 
                    buildingType={selectedBuilding} 
                    onClose={closeModal} 
                /* isModalOpen && es una condición para que pueda ocurrir lo de debajo suyo, lo
                que prosigue a aquel momento donde se abre el modal */
                /* BuildsModal llama a la respectiva función ubicada en buildsModal.js */
                /* buildingType={selectedBuilding} indica que en el momento que se abre el Modal 
                también debe tomar el respectivo edificio que se pulsó y así poder mostrar su
                información */
                /* onClose={closeModal} indica que ahora que se abrió el Modal, también es posible 
                cerrarlo. Básicamente, selectedBuilding y closeModal son props(propiedades) */
                />
            )}

</>
    )
}