import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp />', () => {

    // test('Debe de mostrar el mensaje Hola, soy Goku ', () => { 

    //     const saludo = 'Hola, soy Goku';

    //     const { getByText } = render(<PrimeraApp saludo={saludo}/>);
        
    //     expect( getByText(saludo) ).toBeInTheDocument();

    //  });

    test('Debe de mostrar <PrimeraApp /> correctamente', () => { 
        
        const saludo = 'Hola, soy Goku';

        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );

        expect( wrapper ).toMatchSnapshot();
     })
})