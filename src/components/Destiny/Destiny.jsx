import {useState} from 'react';

const countries = [
    'Buenos Aires',
    'Sydney',
    'Praga',
    'Boston',
    'Tokio',
  ]

function Destiny () {

    const [country, setCountry] = useState('');

    const handleChange = (e) => {
        setCountry(e.target.value);
    } 

    return (
        <>
            <h1>Elige tu Destino</h1>
            <select name='countries' onChange={handleChange}>
                <option value='' selected>Select a country</option>
                    {
                    countries.sort().map(country => (
                        <option key={country} value={country}>{country.toUpperCase()}</option>
                    ))
                    }
            </select>

            {
                country !== ''
                ? <p>Tu destino es: {country}</p>
                : null
            }
        </>
    )
}

export default Destiny;