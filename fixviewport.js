function fixViewPortJS(){
    var height = $(".header").height();
    var scale ="0.7";
    if(height){
        if(height==90){
            scale="0.5";
        }
    }
    var fix_viewport = "width=device-width,initial-scale="+scale+",minimum-scale="+scale+",maximum-scale=1.0,user-scalable=no";
    var viewport = $("meta[name='viewport']").attr("content").trim();

    function setViewPort(){
        if(typeof bui == 'undefined' && cordova){
            if ($("meta[name='viewport']").length > 0) {
                $("meta[name='viewport']").attr("content", fix_viewport);
            }else{
                var element = document.createElement('meta');
                element.name = "viewport";
                element.content = fix_viewport;
                var head = document.getElementsByTagName('head')[0];
                head.appendChild(element);
            }
        }
    }
    setViewPort();
    setTimeout(function(){
        if(viewport!=fix_viewport && typeof bui == 'undefined' && typeof app.ajax!='undefined'){
            fixViewPortJS();
        }
    },50);
}
fixViewPortJS();