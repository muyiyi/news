/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-07-30 
 */

import React from 'react'
import './news-header.less'


class NewsHeader extends React.Component {
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
      <div className="news-header">
        <span className="title"></span>
        <span className="icon-1"></span>
        <span className="icon-2"></span>
      </div>
    )
  }
}

export default NewsHeader;