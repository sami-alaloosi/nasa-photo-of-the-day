/** @format */

import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form" style={{ display: "flex", justifyContent: "center"  }}>

          <div className="field" style={{ width:"60rem"}}>

            <label style={{ textAlign: "center" }}>Please Enter a Date: YYYY-MM-DD</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
