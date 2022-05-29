import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd';
import DocumentTitle from 'react-document-title'



import memoryUtils from "../../utils/memoryUtils"
import LeftNav from '../../componets/left-nav'
import Header from '../../componets/header'
import Home from '../home/home'
import ArticleManage from '../article/articlemanage'
import Writearticle from '../article/write-article'
import NewsManage from '../news/newsManage'
import NewsUpload from '../news/newsUpload'
import CreateRole from '../role/create-role'
import ManageRole from '../role/manage-role'
import CreateUser from '../user/createUser'
import ManageUser from '../user/manageUser'
import Punchcard_upload from '../punchcard/punchcard_upload';
import Punchcardmanage from '../punchcard/punchcardmanage'
import PunchcardDetail from '../punchcard/panchCardDetai'
import AddManypeople from '../people/add_many_people'
import UpdateOnePeople from '../people/update_one_people'
import AddOnePeople from '../people/add_one_people';
import PeopleManage from '../people/people_manage';
import Success from '../../componets/result/Success';


const {  Sider, Content } = Layout;

/**
 后台管理的路由组件
 */


export default class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {

        const user = memoryUtils.user
        //如果内存中没有存储user==>当前没有登录
        if (!user || !user._id) {
            console.log(111)
            //自动跳转到登录（在render()中）
            return <Redirect to='/login' />

        }
        return (
            <DocumentTitle title='天路先锋后台管理系统'>
                <Layout style={{ height: '100%' }}>
                    <Sider>
                        <LeftNav />
                    </Sider>
                    <Layout>
                        <Header>Header</Header>
                        <Content style={{height:'1200px', margin: '20px', backgroundColor: '#fff' }}>
                            <Switch>
                                <Route path='/home' component={Home} />
                                <Route path='/success' component={Success} />
                                <Route path='/articleManage/add' component={Writearticle} />
                                <Route path='/articleManage/manage' component={ArticleManage} />
                                <Route path='/people/updateone' component={UpdateOnePeople} />
                                <Route path='/people/addone' component={AddOnePeople} />
                                <Route path='/people/addmany' component={AddManypeople} />
                                <Route path='/people/manage' component={PeopleManage} />
                                <Route path='/newsManage' component={NewsManage} />
                                <Route path='/newsUpload' component={NewsUpload} />
                                <Route path='/createRole' component={CreateRole} />
                                <Route path='/manageRole' component={ManageRole} />
                                <Route path='/createUser' component={CreateUser} />
                                <Route path='/manageUser' component={ManageUser} />
                                <Route path='/punchcard/upload' component={Punchcard_upload} />
                                <Route path='/punchcard/manage' component={Punchcardmanage} />
                                <Route path='/punchCard/detail' component={PunchcardDetail} />

                                <Redirect to='/home' />
                            </Switch>
                        </Content>
                        {/* <Footer style={{ textAlign: 'center', color: '#ccc' }}>杨虎军制作</Footer> */}
                    </Layout>
                </Layout>
            </DocumentTitle>
        )
    }
}