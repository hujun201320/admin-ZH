import {
    HomeOutlined,
    UserOutlined,
    TeamOutlined 
  } from '@ant-design/icons';
  import '../config/conf/iconfont.css'
  import '../componets/left-nav/index.less'
  
const menuList = [
    {
        title: '首页',
        key:'/home',
        icon:<HomeOutlined className='icon' style={{fontSize:'25px'}} />,
    },
    {
        title: '文章管理',
        key: '/noticesManage',
        icon: <span className='icon iconfont' style={{fontSize:'25px'}}>&#xe694;</span>,
        children: [
          {
            title: '写文章',
            key: '/articleManage/add',
            icon: <span className='icon iconfont' style={{fontSize:'25px'}}>&#xe693;</span>,
          },
          {
            title: '管理文章',
            key: '/articleManage/manage',
            icon: <span className='icon iconfont' style={{fontSize:'25px'}}>&#xe698;</span>
          },]
      },
      {
        title: '党（团）员管理',
        key: '/people',
        icon: <span className='icon iconfont' style={{fontSize:'25px'}}>&#xe62c;</span>,
        children: [ // 子菜单列表
        {
          title: '单个添加',
          key: '/people/addone',
          icon: <span className='icon iconfont' style={{fontSize:'25px'}}>&#xe684;</span>
        },
          {
            title: '批量添加',
            key: '/people/addmany',
            icon: <span className='icon iconfont' style={{fontSize:'25px'}}>&#xe684;</span>
          },
          {
            title: '人员列表',
            key: '/people/manage',
            icon: <span className='icon iconfont' style={{fontSize:'25px'}}>&#xe698;</span>
          },
        ]
      },
      {
        title: '党费',
        key: '/partydues',
        icon: <span className='icon iconfont' style={{fontSize:'25px'}}>&#xe678;</span>,
        children: [
          {
            title: '党费交纳',
            key: '/partydues/paydues',
            icon: <span className='icon iconfont' style={{fontSize:'25px'}}>&#xe698;</span>
          },
          {
            title: '党费列表',
            key: '/partydues/manage',
            icon: <span className='icon iconfont'style={{fontSize:'25px'}}>&#xe698;</span>
          },
        ]
      },
      {
        title: '会议管理',
        key: '/meeting',
        icon: <span className='icon iconfont' style={{fontSize:'25px'}}>&#xe696;</span>,
        children: [
          {
            title: '三会一课列表',
            key: '/meeting/plan',
            icon: <span className='icon iconfont' style={{fontSize:'25px'}}>&#xe698;</span>
          },
          {
            title: '其他会议',
            key: '/meeting/other',
            icon: <span className='icon iconfont' style={{fontSize:'25px'}}>&#xe698;</span>
          },
    
        ]
      },
      {
        title: '打卡监控管理',
        key: '/punchCard',
        icon: <span className='icon iconfont' style={{fontSize:'25px'}}>&#xe696;</span>,
        children: [
          {
            title: '内容上传',
            key: '/punchCard/upload',
            icon: <span className='icon iconfont' style={{fontSize:'25px'}}>&#xe698;</span>
          },
          {
            title: '内容管理',
            key: '/punchCard/manage',
            icon: <span className='icon iconfont' style={{fontSize:'25px'}}>&#xe698;</span>
          },
    
        ]
      },
      {
        title: '用户',
        key:'/user',
        icon:<UserOutlined className='icon' style={{fontSize:'25px'}}/>,
        children:[
            {
                title:'创建用户',
                key:'/createUser',
                icon:<span className='icon iconfont' style={{fontSize:'25px'}}>&#xe698;</span>
            },
            {
                title:'用户管理',
                key:'/manageUser',
                icon:<span className='icon iconfont'style={{fontSize:'25px'}}>&#xe698;</span>
            }
        ]
    },
    {
      title: '角色',
      key:'/role',
      icon:<TeamOutlined className='icon' style={{fontSize:'25px'}}/>,
      children:[
          // {
          //     title:'创建角色',
          //     key:'/createRole',
          //     icon:<span className='icon iconfont' style={{fontSize:'25px'}}>&#xe698;</span>
          // },
          {
              title:'角色管理',
              key:'/manageRole',
              icon:<span className='icon iconfont' style={{fontSize:'25px'}}>&#xe698;</span>
          }
      ]
  },
      {
        title: '视频管理',
        key: '/media/video',
        icon: <span className='icon iconfont' style={{fontSize:'25px'}}>&#xe698;</span>,
        children: [
          {
            title: '视频上传',
            key: '/mdeia/videoupload',
            icon: <span className='icon iconfont' style={{fontSize:'25px'}}>&#xe698;</span>
          },
          {
            title: '视频管理',
            key: '/mdeia/videomanage',
            icon: <span className='icon iconfont' style={{fontSize:'25px'}}>&#xe698;</span>
          },
        ]
      },
      {
        title: '系统设置',
        key: '/setting',
        icon: <span className='icon iconfont' style={{fontSize:'25px'}}>&#xe69a;</span>,
        children: [
          {
            title: '数据恢复',
            key: '/setting/datarecover',
            icon: <span className='icon iconfont' style={{fontSize:'25px'}}>&#xe698;</span>
          }
        ]
      },
      {
        title: '留言管理',
        key: 'mail',
        icon: <span className='icon iconfont' style={{fontSize:'25px'}}>&#xe698;</span>,
        children: [
          {
            title: '已审核留言',
            key: '/mail/checked',
            icon: <span className='icon iconfont' style={{fontSize:'25px'}}>&#xe698;</span>
          },
          {
            title: '未审核留言',
            key: '/mail/unchecked',
            icon: <span className='icon iconfont' style={{fontSize:'25px'}}>&#xe698;</span>
          },
        ]
      },
      {
        title: '天路先锋',
        key: '/quantization',
        icon: <span className='icon iconfont' style={{fontSize:'25px'}}>&#xe682;</span>,
        children: [
          {
            title: '先锋党组织',
            key: '/quantization/unit',
            icon: <span className='icon iconfont' style={{fontSize:'25px'}}>&#xe698;</span>
          },
          {
            title: '党员先锋',
            key: '/quantization/solo',
            icon: <span className='icon iconfont' style={{fontSize:'25px'}}>&#xe698;</span>
          },
        ]
      },
    
    
    
]

export default menuList

// const menuList = [
//     {
//       title: '首页', // 菜单标题名称
//       key: '/home', // 对应的path
//       icon: 'home', // 图标名称
//       isPublic: true, // 公开的
//     },
//     {
//       title: '通知管理',
//       key: '/noticesManage',
//       icon: 'sound',
//       children: [
//         {
//           title: '发通知',
//           key: '/noticesManage/add',
//           icon: 'notification'
//         },
//         {
//           title: '管理通知',
//           key: '/noticesManage/manage',
//           icon: 'message'
//         },]
//     },
//     {
//       title: '课程、案例、新闻、法规',
//       key: '/newsManage',
//       icon: 'appstore',
//       children: [ // 子菜单列表
//         {
//           title: '写新闻（案例、法规等）',
//           key: '/writenews',
//           icon: 'bars'
//         },
//         {
//           title: '管理文章',
//           key: '/managenews',
//           icon: 'search'
//         },
//       ]
//     },
//     {
//       title: '基层风采管理',
//       key: '/picshow',
//       icon: 'build',
//       children: [
//         {
//           title: '图片上传',
//           key: '/picshow/uploads',
//           icon: 'line-chart'
//         },
//         {
//           title: '图片管理',
//           key: '/picshow/manage',
//           icon: 'line-chart'
//         },
//       ]
//     },
//     {
//       title: '科室动态管理',
//       key: '/departmentMessage',
//       icon: 'book',
//       children: [
//         {
//           title: '发布科室动态',
//           key: '/departmentMessage/write',
//           icon: 'file-add'
//         },
//         {
//           title: '内容管理',
//           key: '/departmentMessage/manage',
//           icon: 'file'
//         },
  
//       ]
//     },
  
//     {
//       title: '视频管理',
//       key: '/media/video',
//       icon: 'play-square',
//       children: [
//         {
//           title: '视频上传',
//           key: '/mdeia/videoupload',
//           icon: 'upload'
//         },
//         {
//           title: '视频管理',
//           key: '/mdeia/videomanage',
//           icon: 'video-camera'
//         },
//       ]
//     },
//     {
//       title: '更新值班首长',
//       key: '/leader/write',
//       icon: 'user'
//     },
  
//     {
//       title: '用户管理',
//       key: '/user',
//       icon: 'user'
//     },
//     {
//       title: '角色管理',
//       key: '/role',
//       icon: 'safety',
//     },
//     {
//       title: '留言管理',
//       key: 'mail',
//       icon: 'mail',
//       children: [
//         {
//           title: '已审核留言',
//           key: '/mail/checked',
//           icon: 'vertical-align-top'
//         },
//         {
//           title: '未审核留言',
//           key: '/mail/unchecked',
//           icon: 'line-chart'
//         },
//       ]
//     },
//     {
//       title: '双争评比',
//       key: '/quantization',
//       icon: 'play-square',
//       children: [
//         {
//           title: '先进单位',
//           key: '/quantization/unit',
//           icon: 'upload'
//         },
//         {
//           title: '先进个人',
//           key: '/quantization/solo',
//           icon: 'video-camera'
//         },
//       ]
//     }
//   ]
  
//   export default menuList