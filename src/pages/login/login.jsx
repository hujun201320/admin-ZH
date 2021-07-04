import React, {Component} from 'react'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { 
    Form,
    Input, 
    Button
     } from 'antd';


import './login.less'
import logo from './images/logo.png'
/**
 登录的路由组件
 */




 

 export default class Login extends Component{
   

    
    render(){ 
        
            const onFinish = (values) => {
              console.log('Received values of form: ', values);
            };
            // const form = this.props.form
            // const {getFieldDRcorator} = form;


         return(
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
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: '请输入用户名!',
          },
        ]}
      >
         
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
       
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码!',
          },
        ]}
      >
           
                <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="密  码"
        />
          
       
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
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