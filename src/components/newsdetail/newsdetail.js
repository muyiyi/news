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
                <div className="recommend-box">
                   <div className="recommend-item">热门推荐</div>
                    <div className="recommend-list">
                        <div className="list-box">
                            <div className="list-title">姜子牙为什么要娶68岁的黄花大闺女马氏为妻？原因很无奈</div>
                            <div className="img-box">
                                <img className="img-14" src="http://p3.pstatp.com/list/pgc-image/7d2e7c5e7620487fbe65723f76912dd7"/>
                                <img className="img-15" src="http://p3.pstatp.com/list/pgc-image/fd5ae1313c16461c92d6864ccebaf360"/>
                                <img className="img-16" src="http://p1.pstatp.com/list/pgc-image/1fa350e8eedf44baa027aa1b05e8328b"/>
                            </div>
                            <div className="list-info">
                                <span className="app">打开APP</span>
                                <span>历史回忆室</span>
                                <span>40条评论</span>
                            </div>
                        </div>
                        <div className="list-box">
                            <div className="list-title">张作霖当年乞讨时，孙寡妇给了他一碗饭吃，他是如何报答的</div>
                            <div className="img-box">
                                <img className="img-14" src="http://p3.pstatp.com/list/pgc-image/968a7179418e49cfa4872e47d59fdab0"/>
                                <img className="img-15" src="http://p3.pstatp.com/list/pgc-image/db5adc7261034a20806a22684f0c7ebd"/>
                                <img className="img-16" src="http://p3.pstatp.com/list/pgc-image/6d6560146e774543bab34b594b8ad0ee"/>
                            </div>
                            <div className="list-info">
                                <span className="app">打开APP</span>
                                <span>张生全精彩历史</span>
                                <span>177条评论</span>
                            </div>
                        </div>
                        <div className="list-box">
                            <div className="list-title">清朝一穷小子，因闹肚子下船方便，没想到因此成了百万富翁</div>
                            <div className="img-box">
                                <img className="img-14" src="http://p1.pstatp.com/list/pgc-image/a3d9a6ea311349169cf47fc6c033ead2"/>
                                <img className="img-15" src="http://p3.pstatp.com/list/pgc-image/d27b17b112e04b4fbbbb2d6a90a7775a"/>
                                <img className="img-16" src="http://p9.pstatp.com/list/pgc-image/9dbfff7198f74f4da6ab8b4b301efd24"/>
                            </div>
                            <div className="list-info">
                                <span className="app">打开APP</span>
                                <span>潋滟公子</span>
                                <span>10条评论</span>
                            </div>
                        </div>
                        <div className="list-box">
                            <img className="img-17" src="http://p1.pstatp.com/list/pgc-image/cbd869c544a2497ba45cbb7cc61dfe8b"/>
                            <div className="list-right">
                                <div className="right-title">古人写信不爱打标点，这个财主娶媳妇吃了大亏</div>
                                <div className="list-info">
                                    <span className="app">打开APP</span>
                                    <span>賨人客</span>
                                    <span>5条评论</span>
                                </div>
                            </div>
                        </div>
                        <div className="list-box">
                            <div className="list-title">㸚叕㠭㗊，你认识吗？章太炎：不认得这几个字，就免谈亲事</div>
                            <div className="img-box">
                                <img className="img-14" src="http://p1.pstatp.com/list/pgc-image/625eb27c31504cf4bf6dd8577fc69a3e"/>
                                <img className="img-15" src="http://p3.pstatp.com/list/pgc-image/e4246becec0044dd9043cdca897cd79c"/>
                                <img className="img-16" src="http://p1.pstatp.com/list/pgc-image/9664057000224fdea6c373b67b62692f"/>
                            </div>
                            <div className="list-info">
                                <span className="app">打开APP</span>
                                <span>阳光透过指缝的耀眼</span>
                                <span>37条评论</span>
                            </div>
                        </div>
                    </div> 
                </div> 
                <div className="recommend-box">
                   <div className="recommend-item">猜你喜欢</div>
                    <div className="recommend-list">
                        <div className="list-box">
                            <img className="img-17" src="http://p3.pstatp.com/list/tos-cn-i-0000/d146aaa2a49711e988e3ac1f6b0b2bc2"/>
                            <div className="list-right">
                                <div className="right-title">灾难接连来袭，美首都已经被“包围”，70万人遇险，白宫也难幸免</div>
                                <div className="list-info">
                                    <span className="app">打开APP</span>
                                    <span>迷彩新讯</span>
                                    <span>4365条评论</span>
                                </div>
                            </div>
                        </div>
                        <div className="list-box">
                            <img className="img-17" src="http://p3.pstatp.com/list/tos-cn-i-0000/7390a95eb5a811e9ba5e7cd30a55e9ba"/>
                            <div className="list-right">
                                <div className="right-title">嘴上说自己爱国，却加入外国国籍，如今仍活跃在大陆捞金</div>
                                <div className="list-info">
                                    <span className="app">打开APP</span>
                                    <span>娱乐点点点点点</span>
                                    <span>5327条评论</span>
                                </div>
                            </div>
                        </div>
                        <div className="list-box">
                            <img className="img-17" src="http://p1.pstatp.com/list/tos-cn-i-0000/a557764ab04211e98f0cac1f6b0ec8fa"/>
                            <div className="list-right">
                                <div className="right-title">爱国爱港，数百香港中学生和驻港官兵在军舰上快闪《歌唱祖国》</div>
                                <div className="list-info">
                                    <span className="app">打开APP</span>
                                    <span>对景当歌</span>
                                    <span>3145条评论</span>
                                </div>
                            </div>
                        </div>
                        <div className="list-box">
                            <img className="img-17" src="http://p3.pstatp.com/list/tos-cn-i-0000/5fe28d48ad3111e9b55a7cd30a545d72"/>
                            <div className="list-right">
                                <div className="right-title">华春莹有了新工作！外交官一个人就是一支军队</div>
                                <div className="list-info">
                                    <span className="app">打开APP</span>
                                    <span>大国方阵</span>
                                    <span>450条评论</span>
                                </div>
                            </div>
                        </div>
                        <div className="list-box">
                            <div className="list-title">贼王张子强的灭亡之路：想引渡回香港，结果在大陆被枪决</div>
                            <div className="img-box">
                                <img className="img-14" src="http://p1.pstatp.com/list/pgc-image/1bb6b97bd0d24474be6336329f8e5318"/>
                                <img className="img-15" src="http://p3.pstatp.com/list/pgc-image/e1dda066189f4b2792bc1200a217db04"/>
                                <img className="img-16" src="http://p1.pstatp.com/list/pgc-image/39ec11bbbfaa4179a5da8cb2bba92c87"/>
                            </div>
                            <div className="list-info">
                                <span className="app">打开APP</span>
                                <span>第一秘史</span>
                                <span>14条评论</span>
                            </div>
                        </div>
                        <div className="list-box">
                            <img className="img-17" src="http://p1.pstatp.com/list/tos-cn-i-0004/ce223b850c1143cda6429ee726bfe3a6"/>
                            <div className="list-right">
                                <div className="right-title">为什么去香港玩，一眼就被认出是大陆人，香港人：全凭这三点</div>
                                <div className="list-info">
                                    <span className="app">打开APP</span>
                                    <span>叶羽看世界</span>
                                    <span>1条评论</span>
                                </div>
                            </div>
                        </div>
                        <div className="list-box">
                            <img className="img-17" src="http://p9.pstatp.com/list/tos-cn-i-0000/c5f871c6c07611e9a6f0ac1f6b0ec8fa"/>
                            <div className="list-right">
                                <div className="right-title">240秒为你揭秘“祸港四人帮”的真实面目</div>
                                <div className="list-info">
                                    <span className="app">打开APP</span>
                                    <span>青蜂侠</span>
                                    <span>729条评论</span>
                                </div>
                            </div>
                        </div>
                        <div className="list-box">
                            <img className="img-17" src="http://p3.pstatp.com/list/pgc-image/9514a49d50a945d288f63a3fa42f0f97"/>
                            <div className="list-right">
                                <div className="right-title">香港示威者内部欺凌曝光，女生哭诉后悔收钱参与</div>
                                <div className="list-info">
                                    <span className="app">打开APP</span>
                                    <span>大竹县人民检察院</span>
                                    <span>2条评论</span>
                                </div>
                            </div>
                        </div>
                        <div className="list-box">
                            <img className="img-17" src="http://p9.pstatp.com/list/tos-cn-i-0000/5d159d98995f11e98a007cd30a55d46c"/>
                            <div className="list-right">
                                <div className="right-title">新党青年声援黄智贤！戳破蔡英文「绿色法西斯」真面目！</div>
                                <div className="list-info">
                                    <span className="app">打开APP</span>
                                    <span>王炳忠台湾</span>
                                    <span>10477条评论</span>
                                </div>
                            </div>
                        </div>
                        <div className="list-box">
                            <div className="list-title">香港局势背后，是你不了解的中国</div>
                            <div className="img-box">
                                <img className="img-14" src="http://p3.pstatp.com/list/pgc-image/RaLDN8B8Q3oWIG"/>
                                <img className="img-15" src="http://p1.pstatp.com/list/pgc-image/RaLDN8PFn3Bmkg"/>
                                <img className="img-16" src="http://p3.pstatp.com/list/pgc-image/RYZSPVeHzGEje5"/>
                            </div>
                            <div className="list-info">
                                <span className="app">打开APP</span>
                                <span>株洲网</span>
                                <span>1条评论</span>
                            </div>
                        </div>
                    </div> 
                </div>   
                <div className="btn-search">
                    <div className="recommend-item">搜索</div>
                    <div className="line">
                        <div>三个代表重要思想</div>
                        <span>|</span>
                        <div>中央行政机构构架图</div>
                    </div>
                    <div className="line">
                        <div>两个代表重要思想</div>
                        <span>|</span>
                        <div>机构改革方案内容</div>
                    </div>
                    <div className="line">
                        <div>十八届一中全会时间</div>
                        <span>|</span>
                        <div>我国基本政治制度</div>
                    </div>
                    <div className="line">
                        <div>十九大报告学习要点</div>
                        <span>|</span>
                        <div>中国时事政治新闻</div>
                    </div>
                    <div className="line">
                        <div>机构改革改什么</div>
                        <span>|</span>
                        <div>党的组织原则是什么</div>
                    </div>
                </div>            
            </div>          
        </div>
      )
    
  }
}

export default NewsDetail;