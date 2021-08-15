import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Button,
  message
} from 'antd';


import './login.less'
import logo from '../../assets/images/logo.png'
import { reqLogin } from '../../api'

import memoryUtils from "../../utils/memoryUtils"
import { saveUser } from '../../utils/storageUtils'


// const Item = Form.Item 
/**
 登录的路由组件
 */


const onFinishFailed = (error) => {
  alert('Failed:', error);
};

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {}
    
  }
  onFinish = async (values) => {
    //进行表单验证，打印语句模仿表单验证
    console.log('Received values of form: ', values);

    //提交请求之后需要调用的函数
    const { username, password } = values
    const result = await reqLogin(username, password) // {status: 0, data: user}  {status: 1, msg: 'xxx'}
    console.log('请求成功', result)

    if (result.status === 0) { // 登陆成功
      // 提示登陆成功
      message.success('登录成功')

      // 保存user
      const user = result.data
      memoryUtils.user = user // 保存在内存中
      saveUser(user) // 保存到local中

      // 跳转到管理界面 (不需要再回退回到登陆)
      // const history = createBrowserHistory();

      this.props.history.replace('/')

    } else { // 登陆失败
      // 提示错误信息
      message.error(result.message)
    }
  };




  validatePwd = (rule, value, callback) => {
    console.log('validatePwd()', rule, value)
    if (!value) {
      callback('密码必须输入')
    } else if (value.length < 4) {
      callback('密码长度不能小于4位')
    } else if (value.length > 12) {
      callback('密码长度不能大于12位')
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      callback('密码必须是英文、数字或下划线组成')
    } else {
      callback() // 验证通过
    }
    // callback('xxxx') // 验证失败, 并指定提示的文本
  }
  render() {
    const user = memoryUtils.user
    if (user || user._id) {
return <Redirect to='/' />
    }



    return (
      <div className="login">
        <header className="login-hearder">
          <img src={logo} alt="logo" />
          <h1>强军网后台管理系统</h1>
        </header>
        <section className="login-content">
          <h2>用户登录</h2>

          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, whitespace: true, message: '用户名必须输入' },
                { min: 4, message: '用户名至少4位' },
                { max: 12, message: '用户名最多12位' },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />

            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  validator: this.validatePwd
                },
              ]}
            >

              <Input
                prefix={<LockOutlined className="site-form-item-icon" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="密  码"
              />


            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button"  >
                登录
              </Button>

            </Form.Item>
          </Form>
        </section>
      </div>
    )

  }

}


/*
1、前台表单验证
①收集表单输入数据
a、输入

2、后台表单验证
*/