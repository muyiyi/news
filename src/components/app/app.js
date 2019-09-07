/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-07-30 
 */

import React from 'react'
import './app.less'
import  NewsHeader from '../news-header/news-header'
import NewsNavigation from '../news-navigation/news-navigation';
import NewsList from '../news-list/news-list';
import classnames from 'classnames';


class App extends React.Component {
  /**
   * @desc 不用解释了吧，这是组件的构造函数
   * @param {*} props 
   */
  constructor(props) {
    super(props)

    this.state = {
      dialogstate: false
    }
  }


  dialogshow = () => {
    this.setState({
      dialogstate: !this.state.dialogstate
    })
  }
  
  

  /**
   * @desc 不用解释了吧，render函数
   */
  render() {
    return (
      <div className="app">
        <div className={ classnames('open', {'show': this.state.dialogstate}) }>
          <div className="page">
            <div className="banner"></div>
            <div className="text">已加载好您感兴趣的头条</div>
            <div className="btn">立即打开</div>
            <div className="close" onClick={ this.dialogshow }></div>
          </div>
        </div>
        <NewsHeader click={ this.dialogshow }></NewsHeader>
        <NewsNavigation></NewsNavigation>
        <NewsList></NewsList>
      </div>
    )
  }
}


export default App;
