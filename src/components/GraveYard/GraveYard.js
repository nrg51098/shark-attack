import React from 'react';
import PropTypes from 'prop-types';

import GraveStone from '../GraveStone/GraveStone';
import studentShape from '../../helpers/propz/studentShape';

class GraveYard extends React.Component {
    static propTypes = {
      dearlyBeloved: PropTypes.arrayOf(studentShape.studentShape),
      followTheLight: PropTypes.func,
    }

    render() {
      const { dearlyBeloved, followTheLight } = this.props;

      const dearlyBelovedCards = dearlyBeloved.map((student) => (
        <GraveStone key={ student.id} student = { student} followTheLight={ followTheLight } />
      ));

      return (
        <div>
            <h2> Student </h2>
                <div className="card-columns">
                    {dearlyBelovedCards}
                </div>
        </div>
      );
    }
}

export default GraveYard;
