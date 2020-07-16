import React from 'react';
import marked from 'marked'
import DEFAULT from "./default-state";

//TODO make prettier

//no need for Redux since only state we're keeping is the input
class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        // start the app with the input being filled in with DEFAULT
        // which is a string containing a bunch of different markdown styles
        this.state = {
            input: DEFAULT
        };
    }

    handleChange(event) {
        // any change in input will make the state change the input to the value in the input
        this.setState({
            input: event.target.value
        });
    }

    render() {
        return (
            // fluid for bootstrap responsiveness
            <div className="container-fluid">
                <div>
                    <div id={"editor-div"}>
                        {/* center the  text and the textarea box */}
                        <h4 className={"text-primary text-center"}>Editor:</h4>
                        <div className={"d-flex justify-content-center"}>
                            {/* Load the textarea with the state which contains the input
                            starts off with the default state which is the string with markdown examples
                            makes the text area 150 wide and 10 long */}
                            <textarea cols="150" rows="10" id="editor" value = {this.state.input} onChange={this.handleChange.bind(this)}/>
                        </div>
                    </div>
                    <div id={"preview-div"}>
                        <h4 className="text-primary text-center">Previewer:</h4>
                        <div className={"d-flex justify-content-center"}>
                            {/* give the div a border
                            set HTML inside div with the input converted to marked
                            needed to use unescape otherwise it was messing with the code block and not converting correctly,
                            think it had to do with the backticks
                            dangerouslySet is Reacts replacement for innerHTML like className to class
                            in general, shouldn't be done since it can cause some XSS attacks */}
                            <div id="preview" className={"border"} dangerouslySetInnerHTML={{__html:unescape(marked(this.state.input))}}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default ControlledInput;