
describe('Pruebas en el archivo demo', () => {
    test('Deben ser iguales los strings', () => { 
    
        const mensaje1 = 'Hola mundo';
    
        const mensaje2 = `Hola mundo`;
    
        
        expect( mensaje1 ).toBe( mensaje2 );
        
     })
});
