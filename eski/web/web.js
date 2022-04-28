$(function() {
    $(".menu").on({
        mouseover: function(){
            $(this).css("color", "yellow");
        },
        mouseleave: function() {
            $(this).css("color","antiquewhite");
        }
    });
    // Slider Alanı
    animasyon();

    function animasyon(){
        let say = 1;
        setInterval(function(){
            let a = "g" + say + ".jpg";
            $("#h_goruntu").fadeOut(3000,function(){

                $(this).queue(function(){

                    $(this).attr("src",a);
                    $(this).dequeue();

                });

                $(this).fadeIn(3000);
            });

            say++;

            if(say == 5){
                say = 1;
            }
        },6000);
    }


    // Kapatma İşlemi

    $("#kapat").on({
        mouseover: function() {
            $(this).css("cursor","pointer");
        },
        click: function() {
            $("#cerez").css("display","none");
        }
    });
});