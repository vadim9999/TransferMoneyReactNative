const initialState = {
  numberCard: ['1234','5678','9876','5432'],
  money: 2900,
  
}

const user = (state= initialState, action) =>{
  const {payload, type} = action;

  switch(type){
    case 'ADD_NUMBER_CARD':
      return {
        ...state,
        numberCard:[...payload]
      }
  }
  return state
}

export default user;