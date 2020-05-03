import React from 'react';

import Content from '..//Content/Content';
import ItemForm from '../ItemForm/ItemForm';

import './AddItem.css';
                                                      /*Huom! tehtiin ensin form-lomakepohja jossa label ja input ominaisuudet, josta tehtiin myös oma komponenttinsa ItemForm.js ja css*/
function AddItem(props) {                              /*johon määritettiin mm. tehtävätyyppi, tavoite, takaraja, jne. sen jälkeen tehtiin kontrolloitu lomakepohja jonka sisältöä react itsessään hallitsee*/
    return (                                            /*contentin sisälle oma div, siten saa väljyyttä reunoihin. On-määrite välittää sen propsin suoraan, jonka on saanut ylemmältä taholta eli App.js:ltä joka välittää sen ItemForm.js:lle*/
      <Content>                                         

        <div className="additem">

        <h2>Lisää uusi tehtävä</h2>
                                                        
        <ItemForm onFormSubmit={props.onFormSubmit} selectList={props.selectList} />        
      
      </div>

      </Content>     

    );
  }

  export default AddItem;