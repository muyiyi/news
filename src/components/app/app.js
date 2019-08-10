/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-07-30 
 */

import React from 'react'
import './app.less'
import  NewsHeader from '../news-header/news-header'
import NewsNavigation from '../news-navigation/news-navigation';



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
    return (
      <div className="app">
        <NewsHeader></NewsHeader>
        <NewsNavigation></NewsNavigation>
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
