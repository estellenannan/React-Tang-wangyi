/*  包含n个reducer函数的模块
* reducer函数：根据老的state和指定的action 产生新的state
* */


import {combineReducers} from 'redux';

import {
  RECEIVE_MSITEDATA,
  RECEIVE_THINGSDATA,
  RECEIVE_CLASSIFYDATA,
} from './action-types'

const msiteData = {}; // 首页数据
const thingsData = {}; // 识物页数据
const classData = {}; // 分类页数据

//1，获取主页
function getMsiteData(state = msiteData, action) {
  switch (action.type) {
    case RECEIVE_MSITEDATA:
      const msiteData = action.data;
      return msiteData;
    default:
      return state
  }
}

//2，获取识物页面
function getThingsData(state = thingsData, action) {
  switch (action.type) {
    case RECEIVE_THINGSDATA:
      const thingsData = action.data;
      return thingsData;
    default:
      return state
  }
}

//3，获取分类页面
function getClassData(state = classData, action) {
  switch (action.type) {
    case RECEIVE_CLASSIFYDATA:
      const classData = action.data;
      return classData;
    default:
      return state
  }
}

export default combineReducers({
  getMsiteData,
  getThingsData,
  getClassData
})
/*
combineReducers()执行的结果是一个新的reducer函数
整合后的reducer管理的状态结构为:  {user: user(), userList: userList()}
 */
