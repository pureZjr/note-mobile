import { get } from '@/utils/axios'

import { File } from '@/types/file'

// 获取最新文件
export const getNewestFiles = (data: any): Promise<File[]> => {
    return get('file-newest', data)
}