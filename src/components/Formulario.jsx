import React from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda'

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;
    &:hover {
        background-color: #326AC0;
        cursor:pointer;
    }
`;

const Formulario = () => {

    const MONEDAS = [
        { codigo: 'USD',nombre: 'USD' },
        { codigo: 'MXN',nombre: 'MXN' },
        { codigo: 'EUR',nombre: 'EUR' },
        { codigo: 'GBP',nombre: 'GBP' },
        { codigo: 'CAD',nombre: 'CAD' },
        
    ]

    // Utilizar useMoneda
    const [ moneda, SelectMoneda, actualizarSatate ] = useMoneda('Elige tu moneda', '', MONEDAS);

    return ( 
        <form>

            <SelectMoneda />

            <Boton 
                type="submit"
                value="Calcular"
            />
        </form>
     );
}
 
export default Formulario;