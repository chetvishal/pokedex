import axios from 'axios';

export const fetchPokemon = async () => {

    try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=893')
            .catch(err => {
                console.log("error: ", err)
            }
            )

        return data.results;
    } catch (err) {
        console.log("error: ", err)
    }
}
