import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };
    onInputChange = e => {
        this.setState({term: e.target.value})
        // this can be written to the jsx element 
    }
    onFormSubmit = e => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term)
        console.log(this.state.term)
        // TODO: Make sure we call callback from parent component
    }
    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div>
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange}
                        /> 
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;