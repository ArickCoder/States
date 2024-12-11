import React from 'react';
import ReactDOM from 'react-dom';

class Student extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            name: 'Arick',
            grade: 7,
            favourite_color: 'green',
            favourite_car: 'porsche 911'
        };
    }

    render(){
        return (
            <div>
                <h1>Student Details</h1>
                <p>My name is {this.state.name}</p>
                <p>I am in {this.state.grade}th grade</p>
                <p>My favourite color is {this.state.favourite_color}</p>
                <p>My favourite car is {this.state.favourite_car}</p>
            </div>
        );
    }

    favouriteColor = () => {
        this.setState({favourite_color: 'red'});
    }

    render() {
        return(
            <div>
                <h1>Student Details</h1>
                <p>My name is {this.state.name}</p>
                <p>I am in {this.state.grade}th grade</p>
                <p>My favourite color is {this.state.favourite_color}</p>
                <p>My favourite car is {this.state.favourite_car}</p>

                <button type="button" onClick={this.favouriteColor}>Click me</button>
            </div>
        )
    }
}

ReactDOM.render(<Student />, document.getElementById('root')); 


