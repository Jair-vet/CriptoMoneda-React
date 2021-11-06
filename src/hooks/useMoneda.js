import React, { Fragment, useState } from 'react';

const useMoneda = () => {

    // State de nuestro  custom hook
    const [state, actualizarSatate] = useState('');

    const Seleccionar = () => (
        // Cuerpo del hook
        <Fragment>
            <label>Moneda</label>
            <select>
                <option value="MXN">MXN</option>
            </select>
        </Fragment>
    );

    // Retornar state, interfaz y funcion que modifica el state
    return [state, Seleccionar, actualizarSatate];

}

export default useMoneda;


