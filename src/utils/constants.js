/*
包含一些常量值的模块
 */
export const BASE = 'http://localhost:5001'
// export const BASE = 'http://28.27.40.77:5000'
export const PAGE_SIZE = 10 // 每页显示的记录数
export const BASE_IMG_URL = BASE + '/public/image/articles/' // 上传图片的基础路径
export const BASE_PICSHOW_URL = BASE + '/public/image/picshow/'
export const BASE_MUSIC_URL = BASE + '/public/music/' //上传音乐的基础路径
export const BASE_SOFTWARE_URL = BASE + '/public/software/' //上传软件的基础路径
export const BASE_VIDEO_URL = BASE + '/public/video/' //上传视频的基础路径

//所有强军动态的五个单位
export const BASE_ZZ_DEPARTMENT = [
    '组织办', '人力资源办', '宣传保卫办', '部队管理办', '战勤办',
]
//场站的所有单位
export const BASE_ALL_DEPARTMENT = [
    '场站参谋部', '场站政治工作处',
    '财务股', '军需股', '油料股', '运输股', '机场营房股', '航材军械股', '飞行管制室', '气象台', '医院',
    '通信导航连', '警卫连', '汽车连', '场务连', '四站连'
]
export const BASE_ALL_TUPLE_DEPARTMENT = [
    {id:'1', Cname: '场站参谋部', name: 'zmb' },
    {id:'2', Cname: '场站政治工作处', name: 'zzc' },
    {id:'3', Cname: '财务股', name: 'cw' },
    {id:'4', Cname: '军需股', name: 'jx' },
    {id:'5', Cname: '油料股', name: 'yl' },
    {id:'6', Cname: '运输股', name: 'ys' },
    {id:'7', Cname: '机场营房股', name: 'jy' },
    {id:'8', Cname: '航材军械股', name: 'hj' },
    {id:'9', Cname: '飞行管制室', name: 'fxgzs' },
    {id:'10', Cname: '气象台', name: 'qxt' },
    {id:'11', Cname: '医院', name: 'yy' },
    {id:'12', Cname: '通信导航连', name: 'td' },
    {id:'13', Cname: '警卫连', name: 'jw' },
    {id:'14', Cname: '汽车连', name: 'qc' },
    {id:'15', Cname: '场务连', name: 'cwl' },
    {id:'16', Cname: '四站连', name: 'sz' },
    {id:'17', Cname: '驻训保障分队', name: 'zxfd' }
]

export const nationals = [
    {Cname:"汉族"}, {Cname:"壮族"}, {Cname:"满族"}, {Cname:"回族"}, {Cname:"苗族"}, {Cname:"维吾尔族"}, {Cname:"土家族"}, {Cname:"彝族"}, {Cname:"蒙古族"}, {Cname:"藏族"}, {Cname:"布依族"}, {Cname:"侗族"}, {Cname:"瑶族"}, {Cname:"朝鲜族"}, {Cname:"白族"}, {Cname:"哈尼族"},
    {Cname: "哈萨克族"},{Cname: "黎族"}, {Cname:"傣族"}, {Cname:"畲族"}, {Cname:"傈僳族"}, {Cname:"仡佬族"}, {Cname:"东乡族"}, {Cname:"高山族"}, {Cname:"拉祜族"}, {Cname:"水族"}, {Cname:"佤族"}, {Cname:"纳西族"}, {Cname:"羌族"}, {Cname:"土族"}, {Cname:"仫佬族"}, {Cname:"锡伯族"},
    {Cname:"柯尔克孜族"}, {Cname:"达斡尔族"}, {Cname:"景颇族"}, {Cname:"毛南族"}, {Cname:"撒拉族"}, {Cname:"布朗族"}, {Cname:"塔吉克族"}, {Cname:"阿昌族"}, {Cname:"普米族"}, {Cname:"鄂温克族"}, {Cname:"怒族"}, {Cname:"京族"}, {Cname:"基诺族"}, {Cname:"德昂族"}, {Cname:"保安族"},
    {Cname:"俄罗斯族"}, {Cname:"裕固族"}, {Cname:"乌孜别克族"}, {Cname:"门巴族"}, {Cname:"鄂伦春族"}, {Cname:"独龙族"}, {Cname:"塔塔尔族"}, {Cname:"赫哲族"}, {Cname:"珞巴族"}
];

export const branch = [
    {id:'1', Cname: '参谋部', name: 'zmb' },
    {id:'2', Cname: '政治工作处', name: 'zzc' },
    {id:'3', Cname: '财务股', name: 'cw' },
    {id:'4', Cname: '军需股', name: 'jx' },
    {id:'5', Cname: '油料股', name: 'yl' },
    {id:'6', Cname: '运输股', name: 'ys' },
    {id:'7', Cname: '机场营房股', name: 'jy' },
    {id:'8', Cname: '航材军械股', name: 'hj' },
    {id:'9', Cname: '飞行管制室', name: 'fxgzs' },
    {id:'10', Cname: '气象台', name: 'qxt' },
    {id:'11', Cname: '医院', name: 'yy' },
    {id:'12', Cname: '通信导航连', name: 'td' },
    {id:'13', Cname: '警卫连', name: 'jw' },
    {id:'14', Cname: '汽车连', name: 'qc' },
    {id:'15', Cname: '场务连', name: 'cwl' },
    {id:'16', Cname: '四站连', name: 'sz' },
    {id:'17', Cname: '驻训保障分队', name: 'zxfd' }
]
