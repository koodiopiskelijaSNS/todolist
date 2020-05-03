import React, { Component } from 'react';  /*react-komponentin importtaus eli tuonti*/                                   /*Huom! tehtävälista, menu, header ja content tehtiin ensin app.js:ään, */
import { BrowserRouter as Router, Route } from 'react-router-dom';  /*sovelluksen reitityksen importtaus*/       /* ennen kuin ne siirrettiin omiinmoduuleihinsa eli components-kansioon*/
import './App.css';
import firebase, { provider, auth } from './firebase'; /*pilvipalvelun importtaus*/

/*eri komponenttien importtaus*/
import Header from './components/Header/Header';  /*header on components-kansiossa eli määritellään components-kansio, jolloin määritellään header-kansio ja siellä oleva header-tiedosto*/
import Items from './components/Items/Items';
import Stats from './components/Stats/Stats';
import Settings from './components/Settings/Settings';
import Menu from './components/Menu/Menu';
import AddItem from './components/AddItem/AddItem';
import EditItem from './components/EditItem/EditItem';
import Content from './components/Content/Content';
import Button from './components/buttons';

class App extends Component {
                                      /*state muuttujan määrittäminen*/
constructor(props) {                         
  super(props);
  this.state = {
    data: [],
    selectList:["Hakemusten teko", "Kirjasto", "Liikunta", "Siivous", "Kauppa"],
    user: null,
    error: null
  }
  this.dbRef = firebase.firestore();                                      /*tehdään bindaus eri kohteista*/
  this.handleFormSubmit = this.handleFormSubmit.bind(this);
  this.handleSelectListForm = this.handleSelectListForm.bind(this);
  this.handleDeleteItem = this.handleDeleteItem.bind(this);
  this.login = this.login.bind(this);
  this.logout = this.logout.bind(this);
}

componentDidMount() {

  auth.onAuthStateChanged((user) => {

    if (user) {
      this.setState({
        user: user
      });

      this.refData = this.dbRef.collection("users").doc(user.uid).collection('data');

      this.refData.orderBy("kaudenloppu").onSnapshot((docs) => {
        let data = [];
        docs.forEach((doc) => {
          let docdata = doc.data();
          data.push(docdata);
        });
        this.setState({
          data: data
        });
      });
  
    }
  });

}
  
handleFormSubmit(newdata) {                       /*käsittelyfunktiolomake joka vyörytetäänpropsien kautta AddItem.js:n kautta ItemForm.js:lle jota hyödynnetään. Saa parametrin newdata. */
  this.refData.doc(newdata.id).set(newdata);
}

handleSelectListForm(newitem) {                     /*taulukon konffausta, liäsys ominaisuus, joka bindataan ylhäällä rivi 29*/
  let selectList = this.state.selectList.slice();
  selectList.push(newitem);
  selectList.sort();
  this.setState({
    selectList: selectList
  });
}

handleDeleteItem(id) {
  this.refData.doc(id).delete().then().catch(error => {console.error("Virhe tietoa poistettaessa: ", error)});
}

login() {
  auth.signInWithPopup(provider).then((result) => {
    const user = result.user;
    this.setState({
      user: user,
      error: null
    });
  }).catch((error) => {
    const errorMessage = error.message;
    this.setState({
      error: errorMessage
    });
  });
}

logout() {
  auth.signOut().then(() => {
    this.setState({
      user: null
    });
    this.refData = null;
  });
}

  render() {

    if (!this.state.user) {
      return (
        <Router>
          <div className="App">
            <Header />
            <Content>
            <div className="app_welcome">
              <div>Et ole vielä kirjautunut sisälle.</div>
              <div><Button primary onClick={this.login}>Kirjaudu sisälle</Button></div>
              <div>{this.state.error?<p>{this.state.error}</p>:null}</div>
            </div>
            </Content>
            <Menu />
          </div>
        </Router>
      );
    }

    /*sovelluksen reitittäminen konffaus, napin linkitys AddItem-kohtaan sekä importtaus rivi 12 */
    return (
      <Router>
       <div className="App">
          <Header />
          <Route path="/" exact render={() => <Items data={this.state.data} />} />
          <Route path="/stats" render={() => <Stats data={this.state.data} /> } />
          <Route path="/settings" render={() => <Settings selectList={this.state.selectList} 
                                                          onFormSubmit={this.handleSelectListForm} 
                                                          onLogout={this.logout} 
                                                          user={this.state.user} /> } />
          <Route path="/add" render={() => <AddItem onFormSubmit={this.handleFormSubmit} selectList={this.state.selectList} /> } />
          <Route path="/edit/:id" render={(props) => <EditItem data={this.state.data} 
                                                               selectList={this.state.selectList} 
                                                               onFormSubmit={this.handleFormSubmit} 
                                                               onDeleteItem={this.handleDeleteItem}
                                                               {...props} />} />
          <Menu />
       </div>
      </Router>
    );
  }
}

export default App;
