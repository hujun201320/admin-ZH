import React, { Component } from 'react'
import * as XLSX from 'xlsx';
import $ from 'jquery';
import { message } from 'antd'

// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'

import './index.css'
import { reqAddTableData } from '../../api/index'






export default class Punchcard_upload extends Component {

    state = {
        tableData: {},
        table: ''
    }



    handleFile = async (e) => {
        var files = e.target.files;
        var i, f;
        for (i = 0, f = files[i]; i !== files.length; ++i) {
            var reader = new FileReader();
            // var name = f.name;
            reader.onload = async (e) => {
                var data = e.target.result;

                var workbook = XLSX.read(data, { type: 'binary' });
                var sheet_name_list = workbook.SheetNames;
                // var result = [];
                var headItem = [];
                var dataItem = [];
                // var dataFormulae = [];
                var dataCsv = [];
                var headCode = [];
                var rowNum = 0;

                sheet_name_list.forEach(function (y) {
                    // var worksheet = workbook.Sheets[y];
                    var json = XLSX.utils.sheet_to_json(workbook.Sheets[y]);
                    // var formulae = XLSX.utils.sheet_to_formulae(workbook.Sheets[y]);
                    var csv = XLSX.utils.sheet_to_formulae(workbook.Sheets[y]);
                    if (json.length > 0) {
                        // result = json;
                        dataCsv = csv;

                    }

                });
                /*$.each(dataFormulae,function (j,head) {
                    var headlist=head.split("='")
                    if(/^[A-Z]1$/.test(headlist[0])){
                        headItem.push(headlist[1])
                    }
                })
                $.each(result,function (i,val) {
                    var data=[]
                    $.each(headItem,function (k,head) {
                        val[head]!=undefined?data.push(val[head]):data.push("")
                    })
                    dataItem.push(data)
                })*/
                $.each(dataCsv, function (j, head) {
                    var headlist = head.split("='")
                    rowNum = /^[A-Z]+(\d+)$/.exec(headlist[0])[1];
                    if (headCode.indexOf(/^([A-Z]+)\d+$/.exec(headlist[0])[1]) === -1) {
                        headCode.push(/^([A-Z]+)\d+$/.exec(headlist[0])[1])
                    } else {
                        return ''
                    }

                })
                headCode = headCode.sort();
                $.each(headCode, function (i, val) {
                    headItem[val] = '';
                })
                for (var i = 0; i < Number(rowNum) - 1; i++) {
                    var obj = {};
                    $.each(headCode, function (i, val) {
                        obj[val] = '';
                        // console.log(val)
                    })
                    dataItem[i] = obj;
                    // console.log(obj)

                }
                $.each(dataCsv, function (j, head) {
                    var headlist = head.split("='")
                    var code = /^([A-Z]+)\d+$/.exec(headlist[0])[1];
                    var row = /^[A-Z]+(\d+)$/.exec(headlist[0])[1];
                    if (row === 1) {
                        headItem[code] = headlist[1]
                    } else {
                        dataItem[row - 2][code] = headlist[1];
                    }

                })
                var headstr = '';
                var datastr = '';
                $.each(headItem, function (i, head) {
                    headstr = headstr + '<th style="border: 1px solid #cccccc">' + head + '</th>'
                })
                $.each(dataItem, function (i, data) {
                    datastr = datastr + '<tr >';
                    $.each(data, function (j, val) {
                        datastr = datastr + '<td style="border: 1px solid #cccccc">' + val + '</td>'
                    })
                    datastr = datastr + '</tr>';
                })
                var table = '<table style="border: 1px solid #cccccc;border-collapse: collapse;"><thead><tr style="font-weight: bold">' + headstr + '</tr></thead><tbody>' + datastr + '</tbody></table>'
                console.log(table)
                $('#content').html($('#content').html() + table);

                // 提交获取的标签数据到数据库
                if (table) {
                    const title = '打卡监控'
                    const content = { table, title }
                    const result = await reqAddTableData(content)
                    if (result.err === 0) {
                        message.success('上传成功了')
                    }
                }
            };
            reader.readAsBinaryString(f);
        }
        $('#upload_excel').val('')
    }






    render() {

        return (
            <div className='content_bg'>
                <input style={{ margin: '30px' }} type="file" accept=" application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" id="upload_excel" onChange={this.handleFile.bind(this)} />
                {/* <Button type="primary" onClick={this.postContent}>提交</Button> */}
                <div className='content_read'>内容预览:</div>
                <div id="content"></div>
            </div>
        )
    }
}
