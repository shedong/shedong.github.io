/**
 * Created by metrokobe on 2017/1/1.
 */
import React,{Component} from 'react';
import TimeLineStyle from '../styles/timeLine.less';

const TimeLine = ({time, content, index})=>{
    const addonFloat = index%2===0?'left':'right';
    const animateArrow = index%2===0?'Left':'Right';
    return <div className={`time-line-item animated bounceIn${animateArrow}`}>
        <p className="time-line-item-content">{content}</p>
        <div className="time-line-item-addon">
            <span className="time-line-item-radius" style={{float: addonFloat}}></span>
            <span className="time-line-item-time">{time}</span>
        </div>
    </div>
}

export default TimeLine;