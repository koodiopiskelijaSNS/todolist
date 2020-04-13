import React from 'react';
import moment from 'moment';

import './Tehtavalista.css';

function Tehtavalista(props) {

    let takaraja = moment(props.data.takaraja);
    let kausi = "";
    let prosentti;

    if (props.data.kaudenalku && props.data.kaudenloppu) {
      let kaudenalku = moment(props.data.kaudenalku);
      let kaudenloppu = moment(props.data.kaudenloppu);
      kausi = kaudenalku.format("D.M.Y") + " - " + kaudenloppu.format("D.M.Y");
      let paivat = kaudenloppu.diff(kaudenalku, 'days');
      prosentti = props.data.toteutunut / paivat * 100;
    }

    return (
      <div className="tehtavalista">
        <div className="tehtavalista__rivi">
          <div className="tehtavalista__tyyppi">{props.data.tyyppi}</div>
          <div className="tehtavalista__paivat">Tavoite {props.data.paivat} krt.</div>
        </div>
        <div className="tehtavalista__rivi">
          <div className="tehtavalista__takaraja">{takaraja.format("D.M.Y")}</div>
          <div className="tehtavalista__ajanjakso">{kausi}</div>
        </div>
          <div className="tehtavalista__rivi">
          <div className="tehtavalista__tila">Toteutunut {props.data.toteutunut} krt.</div>
          <div className="tehtavalista__prosentti">{prosentti ? prosentti.toFixed(0) + " % " : ""}</div>
        </div>
      </div>
    );
  }

  export default Tehtavalista;