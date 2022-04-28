// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

// arr.map(function(x){
//     console.log(x);
// });

//arr.map(x => console.log(x));

// arr.map((x)=>{
//     console.log(x);
// })

// Map Fonksiyonu

    //arr.map(x=>console.log(x));

// Some Fonksiyonu
    // const result = arr.some((number)=>{
    //     return number>17;
    // });
    // console.log(result);

// Every Fonksiyonu

    // const result = arr.every((number)=>{
    //     return number => 5;
    // });
    // console.log(result);

// findIndex Fonksiyonu

    // const result = arr.findIndex((number)=>{
    //     return number > 3;
    // });
    //  console.log(result);

// filter Fonksiyonu

    // const result = arr.filter((number)=>{
    //     return number<3;
    // });
    // console.log(result);


// Rest ve Spered Kullanımı
    // const object = {
    //     a:1,
    //     b:2,
    //     c:3,
    //     d:4
    // };

    // const {a,b,c,d} = object;
    // console.log(a,b,c,d);

    // const object2 = {
    //     e:5,
    //     ...object
    // }

    //console.log(object2);
    // const arr = [1,2,3,4,5,6,7,8,9];
    // const arr2= [...arr,10,11,12,13,14,15,16,17,18];
    // console.log(arr2);

// Promise Fonksiyonu Diyelim ki bir hamburgerciye gittiniz ve kasada siparişinizi verdiniz. Kasiyer de size siparişinizi hazırladıklarında haber vermek üzere bir elektronik alet teslim etti. Şu anda hamburger bizim için gelecekte elde edebileceğimiz bir değer. Elimizdeki aygıt da bu değere ulaşmamız için müessesenin bize verdiği sözün (işte promise) bir göstergesi. Aygıt bildirim alıncaya kadar bekleme (pending) durumundadır. Bildirim geldiğinde ise ya hamburgerimiz başarılı (resolved) bir şekilde hazırlanmıştır, ya da beklenenin dışına çıkarak başarısız (rejected) olmuştur. Başarılı durumda afiyetle yemeğimize yumuluruz tabii ki. Başarısız durum biraz daha nahoş olacaktır. Kasiyerle kavga ederek veya yeniden sipariş vererek hatalı durumu yönetmemiz (error handling) gerekir.
    // new Promise(function(resolve, reject) {
    //     const islem = 1;
    //     if(islem){
    //         resolve();
    //     }else{
    //         reject();
    //     }
    // }).then(()=>{
    //     console.log('İşlem tamam');
    // }).catch(()=>{
    //     console.log('Hata Var');
    // });
    // const IslemKontrol = new Promise(function(resolve, reject) {
    //     const islem = 1;
    //     if(islem){
    //         resolve(islem);
    //     }else{
    //         reject();
    //     }
    // });
    // IslemKontrol.then((e)=>{
    //     console.log(e);
    // }).catch(()=>{
    //     console.log('Hata Var');
    // });    

// Async & Await Kullanımı

    // const axios = require('axios');
    // getData = async () => {
    //     await axios.get('https://matgis.com.tr')
    //     .then((res)=>{
    //         console.log(res);
    //     })
    //     .catch((e)=>console.log(e));
    // }

    // getShow = async () => {
    //     await getData();
    //     console.log('veri çekmeden basma');
    // }
    
    // getShow();

// Export Kullanımı
    // const result = require('./export');
    // const {hesapla,cikar} = require('./export');
    // console.log(result.sname);
    // console.log(hesapla(3,4));
    // console.log(cikar(7,4));