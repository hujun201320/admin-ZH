import { BASE } from '../utils/constants'
import ajax from './ajax'


export const reqLogin = (username, password) => ajax(BASE + '/user/login', { username, password },'POST')
