// let fs = require('fs');

// // let txt = fs.readFileSync('data.txt');
// // console.log(txt.toString());
// // console.log('over');
// fs.readFile('data.txt', function(err, data) {
//     if(err) {
//         console.log('err!err code:' + err);
//     } else {
//         console.log(data.toString());
//     }
// });
// console.log('over');
/***---------------- */
// let events = require('events');
// let eventEmitter = new events.EventEmitter();
// eventEmitter.on('eventName', eventHandler);
// eventEmitter.emit('eventName');
/****-------------------- */
// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// var connectHandler = function connected() {
//    console.log('连接成功。');
  
//    eventEmitter.emit('data_received');
// }

// eventEmitter.on('connection', connectHandler);
 
// eventEmitter.on('data_received', function(){
//    console.log('数据接收成功。');
// });

// eventEmitter.emit('connection');

// console.log("程序执行完毕。");
/***--------------------------- */
let events = require('events');
let eventEmitter = new events.EventEmitter();

event.on('', function() {
    console.log('some_event 被触发');
});
setTimeout(function() {
    event.emit('some_event');
}, 1000);

// event.addListener();
event.initEvent('');