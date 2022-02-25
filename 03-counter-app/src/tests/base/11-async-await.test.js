import { getImage } from "../../base/11-async-await"

describe("Pruebas con async-await", () => {
    test('Debe de retornar un url de la imagen', async() => { 
        const url = await getImage();

        // expect( typeof url ).toBe( 'string' );
        expect( url.includes('https://')).toBe(true);

     });
});