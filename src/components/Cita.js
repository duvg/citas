import React from 'react';


function Cita ({cita}) {
    return(
        <div className="cita">
            <p>Mascota: <span>{cita.mascota}</span> </p>
            <p>Dueño: <span>{cita.propietario}</span></p>
            <p>Fecha: {cita.fecha}</p>
            <p>Hora: {cita.hora}</p>
            <p>Sintomas: {cita.sintomas}</p>
        </div>
    );
}

export default Cita;