import React, {createContext, useState} from "react";

export const TrackContext = createContext();
export const TrackProvider = ({children}) => {
    const [currentSong, setCurrentSong] = useState();
    return (
        <TrackContext.Provider value={{currentSong, setCurrentSong}}>
            {children}
        </TrackContext.Provider>
    )
}