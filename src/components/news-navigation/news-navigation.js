/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-07-30 
 */

import React from 'react'
import './news-navigation.less'


class NewsNavigation extends React.Component {
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
        <ul className="news-navigation">
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
            <li id="sign">+</li>
        </ul>
    )
  }
}


export default NewsNavigation;
