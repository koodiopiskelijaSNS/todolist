import React from 'react';
import moment from 'moment';

import ArrowRight from '@material-ui/icons/ArrowRight';
import { Link } from 'react-router-dom';

import './Tehtavalista.css';

//tehdään tehtävälistaan prosenttitoiminnallisuus rivi 21/22 ja se tulostetaan rivillä 41/
//moment ominaisuuden hyödyntäminen päivämäärän halutussa muodossa 
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

    //asetetaan tehtavalistan tehtävät div-elementin sisälle asetetaan myös päiväykset. 
    //Tässä kohtaa saadaan myös propsien kautta yksittäisen tyyppi, paivat jne. tiedot rivit 30-40
    // format-ominaisuudella muokataan päivämäärä halutunlaiseksi ("D.M.Y"). Rivillä 45 nuoliominaisuuden linkki.
    return (
      <div className="tehtavalista">
          <div className="tehtavalista__ryhma">
          <div className="tehtavalista__rivi">
            <div className="tehtavalista__tyyppi">{props.data.tyyppi}</div>
            <div className="tehtavalista__paivat">Tavoite {props.data.paivat}</div>
          </div>
          <div className="tehtavalista__rivi">
            <div className="tehtavalista__takaraja">{takaraja.format("D.M.Y")}</div>
            <div className="tehtavalista__ajanjakso">{kausi}</div>
          </div>
            <div className="tehtavalista__rivi">
            <div className="tehtavalista__tila">Toteutunut {props.data.toteutunut}</div>
            <div className="tehtavalista__prosentti">{prosentti ? prosentti.toFixed(0) + " % " : ""}</div>
          </div>
        </div>
        <div className="tehtavalista__linkki">
          <Link to={"/edit/" + props.data.id}><ArrowRight /></Link>         
          </div>
        </div>    
    );
  }

  export default Tehtavalista;