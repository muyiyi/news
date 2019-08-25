/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-07-30 
 */

import React from 'react'
import './listmanage.less'



class ListManage extends React.Component {
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
    const lista = ['推荐', '热点', '社会', '娱乐', '科技', '汽车', '体育', '财经', '军事', '国际', '时尚', '游戏']
    let listalie = lista.map((item, index) => {
      if(index == 0) {
        return (
          <li className="first">推荐</li>
        )
      } else {
        return (
          <li key={ index }>
            { item }
          </li>
        )
      }
    })

    const listb = ['旅游', '历史', '探索', '美食', '育儿', '养生', '故事', '美文']
    let listblie = listb.map((item, index) => {
      return (
        <li key={ index }>
          { item }
        </li>
      )
    })


    return (
     <div className="channel-top">
        <div className="img-7"></div>
        <div className="toolbar">频道管理</div>    
        <div className="del-block">
            <span className="del-control">点击删除以下频道</span>
            <ul className="del-list">
              { listalie }
            </ul>
        </div>   
        <div className="add-block">
            <span className="add-control">点击添加以下频道</span>
            <ul className="add-list">
                { listblie }
            </ul>
        </div> 
     </div>
    )
  }
}

export default ListManage;