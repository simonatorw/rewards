import React from 'react';

import dataCruncher from './App.api.js';

import './App.scss';

const data = [
  { name: 'Joey', amt: 20, date: '2020-06-01' },
  { name: 'Liz', amt: 220, date: '2020-06-01' },
  { name: 'Billy', amt: 150, date: '2020-06-02' },
  { name: 'Billy', amt: 100, date: '2020-06-02' },
  { name: 'Joey', amt: 500, date: '2020-06-10' },
  { name: 'Joey', amt: 10, date: '2020-07-01' },
  { name: 'Joey', amt: 300, date: '2020-07-02' },
  { name: 'Liz', amt: 250, date: '2020-07-03' },
  { name: 'Joey', amt: 20, date: '2020-07-11' },
  { name: 'Liz', amt: 2000, date: '2020-08-03' },
  { name: 'Joey', amt: 250, date: '2020-08-06' },
  { name: 'Joey', amt: 200, date: '2020-08-11' },
  { name: 'Joey', amt: 120, date: '2020-08-21' }
];

const refinedData = dataCruncher(data);

function App() {
  return (
    <div className="app">
      <h1><em>June - August</em> Rewards Info</h1>
      <table className="data-grid">
        <thead>
          <tr>
            <th>Customer</th>
            <th className="num">Reward Pts</th>
            <th className="num">Total ($)</th>
          </tr>
        </thead>
        <tbody>
          {refinedData.map(item => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td className="num">{item.pts}</td>
              <td className="num">{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
