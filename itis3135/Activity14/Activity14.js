
$(document).ready(function() {
    $("a").click(function(){
        build($(this).attr('title') + ".json");
    })
});

    function build(fileName){
        $.ajax({
            url: fileName,
            dataType: "text",
            success: function(fileName){
                let jfile = $.parseJSON(fileName);
                $("main > h2").html(jfile.speakers[0].month);
                $("main > h1").html(jfile.speakers[0].title);
                $("main > h3").html(jfile.speakers[0].speaker);
                $("main > img").attr("src", jfile.speakers[0].image);
                $("main > p").html(jfile.speakers[0].text);



         
            }


        })
    }


 

   