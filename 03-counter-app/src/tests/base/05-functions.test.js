import { getUser, getUsuarioActivo } from "../../base/05-functions";

describe("Pruebas en 05-funciones", () => {
  test("getUser Debe de retornar un objeto", () => {
    
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual( userTest ); 

  });
});

describe('Segunda prueba en 05-functions', () => {
    test('getUsuarioActivo debe retornar un objeto', () => {
        
        const nombre = 'Jair';
        const user = getUsuarioActivo( nombre );

        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        })
    })
})
