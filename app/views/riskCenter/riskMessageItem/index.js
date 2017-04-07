/**
 * created by zhao at 2017-3-24
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ButtonSwitchIOS from '../../../components/button/buttonSwitchIOS'

import RiskMessageSelectList from '../riskMessageSelectList'
import RiskMessageSelectItem from '../riskMessageSelectItem'
import RiskMessageCityItem from '../riskMessageCityItem'

import './index.scss'

class RiskMessageItem extends React.Component {

    render(){
        let selectList, selectItems, { data, onSwitchHandler, onSelectChangeHandler } = this.props
        let title=data.label, code = data.code, inputArr = data.inputArr || [], selectTitle=data.labelSon||""
        let status = data.status
        selectItems = inputArr.map((obj, index) => {
            if(code == "dltx"){
                return <RiskMessageCityItem key={index} data={obj} status={status} />
            }else{
                return <RiskMessageSelectItem key={index} data={obj} itemWidth={inputArr.length > 1 ? "50%" : "100%"} status={status} onChangeHandler={onSelectChangeHandler} />
            }
        })
        selectList = inputArr.length > 0 ? <RiskMessageSelectList title={selectTitle}>{selectItems}</RiskMessageSelectList> : ""
        return(
            <div className="rick-item">
                <div className="rick-item-title-div">
                    <span>{ title }</span>
                    <ButtonSwitchIOS checked={status == 1 ? true : false} onChangeHandler={(e)=>{onSwitchHandler(code, e.target.checked)}} />
                </div>
                { selectList }
            </div>
        )
    }
}

RiskMessageItem.PropTypes = {
    data: PropTypes.shape({
        label: PropTypes.string.isRequired,
        code: PropTypes.string.isRequired,
        defaultVal: PropTypes.string.isRequired,
        status: PropTypes.number.isRequired,
        inputArr: PropTypes.array,
    }).isRequired,

    onSwitchHandler: PropTypes.func,
    onSelectChangeHandler: PropTypes.func
}

export default RiskMessageItem