// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
    env:"anyu-bakery-5gvtpoxz1616e5a7"
})

const xlsx = require('node-xlsx')    //导入Excel类库
const db = cloud.database()   //声明数据库对象
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    let productInfo = await db.collection('product').where({
        _id:event.product_id
    }).get()   //将获取到的数据对象赋值给变量，接下来需要用该对象向Excel表中添加数据
    let dataCVS = `${event.name}-${event.model}.xlsx`
    //声明一个Excel表，表的名字用随机数产生
    let alldata = [];
    let row = ['品种','编号','长度','宽度','高度',"重量","密度","公司","入库日期","出库日期"]; //表格的属性，也就是表头说明对象
    alldata.push(row);  //将此行数据添加到一个向表格中存数据的数组中
//接下来是通过循环将数据存到向表格中存数据的数组中
    for (let key = 0; key<productInfo.data.length; key++) {
        let arr = [];
        arr.push(productInfo.data[key].main_info.name);
        arr.push(productInfo.data[key].main_info.model);
        arr.push(productInfo.data[key].main_info.length);
        arr.push(productInfo.data[key].main_info.width);
        arr.push(productInfo.data[key].main_info.height);
        arr.push(productInfo.data[key].main_info.weight);
        arr.push(productInfo.data[key].main_info.density);
        arr.push(productInfo.data[key].main_info.company);
        arr.push(productInfo.data[key].main_info.date_in);
        arr.push(productInfo.data[key].main_info.date_out);

        alldata.push(arr)
        }
        var buffer = await xlsx.build([{   
        name: "mySheetName",
        data: alldata
        }]); 
        //将表格存入到存储库中并返回文件ID
        return await cloud.uploadFile({
        cloudPath: dataCVS,
        fileContent: buffer, //excel二进制文件
        })
} catch (error) {
    console.error(error)
}
}