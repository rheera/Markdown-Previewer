import React from 'react';
import marked from 'marked'
import DEFAULT from "./default-state";

//TODO comment and make prettier
class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: DEFAULT
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
                        <h4 className={"text-primary text-center"}>Editor:</h4>
                        <div className={"d-flex justify-content-center"}>
                            <textarea cols="150" rows="10" id="editor" value = {this.state.input} onChange={this.handleChange.bind(this)}/>
                        </div>
                    </div>
                    <div id={"preview-div"}>
                        <h4 className="text-primary text-center">Previewer:</h4>
                        <div className={"d-flex justify-content-center"}>
                            <div id="preview" className={"border"} dangerouslySetInnerHTML={{__html:unescape(marked(this.state.input))}}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default ControlledInput;