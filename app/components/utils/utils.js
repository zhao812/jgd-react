/**
 * created by zhao at 2017-3-16
 */

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