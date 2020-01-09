import React from 'react';


function Cita ({cita, index, eliminarCita}) {

    return(
        <div className="cita">
            <p>Mascota: <span>{cita.mascota}</span> </p>
            <p>Dueño: <span>{cita.propietario}</span></p>
            <p>Fecha: {cita.fecha}</p>
            <p>Hora: {cita.hora}</p>
            <p>Sintomas: {cita.sintomas}</p>
            <button 
                onClick={() => eliminarCita(index)}
                type="button" 
                className="button eliminar u-full-width"
            >
                Eliminar X
            </button>
        </div>
    );
}

export default Cita;