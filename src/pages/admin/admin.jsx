import React, { Component } from 'react'
import {Redirect,Route,Switch} from 'react-router-dom'
import { Layout } from 'antd';



import memoryUtils from "../../utils/memoryUtils"
import LeftNav from '../../componets/left-nav'
import Header from '../../componets/header'
import Home from '../home/home'
import NewsManage from '../news/newsManage'
import NewsUpload from '../news/newsUpload'
import CreateRole from '../role/create-role'
import ManageRole from '../role/manage-role'
import CreateUser from '../user/createUser'
import ManageUser from '../user/manageUser'


const { Footer, Sider, Content } = Layout;

/**
 后台管理的路由组件
 */


export default class Admin extends Component {

    render() {

        const user = memoryUtils.user
        //如果内存中没有存储user==>当前没有登录
        if (!user || !user._id) {
            console.log(111)
            //自动跳转到登录（在render()中）
            return <Redirect to='/login' />

        }
        return (

            <Layout style={{ height: '100%' }}>
                <Sider>
                    <LeftNav />
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{margin:'20px', backgroundColor: '#fff' }}>
                        <Switch>
                            <Route path='/home' component={Home} />
                            <Route path='/newsManage' component={NewsManage} />
                            <Route path='/newsUpload' component={NewsUpload} />
                            <Route path='/createRole' component={CreateRole} />
                            <Route path='/manageRole' component={ManageRole} />
                            <Route path='/createUser' component={CreateUser} />
                            <Route path='/manageUser' component={ManageUser} />
                            <Redirect to='/home' />
                        </Switch>
                    </Content>
                    <Footer style={{ textAlign: 'center', color: '#ccc' }}>杨虎军制作</Footer>
                </Layout>
            </Layout>
        )
    }
}