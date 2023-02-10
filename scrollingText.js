function typedword(){
    $.ajax({
        type:"get", 
        url:"https://api.gmit.vip/get/love/",
        // url:"https://djy520.love/aip.php",
        data:{page:'index'},
        async:true,   
        success:function(word){
            var list = [];
            for(var i = 0 ;i < word.data.length ; i++){
                list.push(word.data[i]['text']);
            }
            $("#wordindex").typed({
                strings: list,              
                typeSpeed: 20,
                loop: true,
                backDelay: 3000,
            });
        }
    }); 
}
