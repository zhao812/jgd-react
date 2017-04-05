'use strict'
import * as React from 'react';

import styles from  "./alert.scss";
import Velocity from '../velocity'
import * as ModalConst from './modalConst'

class Alert extends React.Component {
    constructor(props) {
        super(props);
        this.handOk = this.handOk.bind(this);
        this.handCancel = this.handCancel.bind(this);
        this.callBack = this.callBack.bind(this);
    }

    handOk(){
        this.callBack(ModalConst.YES);
    }

    handCancel(){
        this.callBack(ModalConst.NO)
    }
    callBack(data){
         let {callBack} = this.props;
          callBack&&callBack(data);
    }
    close(){
        
    }
    render() {
        let {message,show,title,children,isConfirm,closable} = this.props;
       
        return (
            <Velocity  show={show}>
                <div className={"virtual-modal-wrap "}>
                    <div className={"virtual-modal "} >
                        <button onClick={this.handCancel} className={"virtual-modal-close"+(closable?"":" hide")}>X</button>
                        <div className="virtual-modal-header">
                            <p>{title}</p>
                        </div>
                        <div className="virtual-modal-body">
                            <p>{message}</p>
                        </div>
                        <div className="virtual-modal-footer">
                            {this.renderBtns()}
                        </div>
                    </div> 
                </div>
            </Velocity>
        )
    }
    
    renderBtns(){
        let {actions,isConfirm} = this.props;
         if(isConfirm===true){
             return (
                 <div className="virtual-modal-button-group-h">
                    <a className="virtual-modal-button" onClick={this.handCancel}>取消</a>
                    <a className="virtual-modal-button" onClick={this.handOk}>确定</a>
                </div>
             );
        }else{
            return (
                <div className="virtual-modal-button-group-v">
                    {actions.length>0&&actions}
                    {actions.length===0&&(
                        <a className="virtual-modal-button" onClick={this.handOk}>确定</a>
                    )}
                </div>
            )
        }
    }
};

Alert.defaultProps = {
    title:"",
    message:'',
    show:false,
    isConfirm:false,
    closable:true,//是否显示删除按钮
    actions:[]
}
// Alert.contextTypes = {
//   message: React.PropTypes.string.isRequired,
//   show:React.PropTypes.bool.isRequired,
//   callBack:React.PropTypes.func.isRequired,
// };
module.exports = Alert;


