//包含n个action creator 函数的模块
//同步action：对象
//异步action：dispatch函数

import {
  RECEIVE_MSITEDATA,
  RECEIVE_THINGSDATA,
  RECEIVE_CLASSIFYDATA,
} from './action-types';

import {
  reqMsiteData,
  reqClassifyData,
  reqThingsData
} from '../api'

//1,主页页面数据
const reqMsiteData2 = (msiteData) => ({type: RECEIVE_MSITEDATA, data: msiteData});
export const getMsiteData = () => {
  return async dispatch => {
    const result = await reqMsiteData();
    if (result.code === 0) {
      const msiteData = result.data;
      dispatch(reqMsiteData2(msiteData))
    }
  }
};

//2,分类页面数据
const reqClassifyData2 = (msiteData) => ({type: RECEIVE_CLASSIFYDATA, data: classData});
export const getClassData = () => {
  return async dispatch => {
    const result = await reqClassifyData();
    if (result.code === 0) {
      const classData = result.data;
      dispatch(reqClassifyData2(classData))
    }
  }
};
//3,识物页面数据
const reqThingsData2 = (thingsData) => ({type: RECEIVE_THINGSDATA, data: thingsData});
export const getThingsData = () => {
  return async dispatch => {
    const result = await reqThingsData();
    if (result.code === 0) {
      const thingsData = result.data;
      dispatch(reqThingsData2(thingsData))
    }
  }
};
