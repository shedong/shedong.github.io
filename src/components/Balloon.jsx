/**
 * Created by metrokobe on 2017/1/1.
 */

import React,{Component} from 'react';
import BalloonStyle from '../styles/balloon.less';
const colors = [
    '#8192D6', '#D9B3E6',
    '#DCF7A1', '#83FCD8'
];
const arrow = ['Up', 'Down', 'Right', 'Left'];
export default ({title, content, bgColor})=>{
    let randomNum = Math.floor(Math.random()*4);
    randomNum = randomNum>=4 ? 3 : randomNum;
    bgColor = bgColor ? bgColor : colors[randomNum];
    const animateArrow = arrow[randomNum];
    return (
        <div className={`balloon animated bounceIn${animateArrow}`}>
            <div className="balloon_title" style={{backgroundColor: bgColor}}>
                {
                    title
                }
            </div>
            <div className="balloon_content" style={{backgroundColor: bgColor}}>
                {
                    content
                }
            </div>
        </div>
    )
}