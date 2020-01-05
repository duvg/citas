import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';


function App() {

  const [citas, guardarCita] = useState([]);

  console.log(citas);

  return (
    <Fragment>
      <h2>Administrador de pacientes</h2>
      <div className="container">
        <div className="rowq">
          <div className="one-half column">
            <Formulario />
          </div>
          <div className="one-half column">

          </div>
        </div>  
      </div>
    </Fragment>
  );
}

export default App;
