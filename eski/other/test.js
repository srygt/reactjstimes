            // function funkName (isim,soyisim){
            //     document.write("Hoşgeldiniz " + isim + " " + soyisim);
            // }
            // funkName('Hasan','Aydın');

            // function toplama(sayi1,sayi2){
            //     return sayi1 + sayi2;
            // }
            // var x = toplama(10,16)*5;
            // document.write(x);

            // function tonHesapla(kg){
            //     var x = kg / 1000;

            //     return x;
            // }

            // var a= tonHesapla(100);

            // document.write(a);
            
            // Sayılar
            //var x = "Ders İşliyorum. Beni rahatsız etmeyin. Son";
            //var y = "Seninle Ne Yapabilirim ?";
            //var a = x.length;
            //var a = x.indexOf("etme");
            // var a = x.lastIndexOf("Son");
            // document.write(a);
            //var a = x.replace(/Ben/i, "Sen");
            //var a = x.substr(-7,9);
            //var a = x.slice(-17,-10); // Sondan 17 karakterden sonra 10 karakteri ekrana bas
            //var a = x.substring(-19,-7); // sondaki 19. karakterden itibaren 7 karakteri ekrana bas
            //var a = x.toUpperCase(); // Tüm harfleri büyük harfe dönüştür
            //var a = x.toLowerCase(); // Tüm harfleri küçük harfe dönüştür
            //var a = x.fontsize(24); // Yazının fontunu ayarlar
            //var a = x.charAt(25);// Karakterin Kaçıncı satırda olduğunu gösterir
            //var a = x.charCodeAt(); // Karakterin Kaçıncı satırda olduğunu gösterir
            //var a = x.codePointAt(); //
            //var a = x.concat(" ",y); // İki frklı değişkeni birleştir
            //var a = x.trim(); // Sağdan soldan boşluk al
            //var a = x.split("  "); // String array dönüştür
            //document.write(a);
            //Arraylar
            //var meyveler = ['elma','armut','erik','çilek'];
            //var meyve1 = meyveler[1];
            //var deneme = meyveler[meyveler.length-1]; // son indexi yazar
            //var deneme = meyveler.length;// toplam sayısı verir
            //var deneme = meyveler.push('Ayva','Nar','Portakal');// Yeni eleman eklenebilir
            //var deneme = meyveler.pop();// Son elemanı ekrandan siler
            //var deneme = meyveler.shift();// İlk elemeanı siler
            //var deneme = meyveler.unshift('Limon'); // B<irinci sıraya eelamn eklemedir
            //var deneme = meyveler.slice(1);
            //var deneme = meyveler.splice(2,0,"Greyfut"); // 2.elemandan sonrasına ekle
            // var a      = ['elma','armut','erik','çilek'];
            // var b      = [100,15,45,6,89,42];
            // var c      = [{marka:"Audi",model:"A4",modelyili:2004,vites:"Manuel",yakit:"Benzin LPG"},
            //               {marka:"Bmw",model:"500D",modelyili:2014,vites:"Otomatik",yakit:"Benzin"},
            //               {marka:"Mercedes",model:"Benz",modelyili:2020,vites:"Yarı Otomatik",yakit:"Dizel"}                        
            //             ];

            // function arabalariGoster(){
            //     document.getElementById("soon").innerHTML=
            //     c[0].marka + " " +c[0].model + " " + c[0].modelyili + " " + c[0].vites + " " + c[0].yakit + "<br>" +
            //     c[1].marka + " " +c[1].model + " " + c[1].modelyili + " " + c[1].vites + " " + c[1].yakit + "<br>" +
            //     c[2].marka + " " +c[2].model + " " + c[2].modelyili + " " + c[2].vites + " " + c[2].yakit;
            // }
            // function sirala(){
            //     c.sort(function(x,y){ return x.modelyili-y.modelyili });
            // arabalariGoster();
            // }
            // arabalariGoster();
            // sirala();
            //document.getElementById('son').innerHTML = b + "<br><br>";
            //a.reverse();
            //b.sort();// Küçükten büyüğe ilk rakama göre sırala
            //b.sort(function (x, y){ return x-y } ); // Eğer x-y göre sonuç eksi çıkarsa x, ynin çnone atar. eğer sonuç artı çıkarsa y x'in önüne atr eğer sonuç 0 çıkarsa sıralama yan yana gelir.Ayrıca x-y küçükten büyüğe y-x olurda büyükten küçüğe sıralama yapar.
            //var c = b[0]; // En küçük sayıyı verir
            //var c = b[b.length-1];// Maksimum sayıyı verir
            //document.write(c);
            //document.getElementById('soon').innerHTML = b + "<br><br>";
            //document.write(deneme);
            //document.write(meyveler);
            
            // Array Iteration

            //var sayi = [45,60,76,27,35,103,55,27];
            // var yazi = "";
            // function yazdir(value,index,array){
            //     yazi = yazi + value + "<br>";
            // }
            //sayi.forEach(yazdir);
            //document.getElementById('soon').innerHTML =yazi;
            // Map Metodu
            // function ucIleCarp(value,index,array){
            //     return value * 3;
            // }
            // var sayi2 = sayi.map(ucIleCarp);
            // document.getElementById("soon").innerHTML = sayi2;
            // document.write(sayi);
            // Filter
            // function deneme(value,index,array){
            //     return value > 15;
            // }
            // var sayi2 = sayi.filter(deneme);
            //  document.getElementById("soon").innerHTML = sayi2;
            //  document.write(sayi);
            // Reduce Toplama
            // function denemerad(total,value,index,array){
            //     return total + value;
            // }
            // var sayi2 = sayi.reduce(denemerad);
            //  document.getElementById("soon").innerHTML = sayi2;
            //  document.write(sayi);  
            // Every
            // function denemevry(value,index,array){
            //     return value > 18;
            // }
            // var sayi2 = sayi.every(denemevry); // Eğer elemanların hepsi 18 den büyükse true bir tanesi bile küçükse false döner
            //  document.getElementById("soon").innerHTML = sayi2;
            //  document.write(sayi); 
            // Some Eğer tüm sayılar value değerinden büyükse true dön
            // function denemesum(value,index,array){
            //     return value > 11;
            // }
            // var sayi2 = sayi.some(denemesum); // Eğer elemanların hepsi 18 den büyükse true bir tanesi bile küçükse false döner
            //  document.getElementById("soon").innerHTML = sayi2;
            //  document.write(sayi);
            // Find metodu ile value ilk değeri bul
            // function denemefind(value,index,array){
            //     return value > 18;
            // }
            // var sayi2 = sayi.find(denemefind); // Eğer elemanların hepsi 18 den büyükse true bir tanesi bile küçükse false döner
            //  document.getElementById("soon").innerHTML = sayi2;
            //  document.write(sayi);                 
            // Find index metodu
            // function denemefindindex(value,index,array){
            //     return value > 18;
            // }
            // var sayi2 = sayi.findIndex(denemefindindex); // Eğer elemanların hepsi 18 den büyükse true bir tanesi bile küçükse false döner
            //  document.getElementById("soon").innerHTML = sayi2;
            //  document.write(sayi); 
                     
            // Object Methods
                // var calisan = {
                //     ad  : "ali",
                //     sad : "demir",
                //     maas: 9000,
                //     dep : "IK",
                //     tamAd: function(){
                //         return this.ad + " " + this.sad + " " + this.maas;
                //     },
                //     zamYap: function(){
                //         return this.ad + " adlı kişiye %5 zam yaoıldı.";
                //     }
                // }
                // var a = calisan.tamAd();
                // var a = calisan.zamYap();

                // //var a = calisan.ad;
                // document.write(a);
                // Date
                // var tarih = new Date(2022,11,21,12,34,12,00);
                // var tarih = new Date();
                // a = tarih.getFullYear();
                // a = tarih.getMonth();
                // a = tarih.getDate();
                // a = tarih.getHours();
                // a = tarih.getMinutes();
                // a = tarih.getSeconds();
                // a = tarih.getMilliseconds();
                // a = tarih.getDay();
                // document.write(a);
                // tarih.setFullYear(2020);
                // tarih.setMonth(4);
                // document.write(tarih);
                // Math Kütüphanesi
                // var x = Math.PI;
                // var x = Math.round(6.5);
                // var x = Math.max(1,2,3,4,54);
                // var x = Math.min(1,2,3,4,54);
                // var x = Math.ceil(21.8); // sayı ne olursa olsun bir üst sayıya yuvarlıyor.
                // var x = Math.floor(21.2);// Alt sayıya yuvarlıyor
                // var x = Math.pow(7,5); // Sayının karesini alıyor
                // var x = Math.round(2.3); // Alt
                // document.write(x);
                // Type Conversion

                // var a = String(Date());
                // var b = 16;
                // var c = Number(Date());
                // document.write(typeof c);
                // var a = ["Elma","Uzum","Portalak"];
                // var b = false;
                // document.write(b.constructor);

                // var a = ["Elma","Uzum","Portalak"];

                // function kontrol(x){
                //     return x.constructor.toString().indexOf("Array")>-1;
                // }
                // var b = kontrol(a);

                // document.write(b);
                // var a = 10;
                // var b = "10";
                // var c = (a!==b); // === eşit olunca hem sayı değerlerini hemde sayı türlerini kontrol ediyor
                // document.write(c);

                // For Döngüsü

                // var yazi = "";
                // var meyve = ["Elma","Armut","Kayısı","Karpuz","Ayva"];

                // for (let i = 0; i <=10; i++) {
                //     for (let j = 0; j <= 10; j++) {
                //         yazi += i + "*" + j + "=" + (i*j) +"<br>";
                //     }
                //  yazi += (i+1)+"...................<br>";   
                // }

                // document.getElementById("soon").innerHTML = yazi;

                // For-In & For-Out
                // var yazi = "";
                // var meyve = ["Elma","Armut","Kayısı","Karpuz","Ayva"];
                
                // for (let i = 0; i < meyve.length; i++) {
                //     yazi += meyve[i]+"<br>";        
                // }
                // var a;
                // for (a in meyve){ // index  degerlerini al
                //     yazi += meyve[a]+"<br>";
                // }
                // for (a of meyve){ // sadece  degerlerini al
                //     yazi += a+"<br>";
                // }
                //document.getElementById("soon").innerHTML = yazi;
            // Break & Continue

            //var yazi = "";
            
            //for (let i = 0; i < 10; i++) {
                // if(i==5){
                //     break; // Bulunguduğu yerde döngüyü sonlandırır
                // }

            //     if(i==5){
            //         continue; // Döngüyü başa döndürür
            //     }
            //     yazi += "Sayı :" +i + "<br>";
            // }

            //document.getElementById("soon").innerHTML = yazi;
                // "use strict"
                // x = 5;

                // document.write(x);
            // document.getElementById("div1").innerHTML = "Javascript";
            // document.getElementById("div2").innerHTML = "Jquery";
            // document.getElementById("div3").innerHTML = "React Js";
            // document.getElementById("div4").innerHTML = "Vue Js";
            //document.getElementsByClassName("class1")[1].innerHTML = "Deneme";

            //document.querySelectorAll("div")[0].innerHTML = "Deneme";
            //document.getElementById("div1").className = "class2";
            //document.getElementById("div1").innerHTML = "Deneme";
            // Yazı Yazma

            //var a = document.getElementById("div1").innerHTML;
            //document.getElementById("div2").innerHTML="<p>Deneme</p>";
            //var b = document.getElementById("div1").innerText;
            //document.getElementById("div3").innerText = b;
            //document.getElementById("div1").remove();
            // var a = document.getElementById("div1");

            // a.style.color = "blue";
            // a.style.fontSize = "44px";
            // a.style.paddingTop = "20px";
            // a.style.marginTop = "15px";

                        // function tiklamaIslemi(){
            //     document.getElementById("div1").innerText = "Denemedir Dikkate Almayn";
            // }

            // function islem(){
            //     document.getElementById("inpt").style.width ="100px";
            //     document.getElementById("inpt").style.height = "100px";
            // }            
            // function islem2(){
            //     document.getElementById("inpt").style.width ="50px";
            //     document.getElementById("inpt").style.height = "50px";
            // }
            