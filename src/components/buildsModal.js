'use client';

import React from 'react';
import { useState } from 'react';
import "../app/css/buildsModal.css";

const buildingsData = {
    mineria: {
        name: "Minería",
        description: "Lugar de extracción y procesamiento de minerales"
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

const BuildingModal = ({ building, isOpen, onClose }) => {
    if (!isOpen || !building) return null;
    return (
        <div className='buildingsModalStyle bg-opacity-25' onClick={onClose}>
            <div className='buildingModalInStyle' onClick={e => e.stopPropagation()}>
                <div className='buildingModalInTopStyle'>
                    <h2 className='buildingModalInNameStyle'>{building.name}</h2>
                    <button onClick={onClose} className='buildingModalInExitStyle'>✕</button>
                </div>
                <div className='space-y-2'>
                    <div className='buildingModalInDescStyle'>
                        <h3>{building.description}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const useBuildingModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [building, setBuilding] = useState(null);

    const open = (buildingId) => {
        setBuilding(buildingsData[buildingId]);
        setIsOpen(true);
    };

    const close = () => {
        setIsOpen(false);
        setBuilding(null);
    };
    
    const ModalComponent = () => (
        <BuildingModal building={building} isOpen={isOpen} onClose={close} />
    );

    return { open, ModalComponent };
};