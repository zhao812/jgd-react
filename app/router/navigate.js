// 文件名称: navigate.js
//
// 创 建 人: zhao
// 创建日期: 2017/2/27 09:54
// 描    述:

let histories = [];

let navigate = {
    history: null,
    install(history){
        this.history = history;
        history.listen(listenerFn);
    },

    /**
     * path 跳转url
     * obj  type:back(后退)|forward(前进，默认，不用带参数) transitionName:可以自己指定的页动画名
     */
    push(path,obj){
        this.history.push({pathname:path, state:obj});
    },

    replace(path,obj){
        this.history.replace({pathname:path, state:obj});
    },

    goBack(){
        histories.pop();
        let location = histories.pop();
        if(location){
            let type = 'back',
                path = location.pathname;
            this.push(path, {type:type});
        }
    }
};

let listenerFn = (location) => {
    histories.push(location);
}

export default navigate;