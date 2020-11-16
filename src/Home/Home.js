import React, { useState, useEffect } from 'react';
import { fetchPokemon } from '../Context/Context';
import Card from './Card';

function Home() {

    const [pokemon, setPokemon] = useState([]);
    var [searchTxt, setSearchTxt] = useState("");

    useEffect(() => {
        const fetchAPI = async () => {
            setPokemon(await fetchPokemon());
        };

        fetchAPI();
    }, []);

    const returnCard = (poke) => {
        return (
            <Card
                key={poke.name}
                // no={`${i + 1}`}
                name={poke.name}
                url={poke.url}
            />
        )
    }

    const handleSearch = (e) => {
        setSearchTxt(e.target.value);
    }

    return (
        <div>
            {/* URL TO FETCH IMAGES */}
            {/* https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png */}

            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Pokedex</a>
                    <div className="row" id="topbarsearch">
                        <div className="input-field col s3 s3 red-text right">
                            <input type="text" placeholder="Search" id="autocomplete-input" className="autocomplete white-text" onChange={handleSearch} />
                        </div>
                    </div>
                </div>
            </nav>

            <div className="row">
                {
                    pokemon && pokemon.map((poke, i) => {
                       return poke.name.includes(searchTxt) && returnCard(poke)
                    })
                }
            </div>
            <button onClick={() => console.log(pokemon)}>Press me</button>

        </div>
    )
}

export default Home;

// poke.name.includes(searchTxt) && 

// {/* col s4 l4 */}
{/* <div className="col s1 l2" key={i}>
                                <div className="card ">
                                    <div className="card-image">
                                        <img 
                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`} 
                                        style={{ width: '5em', height: '5em', marginLeft: 'auto', marginRight: 'auto', marginTop: '15px'}}
                                        className="card-img-top rounded mx-auto d-block mt-2"
                                        />
                                    </div>
                                    <div className="card-content">
                                        <p style={{textAlign: 'center', fontWeight: 'bold'}}>{`${poke.name}`}</p>
                                    </div>
                                </div>
                            </div> */}



{/* pokemon && pokemon.map((poke, i) => {
                            poke.name.includes(searchInp)
                            return (
                                <Card
                                    key={poke.name}
                                    no={`${i + 1}`}
                                    name={poke.name}
                                    url={poke.url}
                                />
                            )
                        }) */}