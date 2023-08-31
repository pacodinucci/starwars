import axios from 'axios'

const server = 'http://localhost:8000';

export function getCharacters(){
        
        return async function(dispatch){
            let json = await axios.get(`${server}/characters`);
            return dispatch({
                type: 'GET_CHARACTERS',
                payload: json.data
            })
        }
    
}

export function getFilms(){
    return async function(dispatch){
        let json = await axios.get(`${server}/films`);
        return dispatch({
            type: 'GET_FILMS',
            payload: json.data
        })
    }
}

export function getPlanets(){
    return async function(dispatch){
        let json = await axios.get(`${server}/planets`);
        return dispatch({
            type: 'GET_PLANETS',
            payload: json.data
        })
    }
}