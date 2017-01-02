/**
 * Created by metrokobe on 2017/1/1.
 */

import React,{Component} from 'react';
import CardStyle from '../styles/card.less'

class Card extends Component {
    static propTypes = {
        bgColor: React.PropTypes.string,
        type: React.PropTypes.oneOf(['random', 'list', 'timeLine'])
    }
    renderByType(type){
        switch (type) {
            case 'random':
                return this.renderRandom();
            case 'timeLine':
                return this.renderLineTime();
            case 'list':
                return this.renderList();
            case 'skillBar':
                return this.renderSkillBar();
            case 'contact':
                return this.renderContact();
        }
    }
    renderContact(){
        const {children} = this.props;
        return <div className="contact">
            { children }
        </div>
    }
    renderSkillBar(){
        const {children} = this.props;
        return <div className="skill-bar">
            { children }
        </div>
    }
    renderLineTime(){
        const {children} = this.props;
        return <div className="time-line">
            { children }
        </div>
    }
    renderList(){
        const {number, children} = this.props;
        return <div className="list">
            { children }
        </div>
    }
    renderRandom(){
        const {children} = this.props;
        return <div className="random">
            { children }
        </div>
    }
    render(){
        const {children, bgColor, titleColor, title,type, ...other} = this.props;
        return <div className="card" style={{backgroundColor: bgColor}} {...other}>
            <h1 className="title" style={{color: titleColor}}>{title}</h1>
            {
                this.renderByType(type)
            }
        </div>
    }
}

export default Card;