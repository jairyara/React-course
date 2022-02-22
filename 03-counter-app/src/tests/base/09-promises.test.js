import {getHeroeByIdAsync as getHerodByIdAsync, getHeroeByIdAsync} from "../../base/09-promises"
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {

    test('getHeroeByIdAsync debe de retornar un Heroe Async', ( done ) => { 

        const id = 1;

        getHerodByIdAsync( id )
            .then( heroe => {
                expect( heroe ).toBe(heroes[id-1]);
                done();
            });
     });

     test('getHeroeByIdAsync debe de retornar reject si el heroe no existe', ( done ) => {

        const id = 10;
        getHeroeByIdAsync( id )
            .catch( error => {
                expect( error ).toBe( 'No se pudo encontrar el héroe');
                done();
            });
     });
});