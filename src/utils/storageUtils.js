/*
进行local数据存储管理的工具模块
 */
import store from 'store'
const USER_KEY = 'user_key'

//保存user
    // localStorage.setItem(USER_KEY, JSON.stringify(user))
export const saveUser = (user) => {store.set(USER_KEY, user)}
// 读取user
  // return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
export const getUser = () =>  {return store.get(USER_KEY) || {}}

//删除user
 // localStorage.removeItem(USER_KEY)
export const removeUser = () => {store.remove(USER_KEY)}
