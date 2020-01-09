import React, { Fragment, useEffect, useState  } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';


function App() {

  // Cargar las citas del localStorage como state inicial
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if(!citasIniciales) {
    citasIniciales = [];
  }

  const [citas, guardarCita] = useState(citasIniciales);
  

  // Agregar las nuevas citas al state
  const crearCita = cita => {
    // Copia del state y agregar el nuevo cliente
    const nuevasCitas = [...citas, cita];

    // Guardar en el State
    guardarCita(nuevasCitas);

  }

  // Elimina las citas del state

  const eliminarCita = index => {
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index, 1);
    guardarCita(nuevasCitas);
  }

  useEffect(
    () => {
      let citasIniciales = JSON.parse(localStorage.getItem('citas'));

      if(citasIniciales) {
        localStorage.setItem('citas', JSON.stringify(citas));
      } else {
        localStorage.setItem('citas', JSON.stringify([]));
      }
    }
  )



  // Mostrar titulo
  const titulo = Object.keys(citas).length === 0 ? 'No hay citas' : ' Administrar las citas';

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
            <h2>{titulo}</h2> 
            {citas.map((cita, index) => (
              <Cita 
                key={index}
                index={index}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>  
      </div>
    </Fragment>
  );
}

export default App;
