import React from 'react';
import PropTypes from 'prop-types';

import LiveStudent from '../LiveStudent/LiveStudent';
import studentShape from '../../helpers/propz/studentShape';

class SharkTank extends React.Component {
  static propTypes = {
    livingStudents: PropTypes.arrayOf(studentShape.studentShape),
    feedTheShark: PropTypes.func,
  }

  render() {
    const { livingStudents, feedTheShark } = this.props;

    const livingStudentCards = livingStudents.map((student) => (
        <LiveStudent key={ student.id} student = {student} feedTheShark={ feedTheShark } />
    ));

    return (
        <div>
            <h2> Student </h2>
                <div className="card-columns">
                    {livingStudentCards}
                </div>
        </div>
    );
  }
}

export default SharkTank;
