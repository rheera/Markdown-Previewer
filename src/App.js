import React from 'react';
import ds from './default-state'

//TODO get markdown parser to parse the string ds when we return it in the render also change the previewer class from p
// to some sort of text box that's uneditable
class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ds
        };
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    render() {

        return (
            <div className="container-fluid">
                <div>
                    <div id={"editor-div"}>
                        <h4 className={"text-primary"}>Editor:</h4>
                        <textarea id="editor" value = {this.state.input} onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div id={"previewer-div"}>
                        <h4 className="text-primary">Previewer:</h4>
                        <p>{this.state.input}</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default ControlledInput;