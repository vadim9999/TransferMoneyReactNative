import {createStore, combineReducers} from 'redux'
import user from '../reducers/user'
import transfer from '../reducers/transfer'
const store = createStore(combineReducers({user,transfer}))

export default store;
