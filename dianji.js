// 鼠标点击特效（自定义鼠标右左键）
jQuery(function () {
    $("html").click(function(e) {
        var a_idx = Math.floor((Math.random() * 30));/*鼠标点击随机出现一句话，代码数字请与添加的短句数量相一致*/
        var a = new Array(
            "希望全世界停电 我可以偷偷跑去亲你", "我会爱你很久很久","我在贩卖日落 你像神明一样将阳光撒向我","陪伴本身就是这个世界上最了不起的安慰方式", "嘿，我是一朵云ლ(⁰⊖⁰ლ)", "❤"
               ,"陪你把岁月熬成清酒 陪你把孤夜熬成温柔","❤","月光下邂逅的是爱情和你","祝眉目舒展 顺问冬按","只想拥你入怀","这个世界乱糟糟的 而你干干净净","日月星辰之外 你是第四种难得","我会在每个有意义的时刻 远隔山海与你共存","山脚下遇见的你 我们山顶见","想试试在你迎面跑来一把抱住你的感觉","在生命里的旅程里 遇见你真好","如果不曾遇见 岂知生命如何","❤"
               ,"想和你一起走过下雪后的天","在我贫瘠的土地上你是最后的玫瑰","今晚月色很美呢","r=a(1-sinθ)","天青色等烟雨 而我在等你","你是我这一生等了半世未拆的礼物","你养我 我养你 两人爱情甜蜜蜜","人的一生会遇见两个人 一个惊艳了时光 一个温柔了岁月","你不用多好，我喜欢就好","愿有岁月可回首 且以深情共白头"
             );/*请在此添加句子*/
        var color1 = Math.floor((Math.random() * 255))
        var color2 = Math.floor((Math.random() * 255));
        var color3 = Math.floor((Math.random() * 255));

        var $i = $("<span />").text(a[a_idx]);
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 9999999999999 ,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-family":"mmm",
            "fontSize":Math.floor((Math.random() * 5)+10),/*文字大小在10px到15px之间*/
            "font-weight": "bold",
            "color": "rgb("+color1+","+color2+","+color3+")",/*随机颜色*/
            "-webkit-user-select":"none",
            "-moz-user-select":"none",
            "-ms-user-select":"none",
            "user-select":"none",
        });
        $("body").append($i);
        $i.animate({
                "top": y - 200,
                "opacity": 0
            },
            3000,/*句子悬浮时间*/
            function() {
                $i.remove();
            });
    });
});
