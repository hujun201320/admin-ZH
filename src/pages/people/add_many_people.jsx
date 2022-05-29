import React, { Component } from 'react'
import { message, Button, } from 'antd'
import * as XLSX from 'xlsx';

import { reqAddmanyPeople } from '../../api'
import {BASE} from '../../utils/constants'
import excel from '../../assets/images/excel.jpeg'
import './index.css'

export default class AddManypeople extends Component {

    // 上传的回调函数
    HandleImportFile = async (e) => {
        let { files } = e.target
        // 获取文件名称
        let name = files[0].name
        // 获取文件后缀
        let suffix = name.substr(name.lastIndexOf("."));
        let reader = new FileReader();
        reader.onload = async (event) => {
            try {
                // 判断文件类型是否正确
                if (".xls" !== suffix && ".xlsx" !== suffix) {
                    message.error("选择Excel格式的文件导入！");
                    return false;
                }
                let { result } = event.target
                // 读取文件
                let workbook = XLSX.read(result, { type: 'binary' });
                // console.log(workbook)
                let data = []
                // 循环文件中的每个表
                for (let sheet in workbook.Sheets) {
                    if (workbook.Sheets.hasOwnProperty(sheet)) {
                        // 将获取到表中的数据转化为json格式
                        data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
                        // 以下是将表格表头汉字转英文的操作
                        let result = [];//结果保存
                        for (let i = 0; i < data.length; i++) {
                            let res = JSON.parse(JSON.stringify(data[i]).replace(/姓名/g, 'peoplename').replace(/身份证号码/g, "idNumber").replace(/接收单位/g, "department").replace(/出生年月日/g, "birthday").replace(/学历/g, "educationbackground").replace(/性别/g, "gender").replace(/籍贯/g, "houseaddress").replace(/民族/g, "national").replace(/部职别/g, "partyname").replace(/电话号码/g, "phone").replace(/政治面貌/g, "politicsstatus").replace(/接收时间/g, "partytime").replace(/入伍时间/g, "worktime"));
                            // console.log(res)
                            if (data[i].children) {
                                let childs = []//存孩子修改后的对象
                                //遍历children下对象数组
                                for (let j = 0; j < data[i].children.length; j++) {
                                    //获取到孩子的第j个对象，修改后返回一个新对象，不修改原对象
                                    let ch = JSON.parse(JSON.stringify(data[i].children[j]).replace(/姓名/g, 'peoplename').replace(/身份证号码/g, "idNumber").replace(/接收单位/g, "department").replace(/出生年月日/g, "birthday").replace(/学历/g, "educationbackground").replace(/性别/g, "gender").replace(/籍贯/g, "houseaddress").replace(/民族/g, "national").replace(/部职别/g, "partyname").replace(/电话号码/g, "phone").replace(/政治面貌/g, "politicsstatus").replace(/接收时间/g, "partytime").replace(/入伍时间/g, "worktime"));
                                    childs.push(ch);
                                }
                                //将孩子修改后的属性赋值给res
                                res.children = childs;
                            }
                            result.push(res)
                        }
                        const response = await reqAddmanyPeople(result)
                        console.log(response)
                        if (response.err === 0) {
                            message.success('批量添加成功')
                            this.props.history.push('/success')
                            break
                        } else if (response.err === -3) {
                            message.success(response.msg)
                            break
                        }
                    }
                }
            } catch (e) {
                message.error('文件类型不正确！');
            }
        }
        reader.readAsBinaryString(files[0]);
    }


    render() {
        return (
            <div>
                <div className="margin-right">
                    <img style={{width:'60px',height:'60px'}} src={excel} alt="1" />
                    支持文件类型：.xlsx, .xls<br />要求：严格按照模板花名册录入
                </div>
                <input style={{ marginLeft: '50px', marginTop: '50px' }} type='file' accept='.xlsx, .xls' onChange={this.HandleImportFile} />
                <Button onClick={()=>this.Download} style={{ marginLeft: '400px' }}><a href={BASE+'/public/excel/模板.xlsx'}>下载模板</a></Button>
            </div>
        )
    }
}
