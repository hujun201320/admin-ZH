import React, { Component } from 'react'
import { Table, Button, Divider,Modal,message } from 'antd'



import { PAGE_SIZE } from '../../utils/constants'
import { reqgetPuncgCardList ,reqDeletePunchCard} from '../../api/index'


const { Column } = Table;

export default class Punchcardmanage extends Component {
    state = {
        total: 0, // 商品的总数量
        content: [], // 文章的数组
        loading: false,//是否正在加载中

    }


    getpunchList = async (pageNum) => {
        //发送请求之前，将loading效果设置为true
        this.setState({ loading: true })
        // const { searchName, searchType } = this.state
        let result
        // 一般分页请求
        result = await reqgetPuncgCardList(pageNum, PAGE_SIZE)
        console.log(result)
        // const result = await reqCheckedArticles(pageNum, PAGE_SIZE,searchName,searchType)
        //请求结束之后将loading效果设置为false
        // this.setState({ loading: false })
        if (result.err === 0) {
            const list = result.list
            console.log(list)
            this.setState({
                content: list
            })
        }
    }
    //删除打卡监控表
    deletePunchCard=(content)=>{

            Modal.confirm({
                title: `确认删除****[${content.title}]****吗?`,
                onOk: async () => {
                    const result = await reqDeletePunchCard(content.title)
                    if (result.err === 0) {
                        message.success('删除文章成功!')
                        this.getpunchList(1)
                    } else if (result.err === -999) {
                        message.error('对不起，你没有该权限')
                    } else if (result.err === -888) {
                        message.error('登陆过期,请重新登陆')
                    } else {
                        message.error('other error')
                    }
                }
            })
        
    }


    componentDidMount() {
        this.getpunchList(1)
    }


    render() {
        const { content } = this.state





        return (
            <div>
                <Table
                    rowKey='_id'
                    // loading={loading}
                    //分页的配置对象
                    pagination={{
                        // total,
                        defaultPageSize: PAGE_SIZE,
                        showQuickJumper: true,
                        onChange: this.getpunchList,

                    }}
                    dataSource={content}>
                    <Column title="题目" dataIndex="title" />
                    {/* <Column title="作者" dataIndex="author" />
                    <Column title="单位" dataIndex="department" /> */}
                    <Column title="上传时间" dataIndex='time' />
                    <Column
                        title="处理"
                        key="action"
                        render={(content) => (
                            <span>
                                <Button onClick={() => this.props.history.push('/punchCard/detail', { content })}>详情</Button>
                                <Divider type="vertical" />
                                {/* <Button onClick={() => this.props.history.push('/writenews', content)}>修改</Button> */}
                                <Divider type='vertical' />
                                <Button onClick={() => this.deletePunchCard(content)}>删除</Button>
                            </span>
                        )}
                    />
                </Table>
            </div>
        )
    }
}
