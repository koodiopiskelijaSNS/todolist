import React from 'react';

import Content from '..//Content/Content';
import ItemForm from '../ItemForm/ItemForm';

import './AddItem.css';

function AddItem(props) {
    return (
      <Content>

        <div className="additem">

        <h2>Lisää uusi tehtävä</h2>

        <ItemForm onFormSubmit={props.onFormSubmit} selectList={props.selectList} />
      

      </div>

      </Content>
      

    );
  }

  export default AddItem;