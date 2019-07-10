import React from "react";
import { connect } from 'react-redux';
import { changeName } from '../redux/actions/activity';

class ChangeName extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: "" };
    }

    updateInput = input => {
        this.setState({ input });
    };

    handleNameChange = () => {
        this.props.changeName(this.state.input);
        this.setState({ input: ""});
    }

    render() {
        return (
            <div>
                <input
                onChange={e => this.updateInput(e.target.value)}
                value={this.state.input}
                />
                <button className="change_name" onClick={this.handleNameChange}>
                Change Name
                </button>
            </div>
        );
    }
}

export default connect(
    null,
    { changeName }
) (ChangeName);
