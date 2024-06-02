let a = 0;
console.log(a);

//ベースはresolve、rejectは不具合の際に使用
new Promise((resolve, reject) => {
    setTimeout(() => {
        a = 1;
        resolve(a)
    }, 2000);
}).then((b) => {
    console.log(b);
    return b;
}).then((b) => {
    //上記にreturnを実装しないと表示はundefined
    console.log(b);
}).catch((c) => {
    console.log('catchが実行', c)
})