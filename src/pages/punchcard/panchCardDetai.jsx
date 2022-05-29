import React, { Component } from 'react'
import { reqgetPuncgCardDetail } from '../../api'

export default class PanchCardDetai extends Component {
    state = {
        content: [], // 打卡监控表格数据
    }

    getpunchDetail = async () => {
        // 获取详情请求
        const result = await reqgetPuncgCardDetail()
        console.log(result)
        if (result.err === 0) {
            const list = result.list
            console.log(list)
            this.setState({
                content: list
            })
        }
    }

    componentDidMount() {
        this.getpunchDetail(1)
    }


    render() {
        const { content } = this.state
        return (
            <div id='content'>
                {content.map((item) => {
                    return <div key={item} dangerouslySetInnerHTML={{ __html: item.table }}></div>
                })}
            </div>
        )
    }
}
