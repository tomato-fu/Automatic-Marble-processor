// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()   //声明数据库对象
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await db.collection('product').where({
      'main_info.fullname':_.in(event.result)
    }).remove()
  } catch(e) {
    console.error(e)
  }
}
