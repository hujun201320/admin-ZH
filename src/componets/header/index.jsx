import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Modal } from 'antd';
// import { ExclamationCircleOutlined } from '@ant-design/icons';


import menuList from '../../config/menuConfig'
import { formateDate } from '../../utils/dateUtils'
import memoryUtils from "../../utils/memoryUtils"
import { removeUser } from '../../utils/storageUtils'
import LinkButton from '../link-buttom'
import './index.less'
/*
左侧导航的组件
*/

const { confirm } = Modal;

class Header extends Component {
constructor(props){
    super(props)
    this.state={isToggleOn:true}
}
    state = {
        currentTime: formateDate(Date.now()), // 当前时间字符串
        dayPictureUrl: '', // 天气图片url
        weather: '', // 天气的文本
      }

      getTime = () => {
        // 每隔1s获取当前时间, 并更新状态数据currentTime
        this.intervalId = setInterval(() => {
          const currentTime = formateDate(Date.now())
          this.setState({currentTime})
        }, 1000)
      }


    getTitle = () => {
        //得到当前请求路径
        const path = this.props.location.pathname
        let title
        menuList.forEach(item => {
            if (item.key === path) {//如果当前item对象的key与path一样，
                title = item.title
            } else if (item.children) {
                //在所有的子item中查找匹配的
                const cItem = item.children.find(cItem => cItem.key === path)
                //如果有值才说明有匹配的
                if (cItem) {
                    //取出的title
                    title = cItem.title
                }
            }
        })
        return title
    }


    /*
     退出登录
     */
    showConfirm = () => {
        //显示确认框
        confirm({
            // icon: <ExclamationCircleOutlined />,
            content: '确定退出吗？',
            onOk:()=> {
                console.log('OK');
                // 删除保存的数据
                removeUser()
                memoryUtils.user = {}
                //跳转到登录的界面
                this.props.history.replace('/login')
            }
        }

        )
    }
    /*
    第一次render()之后执行一次
    一般在此执行异步操作：发ajax请求/启动定时器
    */

    componentDidMount() {
        //获取当前的时间
        this.getTime()
    }

    /*
    当前组件卸载之前调用
    */

    UNSAFE_componentWillMount () {
      
        // 清除定时器
        clearInterval(this.intervalId)
      }
    
   

    render() {

        const { currentTime } = this.state
        const username = memoryUtils.user.username
        //得到当前需要显示的title
        const title = this.getTitle()

        return (
            <div className="header">
                <div className="header-top">
                    <span>欢饮，{username}</span>
                    <LinkButton onClick={()=>this.showConfirm(this.state.isToggleOn)}>
                    
                        退出 </LinkButton>
                    {/* <a  href="javascript" onClick={this.showConfirm} >退出</a> */}
                </div>
                <div className="header-bottom">
                    <div className='header-bottom-left'>{title}</div>
                    <div className='header-bottom-right'>
                        <span>{currentTime}</span>
                        {/* <img src="" alt="weater" />
                        <span></span> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)