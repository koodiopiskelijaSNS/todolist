import React from 'react';

import Content from '..//Content/Content';

import { Doughnut } from 'react-chartjs-2';
import stringHash from 'string-hash';

import './Stats.css';

function Stats(props) {

  const reducer = (groupedData, currentItem) => {
    const index = groupedData.findIndex(item => item.tyyppi === currentItem.tyyppi);
    if (index >= 0) {
      groupedData[index].toteutunut = groupedData[index].toteutunut + currentItem.toteutunut;
    } else {
      groupedData.push({tyyppi: currentItem.tyyppi, toteutunut: currentItem.toteutunut});
    }
    return groupedData;
  }

  let groupedData = props.data.reduce(reducer, []);

  let doughnutData = {
    labels: groupedData.map(item => item.tyyppi),
    datasets: [
      {
      data: groupedData.map(item => item.toteutunut),
      backgroundColor: groupedData.map(item => "hsl(" + (stringHash(item.tyyppi) % 360) + ", 90%, 50%)"),
      }
    ]    
  }

    return (
      <Content>
        <div className="stats">
          <h2>Tehtävätilasto</h2>
          <h3>Tehtäväloki</h3>
          <div className="stats__graph">
            <Doughnut data={doughnutData} />
        </div>
      </div>
      </Content>
    );
  }

  export default Stats;
