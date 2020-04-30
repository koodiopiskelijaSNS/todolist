import React from 'react';

import { Link } from 'react-router-dom';                       /*Buttonin linkitys ja importtaus*/
                                                              /*testidatan importtaus otettiin pois käytöstä ja siirrettiin app.js:n */ 
import Tehtavalista from '../Tehtavalista/Tehtavalista';          /*eli import testdata from '../../testdata;' */
import Content from '../Content/Content';

import { FloatingButton } from '../buttons';  /*kelluvan buttonin importtaus*/

function Items(props) {

  /*testdatasta otetaan map-ominaisuudella yksittäinen esim. laskun alkio kerrallaan tarkasteluun ja palautetaan tehtavalista*/
  /*invoice sisältää yksittäisten kulujen tiedot, jotka välitetään propsien kautta*/
  let rows = props.data.map(invoice => {
  return (
    <Tehtavalista data={invoice} key={invoice.id} />
  );
 }
);

/*tehtävälista tulostetaan row:lla ja Button-lisäysnapin linkitys*/
    return (
      <Content>     
        {rows} 
        <Link to="/add"><FloatingButton secondary>+</FloatingButton></Link> 
   </Content> 
    );
  }

  export default Items;
  