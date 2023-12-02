import ChartBar from './ChartBar'
import './Chart.css'

const Chart = props => {
    const dpValueArr = props.dataPoints.map(dp => dp.value)
    const totalMax = Math.max(...dpValueArr)

    return <div className='chart'>
        { props.dataPoints.map((dp) => 
            <ChartBar
                key={dp.label} 
                value={dp.value}
                maxValue={totalMax}
                label={dp.label} />
        ) }
    </div>
};

export default Chart;