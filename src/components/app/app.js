/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-07-30 
 */

import React from 'react'
import './app.less'
import Demo from '../demo/demo'


class App extends React.Component {
  /**
   * @desc 不用解释了吧，这是组件的构造函数
   * @param {*} props 
   */
  constructor(props) {
    super(props)

    this.state = {}
  }

  /**
   * @desc 不用解释了吧，render函数
   */
  render() {
    const title = '学习'
    return (
      <div className="app">
        <div className="page-header">
          <span className="title"></span>
          <span className="icon-1"></span>
          <span className="icon-2"></span>
        </div>
        <ul className="list-top">
          <li id="li-1">推荐</li>
          <li>视频</li>
          <li>热点</li>
          <li>社会</li>
          <li>娱乐</li>
          <li>军事</li>
          <li>科技</li>
          <li>汽车</li>
          <li>房产</li>
          <li>家居</li>
          <li>体育</li>
          <li>财经</li>
        </ul>
        <div className="list-mid">
          <div>
            <div className="content">
              <span>第11次，全民燃烧卡路里</span>
              <h4>置顶</h4>
              <div className="line-bt">
                <h5>新华社</h5>
                <h5>评论 508</h5>
                <h5>34分钟前</h5>
              </div>
            </div>
          </div>
          <div>
            <div className="content">
              <span>爱国奉献，习近平为新时代奋斗者点赞</span>
              <h4>置顶</h4>
              <div className="line-bt">
                <h5>央视新闻</h5>
                <h5>评论 112</h5>
                <h5>1小时前</h5>
              </div>
            </div>
          </div>
          <div>
            <div className="content">
              <span>金马奖大陆不玩了，请民进党当局尽情自嗨</span>
              <div className="line-bt">
                <h5>中国台湾网</h5>
                <h5>评论 0</h5>
                <h5>1小时前</h5>
              </div>
            </div>
          </div>
          <div>
            <div className="content">
              <div className="line-left">
                <span>发生了什么？特朗普突然说“我们的问题不在中国”</span>
                <div className="line-bt">
                  <h5>中国社会科学网</h5>
                  <h5>评论 2</h5>
                </div>
              </div>
              <div className="img-1"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
