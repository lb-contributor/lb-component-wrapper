import Upload from 'antd/es/upload'
import 'antd/es/upload/style'
import { T, fileToObject, genPercentAdd, getFileItem, removeFileItem } from 'antd/es/upload/utils'
export { UploadListProps, UploadFile, UploadListType } from 'antd/es/upload/interface'

export const utils = { T, fileToObject, genPercentAdd, getFileItem, removeFileItem }

export default Upload
