const initialState = {
  numberCard:[],
  option:'other',
  commission: '24,50'
}

const transfer= (state=initialState, action) =>{
  const {payload, type} = action;

  switch(type){
    case 'ADD_TRANSFER_NUMBER_CARD':
      return {
        ...state,
        numberCard:[...payload]
      }
      case 'ADD_OPTION_TRANSFER':
        return{
          ...state,
          option: payload
        }
  }
  return state
}

export default transfer