import React, { Component } from 'react'
import { Card, Form, Select, Input, Button, message } from 'antd'


import EditorDemo from '../news/RichText'
import FileWall from './FileWall'
import { reqUpdateNotice } from '../../api/index'
import PictureWall from './pictures-wall'

const { Item } = Form
const { Option } = Select

export default class Writearticle extends Component {
    constructor(props) {
        super(props)
        // 创建用来保存ref标识的标签对象的容器
        this.pw = React.createRef() //创建保存缩略图的容器
        this.editor = React.createRef() //创建保存编辑器的容器
        this.fw = React.createRef() //创建用来保存文件地址的容器
    }



    submit = () => {
        this.props.form.validateFields(async (error, values) => {
            if (!error) {
                const { title, author, department, category } = values
                console.log(values)
                const content = this.editor.current.getDetail()
                const download_url = this.fw.current.getUrls()
                const thumbnail = this.pw.current.getImgs()  //获取缩略图
                const article = { title, author, department, thumbnail, category, content, download_url }
                console.log(article)
                if (this.isUpdate) { article._id = this.notice._id }
                const result = await reqUpdateNotice(article)
                if (result.error === 0) {
                    message.success(`${this.isUpdate ? '更新' : '添加'}文章成功!`)
                    this.props.history.goBack()
                } else if (result.err === -999) {
                    message.error('没有该权限，不要调皮')
                } else if (result.err === -888) {
                    message.error('登陆过期,请重新登陆')
                }
                else {
                    message.error(`${this.isUpdate ? '更新' : '添加'}文章失败!`)
                }
            }
        })
    }


    componentWillMount() {
        // 取出携带的state
        const article = this.props.location.state  // 如果是添加没值, 否则有值
        // 保存是否是更新的标识
        this.isUpdate = !!article
        // 保存商品(如果没有, 保存是{})
        this.article = article || {}
    }



    render() {

        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };

        
        return (
            <Card>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.submit}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item label='分类'
                        name='category'
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Select
                            placeholder="请选择分类"
                            onChange={this.handleSelectChange}
                        >
                            <Option value="党建要闻">党建要闻</Option>
                            <Option value="领导讲话">领导讲话</Option>
                            <Option value="党风廉政">党风廉政</Option>

                        </Select>
                    </Form.Item>
                    <Form.Item label='题目'
                        name='title'
                        rules={[{ required: true, message: '必须输入题目!' }]}
                    >
                        <Input placeholder='请输入题目'></Input>
                    </Form.Item>
                    <Form.Item label='作者'
                        name='author'
                        rules={[{ required: true, message: '必须输入作者!' }]}
                    >
                        <Input placeholder='请输作者'></Input>
                    </Form.Item>
                    <Form.Item label='单位'
                        name='department'
                        rules={[{ required: true, message: '必须输入单位!' }]}
                    >
                        <Input placeholder='请输入单位'></Input>
                    </Form.Item>
                    <Form.Item lable='文章封面'>
                        <PictureWall ref={this.pw} imgs={this.article.thumbnail} date_time={this.article.date_time} />
                    </Form.Item>
                    <Form.Item label='内容'
                    >
                         <EditorDemo ref={this.editor} detail={this.article.content} />
                    </Form.Item>
                    <Form.Item label='文件上传'>
                        <FileWall></FileWall>
                    </Form.Item>
                    <Item >
                        <Button type="primary" htmlType="submit">提交</Button>
                    </Item>

                </Form>
            </Card>
        )
    }
}