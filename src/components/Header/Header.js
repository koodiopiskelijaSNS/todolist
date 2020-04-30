import React from 'react';
import './Header.css';

/*otsikkofunktio joka saanut propsit sisälle sekä luokkakomponentti*/
function Header(props) {
    return (
      <div className="header">        
        <h1>ToDoList</h1>
      </div>
    )
  }

  export default Header;