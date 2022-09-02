function header(){
    $.ajax({
        url: "./html/header.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}

function localNavigation(){
    $.ajax({
        url: "./html/localNavigation.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}
