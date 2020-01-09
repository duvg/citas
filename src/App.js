import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';


function App() {

  const [citas, guardarCita] = useState([]);

  // Agregar las nuevas citas al state
  const crearCita = cita => {
    // Copia del state y agregar el nuevo cliente
    const nuevasCitas = [...citas, cita];

    // Guardar en el State
    guardarCita(nuevasCitas);

  }

  return (
    <Fragment>
      <h2>Administrador de pacientes</h2>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            {citas.map((cita, index) => (
              <Cita 
                key={index}
                index={index}
                cita={cita}
              />
            ))}
          </div>
        </div>  
      </div>
    </Fragment>
  );
}

export default App;
