/**
 * Created by metrokobe on 2017/1/2.
 */
import React,{Component} from 'react';
import SkillBarStyle from '../styles/skillBar.less';
const SkillBar = ({title, score, bgColor})=>{
    return <div className="skill-bar-item animated slideInLeft">
        <span className="skill-bar-item-title">{title}</span>
        <div className="skill-bar-item-length">
            <div className="skill-bar-item-score" style={{width: `${score}%`}}>
            </div>
        </div>
    </div>
}

export default SkillBar;