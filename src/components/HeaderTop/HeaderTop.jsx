import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

import './HeaderTop.css';


class HeaderTop extends Component {
  render() {
    return (
      <div className="wrap">
        <div className="headerTop">
          <ul className="headerTop_ul">
            <li onClick={() => this.props.history.replace('/msite')}>
              <i className="iconfont icon-home"></i></li>
            <li className="secondLi">
              <span>网易严选</span>
            </li>
            <li className="thirdLi">
              <i className="iconfont icon-sousuo"></i>
              <i className="iconfont icon-gouwuche2"></i>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(HeaderTop)






