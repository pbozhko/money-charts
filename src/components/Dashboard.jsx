import React from 'react'

import { Line } from 'react-chartjs-2'

const data = {
  labels: ['01', '02', '03', '04', '05', '06', '07', '08'],
  datasets: [
    {
      label: 'My money',
      fill: false,
      lineTension: 0,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 5,
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3600, 3600, 3500, 3500, 3400, 3400, 3400],
      steppedLine: 'middle'
    }
  ]
};

class Dashboard extends React.PureComponent {

  render = () => {
    <Line data={data}/>
  }
}

export default Dashboard