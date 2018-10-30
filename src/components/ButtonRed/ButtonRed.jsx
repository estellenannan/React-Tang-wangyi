import React, {Component} from 'react';

import PropTypes from 'prop-types';
import'./ButtonRed.css';

export default class ButtonRed extends Component {

//给组件类(函数对象)添加propTypes属性
  static propTypes = {
    // 指定属性名, 属性值的类型, 属性的必要性
    redBtnName: PropTypes.string
  };
  render() {
    return (
        <div className="btns">
          <div className="btn_container">
            <i className="iconfont icon-mobilephone_fill"></i>
            <span className="btn_text">{redBtnName}</span>
          </div>
        </div>
    )
  }
}






