const initialState = {
  numberCard:[],
  option:'other',
  commission: false,
  amount: 0
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
        
      case 'ADD_COMMISSION':
        return {
          ...state,
          commission: payload
        }
      case 'ADD_AMOUNT':
        return {
          ...state,
          amount: payload
        }
      case 'RESET_TRANSFER':
        return {
          ...initialState,
        }
    default:
      return state
  }
  
}

export default transfer