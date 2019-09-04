/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-07-30 
 */

import React from 'react'
import './news-header.less'
import { Link } from 'react-router-dom/cjs/react-router-dom';


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
        <div className="icon-0"></div>
        <span className="title"></span>
        <span className="icon-1"></span>
        <Link to={ {pathname: "/search/"} }>
          <span className="icon-2"></span>
        </Link>
      </div>
      
    )
  }
}

export default NewsHeader;