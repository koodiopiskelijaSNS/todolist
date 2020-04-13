import React from 'react';

import Tehtavalista from '../Tehtavalista/Tehtavalista';
import Content from '../Content/Content';


function Items(props) {

let rows = props.data.map(invoice => {
  return (
    <Tehtavalista data={invoice} />
  );
 }
);


    return (
      <Content>     
        {rows}  
   </Content> 
    );
  }

  export default Items;
  