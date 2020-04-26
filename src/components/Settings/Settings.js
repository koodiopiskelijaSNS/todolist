import React from 'react';
import Button from '../buttons';

import Content from '../Content/Content';
import './Settings.css';

function Settings(props) {

  const handleSubmit = function(event) {
    event.preventDefault();
    let tehtavatyyppi = event.target.elements.tehtavatyyppi.value;
    props.onFormSubmit(tehtavatyyppi);
    event.target.elements.tehtavatyyppi.value = "";
  }

    return (
      <Content>
        <div className="settings">
          <h2>Profiili</h2>
          <div className="settings__profile">
            <div className="settings__userdata">
              <div><img src={props.user.photoURL} alt="" /></div>
              <div>{props.user.displayName}<br/>{props.user.email}</div>
            </div>
          <div>
            <Button onClick={props.onLogout}>logout</Button>
          </div>
          </div>
          <h2>Asetukset</h2>
          <h3>Tehtävätyypit</h3>
          <div className="settings__items">
            {props.selectList.map(item => <div key={item}>{item}</div>) }
            <form onSubmit={handleSubmit}>
              <div className="settingsForm">
                <input type="text" name="tehtavatyyppi" />
                <Button type="submit" primary>LISÄÄ</Button>
              </div>
            </form>
          </div>
        </div>  
      </Content>
    );
  }

  export default Settings;  