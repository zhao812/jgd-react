'use strict'
//import * as _ from "lodash";
import 'whatwg-fetch'  // 可以引入fetch来进行Ajax
import size from "lodash/size";
import each from "lodash/each";
import assignIn from "lodash/assignIn";

export const DATA_SAVE = 'DATA_SAVE';
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_POSTS = 'FETCH_POST';
export const FETCH_CLEAN = 'FETCH_CLEAN';


export const COOKIE_GET = 'COOKIE_GET';

export const ERROR_SAVE = 'ERROR_SAVE';
export const ERROR_CLEAR = 'ERROR_CLEAR';


export function errorSave(key,data){
    return {
        type:ERROR_SAVE,
        key,
        data
    }
}

export function errorClear(key,data){
    return {
        type:ERROR_CLEAR,
        key,
        data
    }
}

export function save(key,data){
    return {
        type:DATA_SAVE,
        key,
        data
    }
}


//获取 cookie
export function cookieGet(){
    return{
        type:"COOKIE_GET"
    }
}


/* 请求 开始 */
export function fetchRequest(key) {
  return {
    type: FETCH_REQUEST,
    key
  }
}



/*请求接受成功*/
export function fetchSuccess(key, json) {
  return {
    type: FETCH_SUCCESS,
    key,
    result:json,
    receivedAt: Date.now()
  }
}

export function fetchClean(key) {
  return {
    type: FETCH_CLEAN,
    key
  }
}


//body: type.toLocaleUpperCase()==="GET"?"":JSON.stringify(param)
/*对外公布请求参数*/
export function fetchPosts(key, url, param, type = "GET",headers={}, repType="json") {
    return (dispatch, getState) => {
        url = "api/"+url
        if(type.toLocaleUpperCase()==="GET"&&size(param)>0){
           url +="?"+toExcString(param)
        }

        // headers = headers?headers:{
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json',
        //             "Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS"
        //         };
        console.log("---------------start1----------------",headers);
        //cookie
        headers = assignIn({},{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS"
                }); //headers,getState().cookie
         console.log("------------- end ------------------",headers);

        dispatch(fetchRequest(key));
        return fetch(url, {
                mode: 'no-cors',
                method: type.toLocaleUpperCase(),
                headers: headers,
                credentials: 'same-origin',
                body: type.toLocaleUpperCase()==="GET"?undefined:(repType=="json"?JSON.stringify(param):param)
            })
            .then((res) => {
                console.log(res.status);
                return res.json();
            })
            .then((data) => {
                console.log('收到data', data);
                if(data.resultCode > 0){
                    dispatch(fetchSuccess(key, data));
                    return data.data;
                }else{
                    dispatch(errorSave(key, data));
                }
                
                // if(data&&(data.code===0||data.resultCode==="0"||data.resultCode===0||data.code==="0")){
                //     dispatch(errorClear("common,login"));
                // }else{
                //     console.info("你的请求 内部出错了",data);
                //     dispatch(errorSave("common",data));
                //     if(data&&(data.code==="200"||data.code===200||data.resultCode=="200"||data.resultCode==200)){
                //         dispatch(errorSave("login",data));
                //     }
                // }
                return null;
            })
           /* .catch((e) => {
                //console.error(e.message);
                console.info("你的请求报错了，详情=>",e);
                dispatch(errorSave("common",e));
                return e;
            })*/
    }
}

/*
export function errorSave(key,data){
    return {
        type:DATA_SAVE,
        key,
        data
    }
}
export function errorClear(key,data){
    return {
        type:DATA_SAVE,
        key,
        data
    }
}
 */



var toExcString = function(array,type={":":"=",",":"&"}){

    let result ="";
    for(var temp in array){
        result+= temp+'='+array[temp]+"&"
    }

    return result.substring(-1,result.length-1);
}

//密码加密混淆服务器端同样解密
export function encodePassword( input ) {
    var keyStr = "ABCDEFGHIJKLMNOP" + "QRSTUVWXYZabcdef" + "ghijklmnopqrstuv" + "wxyz0123456789+/" + "=";
    var output = "";
    var chr1, chr2, chr3 = "";
    var enc1, enc2, enc3, enc4 = "";
    var i = 0;
    do {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }
        output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2)
            + keyStr.charAt(enc3) + keyStr.charAt(enc4);
        chr1 = chr2 = chr3 = "";
        enc1 = enc2 = enc3 = enc4 = "";
    } while (i < input.length);

    return output;
}