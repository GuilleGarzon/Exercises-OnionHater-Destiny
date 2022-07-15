import {useState} from 'react';

function OnionHater () {

  const [hate, setHate] = useState('');

  const handleOnion = (e) => {
    const {value} = e.target;
    const lowerCase = value.toLowerCase();
    setHate(lowerCase);
  }

  return (
    <>
      <h1>Ejercicio Odio la cebolla</h1>
      <textarea name="hate" cols="30" rows="10" onChange={handleOnion}/>

      <p>
        {
          hate.includes('cebolla') ? <h2>Odio la cebolla</h2> : null
        }
      </p>
    </>
  )
}

export default OnionHater;