export interface File {
    id?: string
    title?: string
    createTime?: number
    updateTime?: number
    inRecycle?: boolean
    type?: FileType
    content?: string
    size?: number
    parentId?: string
    key?: string
    parentKey?: string
    parentFolderTitle?: string
    isTop?: 0 | 1
    tags?: string[]
}

export enum FileType {
    MarkDown = 'markdown',
    Article = 'article',
    Img = 'image',
    Video = 'video'
}