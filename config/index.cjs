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

  USERS: [
    {
      // 想要发送的人的名字
      name: '晴宝儿',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oFfAE6a21PdddMlx98330TaTLcVQ',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '09qrqLYKpkA2Nvae5LYNrkbnCUS-vWZz3JNAMdF3D3g',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-17',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '晴宝农历', year: '1998', date: '08-27',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '晴宝', year: '1998', date: '10-17',
        },
        {
          type: '节日', name: '相识纪念日', year: '2024', date: '01-02',
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

