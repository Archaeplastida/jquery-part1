$(document).ready(function(){ //step 1
    console.log("Let's get ready to party with jQuery!")
})

$("article img").addClass("image-center"); //step 2

$("p").eq($("p").length - 1).remove(); //step 3

$("#title").css("font-size", `${Math.floor(Math.random()*101)}px`); //step 4

$("ol").append("<li>Don't mind me, I'm just a new item in the list.</li>"); //step 5

$("aside.col-sm-4").html("<p>We apologize for a list of such cringe to even exist.</p>"); //step 6

$("div.mb-5").on("blur", ".col-sm-4 input", function(){ //step 7
    if(!($(".col-sm-4 input").eq(0).val())){
        $(".col-sm-4 input").eq(0).val("0");
    } else if(!($(".col-sm-4 input").eq(1).val())){
        $(".col-sm-4 input").eq(1).val("0");
    } else if(!($(".col-sm-4 input").eq(2).val())){
        $(".col-sm-4 input").eq(2).val("0");
    }
    $("body").css("background-color", `rgb(${$(".col-sm-4 input").eq(0).val()}, ${$(".col-sm-4 input").eq(2).val()}, ${$(".col-sm-4 input").eq(1).val()})`)
})
$("div.mb-5").on("change keyup", ".col-sm-4 input",  function(){
    $("body").css("background-color", `rgb(${$(".col-sm-4 input").eq(0).val()}, ${$(".col-sm-4 input").eq(2).val()}, ${$(".col-sm-4 input").eq(1).val()})`)
});

$("article img").on("click", function(){ //step 8
    $(this).remove();
})