import React, {Component} from 'react';

import PropTypes from 'prop-types'

export default class ButtonWhite extends Component {
  //给组件类(函数对象)添加propTypes属性
  static propTypes = {
    // 指定属性名, 属性值的类型, 属性的必要性
    whiteBtnName: PropTypes.string.isRequired
  };
  render() {
    return (
        <div className="btns">
          <div className="btn_container">
            <i className="iconfont icon-mobilephone_fill"></i>
            <span className="btn_text">{whiteBtnName}</span>
          </div>
        </div>
    )
  }
}




