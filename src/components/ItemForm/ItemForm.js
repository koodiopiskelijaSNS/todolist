import React from 'react';
import { withRouter } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

import Button from '../buttons';
import './ItemForm.css';

class ItemForm extends React.Component {

    constructor(props) {
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
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleInputChange(event) {
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

      handleCancel(event) {
          event.preventDefault();
          this.props.history.goBack();
      }

      handleSubmit(event) {
          event.preventDefault();
          let data = Object.assign({}, this.state.data);
          data.toteutunut = parseFloat(data.toteutunut);
          data.id = data.id ? data.id : data.id ? data.id : uuidv4();
          this.props.onFormSubmit(data);
          this.props.history.push("/");

      }

    render() {
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
                    <option value="0">1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                    <option value="4">5</option>
                    <option value="5">6</option>
                    <option value="6">7</option>
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

        </div>

        </form>
        );
    }
}

export default withRouter(ItemForm); 