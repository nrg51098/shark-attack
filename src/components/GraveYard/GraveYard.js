import React from 'react';

import GraveStone from '../GraveStone/GraveStone';

class GraveYard extends React.Component {
  render() {
    const { dearlyBeloved, followTheLight } = this.props;

    const dearlyBelovedCards = dearlyBeloved.map((student) => (
        <GraveStone key={ student.id} student = { student} followTheLight={ followTheLight } />
    ));

    return (
        <div>
            <h> Student </h>
                <div className="card-columns">
                    {dearlyBelovedCards}
                </div>
        </div>
    );
  }
}

export default GraveYard;
