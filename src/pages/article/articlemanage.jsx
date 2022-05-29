import React, { Component } from 'react'
import {
    Card,
    Table,
    Button,
    message,
    Divider,
    Modal

} from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import { reqNotices,reqDeleteNotice} from '../../api'
import LinkButton from '../../componets/link-buttom'


const { Column } = Table;
// const { confirm } = Modal

/*
通知分类路由
*/
export default class ArticleManage extends Component {
    state = {
        total: 0,
        notices: [],//通知的数组
    }


    //异步获取notices
    getNotices = async (pageNum) => {
        //发异步ajax请求，获取数据
        let result

        if (pageNum) {
            result = await reqNotices(pageNum, 10)
        } else {
            message.error('请求失败')
        }
        if (result.status === 0) {
            const { total, list } = result.data
            //更新状态
            console.log(list)
            this.setState({
                total,
                notices: list
            })
        }
    }

    // 删除通知的请求函数
    deleteArticle = (notice) => {
        Modal.confirm({
            title: `确认删除****[${notice.title}]****吗?`,
            onOk: async () => {
                const result = await reqDeleteNotice(notice.title)
                if (result.err === 0) {
                    message.success('删除通知成功!')
                    this.getNotices(1)
                } else if (result.err === -999) {
                    message.error('不要调皮，你没有该权限')
                } else if (result.err === -888) {
                    message.error('登陆过期,请重新登陆')
                } else {
                    message.error('出现其他错误')
                }
            }
        })
    }



    //为第一次render准备数据
    // componentWillMount() {
    //     this.initColumns()
    // }

    //执行异步任务：发异步ajax请求
    componentDidMount() {
        this.getNotices(1)
    }


    render() {
        //读取状态数据
        const { notices, total } = this.state

        //定义card的右侧标题
        // const title = '通知管理'
        //card的右侧
        const extra = (
            <Button type='primary' onClick={() => this.props.history.push('/articleManage/add','')}><PlusOutlined />添加</Button>
        )






        return (
            <Card  extra={extra} >
                <Table
                    rowKey='_id'
                    pagination={{
                        total,
                        defaultPageSize: 1,
                        showQuickJumper: true,
                        onChange: this.getNotices,

                    }}
                    dataSource={notices}
                // columns={this.columns}
                >
                    <Column title="文章题目" dataIndex="title" />
                    <Column title="作者" dataIndex="author" />
                    <Column title="单位" dataIndex="department" />
                    <Column title="发表时间" dataIndex='time' />
                    <Column
                        title="处理"
                        key="action"
                        render={(notice) => (
                            <span>
                                <LinkButton onClick={() => this.props.history.push('/notice/detail', { notice })}>详情</LinkButton>
                                <Divider type="vertical" />
                                <LinkButton onClick={() => this.props.history.push('/noticesManage/add', notice)}>修改</LinkButton>
                                <Divider type='vertical' />
                                <LinkButton onClick={() => this.deleteArticle(notice)}>删除</LinkButton>
                            </span>
                        )}
                    />
                </Table>
            </Card>
        )
    }
}