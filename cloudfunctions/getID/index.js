// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db=cloud.database()
const product = db.collection('product')
// 云函数入口函数
exports.main = async (event, context) => {
  

  return await product.where({
    'main_info.name':event.name,
    'main_info.model':event.model,
   
  }).get().then(res=>{
    return res.data[0]._id

  }).catch(err=>{
    return undefined
  })
    
}