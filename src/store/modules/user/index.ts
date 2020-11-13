
import { UserInfo } from '@/types/user'

interface States {
    userInfo: UserInfo
}

/**
 * states
*/
const states: States = {
    userInfo: {
        avatar: '',
        username: '',
        email: '',
        id: '',
        token: ''
    }
}

/**
 * actions
*/
const actions = {
    setUserInfo: function ({ commit }: any, payload: UserInfo) {
        commit('setUserInfo', {
            userInfo: payload
        })
    }
}

/**
 * mutations
*/
const mutations = {
    setUserInfo: function (state: any, payload: any) {
        state.userInfo = payload
    }
}

export { states, actions, mutations }