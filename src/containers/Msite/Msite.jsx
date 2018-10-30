import React, {Component} from 'react';
import {connect} from 'react-redux';
import Swiper from 'swiper';
import BScroll from 'better-scroll';

import {getMsiteData} from '../../redux/actions'
import Split from '../../components/Split/Split';
import './Msite.css'

class Msite extends Component {
  state = {
    current: 0,
  };

  componentDidMount() {
    this.props.getMsiteData();
  }

  componentDidUpdate() {
    if (!this.props.msiteData.headCateList) {
      this.scrollCiyu = new BScroll('.hdScorllX', {
        click: true,// 词语
        scrollX: true
      });
    } else {
      this.scrollCiyu.refresh()
    }

    if (!this.props.msiteData.newItemList) {
      this.scrollXinpin = new BScroll('.m_goodGrid', {
        click: true,// 新品首发
        scrollX: true
      });
    } else {
      this.scrollXinpin.refresh()
    }

    if (!this.props.msiteData.focusList) {
      this.scrollLunbo = new Swiper('.swiper-container', {
        loop: true, // 循环模式选项  //轮播图
        pagination: {
          // 如果需要分页器
          el: '.swiper-pagination',
        },
      });
    } else {
      this.scrollLunbo.refresh()
    }

    if (!this.props.msiteData.topicList) {
      this.scrollZhuanti = new BScroll('.zhuanti_wrap', {
        click: true,//专题
        scrollX: true
      });
    } else {
      this.scrollZhuanti.refresh()
    }


  }

  currentIndex = (index) => {
    this.current = index
  };

  render() {

    if (!this.props.msiteData) {
      return
    }
    const {
      policyDescList,
      newItemList,
      tagList,
      topicList,
      cateList,
      headCateList,
      focusList
    } = this.props.msiteData;

    return (
      <div className="wrap">
        <div className="msite">

          {/*<!--固定头部为以后滑动做准备-->*/}
          <div className="msite_fixed">
            {/*<!--头部-->*/}
            <div className="msite_header">
              <a href="javascript:;">网易严选</a>
              <div className="msite_right">
                <span><i className="iconfont icon-sousuo"></i></span>
                <span className="placeholder">搜索商品，共16762款好物</span>
              </div>
            </div>

            {/* <!--11个词语长屏滑动-->*/}
            <div className="hdScorllX">
              <div className="list">
                {
                  headCateList.map((headCate, index) => <div className="hdScorllItem" key={index}>
                    <span className={current === index ? 'active' : ''}
                          onClick={this.currentIndex(index)}>{headCate.name}</span>
                  </div>)
                }
              </div>
            </div>

          </div>

          <div className="msite_content">

            {/*<!--轮播图-->*/}
            <div className="msite_nav">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  {
                    focusList.map((foucsPic, index) => <div className="swiper-slide" key={index}>
                      <img src={foucsPic.picUrl} alt="lunbo"/>
                    </div>)
                  }
                </div>
                {/*<!-- 如果需要分页器 -->*/}
                <div className="swiper-pagination"></div>
              </div>
            </div>

            {/*<!--轮播图下面的3个服务-->*/}
            <div className="msite_indexServicePolicy">
              <ul className="msite_ulService">
                {
                  policyDescList.map((service, index) => <li key={index}>
                    <a href="javascript:;">
                      <i className="iconfont icon-heart"></i>
                      <span>{service.desc}</span>
                    </a>
                  </li>)
                }
              </ul>
            </div>

            {/* <!--品牌制造商直供-->*/}
            <div className="m_pinpai">
              <header className="m_pinpaiTitle">
                <a href="javascript:;">
                  <span>品牌制造商直供</span>
                  <i className="iconfont icon-right"></i>
                </a>
              </header>

              <div className="m_pinpaiMain">
                <ul className="m_pinpaiMainUl">
                  {
                    tagList.map((tagPinpai, index) => <li className="item" key={index < 4}>
                      <a href="javascript:;">
                        <div className="content">
                          <h4>{tagPinpai.name}</h4>
                          <div className="text">
                            <span>{tagPinpai.floorPrice}元起</span>
                          </div>
                        </div>
                        <img src={tagPinpai.picUrl} alt="img"/>
                      </a>
                    </li>)
                  }
                </ul>
              </div>
            </div>

            {/* <!--新品首发-->*/}
            <div className="m_xinpin">

              <header className="xinpin_hd newItemList">
                <a href="javascript:;" className="wrap">
                  <span className="txts">新品首发</span>
                  <div className="all">
                    <span className="txt">查看全部</span>
                    <i className="iconfont icon-right"></i>
                  </div>
                </a>
              </header>

              {/* <!--横屏滑动-->*/}
              <div className="m_goodGrid">
                <ul className="xinpin_wrap">
                  {
                    newItemList.map((newItem, index) => <li className="item" key={index}>
                      <a href="javascript:;" className="good">
                        <div className="hd">
                          <img src={newItem.listPicUrl} alt="img"/>
                        </div>
                        <div className="name">
                          <span>{newItem.name}</span>
                        </div>
                        <div className="jiesao">
                          <span>{newItem.simpleDesc}</span>
                        </div>
                        <div className="price">
                          <span>￥{newItem.retailPrice}</span>
                        </div>
                      </a>
                    </li>)
                  }
                </ul>

              </div>

            </div>

            <Split></Split>

            {/*<!--严选限时购-->*/}
            <div className="xianshigou">
              <div className="left">
                <span className="left1">严选限时购</span>
                <div className="spans">
                  <span className="secs">00</span>
                  <span className="colon">:</span>
                  <span className="secs">00</span>
                  <span className="colon">:</span>
                  <span className="secs">00</span>
                </div>
                <span className="left2">下一场18：00开始</span>
              </div>
              <div className="right">
                <img src="./images/yanxuan3.png" alt="img"/>
              </div>
            </div>
            <Split></Split>

            {/*<!--福利社-->*/}
            <div className="fulishe">
              <img src="./images/yanxuan6.jpg" alt="img6"/>
            </div>

            <Split></Split>

            {/*  <!--  专题精选-->*/}
            <div className="zhuanti">
              <header className="hd">
                <span>专题精选</span>
                <span><i className="iconfont icon-right"></i></span>
              </header>

              <div className="zhuanti_wrap">
                <ul className="list">
                  {
                    topicList.map((topicZhuanti, index) => <li key={index} className="item">
                      <img src={topicZhuanti.itemPicUrl} alt="img"/>
                      <div className="top">
                        <span>{topicZhuanti.title}</span>
                      </div>
                      <div className="bottom">
                        <span>{topicZhuanti.subtitle}</span>
                      </div>
                    </li>)
                  }
                </ul>
              </div>
            </div>
            <Split></Split>

            {/*<!--居家好物-->*/}
            <div className="m_jujia">

              {
                cateList.map((cateJujia, index) => <div key={index} className="jujia">
                  <header className="hdju">
                    <span>{cateJujia.name}</span>
                  </header>
                  <div className="content">
                    <ul className="list">
                      {
                        cateJujia.map((ItemJujia, index) => <li className="item" key={index}>

                          <img src={ItemJujia.listPicUrl} alt="img"/>
                          <div className="top">
                            <span>{ItemJujia.simpleDesc}</span>
                          </div>
                          <div className="middle">
                            <span>{ItemJujia.name}</span>
                          </div>
                          <div className="bottom">
                            <span>￥{ItemJujia.retailPrice}</span>
                          </div>
                        </li>)
                      }
                    </ul>
                  </div>
                  <div className="line"></div>
                </div>)
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({msiteData: state.msiteData}),
  {getMsiteData}
)(Msite)


