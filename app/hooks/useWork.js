import { WorkContext } from "../contexts";
import { useContext } from "react";

export const useWork = () => {
    const {hoveredId, setHoveredId} = useContext(WorkContext);
    return {hoveredId, setHoveredId};
}