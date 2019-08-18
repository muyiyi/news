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
        <NewsList></NewsList>
      </div>
    )
  }
}


export default App;
