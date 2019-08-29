/**
 * @desc 默认路由试图对应的组件 '/'
 * @author 
 * @created 2019-07-30 
 */

import React from 'react'
import './newsdetail.less'



class NewsDetail extends React.Component {
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
        <div className="newsdetail">
            <div className="detail-top">
                <div className="top-title">
                    <div className="img-9"></div>
                    <span>今日头条</span>
                    <div className="open">打开</div>
                </div>
                <div className="article-box">
                   <div className="top-article">
                        <h1 className="article-title">庆祝中华人民共和国成立70周年 首都北京将举行隆重热烈的庆祝活动</h1>
                    </div>
                    <div className="article-author">
                        <div className="img-10"></div>
                        <span className="author-name">新华社</span>
                        <div className="img-11"></div>
                        <div className="time-box">
                            <span className="article-time">3小时前</span>
                            <span className="dot"></span>
                            <span className="article-time">5075评论</span>
                        </div>    
                    </div> 
                    <div className="article-detail">
                        <div>新华社北京8月29日电（记者罗沙、白阳）今年是中华人民共和国成立70周年，首都北京将举行隆重热烈的庆祝活动。29日，中宣部常务副部长王晓晖在国务院新闻办公室举行的新闻发布会上向记者介绍了庆祝活动安排情况。国家发展改革委、文化和旅游部、北京市、阅兵领导小组办公室负责同志共同出席新闻发布会并回答记者提问。</div>
                        <div>王晓晖介绍，庆祝中华人民共和国成立70周年活动，将充分展示中华人民共和国成立70年来的光辉历程、伟大成就和宝贵经验，突出展示党的十八大以来，以习近平同志为核心的党中央团结带领全党全军全国各族人民进行伟大斗争、建设伟大工程、推进伟大事业、实现伟大梦想，推动党和国家事业取得的历史性成就，发生的历史性变革，激励和动员全党全军全国各族人民更加紧密团结在以习近平同志为核心的党中央周围，不忘初心、牢记使命，为决胜全面建成小康社会、夺取新时代中国特色社会主义伟大胜利、实现中华民族伟大复兴的中国梦不懈奋斗。</div>
                        <div>据介绍，庆祝活动主要包括以下安排：10月1日，在天安门广场隆重举行庆祝中华人民共和国成立70周年大会，中共中央总书记、国家主席、中央军委主席习近平发表重要讲话，庆祝大会后将举行盛大的阅兵式和群众游行。10月1日晚，在天安门广场举办首都国庆联欢活动，党和国家领导人同首都各界代表一起联欢并观看文艺演出和焰火表演。在人民大会堂举行隆重颁授仪式，对在中国特色社会主义建设和保卫国家中作出重大贡献、建立卓越功勋、道德品质高尚、群众公认的杰出人士，在中国社会主义现代化建设和促进中外交流合作、维护世界和平中作出杰出贡献的外国人，在各领域各行业作出重大贡献、享有崇高声誉、道德品质高尚、群众公认的杰出人士，分别授予“共和国勋章”“友谊勋章”和国家荣誉称号，中华人民共和国主席习近平将亲自颁授勋章、奖章，签发证书。9月30日烈士纪念日，在天安门广场人民英雄纪念碑前举行向人民英雄敬献花篮仪式，党和国家领导人和首都各界群众代表参加。以中华人民共和国主席习近平名义，在人民大会堂举办盛大国庆招待会，中共中央总书记、国家主席、中央军委主席习近平发表重要讲话。在人民大会堂举办以大型音乐舞蹈史诗形式呈现的庆祝中华人民共和国成立70周年文艺晚会《奋斗吧　中华儿女》。9月起，在北京展览馆举办庆祝中华人民共和国成立70周年大型成就展。以中共中央、国务院、中央军委名义，颁发“庆祝中华人民共和国成立70周年”纪念章。以中华人民共和国成立70年来取得的辉煌成就为主要内容，制作播出大型文献专题片。以庆祝中华人民共和国成立70周年为题材，发行一套纪念币和一套纪念邮票。</div>
                        <div>据介绍，庆祝活动既要隆重热烈又要务实节俭，严格执行中央八项规定精神，防止形式主义，不搞铺张浪费。各地区各部门还将根据党中央统一部署，组织开展形式多样的庆祝活动。中宣部正在精心组织开展“壮丽70年·奋斗新时代”大型主题采访活动，“我和我的祖国”群众性主题宣传教育活动、“最美奋斗者”学习宣传活动等，大力唱响礼赞新中国、奋斗新时代的昂扬旋律。</div>
                        <div>·庆祝大会、阅兵式、群众游行……国庆70周年活动看点前瞻</div>
                        <div className="img-12"></div>
                        <div className="article-btm">
                            <div className="btm-left">打开今日头条，查看更多图片</div>
                            <div className="img-13"></div>
                        </div>
                    </div>
                </div>               
            </div>
            <div className="detail-btn">
                <div className="recommend-item">热门推荐</div>     
                <div className="number">123234566</div>        
            </div>           
        </div>
      )
    
  }
}

export default NewsDetail;