import React from 'react';
import {
  HorizontalGridLines,
  LineSeries,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis,
} from 'react-vis';

function Chart() {
  return (
    <div>
      <XYPlot width={300} height={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries
          data={[
            { x: 1, y: 4 },
            { x: 5, y: 2 },
            { x: 15, y: 6 },
          ]}
        />
      </XYPlot>
    </div>
  );
}

export default Chart;
