import React from 'react';
import { render } from 'react-dom';

class App extends React.Component{

    onClick(e){
        console.log("asdsadd") ;
    }

    componentDidMount(){
        if (!!window.EventSource) {
            var source = new EventSource('http://localhost:3000/__webpack_hmr');
            source.addEventListener('message', function(e) {

                var data = JSON.parse(e.data)
                if(data.action == "built") {
                    location.reload();
                }
            }, false);
        }
    }

    render(){
        return (
            <div>
                <div onClick={this.onClick}> This is the app</div>
                {this.props.children}
            </div>
        )
    }
}

export default App;