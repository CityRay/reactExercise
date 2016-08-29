import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends React.Component {
  renderWeather(data) {
    console.log(data);
    const name = data.city.name;
    const temps = data.list.map(w => w.main.temp);
    const pressures = data.list.map(w => w.main.pressure);
    const humidities = data.list.map(w => w.main.humidity);
    const { lon, lat } = data.city.coord;

    return (
      <tr key={data.city.id}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>
          <Chart data={temps} color="orange" units="k" />
        </td>
        <td>
          <Chart data={pressures} color="green" units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="black" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    // console.log(this.props);
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (k)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

WeatherList.propTypes = {
};

function mapStateToProps({ weather }) {
  // console.log(weather);
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
