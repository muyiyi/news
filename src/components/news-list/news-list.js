/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-07-30 
 */

import React from 'react'
import './news-list.less'



class NewsList extends React.Component {
  /**
   * @desc 不用解释了吧，这是组件的构造函数
   * @param {*} props 
   */
  constructor(props) {
    super(props)

    this.state = {}
  }

  clicklist() {
    console.log('欢迎收看')
  }

  /**
   * @desc 不用解释了吧，render函数
   */
  render() {
    const listmenu = [
      {
        title: '第11次，全民燃烧卡路里',
        status: '置顶',
        scrsite: '新华社',
        comment: '评论 508',
        timelength: '34分钟前',
        type: 1
      },
      {
        title: '爱国奉献，习近平为新时代奋斗者点赞',
        status: '置顶',
        scrsite: '央视新闻',
        comment: '评论 112',
        timelength: '1小时前',
        type: 2
      }, 
      {
        title: '金马奖大陆不玩了，请民进党当局尽情自嗨',
        scrsite: '中国台湾网',
        comment: '评论 0',
        timelength: '1小时前',
        type: 3
      },
      {
        title: '发生了什么？特朗普突然说“我们的问题不在中国',
        scrsite: '中国社会科学网',
        comment: '评论 2',
        imgsrc: 'https://p3.pstatp.com/list/dfic-imagehandler/044ed730-402a-4d94-8e9d-6777a1273e07',
        type: 4,
      },
      {
        title: '浙江各地武警官兵闻灾而动 不舍昼夜奋力抢通生命通道',
        imgsrc: ['https://p3.pstatp.com/list/pgc-image/RYjp86AEkRZ3lp','https://p3.pstatp.com/list/pgc-image/RYjp86Y2Oi66t2','https://p3.pstatp.com/list/pgc-image/RYjp86m7IxFNNX'],
        status: '置顶',
        scrsite: '中国新闻网',
        comment: '评论 5',
        timelength: '1小时前',
        type: 5
      },
      {
        title: '第11次，全民燃烧卡路里',
        status: '置顶',
        scrsite: '新华社',
        comment: '评论 508',
        timelength: '34分钟前',
        type: 1
      },
      {
        title: '爱国奉献，习近平为新时代奋斗者点赞',
        status: '置顶',
        scrsite: '央视新闻',
        comment: '评论 112',
        timelength: '1小时前',
        type: 2
      }, 
      {
        title: '金马奖大陆不玩了，请民进党当局尽情自嗨',
        scrsite: '中国台湾网',
        comment: '评论 0',
        timelength: '1小时前',
        type: 3
      },
      {
        title: '发生了什么？特朗普突然说“我们的问题不在中国',
        scrsite: '中国社会科学网',
        comment: '评论 2',
        imgsrc: 'https://p3.pstatp.com/list/dfic-imagehandler/044ed730-402a-4d94-8e9d-6777a1273e07.jpg',
        type: 4,
      },
      {
        title: '浙江各地武警官兵闻灾而动 不舍昼夜奋力抢通生命通道',
        imgsrc: ['https://p3.pstatp.com/list/pgc-image/RYjp86AEkRZ3lp','https://p3.pstatp.com/list/pgc-image/RYjp86Y2Oi66t2','https://p3.pstatp.com/list/pgc-image/RYjp86m7IxFNNX'],
        status: '置顶',
        scrsite: '中国新闻网',
        comment: '评论 5',
        timelength: '1小时前',
        type: 5
      }
    ];
    let listlie = listmenu.map(function(item, index) {
      if (item.type == 5) {
        return (
          <div className="content">
            <div className="title-1">{ item.title }</div>
            <div className="imgcontain">
                <img className="img-2" src={ item.imgsrc[0] }/>
                <img className="img-3" src={ item.imgsrc[1] }/>
                <img className="img-4" src={ item.imgsrc[2] }/>
            </div>
            <div className="status-1">{ item.status }</div>
            <div className="line-bt">
                <span>{ item.scrsite }</span><span>{ item.comment }</span><span>{ item.timelength }</span>
            </div>
        </div>
        )
      } else if (item.type == 4) {
        return (
          <div className="content">           
            <div className="line-left">
              <div className="title-2">{ item.title }</div>
              <div className="line-bt">
                <span>{ item.scrsite }</span><span>{ item.comment }</span><span>{ item.timelength }</span>
              </div>
            </div>
            <img className="img-1" src={ item.imgsrc }/>
        </div>
        )
      } else if (item.type == 3) {
        return (
          <div className="content">
          <div className="title-1">{ item.title }</div>
          <div className="line-bt">
            <span>{ item.scrsite }</span><span>{ item.comment }</span><span>{ item.timelength }</span>
          </div>
        </div>
        )
      } else {
        return (
          <div className="content">
              <div className="title-1">{ item.title }</div>
              <div className="status-1">{ item.status }</div>
              <div className="line-bt">
                <span>{ item.scrsite }</span><span>{ item.comment }</span><span>{ item.timelength }</span>
              </div>
          </div>
        )
      }     
    })


    return (
      <div className="news-list" onClick={this.clicklist}>
        <div>
          { listlie }
        </div>
      </div>
    )
  }
}


export default NewsList;
