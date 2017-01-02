/**
 * Created by metrokobe on 2017/1/2.
 */
import React,{Component} from 'react';
import ContactStyle from '../styles/contact.less';

const Contact = ({title, content})=>{
    const renderContent = (content)=>{
        if(/^https?/.test(content)){
            return <a className="contact-content" href={content} target="__BLANK">{content}</a>
        }else{
            return <span className="contact-content">{content}</span>
        }
    }
    title = title.replace(/\s*/, '');
    return <div className="contact-item animated rotateIn">
        <img src={`./src/styles/image/${title}.png`} alt={title}/>
        {
            renderContent(content)
        }
    </div>
}

export default Contact ;