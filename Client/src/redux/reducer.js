import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./actions/types"

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state= initialState, {type, payload}) => {
    switch(type){
      case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };
      
      case REMOVE_FAV:
      return { ...state, myFavorites: payload, allCharacters:payload };
        
      case FILTER:
            const filtroGer = state.allCharacters.filter((char) => char.gender === payload)
            return{
                ...state,
                myFavorites: filtroGer
            }
        case ORDER:
            const allCharactersCopy = [...state.allCharacters]
        return {
          ...state,
          myFavorites:
          payload === "A"
          ? allCharactersCopy.sort((a, b)=> a.id - b.id)
          : allCharactersCopy.sort((a, b)=> b.id - a.id)
        }   
        case RESET:
            return{
                ...state,
                myFavorites: state.allCharacters
            }

        default:
            return {...state}
    }
}

export default rootReducer;



// const filtro2 = state.allCharacters
// const reset = state.allCharacters.sort((a,b) => {
//     if(payload === 'A'){
//         return a.id - b.id
//     }else if (payload === 'D'){
//         return b.id - a.id
//     }
// })
// return{
//     ...state,
//     myFavorites: reset
// }