import React, { Fragment, useState } from 'react';

const useMoneda = (label, stateInicial, opciones) => {

    // State de nuestro  custom hook
    const [state, actualizarSatate] = useState(stateInicial);

    const Seleccionar = () => (
        // Cuerpo del hook
        <Fragment>
            <label>{label}</label>
            <select>
                <option value="MXN">Seleccione</option>
                {opciones.map(opcion => (
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))}
            </select>
        </Fragment>
    );

    // Retornar state, interfaz y funcion que modifica el state
    return [state, Seleccionar, actualizarSatate];

}

export default useMoneda;


