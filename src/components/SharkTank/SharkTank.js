import React from 'react';

import LiveStudent from '../LiveStudent/LiveStudent';

class SharkTank extends React.Component {
  render() {
    const { livingStudents, feedTheShark } = this.props;

    const livingStudentCards = livingStudents.map((student) => (
        <LiveStudent key={ student.id} student = {student} feedTheShark={ feedTheShark } />
    ));

    return (
        <div>
            <h> Student </h>
                <div className="card-columns">
                    {livingStudentCards}
                </div>
        </div>
    );
  }
}

export default SharkTank;
