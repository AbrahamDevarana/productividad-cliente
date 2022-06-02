import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

const DoughnutChart = ( props ) => {
    ChartJS.register(ArcElement, Tooltip, Legend);

    const chartData = [82, 18]
    const data = {
        labels: [],
        datasets: [
          {
            // progress [percent_value, 100-percent_value]
            data: chartData,
            backgroundColor: [
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 0)',
            ],
            borderWidth: 0,
          },
        ],
    };

    const options = {
        cutout: 30,
        elements: {
            arc: {
            borderWidth: 0,
            borderRadius: 25,
            },
        },
    }
    

    return ( 
        <Doughnut 
            rotation={0}
            data={data} 
            width= {100}
            height={100}
            options={options}
            plugins={[
                {
                  beforeDraw(chart) {
                   const { width } = chart;
                   const { height } = chart;
                   const { ctx } = chart;
                   ctx.restore();
                   const fontSize = (height / 100).toFixed(2);
                   ctx.font = `${fontSize}em sans-serif`;
                   ctx.textBaseline = 'top';
                   const text = chartData[0]+"%";
                   const textX = Math.round((width - ctx.measureText(text).width) / 2);
                   const textY = height / 2;
                   ctx.fillStyle = 'rgba(255, 255, 255, 1)';
                   ctx.fillText(text, textX, textY);
                   ctx.save();
                 },
                }
            ]}
        >

        </Doughnut>
     );
}
 
export default DoughnutChart;