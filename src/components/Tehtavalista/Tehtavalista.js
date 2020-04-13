import React from 'react';

import './Tehtavalista.css';

function Tehtavalista(props) {
    return (
      <div className="tehtavalista">
        <div className="tehtavalista__rivi">
          <div className="tehtavalista__tyyppi">Liikunta</div>
          <div className="tehtavalista__paivat">Tavoite 5 krt.</div>
        </div>
        <div className="tehtavalista__rivi">
          <div className="tehtavalista__takaraja">17.4.2020</div>
          <div className="tehtavalista__ajanjakso">10.4.2020-17.4.2020</div>
        </div>
          <div className="tehtavalista__rivi">
          <div className="tehtavalista__tila">Toteutunut 3 krt.</div>
          <div className="tehtavalista__prosentti">60 %</div>
        </div>
      </div>
    );
  }

  export default Tehtavalista;