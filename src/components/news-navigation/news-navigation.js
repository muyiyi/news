/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-07-30 
 */

import React from 'react'
import './news-navigation.less'
import classnames from 'classnames'


class NewsNavigation extends React.Component {
  /**
   * @desc 不用解释了吧，这是组件的构造函数
   * @param {*} props 
   */
  constructor(props) {
    super(props)

    this.state = {
      chooseindex: []
    }
  }

  Tabchange = (index) => {
    this.setState({
      chooseindex: [index]
    })
  }

 



  /**
   * @desc 不用解释了吧，render函数
   */
  render() {
    const menu = ['推荐', '视频', '热点', '社会', '娱乐', '军事', '科技', '汽车', '房产', '家居', '体育', '财经']
    let menuLie = menu.map(function(item, index) {
      return (
        <li key={ index }>
        onClcik={ this.Tabchange.bind(this, index) }
        className={ classnames({'select': this.state.chooseindex.indexof(index) !== -1})}
        { item }
        </li>
      )
    })

    return (
        <ul className="news-navigation">
          { menuLie }
          <li id="sign">+</li>
        </ul>
    )
  }
}


export default NewsNavigation;
