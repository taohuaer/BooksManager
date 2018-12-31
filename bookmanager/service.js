// 业务逻辑
const data = require('./data.json');
const fs = require('fs');
const path = require('path');

// 把数据写入文件中
let writeDataToFile = (res) => {
        fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(data), (err) => {
            if (err) {
                res.send("服务器出现错误")
            }
            // 重新跳转页面
            res.redirect('/')
        })
    }
    // 渲染主页面
exports.showIndex = (req, res) => {

        res.render('index', { list: data })
    }
    // 跳转编辑页面
exports.toEditBook = (req, res) => {
        let id = req.query.id;
        let book = {};
        data.forEach((item) => {
            if (id == item.id) {
                book = item;
                return;
            }
        });
        res.render('editBook', book)
    }
    // 编辑图书更新数据
exports.editBook = (req, res) => {
        let info = req.body;
        data.forEach((item) => {
                if (item.id == req.body.id) {
                    for (let key in info) {
                        item[key] = info[key];
                    }
                    return;
                }
            })
            // 把数据写入文件
        writeDataToFile(res);
    }
    // 删除图书信息
exports.deleteBook = (req, res) => {
        let id = req.query.id;
        res.send('delete ok')
        data.forEach((item, index) => {
            if (item.id == req.query.id) {
                data.splice(index, 1)
                return;
            }
        })
        writeDataToFile(res);
    }
    // 跳转到添加图书的页面
exports.toAddBook = (req, res) => {
        res.render('addBook', {})
    }
    // 添加图书并保存数据
exports.addBook = (req, res) => {
    let book = req.body;
    console.log(book)
    let newBook = {};
    for (let key in book) {
        newBook[key] = book[key]
    }
    newBook.id = maxBookId() + 1;
    data.push(newBook)
    writeDataToFile(res);
}
let maxBookId = () => {
    let arr = [];
    data.forEach((item) => {
        arr.push(item.id)
    });
    return Math.max.apply(null, arr)
}