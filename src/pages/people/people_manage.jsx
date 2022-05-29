import React, { Component } from 'react'
import { Card, Table, Divider, Modal, message, Button, Select, Input } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import { PAGE_SIZE } from '../../utils/constants'
import { reqgetPeopleList, reqCheckedSearchPeople, reqDeletePeople, } from '../../api'
import LinkButton from '../../componets/link-buttom';
import memoryUtils from "../../utils/memoryUtils"


const { Column } = Table;
const Option = Select.Option




export default class PeopleManage extends Component {
    state = {
        total: 0, // 商品的总数量
        peoples: [], // 人员的数组
        loading: false,//是否正在加载中
        searchName: '', // 搜索的关键字
        searchType: 'peoplename', // 根据哪个字段搜索
    }


    // 获取人员列表
    getPeopleList = async (pageNum) => {
        const department = memoryUtils.user.username
        //发送请求之前，将loading效果设置为true
        this.setState({ loading: true })
        const { searchName, searchType } = this.state
        let result
        if (searchName) {
            result = await reqCheckedSearchPeople({ pageNum, pageSize: PAGE_SIZE, searchName, searchType })
            console.log(result)
        } else { // 一般分页请求
            result = await reqgetPeopleList(pageNum, PAGE_SIZE, department)
            console.log(result)
        }
        // const result = await reqCheckedArticles(pageNum, PAGE_SIZE,searchName,searchType)
        //请求结束之后将loading效果设置为false
        this.setState({ loading: false })
        if (result.status === 0) {
            const { total, list } = result.data
            // console.log(list)
            this.setState({
                total,
                peoples: list
            })
        }
    }

    /*
删除指定人员
*/
    deletePeople = (people) => {
        Modal.confirm({
            title: `确认删除****[${people.peoplename}]****吗?`,
            onOk: async () => {
                const result = await reqDeletePeople(people.idNumber)
                if (result.err === 0) {
                    message.success('删除人员成功!')
                    this.getPeopleList(1)
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
        this.getPeopleList(1)
    }

    render() {
        const { peoples, loading, total, searchName, searchType } = this.state
        const head = (
            <span>
                <Select
                    value={searchType}
                    style={{ width: 150 }}
                    onChange={value => this.setState({ searchType: value })}
                >
                    <Option value='peoplename'>按人名搜索</Option>
                    <Option value='department'>按人员单位搜索</Option>
                </Select>
                <Input
                    placeholder='关键字'
                    style={{ width: 150, margin: '0 15px' }}
                    value={searchName}
                    onChange={event => this.setState({ searchName: event.target.value })}
                />
                <Button type='primary' onClick={() => this.getPeopleList(1)}>搜索</Button>
            </span>
        )


        return (
            <div>
                <Card title={head} extra={<Button type='primary' onClick={() => this.props.history.push('/people/addone')}><PlusOutlined />添加</Button>} style={{ height: '600px' }}>
                    <Table
                        rowKey='_id'
                        className='table'
                        loading={loading}
                        //分页的配置对象
                        pagination={{
                            total,
                            defaultPageSize: PAGE_SIZE,
                            showQuickJumper: true,
                            onChange: this.getPeopleList,
                        }}
                        dataSource={peoples}
                    >
                        <Column title="姓名" dataIndex="peoplename" />
                        <Column title="部职别" dataIndex="department" />
                        <Column title="入伍时间" dataIndex='worktime' />
                        <Column title="性别" dataIndex="gender" />
                        <Column title="出生日期" dataIndex='birthday' />
                        <Column title="政治面貌" dataIndex='politicsstatus' />
                        <Column title="党团时间" dataIndex='partytime' />
                        <Column
                            title="处理"
                            key="action"
                            render={(people) => (
                                <span>
                                    <LinkButton onClick={() => this.props.history.push('/article/detail', { people })}>详情</LinkButton>
                                    <Divider type="vertical" />
                                    <LinkButton onClick={() => this.props.history.push('/people/updateone', people)}>修改</LinkButton>
                                    <Divider type='vertical' />
                                    <LinkButton onClick={() => this.deletePeople(people)}>删除</LinkButton>
                                </span>
                            )}
                        />
                    </Table>
                </Card>
            </div>
        )
    }
}
