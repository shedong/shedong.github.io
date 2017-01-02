/**
 * Created by metrokobe on 2017/1/1.
 */

import React,{Component} from 'react';
import ReactDom from 'react-dom';
import Card from './card';
import PageLess from '../styles/page.less';
import ResumeJson from '../../README.json';
import Balloon from './Balloon';
import TimeLine from './TimeLine';
import List from './List';
import SkillBar from './SkillBar';
import Contact from './Contact';
const colors = ['#000000', '#ffffff']
const types = ["random", "timeLine", "list", "skillBar", "contact"];
class Page extends  Component {
    constructor(props){
        super(props);
        this.cards = [];
        this.state = {
            cardIndex: 0
        }
    }
    renderCard(){
        const ResumeKeys = Object.keys(ResumeJson);
        const arrows=['Up', 'Down', 'Left', 'Right'];
        return ResumeKeys.map((key, index)=>{
            const titleColor = index%2===0? '#fff': '#000';
            return <Card number={Object.keys(ResumeJson[key]).length} title={key} titleColor={titleColor} bgColor={colors[index%2]} type={types[index]}>
                {
                    this.renderResumeItem(ResumeJson[key], types[index])
                }
            </Card>
        })
    }
    renderResumeItem(item, type){
        const itemKeys = Object.keys(item);
        return itemKeys.map((key, index)=>{
            if(type==='random'){
                return <Balloon title={key} content={item[key]} bgColor="#ffffff"></Balloon>
            }else if(type==='timeLine'){
                return <TimeLine time={key} content={item[key]} index={index}></TimeLine>
            }else if(type==='list'){
                return <List title={key} content={item[key]} index={index} ></List>
            }else if(type==='skillBar'){
                return <SkillBar title={key} score={item[key]}></SkillBar>
            }else if(type==='contact'){
                return <Contact title={key} content={item[key]}></Contact>
            }
        })
    }
    pageArrow(){
        const length = this.cards.length;
        if(this.state.cardIndex>=length-1){
            this.setState({
                cardIndex: 0
            })
        }else{
            this.setState({
                cardIndex: this.state.cardIndex+1
            })
        }
    }
    render(){
        this.cards = this.renderCard();
        const { cardIndex } = this.state;
        const color = cardIndex%2===0?'#ffffff':'#000000';
        return (
            <div className="page">
                {
                    this.cards[cardIndex]
                }
                <span className="page-arrow" style={{color: color, borderColor: color}} onClick={this.pageArrow.bind(this)}>
                    ↓
                </span>
            </div>
        )
    }
}
export default Page;
