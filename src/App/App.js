import React from 'react';
import './App.scss';

import studentsData from '../helpers/data/studentsData';
import SharkTank from '../components/SharkTank/SharkTank';
import GraveYard from '../components/GraveYard/GraveYard';

class App extends React.Component {
  state = {
    livingStudents: [],
    dearlyBeloved: [],
  }

  componentDidMount() {
    const livingStudents = studentsData.livingStudents();
    const dearlyBeloved = studentsData.dearlyBeloved();
    this.setState({ livingStudents, dearlyBeloved });
  }

  refreshTankAndGraveYard = () => {
    this.setState({
      livingStudents: studentsData.livingStudents(),
      dearlyBeloved: studentsData.dearlyBeloved(),
    });
  }

  feedTheShark = (studentId) => {
    studentsData.feedTheShark(studentId);
    this.refreshTankAndGraveYard();
  }

  followTheLight = (studentId) => {
    studentsData.followTheLight(studentId);
    this.refreshTankAndGraveYard();
  }

  feedTheSharkEvent = (e) => {
    e.preventDefault();
    const randomLiveStudent = studentsData.getRandomLiveStudent();
    if (randomLiveStudent) {
      randomLiveStudent.isDead = true;
    }
    this.refreshTankAndGraveYard();
  }

  render() {
    const { livingStudents, dearlyBeloved } = this.state;

    return (
      <div className="App">
        <div>
        <h2>INSIDE Shark Tank COMPONENT</h2>
        <button className="btn btn-info" onClick={this.feedTheSharkEvent}>Feed the Shark</button>
        <SharkTank livingStudents = { livingStudents } />
        </div>
        <div>
        <h2>INSIDE GraveYard COMPONENT</h2>
        <button className="btn btn-danger">I am a button</button>
        <GraveYard dearlyBeloved = { dearlyBeloved } followTheLight = { this.followTheLight} />
        </div>
      </div>
    );
  }
}

export default App;
