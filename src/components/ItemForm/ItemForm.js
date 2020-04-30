import React from 'react';
import { withRouter } from 'react-router';      /*withRouterin importtaus joka täytyy viedä myös export defaultissa*/
import { v4 as uuidv4 } from 'uuid';        /*tässä kohtaa tuli päivitetty versio uuidv4:een*/

import Button from '../buttons';                /*Huom! rivillä 82 en osannut tehdä siten, että alkaisi ykkösestä, nykuisellään alkaa nollasta ja ei hyväksy ykköstä Tavoite kohdassa*/
import './ItemForm.css';

class ItemForm extends React.Component {

    constructor(props) {                        /*state muuttujan alustaminen kohta, kuuluu kontrolloitu lomake osioon AddItem.js osiossa*/
        super(props);   
        const data = props.data ? props.data : {
        tyyppi: "Hakemusten teko",
        paivat: 0,
        takaraja: "",
        kaudenalku: "",
        kaudenloppu: "",
        toteutunut: ""
    }
        this.state = {
            data: data           
        };
        this.handleInputChange = this.handleInputChange.bind(this);     /*lomakesyötteen bindaus tarkoittaa sitomista datalähteen kanssa toisiinsa*/ 
        this.handleSubmit = this.handleSubmit.bind(this);                   /*handleInputChange liitetään myös value-kohtaan, katso alta myös rivi 37 value-arvo*/
        this.handleCancel = this.handleCancel.bind(this);                   /*katso kohta rivi 42*/
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    handleInputChange(event) {                              /*lomakesyötteen käsittely ja konffaus*/
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          data: {
            ...this.state.data,  
            [name]: value
          }
        });
      }

      handleCancel(event) {                              /*cancel-napin toiminnallisuuden konffaus*/               
          event.preventDefault();
          this.props.history.goBack();                  /*kohta 121 liittyy peruutus-napin historiaominaisuuteen*/
      }

      handleSubmit(event) {                              /*napin toiminnallisuuden konffaus*/
          event.preventDefault();
          let data = Object.assign({}, this.state.data);    /*tiedon kopiointi*/ 
          data.toteutunut = parseFloat(data.toteutunut);
          data.id = data.id ? data.id : data.id ? data.id : uuidv4();   /*datan id-tunniste*/
          this.props.onFormSubmit(data);                    /*tieto välitetään ylöspäin katso kohta AddItem rivi 9*/
          this.props.history.push("/");                     /*historyn polun vienti etusivulle (plusnappi)*/
      }

      handleDeleteItem(event) {                              /*delete-napin toiminnallisuuden konffaus, joka saa parametrina eventin eli tapahtuman*/
          event.preventDefault();                                           /*Huom! tässä kohtaa tulostettiin console.log:iin ""lähetä lomake toiminto*/
          this.props.onDeleteItem(this.state.data.id);
          this.props.history.push("/");
      }

     render() {                                 /*rivi 73 listan määrittely*/
        return(
            <form onSubmit={this.handleSubmit}>

        <div className="itemform">

        <div className="itemform__row">
            <div>
                <label htmlFor="name">Tehtävätyyppi</label>
                <select name="tyyppi" value={this.state.data.tyyppi} onChange={this.handleInputChange}>
                
        {this.props.selectList.map(item => <option value={item} key={item}>{item}</option>)}         

                </select>
            </div>
                                                            
    <div className="itemform__row">                        
            <div>
                <label htmlFor="paivat">Tavoite</label>
                <select name="paivat" value={this.state.data.paivat} onChange={this.handleInputChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>               
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
                </div>
            </div>
        </div>
        
        <div className="itemform__row">  
            <div>
                <label htmlFor="takaraja">Takaraja</label>
                <input type="date" name="takaraja" value={this.state.data.takaraja} onChange={this.handleInputChange} />
            </div>
        </div>

        <div className="itemform__row">
            <div>
                <label htmlFor="kaudenalku">Tehtäväkauden alku</label>
                <input type="date" name="kaudenalku" size="10" value={this.state.data.kaudenalku} onChange={this.handleInputChange} />
            </div>
            <div>
                <label htmlFor="kaudenloppu">Tehtäväkauden loppu</label>
                <input type="date" name="kaudenloppu" size="10" value={this.state.data.kaudenloppu} onChange={this.handleInputChange} />
            </div>
        </div>

        <div className="itemform__row">
            <div>
                <label htmlFor="toteutunut">Toteutunut tehtävämäärä</label>
                <input type="number" name="toteutunut" value={this.state.data.toteutunut} onChange={this.handleInputChange} />
            </div>
        </div>

        <div className="itemform__row">
            <div>
                <Button onClick={this.handleCancel}>PERUUTA</Button>
            </div>
            <div>
                <Button type="submit" primary>{this.state.data.id ? "TALLENNA" : "LISÄÄ"}</Button>
            </div>
        </div>

        { this.props.onDeleteItem ?
            <div className="itemform__row">
            <div>
            <Button onClick={this.handleDeleteItem}>POISTA</Button>
            </div>
            <div></div>
            </div> : "" }

        </div>

        </form>
        );
    }
}

export default withRouter(ItemForm); 