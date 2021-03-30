import { createStore } from 'vuex'

import * as userStore from './modules/user'

export default createStore({
    ...userStore,
})
