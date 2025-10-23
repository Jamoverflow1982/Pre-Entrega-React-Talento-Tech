import { AlertaContext } from "../../context/AlertaContext";
import { useContext } from "react";
import style from "./Alerta.module.css"

const Alerta = () => {
    
    const {MensajeAlerta} = useContext(AlertaContext);

    if (!MensajeAlerta) {return null;}

    return (
        <div className={style.contenedorAlerta}>
            <div className={style.alerta}>
                {MensajeAlerta}
            </div>
        </div>
        
    )

}

export default Alerta