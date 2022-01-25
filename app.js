$(".choice1").click(function(){
    // $(".Form1").css("background","magenta");
    $(".Form1").css("display","none");
    $(".Form2").css("display","block");
    $(".choice2").click(function(){
        $(".Form2").css("display","none");
        $(".Form3").css("display","block");
        $(".choice3").click(function(){
            $(".Form3").css("display","none");
            $(".Form4").css("display","block");
            $("button").click(function(){
               let name=document.querySelector('input[name=Name]').value;
            //    let number= document.querySelectorAll('input[name=Number]').value;
            //    let email= document.querySelectorAll('input[name=Email]').value;
                alert("hello! "+name+" Your details have been successfully stored and will surely contact you with a suitable plan for you");
               
            })
        })
    });
});