import React from 'react';
import { Link } from 'react-router-dom';  /*linkin importtaus routerilta ja app.js puolelta*/

/*kuvakkeiden importtaus @material-ui iconssista*/
import List from '@material-ui/icons/List';
import Timeline from '@material-ui/icons/Timeline';
import Settings from '@material-ui/icons/Settings';

import './Menu.css'; /*menun tyylien importtaus*/

/*menu funktio joka saa propsit sisälle*/
/*tehdään menun sisälle nappi joka sisältää kuvakkeen nimen*/
/*lisätty linkit johtamaan oikeille sivuille ja määritetty kuvakken väri htmlColor toiminnolla*/
function Menu(props) {
    return(
      <div className="menu"> 
        <Link to="/"><div className="menu__nappi"><List htmlColor="#fff" /></div></Link>
        <Link to="/stats"><div className="menu__nappi"><Timeline htmlColor="#fff" /></div></Link>
        <Link to="/settings"><div className="menu__nappi"><Settings htmlColor="#fff" /></div></Link>
  
      </div>
  
    );
  }

  export default Menu;  /*välitetään menu ulos*/