/**
 * @description: 文档基础对象
 */

interface BaseFile {
    id: string
    title: string
    type: FileType
    content: string
}

/**
 * @description: 文档对象
 */

export interface File extends BaseFile {
    createTime: number
    updateTime: string
    inRecycle: boolean
    size?: number
    parentId?: string
    key?: string
    parentKey?: string
    parentFolderTitle?: string
    isTop?: 0 | 1
    tags?: string[]
}

/**
 * @description: 文档的类型
 */
export enum FileType {
    MarkDown = 'markdown',
    Article = 'article',
    Img = 'image',
    Video = 'video',
}
