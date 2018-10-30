import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import './maskPage.css'

export default class MaskPage extends Component {
  render() {
    return (
      <div className="g-bd">
        <div className="g-row">
          <img src="./images/1.jpg"/>
          <img src="./images/2.jpg"/>
        </div>
        <div className="g-row">
          <img src="./images/3.jpg"/>
          <div className="download-app"></div>
          <Link to="/msite" className="backWapBtn">继续使用触屏版浏览</Link>
        </div>
      </div>
    )
  }
}



