import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import PropTypes from 'prop-types';
import './FooterGuides.css';

class FooterGuides extends Component {

  goTo = (path) => {
    //通过路由导航跳转到新路由
    this.props.history.replace(path)
  };

  render() {
    return (
      <footer className="footer_guide border-1px">
        <a href="javascript:;" onClick={() => this.goTo('./msite')}
           className={this.props.location.pathname === '/msite' ? 'guide_item on' : 'guide_item'}>
            <span className="item_icon">
              <i className="iconfont icon-home"></i>
            </span>
          <span>首页</span>
        </a>
        <a href="javascript:;" onClick={() => this.goTo('./things')}
           className={this.props.location.pathname === '/things' ? 'guide_item on' : 'guide_item'}>
          <span className="item_icon">
            <i className="iconfont icon-shiwu"></i>
          </span>
          <span>识物</span>
        </a>
        <a href="javascript:;" onClick={() => this.goTo('./classify')}
           className={this.props.location.pathname === '/classify' ? 'guide_item on' : 'guide_item'}>
          <span className="item_icon">
              <i className="iconfont icon-category"></i>
            </span>
          <span>分类</span>
        </a>
        <a href="javascript:;" onClick={() => this.goTo('./shopcart')}
           className={this.props.location.pathname === '/shopcart' ? 'guide_item on' : 'guide_item'}>
             <span className="item_icon">
              <i className="iconfont icon-shoppingcart"></i>
            </span>
          <span>购物车</span>
        </a>
        <a href="javascript:;" onClick={() => this.goTo('./profile')}
           className={this.props.location.pathname === '/profile' ? 'guide_item on' : 'guide_item'}>
            <span className="item_icon">
              <i className="iconfont icon-mine"></i>
            </span>
          <span>个人</span>
        </a>
      </footer>
    )
  }
}

export default withRouter(FooterGuides)

