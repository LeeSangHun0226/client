import { Form, FormGroup, Label, Input } from 'reactstrap';
import React, { Component } from 'react';
import Team from './Team';


class TeamList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  render() {
    const teamDivDisplay = ((teamData) => {
      return teamData.map((team) => {
        return (
          <Team
            teamData={team}
            key={team._id}
            handleClick={this.props.handleClick}
            location={this.state.location}
          />
        );
      });
    });

    const searchForm = (
      <div className="home-search-div">
        <div className="search-div">
          <label>Where</label>
          <input
            className="place-input"
            type="text"
            name="search"
            placeholder="City, Playground"
            onChange={this.handleChange}
          />
        </div>
        <Form className="calendar-div">
          <FormGroup>
            <Label for="exampleDate">Date</Label>
            <Input
              type="date"
              name="date"
            />
          </FormGroup>
        </Form>
        <button className="button-div">Search</button>
      </div>
    );

    return (
      <div>
        {searchForm}
        {teamDivDisplay(this.props.teamData)}
      </div>
    );
  }
}

TeamList.propTypes = {
  teamData: React.PropTypes.array,
  handleClick: React.PropTypes.func,
};

export default TeamList;
