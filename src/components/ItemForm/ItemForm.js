import React from 'react';
import { withRouter } from 'react-router';

import Button from '../buttons';
import './ItemForm.css';

class ItemForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                tyyppi: "Hakemusten teko",
                toteutunut: 0,
                takaraja: undefined,
                kaudenalku: undefined,
                kaudenloppu: undefined,
                toteutunut: ""
            }
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
          console.log("lähetä lomake");
          let data = Object.assign({}, this.state.data);
          data.toteutunut = parseFloat(data.toteutunut);
          this.props.onFormSubmit(data);
          this.props.history.push("/");

      }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>

        <div className="itemform">

        <div className="itemform__row">
            <div>
                <lable for="name">Tehtävätyyppi</lable>
                <select name="tyyppi" value={this.state.data.tyyppi} onChange={this.handleInputChange}>
                    <option value="Hakemusten teko">Hakemusten teko</option>
                    <option value="Kirjasto">Kirjasto</option>
                    <option value="Liikunta">Liikunta</option>
                    <option value="Siivous">Siivous</option>
                </select>
            </div>

    <div className="itemform__row">
            <div>
                <lable for="paivat">Tavoite</lable>
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
                <lable for="takaraja">Takaraja</lable>
                <input type="date" name="takaraja" value={this.state.data.takaraja} onChange={this.handleInputChange} />
            </div>
        </div>

        <div className="itemform__row">
            <div>
                <lable for="kaudenalku">Tehtäväkauden alku</lable>
                <input type="date" name="kaudenalku" size="10" value={this.state.data.kaudenalku} onChange={this.handleInputChange} />
            </div>
            <div>
                <lable for="kaudenloppu">Tehtäväkauden loppu</lable>
                <input type="date" name="kaudenloppu" size="10" value={this.state.data.kaudenloppu} onChange={this.handleInputChange} />
            </div>
        </div>

        <div className="itemform__row">
            <div>
                <lable for="toteutunut">Toteutunut tehtävämäärä</lable>
                <input type="number" name="toteutunut" value={this.state.data.toteutunut} onChange={this.handleInputChange} />
            </div>
        </div>

        <div className="itemform__row">
            <div>
            <Button onClick={this.handleCancel}>PERUUTA</Button>
            </div>
            <div>
            <Button type="submit" primary>LISÄÄ</Button>
            </div>
        </div>

        </div>

        </form>
        );
    }
}

export default withRouter(ItemForm); 