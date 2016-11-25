import React, {Component} from 'react'
import config from '../config.json';


class GreeterReact extends Component {
    render() {
        return (
            <div>
                {config.greetText}
            </div>
        );
    }
}

export default GreeterReact