import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', () => {
    test('Pruebas en el metodo getSaludo', () => { 
        const nombre = 'Jair';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre + '!'); 
     })
})

describe('Pruebas #2 en 02-template-string.js', () => {
    test('getSaludo debe retornar Hola Maria! si no hay argumentos en el nombre', () => { 
        
        const saludo = getSaludo();
        
        expect(saludo).toBe('Hola Maria!')
     })
})