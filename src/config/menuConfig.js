import {
    PieChartOutlined,
    HomeOutlined,
    FormOutlined,
    HddOutlined,
    // SolutionOutlined,
  } from '@ant-design/icons';
const menuList = [
    {
        title: '首页',
        key:'/home',
        icon:<HomeOutlined />,
    },
    {
        title: '通知管理',
        key: '/noticesManage',
        icon: <PieChartOutlined />,
        children: [
          {
            title: '发通知',
            key: '/noticesManage/add',
            icon: <PieChartOutlined />
          },
          {
            title: '管理通知',
            key: '/noticesManage/manage',
            icon: <PieChartOutlined />
          },]
      },
      {
        title: '课程、案例、新闻、法规',
        key: '/newsManage',
        icon: <PieChartOutlined />,
        children: [ // 子菜单列表
          {
            title: '写新闻（案例、法规等）',
            key: '/writenews',
            icon: <PieChartOutlined />
          },
          {
            title: '管理文章',
            key: '/managenews',
            icon: <PieChartOutlined />
          },
        ]
      },
      {
        title: '基层风采管理',
        key: '/picshow',
        icon: <PieChartOutlined />,
        children: [
          {
            title: '图片上传',
            key: '/picshow/uploads',
            icon: <PieChartOutlined />
          },
          {
            title: '图片管理',
            key: '/picshow/manage',
            icon: <PieChartOutlined />
          },
        ]
      },
      {
        title: '科室动态管理',
        key: '/departmentMessage',
        icon: <PieChartOutlined />,
        children: [
          {
            title: '发布科室动态',
            key: '/departmentMessage/write',
            icon: <PieChartOutlined />
          },
          {
            title: '内容管理',
            key: '/departmentMessage/manage',
            icon: <PieChartOutlined />
          },
    
        ]
      },
      {
        title: '视频管理',
        key: '/media/video',
        icon: <PieChartOutlined />,
        children: [
          {
            title: '视频上传',
            key: '/mdeia/videoupload',
            icon: <PieChartOutlined />
          },
          {
            title: '视频管理',
            key: '/mdeia/videomanage',
            icon: <PieChartOutlined />
          },
        ]
      },
      {
        title: '更新值班首长',
        key: '/leader/write',
        icon: <PieChartOutlined />
      },
      {
        title: '留言管理',
        key: 'mail',
        icon: <PieChartOutlined />,
        children: [
          {
            title: '已审核留言',
            key: '/mail/checked',
            icon: <PieChartOutlined />
          },
          {
            title: '未审核留言',
            key: '/mail/unchecked',
            icon: <PieChartOutlined />
          },
        ]
      },
      {
        title: '双争评比',
        key: '/quantization',
        icon: <PieChartOutlined />,
        children: [
          {
            title: '先进单位',
            key: '/quantization/unit',
            icon: <PieChartOutlined />
          },
          {
            title: '先进个人',
            key: '/quantization/solo',
            icon: <PieChartOutlined />
          },
        ]
      },
    {
        title: '新闻',
        key:'/news',
        icon:<PieChartOutlined />,
        children:[
            {
                title:'新闻上传',
                key:'/newsUpload',
                icon:<FormOutlined />
            },
            {
                title:'新闻管理',
                key:'/news-Manage',
                icon:<HddOutlined />
            }
        ]
    },
    {
        title: '角色',
        key:'/role',
        icon:<PieChartOutlined />,
        children:[
            {
                title:'创建角色',
                key:'/createRole',
                icon:<FormOutlined />
            },
            {
                title:'角色管理',
                key:'/manageRole',
                icon:<HddOutlined /> 
            }
        ]
    },
    {
        title: '用户',
        key:'/user',
        icon:<PieChartOutlined />,
        children:[
            {
                title:'创建用户',
                key:'/createUser',
                icon:<FormOutlined />
            },
            {
                title:'用户管理',
                key:'/manageUser',
                icon:<HddOutlined />
            }
        ]
    }
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