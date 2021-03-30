import { get } from '@/utils/axios'

import { Folder } from './model/folderModel'

export const getFolder = (data: any): Promise<Folder[]> => {
    return get('folders-get', data)
}
