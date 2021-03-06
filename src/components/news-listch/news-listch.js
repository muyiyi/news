/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-07-30 
 */

import React from 'react'
import './news-listch.less'

class NewsListch extends React.Component {
    /**
   * @desc 不用解释了吧，这是组件的构造函数
   * @param {*} props 
   */
  constructor(props) {
    super(props)

    this.state = {}
  }


    render() {
        let item = this.props.data;
        if (item.type === 7) {
            return (
            <div className="list-box">
                <img className="img-17" alt="" src={ item.imgsrc }/>
                <div className="list-right ">
                    <div className="right-title">{ item.title }</div>
                    <div className="list-info">
                        <span className="app">{ item.status }</span><span>{ item.scrsite }</span><span>{ item.comment }</span>
                    </div>
                </div>
            </div>
            )
        } else if (item.type === 6) {
            return (
            <div className="list-box">
                <div className="list-title ">{ item.title }</div>
                <div className="img-box ">
                    <img className="img-14" alt="" src={ item.imgsrc[0] }/>
                    <img className="img-15" alt="" src={ item.imgsrc[1] }/>
                    <img className="img-16" alt="" src={ item.imgsrc[2] }/>
                </div>
                <div className="list-info">
                    <span className="app">{ item.status }</span><span>{ item.scrsite }</span><span>{ item.comment }</span>
                </div>
            </div>
            )
        } else if (item.type === 5) {
            return (
            <div className="content">
                <div className="title-1">{ item.title }</div>
                <div className="imgcontain">
                    <img className="img-2" alt="" src={ item.imgsrc[0] }/>
                    <img className="img-3" alt="" src={ item.imgsrc[1] }/>
                    <img className="img-4" alt="" src={ item.imgsrc[2] }/>
                </div>
                <div className="status-1">{ item.status }</div>
                <div className="line-bt">
                    <span>{ item.scrsite }</span><span>{ item.comment }</span><span>{ item.timelength }</span>
                </div>
            </div>
            )
        } else if (item.type === 4) {
            return (
            <div className="content">           
                <div className="line-left">
                    <div className="box">
                        <div className="title-2">{ item.title }</div>
                        <div className="line-bt1">
                            <span>{ item.scrsite }</span><span>{ item.comment }</span><span>{ item.timelength }</span>
                        </div>
                    </div>
                    <img className="img-1" alt="" src={ item.imgsrc }/>
                </div>
            </div>
            )
        } else if (item.type === 3) {
            return (
            <div className="content">
            <div className="title-1">{ item.title }</div>
            <div className="line-bt">
                <span>{ item.scrsite }</span><span>{ item.comment }</span><span>{ item.timelength }</span>
            </div>
            </div>
            )
        } else {
            return (
                <div className="content">
                <div className="title-1">{ item.title }</div>
                <div className="status-1">{ item.status }</div>
                <div className="line-bt">
                    <span>{ item.scrsite }</span><span>{ item.comment }</span><span>{ item.timelength }</span>
                </div>
                </div>
            )
        }           
    }
}

export default NewsListch