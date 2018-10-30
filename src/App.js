import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import MaskPage from './containers/maskPage/maskPage'
import Msite from './containers/Msite/Msite'
/*import Things from './containers/Things/Things'
import Classify from './containers/Classify/Classify'
import ShopCart from './containers/ShopCart/ShopCart'
import Profile from './containers/Profile/Profile'*/
import FooterGuides from './components/FooterGuides/FooterGuides'
import './assets/css/reset.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/msite' component={Msite}/>
          {/* <Route path='/things' component={Things}/>
          <Route path='/register' component={Classify}/>
          <Route path='/shopcart' component={ShopCart}/>
          <Route path='/profile' component={Profile}/>*/}
          <Route component={MaskPage}/> {/*没有path默认路由组件*/}
        </Switch>
        <FooterGuides></FooterGuides>
      </div>
    )
  }
}

