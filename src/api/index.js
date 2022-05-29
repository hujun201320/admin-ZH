import { BASE } from '../utils/constants'
import ajax from './ajax'

//登录请求接口
export const reqLogin = (username, password) => ajax(BASE + '/user/login', { username, password }, 'POST')

// 获取通知管理列表
export const reqNotices = (pageNum, pageSize) => ajax(BASE + '/list/notices', { pageNum, pageSize })

// 添加通知
export const reqAddNotice = (notice) => ajax(BASE + '/notices/add', notice, 'POST')
// 更新通知
export const reqUpdateNotice = (notice) => ajax(BASE + '/notices/upload/', notice, 'POST')
// 删除通知
export const reqDeleteNotice = (title) => ajax(BASE + '/notices/delete', { title }, 'POST')
export const reqDeleteFile = (filename) => ajax(BASE + '/notice/delete', { filename }, 'POST')


//指定删除新闻缩略图y
export const reqDeleteArticleImg = (name) => ajax(BASE + '/articlesImg/delete', { name }, 'POST')

// 上传党务打卡监控表
export const reqAddTableData = (content) => ajax(BASE + '/punchCard/add', content, 'POST')
// 获取打卡监控列表
export const reqgetPuncgCardList = (pageNum, PAGE_SIZE) => ajax(BASE + '/punchCard/list', { pageNum, PAGE_SIZE }, 'POST')
// 获取打卡监控详情界面
export const reqgetPuncgCardDetail = (data) => ajax(BASE + '/punchCard/detail', data, 'GET')
// 删除指定打卡监控表
export const reqDeletePunchCard = (title) => ajax(BASE + '/punchCard/delete', { title }, 'POST')

// 添加人员
export const reqAddpeople = (users) => ajax(BASE + '/people/add', users, 'POST')
// 更新人员
export const reqUpdatepeople = (users) => ajax(BASE + '/people/update', users, 'POST')
// 批量添加人员
export const reqAddmanyPeople = (notice) => ajax(BASE + '/people/addmany/', notice, 'POST')
// 获取人员列表 
export const reqgetPeopleList = (pageNum, pageSize, department) => ajax(BASE + '/people/checkedlist', { pageNum, pageSize, department })
// 搜索人员
export const reqCheckedSearchPeople = ({ pageNum, pageSize, searchName, searchType }) => ajax(BASE + '/people/search', {
    pageNum,
    pageSize,
    [searchType]: searchName,
})
// 删除人员
export const reqDeletePeople = (idNumber) => ajax(BASE + '/people/delete', { idNumber }, 'POST')
// 下载模板excel文件
export const reqDownloadExcel = () => ajax(BASE + '/people/downloadExcel', 'GET')

// 获取角色列表
export const reqRoles = () => ajax(BASE + '/role/list')
// 添加角色
export const reqAddRole = (roleName) => ajax(BASE + '/role/add', { roleName }, 'POST')
// 更新添加角色
export const reqUpdateRole = (role) => ajax(BASE + '/role/update', role, 'POST')

// 添加文章
export const reqAddArticles = (aritcle) => ajax(BASE + '/article/add', aritcle, 'POST')
// 文章图片
export const reqAddBannerpic = (bannerpic) => ajax(BASE + '/banner/add', bannerpic, 'POST')
