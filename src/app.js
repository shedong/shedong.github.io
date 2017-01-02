import React,{Component} from 'react';
import ReactDom from 'react-dom';
import Page from './components/Page';
import AnimateCss from './styles/animate.min.css';
import AppLess from './styles/app.less';
class App extends Component {
    render(){
        return (
            <Page />
        )
    }
}

ReactDom.render(<App />,document.getElementById('app'));