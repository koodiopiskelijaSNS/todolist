import React from 'react';

import './Content.css';

 /*määritellään content-komponentin sisältöominaisuus, johon aluksi käärittiin Tehtavalista*/
function Content(props) {
    return (
      <div className="content">
        { props.children }  
      </div>
    )
}

export default Content;

/*Huom! propsin kautta välitetään tieto eri komponenttien välillä ja */
/*children arvo saa kaikki sen sisälle laitetut reactin jsx komponenttimerkkaukset*/ 