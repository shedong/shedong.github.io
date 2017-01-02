/**
 * Created by metrokobe on 2017/1/1.
 */

import React,{Component} from 'react';
import ListStyle from '../styles/list.less';

const List = ({title, content, index, number})=>{
    const arrows = ['Up', 'Down', 'Right', 'Left'];
    const colors = [
        '#FFE3FB', '#E6109B',
        '#FFDEC9', '#F5A433'
    ];
    const animateArrow = arrows[index%4];
    return <div className={`list-item animated bounceIn${animateArrow}`}>
        <h2 className="list-item-title" style={{}}>{title}</h2>
        <p className="list-item-content">{content}</p>
    </div>
}

export default List;