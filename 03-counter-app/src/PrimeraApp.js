import React from "react";

const PrimeraApp = () => {

    const saludo = 'Hola mundo '

    const objectExample = {
        name: 'Clara',
        age: 24,
        hobby: 'OF'
    }

  return (
    <>
      <h1>{ saludo }</h1>
      <pre>{ JSON.stringify( objectExample, null, 4) }</pre>
    </>
  );
};

export default PrimeraApp;
