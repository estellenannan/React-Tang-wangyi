关于网易的react的项目出现的问题：
1,className={path === '/msite' ? 'guide_item on' : 'guide_item'}>
类名加空格

2,react-redux麻烦
后来有了redux 有了下面的简写方法
class Classify extends Component {
render({return})} //相当于ui组件 展示数据

export default connect(
    state => ({msiteData: state.msiteData}),
    {getClassData}
  )(Classify)//相当于容器组件 获取数据

  3,注释{/**/}
  {/*<!--固定头部为以后滑动做准备-->*/}

  4, Line 0:  Parsing error: Cannot read property 'pop' of undefined

    5,操作路由只有这三种方法：
    location match history