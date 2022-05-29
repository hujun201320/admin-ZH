import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'antd';
import menuList from '../../config/menuConfig'


import logo from '../../assets/images/logo.png'
import './index.less'

/*
左侧导航的组件
*/
const { SubMenu } = Menu;


class LeftNav extends Component {
  /*
  根据menu的数据数组生成对应的标签数组
  使用map() + 递归调用
  */
  getMenuNodes_map = (menuList) => {
    return menuList.map(item => {
      /*
        {
        title: '首页',//菜单标题名称
        key:'/home',//对应的path
        icon:'PieChartOutlined',//可能有，也可能没有
    },
      */
      if (!item.children) {
        return (
          <Menu.Item key={item.key} icon={item.icon}  >
            <Link to={item.key}>
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        )
      } else {
        return (
          <SubMenu key={item.key} icon={item.icon} title={
            <span>{item.title}</span>
          }>
            {this.getMenuNodes(item.children)}
          </SubMenu>
        )

      }
    })
  }
  /*
  根据menu的数据数组生成对应的标签数组
  使用reduce() + 递归调用
  reduce用于累计累加
  */

  getMenuNodes = (menuList) => {

    const path = this.props.location.pathname

    return menuList.reduce((pre, item) => {
      //向pre中添加<Menu.Item>
      if (!item.children) {
        pre.push((<Menu.Item key={item.key} icon={item.icon}  >
          <Link to={item.key}>
            <span>{item.title}</span>
          </Link>
        </Menu.Item>
        ))
      } else {
        //查找一个与当前请求路径匹配的子Item

        const cItem = item.children.find(cItem => cItem.key === path)
        //如果存在，说明当前item的子列表需要打开
        if (cItem) {
          this.openKey = item.key
        }

        //向pre中添加<SubMenu>
        pre.push(
          <SubMenu key={item.key} icon={item.icon} title={
            <span>{item.title}</span>
          }>
            {this.getMenuNodes(item.children)}
          </SubMenu>
        )
      }
      return pre
    }, [])
  }
  /*
  在第一次render()之前执行一次
  为第一次render()准备数据（必须同步）
  */
  UNSAFE_componentWillMount() {
    this.menuNodes = this.getMenuNodes(menuList)
  }


  render() {

    //得到当前请求的路由路径
    const path = this.props.location.pathname
    console.log('render()', path)
    //得到需要打开的菜单项的key


    const openKey = this.openKey

    return (
      <div className="left-nav">
        <Link to='/' className="left-nav-header">

          <img src={logo} alt="" />
          <h1 >后台管理系统</h1>

        </Link>
        <div className="left-nav-fontsize">
          <Menu
            mode="inline"
            theme="red"
            selectedKeys={[path]}
            defaultOpenKeys={[openKey]}
          >
            {this.menuNodes}
          </Menu>
        </div>


      </div>

    )
  }
}

/*
 withRouter高阶组件：
 包装非路由组件，返回一个新的组件
 新的组件向非路由组件传递3个属性：history/location/match
 */
export default withRouter(LeftNav)
