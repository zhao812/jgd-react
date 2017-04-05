/**
 * created by zhao at 2017-3-17
 */
import React, { PropTypes } from 'react'
import { browserHistory } from 'react-router'
import * as HomeConst from '../reducer/const'
import HomeMenuItem from '../homeMenuItem'

import * as ModalConst from '../../../components/modal/modalConst'
import Modal from '../../../components/modal'

class HomeMenuListView extends React.Component{
    //菜单点击事件
    onClickHandler(link){
        if(link != ""){
            let isAlert, { data } = this.props, isOpen = data.isOpen
            if(HomeConst.HOME_MEMBER_LIST.find(value => value == link) && isOpen == 1){
                isAlert = true
            }
            if(isAlert){
                Modal.alert({}, ModalConst.MODAL_MESSAGE_CODE_SKIN).then(function(data){
                    console.log(111, data)
                })
            }else{
                browserHistory.push(link);
            }
        }
    }

    render(){
        let { data } = this.props, isOpen = data.isOpen
        let items = HomeConst.MenuList.map((obj, index)=>{
            let str = obj.id == HomeConst.HOME_FOOT ? data.lbs : ""
            let iconStatus = HomeConst.HOME_MEMBER_LIST.find(value => value == obj.link) && isOpen == 1 ? false : true
            return (<HomeMenuItem key={index} descRealStr={str} iconStatus={iconStatus} menuData={obj} clickHandler={()=>this.onClickHandler(obj.link)} />)
        })

        return(
            <div className="home-open-bottom-div">
                {items}
            </div>
        )
    }
}

HomeMenuListView.PropTypes = {
    data : PropTypes.shape({
        lbs: PropTypes.string.isRequired,
        isOpen: PropTypes.string.isRequired
    }).isRequired
}

export default HomeMenuListView