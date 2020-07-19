import React from 'react';
import './App.css';
import {CardList} from "./component/card-list/card-list.component";
import {SearchBox} from "./component/serach-box/searchBoxComponent";

class App extends React.Component{


    constructor() {
        super();
        this.state = {
            monsters : [],
            searchField:''
        };
    }


    // you can write down class method as this way not declaring by bind in the constructor
    handleChange = (e) => {
        this.setState({searchField:e.target.value})
    };


    handleIt = () => {

    };
    // bigelow


    componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
          .then(response => response.json())
          .then(i => this.setState({monsters:i}));
    }

    render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
                <div className="App">
                    <h1>Monster Rolodex</h1>
                    <SearchBox
                        placeholder="Search monsters"
                        handleChange={this.handleChange}
                    />
                    <CardList monsters={filteredMonsters} />
                </div>
        );
    }
}

export default App;
