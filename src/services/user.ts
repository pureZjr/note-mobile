import { post } from '@/utils/axios'

import { UserInfo } from '@/types/user'

// 登录
export const login = (data: any): Promise<UserInfo> => {
    return post('account-login', data)
}