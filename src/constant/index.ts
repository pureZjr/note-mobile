const NODE_ENV = process.env.NODE_ENV

export const isProd = NODE_ENV === 'production'
// 服务地址
export const BASE_URL = isProd ? 'https://note-server.purevivi.chat/' : 'https://note-server.purevivi.chat/'
// 上传资源大小限制
export const IMAGE_SIZE_LIMIT = 20 * 1024 * 1024
export const FILE_SIZE_LIMIT = 50 * 1024 * 1024
// 七牛相关
export const QN_UPLOAD_URL = 'https://upload-z2.qiniup.com'
export const QN_BUCKET = 'pure-note'
export const QN_SOURCE_URL = 'https://note.ss.purevivi.chat'

export const LOCALSTORAGE = {
    USERINFO: 'userInfo',
    FILEANDFOLDERDISPLAY: 'fileandfolderdisplay',
    FILEANDFOLDERSORT: 'fileandfoldersort',
}