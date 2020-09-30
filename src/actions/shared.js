import { getInitialData } from  '../utils/api'
import { receiveUsers } from './users'
import { receiveTweets } from './tweets'
import { setAuthUSer } from './authedUser'

const AUTHED_ID = 'sarah_edo'

export function handleInitialData() {
    return (dispatch) =>{
        return getInitialData()
        .then(({users, tweets}) =>{
            dispatch(receiveUsers(users))
            dispatch(receiveTweets(tweets))
            dispatch(setAuthUSer(AUTHED_ID))
        })
    }
}