import React, { Component } from 'react'
import { Button, Form, Input, Select, DatePicker, message } from 'antd'
import locale from 'antd/lib/date-picker/locale/zh_CN'
import moment from 'moment'
import Redirect from 'react-dom'

import { nationals, branch } from '../../utils/constants'
import { reqUpdatepeople } from '../../api'

const { Option } = Select;

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
};


export default class UpdateOnePeople extends Component {
    constructor(props) {
        super(props)
        // 创建用来保存ref标识的标签对象的容器
        this.pw = React.createRef() //创建保存缩略图的容器
        this.editor = React.createRef() //创建保存编辑器的容器
        this.fw = React.createRef() //创建用来保存文件地址的容器
    }



    onFinish = async (values) => {
        // console.log(values)
        // const {partyname, idNumber, politicsstatus, houseadress, peoplename, gender, national,department, phone, educationbackground} =values

        // 这里专门做了以下将
        const partytime = moment(values.partytime).format('YYYY-MM-DD')
        const worktime = moment(values.worktime).format('YYYY-MM-DD')
        const users = values.user
        // 通过身份证号码拼接出身年月
        const birthday = users.idNumber.slice(6, 10) + '-' + users.idNumber.slice(10, 12) + '-' + users.idNumber.slice(12, 14)
        users['partytime'] = partytime  //将datepicker获取到的时间2022-03-12添加到对象里
        users['worktime'] = worktime
        users['birthday'] = birthday
        // 如果是更新, 需要添加_id
        if (this.isUpdate) {
            users._id = this.people._id
        }

        if (users) {
            // const { user, phone, receipttime } = values
            const result = await reqUpdatepeople(users)
            console.log(result)
            if (result.err === 0) {
                message.success('修改信息成功')
                return <Redirect to='/navnews' />
            }else if(result.err===-888){
                message.warning('登录过期')
            }
        }

    };

    componentWillMount() {
        // 取出携带的state
        const people = this.props.location.state  // 如果是添加没值, 否则有值
        // 保存是否是更新的标识
        this.isUpdate = !!people
        // 保存商品(如果没有, 保存是{})
        this.people = people || {}
    }




    render() {

        const { partyname, idNumber, partytime, politicsstatus, houseaddress, peoplename, gender, national, worktime, department, phone, educationbackground } = this.props.location.state
        return (
            <div>
                <Form
                    {...layout}
                    style={{ padding: '20px' }}
                    name="nest-messages"
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        name={['user', 'partyname']}
                        label="接收党支部"
                        initialValue={partyname}
                        rules={[
                            {
                                required: true, message: '请选择党支部'
                            },
                        ]}
                    >
                        <Select style={{ width: '100%' }}>
                            {branch.map((item) => (
                                <Option key={item.id} value={item.Cname}>{item.Cname}</Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item initialValue={partytime} name='partytime' label="接收时间">
                        {partytime ? <Input defaultValue={partyname} /> : <DatePicker locale={locale} />}
                    </Form.Item>

                    <Form.Item
                        name={['user', 'politicsstatus']}
                        label="政治面貌"
                        initialValue={politicsstatus}
                        rules={[
                            {
                                required: true, message: '请选择人员政治面貌'
                            },
                        ]}
                    >
                        <Select style={{ width: '100%' }}>
                            <Option key='1' value="正式党员">正式党员</Option>
                            <Option key='2' value="预备党员">预备党员</Option>
                            <Option key='3' value="团员（入党积极分子）">团员（入党积极分子）</Option>
                            <Option key='4' value="团员">团员</Option>
                            <Option key='5' value="群众">群众</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name={['user', 'peoplename']}
                        label="姓名"
                        initialValue={peoplename}
                        rules={[
                            {
                                required: true, message: '请输入人员姓名'
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'gender']}
                        label="性别"
                        initialValue={gender}
                        rules={[{ required: true, message: '请选择人员性别' }]}>
                        <Select style={{ width: '100%' }}>
                            <Option key='1' value="男">男</Option>
                            <Option key='2' value="女">女</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name={['user', 'idNumber']}
                        label="身份证号码"
                        initialValue={idNumber}
                        rules={[
                            { required: true, message: '请输入身份证号码' },
                            { max: 18, message: '身份证号码过长' },//设置标题名过长错误提示的规则
                            { min: 18, message: '身份证号码位数不够' },
                        ]}
                    >
                        <Input style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item initialValue={national} name={['user', 'national']} label="民族">
                        <Select style={{ width: '100%' }}>
                            {nationals.map((item) => (
                                <Option key={item.id} value={item.Cname}>{item.Cname}</Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item initialValue={worktime} name='worktime' label="入伍时间">
                        {worktime ? <Input defaultValue={worktime} /> : <DatePicker
                            locale={locale} />}
                    </Form.Item>
                    <Form.Item
                        initialValue={department}
                        name={['user', 'department']}
                        label="部职别"
                        rules={[
                            { required: true, message: '请输入正确的部职别' }
                        ]}
                    >
                        <Input style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item
                        initialValue={phone}
                        name={['user', "phone"]}
                        label="电话号码"
                        rules={[{ required: true, message: '请输入电话号码' }]}
                    >
                        <Input style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item initialValue={educationbackground} name={['user', 'educationbackground']} label="学历">
                        <Select style={{ width: '100%' }}>
                            <Option key='1' value="博士">博士</Option>
                            <Option key='2' value="硕士研究生">硕士研究生</Option>
                            <Option key='3' value="大学本科">大学本科</Option>
                            <Option key='4' value="大学专科">大学专科</Option>
                            <Option key='5' value="高中">高中</Option>
                            <Option key='6' value="中专">中专</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item initialValue={houseaddress} name={['user', 'houseaddress']} label="家庭地址">
                        <Input style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 3 }}>
                        <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                            提交
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
