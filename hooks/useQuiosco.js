import { useContext } from "react";
import QuioscoContext from "../context/QioscoProvider";


const useQuiosco = () => {
    return useContext( QuioscoContext );
}

export default useQuiosco;