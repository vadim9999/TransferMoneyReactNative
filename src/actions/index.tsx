export const addTransferNumberCard = (payload) =>{
  return {
    type:"ADD_TRANSFER_NUMBER_CARD",
    payload
  }
}

export const addOptionTransfer = (payload) =>{
  return {
    type:'ADD_OPTION_TRANSFER',
    payload
  }
}

export const addCommission = (payload) =>{
  return {
    type: "ADD_COMMISSION",
    payload
  }
}

export const addAmount = (payload) =>{
  return {
      type:'ADD_AMOUNT',
      payload
  }
}

export const resetTransfer = () =>{
  return {
    type:"RESET_TRANSFER"
  }
}