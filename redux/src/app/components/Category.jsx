import  React, {Component} from 'react';

export  default class Category extends Component {
    render() {
        console.log("Category页刷新了!!!!!!!!!!!!!!");
        return (
            <div className="category">
                <li className="active">Default</li>
            </div>
        );
    };
}