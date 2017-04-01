/**
 * created by zhao at 2017-3-17
 */
import React, { PropTypes } from 'react'
import * as HomeConst from './homeConst'
import HomeMenuItem from './homeMenuItem'
import navigate from '../../router/navigate'

import { ModalConst, Modal } from '../../components'

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
                navigate.push(link);
            }
        }
    }

    render(){
        let { data } = this.props
        let items = HomeConst.MenuList.map((obj, index)=>{
            let str = obj.id == HomeConst.HOME_FOOT ? data.lbs : ""
            return (<HomeMenuItem key={index} descRealStr={str} menuData={obj} clickHandler={(type)=>this.onClickHandler(type)} />)
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