import React from 'react';
import PropTypes from 'prop-types';

import studentShape from '../../helpers/propz/studentShape';

class GraveStone extends React.Component {
    static propTypes = {
      student: studentShape.studentShape,
      followTheLight: PropTypes.func,
    }

  followTheLightEvent = (e) => {
    e.preventDefault();
    const { student, followTheLight } = this.props;
    followTheLight(student.id);
  }

  render() {
    const { student } = this.props;

    return (
      <div className="card bg-dark text-light border-0">
        <img className="card-img-top" src={student.imgUrl} alt="one specific student" />
        <div className="card-img-overlay">
          <h5 className="card-title text-uppercase">{student.firstName}</h5>
          <p className="card-text">This student is years old and are described as: {student.firstName}</p>
        </div>
        <div className="card-footer">
         <button className="btn btn-danger col-12" onClick={this.followTheLightEvent}>FREE THE student</button>
        </div>
      </div>
    );
  }
}

export default GraveStone;
