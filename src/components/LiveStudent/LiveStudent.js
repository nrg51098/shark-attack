import React from 'react';

class LiveStudent extends React.Component {
  feedTheSharkEvent = (e) => {
    e.preventDefault();
    const { student, feedTheShark } = this.props;
    feedTheShark(student.id);
  }

  render() {
    const { student } = this.props;

    return (
      <div className="card bg-dark text-light border-0">
        <img className="card-img-top" src={student.imgUrl} alt="one specific goat" />
        <div className="card-img-overlay">
          <h5 className="card-title text-uppercase">{student.firstName}</h5>
          <p className="card-text">This student is years old and are described as: {student.firstName}</p>
        </div>
        <div className="card-footer">
         <button className="btn btn-danger col-12" onClick={this.feedTheSharkEvent}>FREE THE GOAT</button>
        </div>
      </div>
    );
  }
}

export default LiveStudent;
