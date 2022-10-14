/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxed0a3e9ac34ef169',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '39b977dad5f766d34ae83f521bcb763f',

  PROVINCE: '安徽',
  CITY: '宣城',
  
  //土味情话
  earthyLoveWords:true,
  
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    { keyword: 'encourage_oneself', contents: '偶嗨哟~' },
    ],

  // 课程表相关配置
  // 如果courseSchedule不存在或者为空（null）则认为没有课程
  // 如果courseSchedule是一个数组，则认为不区分单双周，直接填写星期几对应的课表数据即可
  // 如果courseSchedule是一个对象（如下面所示）
  courseSchedule: {
    // 单双周的基准
    benchmark: {
      // 这里设置一个日期，用来作为判断课表是否单双周的依据
      date: '2022-09-23',
      // 该日期是否为单周
      isOdd: true
    },
    // 课表
    courses: {
      // 单周课表
      // 从星期一到星期日（星期六和星期日的课表数组可不填写）
      odd: [
        // 例子，周一的课表
        [
          '08:00-09:35 高等数学',
          '09:50-11:25 高等物理'
        ],
        // 周二
        [
          '08:00-09:35 高等数学',
          '09:50-11:25 高等物理'
        ],
        // 周三
        [
          '08:00-09:35 高等数学',
          '09:50-11:25 高等物理'
        ],
        // 周四
        [
          '08:00-09:35 高等数学',
          '09:50-11:25 高等物理'
        ],
        // 周五
        [
          '08:00-09:35 高等数学',
          '09:50-11:25 高等物理'
        ],
        // 周六
        [
          '08:00-09:35 高等数学',
          '09:50-11:25 高等物理'
        ],
        // 周日
        [
          '08:00-09:35 高等数学',
          '09:50-11:25 高等物理'
        ]
      ],
      // 双周课表
      even: [
        [],
        [],
        [],
        [],
        [],
        [],
        []
      ]
    }
  },
},
    {
      name: '老婆1',
      id: '',
      useTemplateId: '',
      province: '',
      city: '',
      horoscopeDate: '',
      horoscopeDateType: '',
      openUrl: 'https://wangxinleo.cn',
      festivals: [],
      customizedDateList: [],
      courseSchedule: null
    },
  
  
  USERS: [
    {
      // 想要发送的人的名字
      name: '晴宝儿',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oFfAE6a21PdddMlx98330TaTLcVQ',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'pfqDGsdUz3Xl8fGGOcSgGVA8dSa-DTu2SRT4J3Ma_I8',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-17',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '晴宝儿 农历', year: '1998', date: '08-27',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '晴宝儿', year: '1998', date: '10-17',
        },
        {
          type: '节日', name: '恋爱纪念日', year: '2024', date: '01-02',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2017-01-02' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2025-05-20' },
      ],
    },
  ],
      

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'BaEBNImTLldhC-7natT0skdOdtQwLzbjFAbISLzoAi0',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oFfAE6SavUbRZNLHccce-Qie2QvQ',
    }
  ],

}

module.exports = USER_CONFIG

