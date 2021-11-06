import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;
// Dandole styled a las etiquetas
const Select = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`


const useCriptomoneda = (label, stateInicial, opciones) => {

    // State de nuestro  custom hook
    const [state, actualizarSatate] = useState(stateInicial);

    const SelecCripto = () => (
        // Cuerpo del hook
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={ e => actualizarSatate(e.target.value) }
                value={state}
            >
                 <option value="MXN">-Seleccione-</option>
                {/*{opciones.map(opcion => (
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))} */}
            </Select>
        </Fragment>
    );

    // Retornar state, interfaz y funcion que modifica el state
    return [state, SelecCripto, actualizarSatate];

}

export default useCriptomoneda;

