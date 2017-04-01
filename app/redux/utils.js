/**
 * created by zhao at 2017-3-16
 */

//提供ajax的库
import fetch from 'isomorphic-fetch'


function timedGetText( url, time, callback ){
    var request = new XMLHttpRequest();
    var timeout = false;
    var timer = setTimeout( function(){
        timeout = true;
        request.abort();
    }, time );
    request.open( "GET", url );
    request.onreadystatechange = function(){
        if( request.readyState !== 4 ) return;
        if( timeout ) return;
        clearTimeout( timer );
        if( request.status === 200 ){
            callback( request.responseText );
        }
    }
    request.send( null );
}

export const sendMsg = (url, cb_ok, cb_err, data) => {
    url = "/api/" + url;
    timedGetText(url, 8000, function(obj){
        if(typeof obj  == "string"){
            obj = JSON.parse(obj);
        }
        cb_ok(obj.data);
    })
    return;


    url = window.location.origin + "/api/" + url;
    data = data || null;
    var type = data ? "POST" : "GET";
    var isBack = false;
    // setTimeout(function(){
    //     if(isBack == false){
    //         LoadingCircle.start();
    //     }
    // }, 100);
        
    $.ajax({
        url : url,
        timeout : 8000,
        data : data,
        type : type,
        dataType : 'json',
        success : function(obj){
            if(typeof obj  == "string"){
                obj = JSON.parse(obj);
            }
            if(parseInt(obj.resultCode) > 0){
                if(cb_ok) cb_ok(obj.data || null);
            }else{
                if(obj.resultCode == -1001){
                    utils.appLogin();
                }else if(obj.resultCode == -2){
                    if(cb_err) cb_err(obj);
                }else if(obj.resultCode == -1005){
                    // MsgBox.alert("操作超时，请重新进入自助解封流程", "", function(){
                    //     utils.goBackAppLogin();
                    // });
                }else{
                    // MsgBox.alert(obj.message);
                    if(cb_err) cb_err(obj);
                }
            }
            isBack = true;
            // LoadingCircle.end();
        },
        complete : function(request,status){
            if(status=='timeout') {//超时,status还有success,error等值的情况
                request.abort();
                // isBack = true;
                LoadingCircle.end();
                // if(MsgBox){
                //     MsgBox.alert("连接超时!请重试", "提示");
                // }
            }
        }
    });
}

/**
 * 格式化显示时间
 * @param time
 * @param format  如"yyyy.MM.dd HH:mm"   "yyyy.MM.dd"
 * @returns {*}
 */
export const formatTime = (time, format) => {
    let t = new Date(time);
    let tf = function (i) { return (i < 10 ? '0' : '') + i };
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
        switch (a) {
            case 'yyyy':
                return tf(t.getFullYear());
                break;
            case 'MM':
                return tf(t.getMonth() + 1);
                break;
            case 'mm':
                return tf(t.getMinutes());
                break;
            case 'dd':
                return tf(t.getDate());
                break;
            case 'HH':
                return tf(t.getHours());
                break;
            case 'ss':
                return tf(t.getSeconds());
                break;
        }
    })
}

/**
 * 根据用户安全等级获取背景对应颜色
 * @param level
 * @returns {string}
 */
export const getSecurityBgColorByLevel = level => {
    switch(level){
        case 1: return "#ff5959, #ff3a3c"
        case 2: return "#ff7a45, #ff4800"
        case 3: return "#eca926, #ff8525"
        case 4: return "#7ed240, #61ba2a"
        case 5: return "#00b3f3, #00a9e5"
        case 6: return "#2493f7, #365ceb"
        case 7: return "#4c6ff7, #6d32eb"
        default : return "#ff5959, #ff3a3c"
    }
}

/**
 * 根据用户安全等级获取按钮对应颜色
 * @param level
 * @returns {string}
 */
export const getSecurityBtnColorByLevel = level => {
    switch(level){
        case 1: return "#dd000a"
        case 2: return "#ff0000"
        case 3: return "#ff5800"
        case 4: return "#48e22a"
        case 5: return "#3be1fa"
        case 6: return "#00a2ff"
        case 7: return "#c000ff"
        default: return "#ff000c"
    }
    return color;
};

/**
 * 根据用户安全等级获取文字对应颜色
 * @param level
 * @returns {string}
 */
export const getSecurityFontColorByLevel = level => {
    switch(level){
        case 1: return "#ff000c"
        case 2: return "#ff4800"
        case 3: return "#ff7600"
        case 4: return "#63c228"
        case 5: return "#00bcff"
        case 6: return "#005eff"
        case 7: return "#6000ff"
        default: return "#ff000c"
    }
}