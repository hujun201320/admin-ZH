import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Button } from 'antd'
// import {UserOutlined} from '@ant-design/icons'

/*
添加分类的form组件
 */

// 表单验证失败的回调
// const onFinishFailed = (error) => {
//   alert('Failed:', error);
// };

export default class AddForm extends Component {
refs='1111'
  static propTypes = {
    setForm: PropTypes.func.isRequired, // 用来传递form对象的函数
  }

  componentWillMount() {
    this.props.setForm(this.props.form)
  }
  onFinishFailed = (error) => {
    alert('Failed:', error);
  };



  // t提交表单时的回调
  onFinish = (value) => {
    //点击传值按钮时，执行这个方法
    console.log(value)

  }


  render() {

    // 指定Item布局的配置对象
    const formItemLayout = {
      labelCol: { span: 4 },  // 左侧label的宽度
      wrapperCol: { span: 15 }, // 右侧包裹的宽度
    }
    return (

      <Form
        name='roleName'
        layout={formItemLayout}
        // initialValues={{
        //   remember: false,
        // }}
        onFinish={this.onFinish}
      // onFinishFailed={this.onFinishFailed}
      >
        <Form.Item
          name="roleName"
          label='角色名称'
          rules={[
            { required: true, whitespace: true, message: '角色名必须输入' },
          ]}
        >
          <Input placeholder='请输入角色名称' />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button"  >
            登录
          </Button>

        </Form.Item>
      </Form>
    )
  }

}

