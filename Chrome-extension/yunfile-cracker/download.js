$(document).ready(function() {
    
    var script1   = document.createElement("script");
    script1.type  = "text/javascript";
    script1.text  = "function doDownload() {alert(\"Cracking...\");return true;}";
    document.body.appendChild(script1);
    
    var script2   = document.createElement("script");
    script2.type  = "text/javascript";
    script2.text  = "function downSubmit(){                             \
                        if(saveCdnUrl == \"\"){                         \
                            alert(\'下载响应超时，请过一会重试.\');          \
                        }else{                                          \
                            var form=document.getElementById(\"d_down_from\");  \
                            form.setAttribute(\"action\",saveCdnUrl+\"view?fid=reviveron90cbacd5ce972524\");\
                            form.submit();      \
                        }\
                    }";
    document.body.appendChild(script2);
    
    
    
    var downpage_link = document.getElementById('downpage_link');
    
    $("#inputDownWait").empty();
    $("#inputDownWait").append("                                       \
        <input id=\"crack_button\" type=\"button\"                     \
            value=\"破解下载\"                                           \
            style=\"width: 120px; height: 33px;                         \
            font-weight: bold; background:#CC0000; color:white\">");

    $("#crack_button").click(function() {
        window.location = downpage_link.href;
    });
});

// Thanks to 
// http://www.luacloud.com/2012/crack-yunfile-network-disk-30-wait-for-restrictions.html
