'use client'

import {useState} from 'react';

import { WorkContext } from '../contexts';

export default function WorkProvider({children}) {
    const [hoveredId, setHoveredId] = useState(null);

    return(
        <WorkContext.Provider value={{hoveredId, setHoveredId}}>
            {children}
        </WorkContext.Provider>
    )
}