import {combineReducers} from 'redux'
import authUser from './userReducer.js'
import error from './error.js'
import countryId from './countryId'
import buyToken from './buyToken_Reducer'
import transactions from './transaction_Reducer'
import forgot from './forgotPassword_Reducer'
import changepassword from './changePasswords'
import wallet from './walletReducer'

export default combineReducers({
	authUser,
	error,
	countryId,
	// buyToken,
	transactions,
	forgot,
	changepassword,
	wallet,
})