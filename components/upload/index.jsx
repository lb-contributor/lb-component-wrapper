import { Upload } from 'antd'
import { T, fileToObject, genPercentAdd, getFileItem, removeFileItem } from 'antd/lib/upload/utils'
import { UploadListProps, UploadFile, UploadListType } from 'antd/lib/upload/interface'

export const utils = { T, fileToObject, genPercentAdd, getFileItem, removeFileItem }

export const interfaces = { UploadListProps, UploadFile, UploadListType }

export default Upload
