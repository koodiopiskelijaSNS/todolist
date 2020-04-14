import React from 'react';

import Tehtavalista from '../Tehtavalista/Tehtavalista';
import Content from '../Content/Content';

import { FloatingButton } from '../buttons';

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
        <FloatingButton secondary>+</FloatingButton> 
   </Content> 
    );
  }

  export default Items;
  