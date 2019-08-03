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
      <div>
        <div>{ title }</div>
        <div onClick={(e) => {console.log(e)}}>First</div>
        <Demo></Demo>
      </div>
    )
  }
}


export default App;
