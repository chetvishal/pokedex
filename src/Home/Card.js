import React, {useEffect, useState} from 'react';

function Card(props) {

    const [name, setName] = useState();
    const [index, setIndex] = useState();

    useEffect(() => {
        const {name, url} = props;
        const index = url.split('/')[url.split('/').length - 2];
        setIndex(index);
        setName(name);
    },[])
    console.log(props);
    // console.log(url);
    // console.log(index);
    return (
        // {/* col s4 l4 */}
        <div className="col s1 l2">
            <div className="card ">
                <div className="card-image">
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
                        // src={`https://pokeres.bastionbot.org/images/pokemon/${index}.png`}
                        style={{ width: '5em', height: '5em', marginLeft: 'auto', marginRight: 'auto', marginTop: '15px' }}
                        className="card-img-top rounded mx-auto d-block mt-2"
                        alt="poke"
                    />
                    {/* <span className="card-title">Card Title</span> */}
                </div>
                <div className="card-content">
                    <p style={{ textAlign: 'center', fontWeight: 'bold', textTransform: 'capitalize' }}>{name}</p>
                    {/* <p style={{ textAlign: 'center', fontWeight: 'bold', textTransform: 'capitalize' }}>{props.no}</p> */}
                </div>
            </div>
        </div>
    )
}

export default Card;