import React from "react";
import  PropTypes  from "prop-types";

const PrimeraApp = ({saludo, subtitulo}) => {

    // const objectExample = {
    //     name: 'Clara',
    //     age: 24,
    //     hobby: 'OF'
    // }

  return (
    <>
      <h1>{ saludo }</h1>
      <h2>{subtitulo}</h2>
      {/* <pre>{ JSON.stringify( objectExample, null, 4) }</pre> */}
    </>
  );
};

PrimeraApp.propTypes = {
  saludo : PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
  subtitulo: 'Hola perro',
}


export default PrimeraApp;
