import React from 'react'
import "../app/css/missions/missions-easy/mineriamission1.css"
import { useState } from 'react';

function mineriamission1() {
    const [selectedMineriaMission, setSelectedMineriaMission] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isClosing, setIsClosing] = useState(false);
    const [isVisible] = useState(true);

    return (
        <div className='mineria-mission-1'></div>
    )
}

export default mineriamission1