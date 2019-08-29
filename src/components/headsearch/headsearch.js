/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-07-30 
 */

import React from 'react'
import './headsearch.less'



class HeadSearch extends React.Component {
  /**
   * @desc 不用解释了吧，这是组件的构造函数
   * @param {*} props 
   */
  constructor(props) {
    super(props)

    this.state = {}
  }

  write=() =>{
    
  }

  /**
   * @desc 不用解释了吧，render函数
   */
  render() {
    return (
      <div className="page-1">
          <div className="page-head">
              <div className="head-top"></div>
              <div className="img-5"></div>
              <div className="head-btn">
                <div className="btn-box">
                    <input className="search-1" type="text" value=" 搜你想看" onChange={ this.write } />
                    <div className="img-6">
                      <img alt="" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24'%3E%3Cdefs%3E%3Cpath id='a' d='M0 0h24v24H0z'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cmask id='b' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cg stroke='%23333' stroke-linecap='round' stroke-width='1.5' mask='url(%23b)'%3E%3Cpath d='M18.385 17.178l3.535 3.535'/%3E%3C/g%3E%3Ccircle cx='12' cy='11.5' r='8.5' stroke='%23333' stroke-width='1.5' mask='url(%23b)'/%3E%3C/g%3E%3C/svg%3E" />
                    </div>
                </div>
              </div>
          </div>
          <div className="page-btn">
          </div>
      </div>
    )
  }
}

export default HeadSearch;