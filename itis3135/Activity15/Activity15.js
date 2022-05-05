$(document).ready(function() {

    $.get("facultyList.json", function(data){
        $.each(data, function() {
            $.each(this, function(key, val){
                $("#faculty").append(
                    "<img src= '" + val.image + "'>" +
                    "<h2>" + val.full_name + "</h2>" +
                   "<h3>" + val.department + "</h3>" +
                    "<p>" + val.bio + "</p>"
                );
            })
        })
    });
});

