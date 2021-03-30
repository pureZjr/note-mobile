import { get } from '@/utils/axios'

import { File } from '@/services/model/fileModel'

// 获取最新文件
export const getNewestFiles = (data: any): Promise<File[]> => {
    return get('file-newest', data)
}

// 获取文件夹下笔记
export const getFileInFolder = (data: any): Promise<File[]> => {
    return get('fileInFolder-get', data)
}
