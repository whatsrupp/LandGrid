import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import echarts from 'echarts';

const ChartContainer = styled.div`
    height: 600px;
    width: 600px;
    max-width: 500px;
    max-height: 500px;
`;

const Chart = () => {

    const chartContainerRef = useRef(null);
    useEffect(() => {
        if (!chartContainerRef) return;
        const chart = echarts.init(chartContainerRef.current)

        chart.setOption({
            grid:{
                left: "20%",
                right: "20%",
                top: "20%",
                bottom: "20%",
            },
          
            xAxis: {name: 'x coordinate (m)',
            nameLocation: 'center',
            nameGap: 30,
            splitLine: {show: false},
            min: 0,
            max: 100,
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#fff'
                }
            }},
                  
            yAxis:{name: 'y coordinate (km)',
            nameGap: 30,

            nameLocation: 'center',
            nameRotate: 90,
            min: 0,
            max: 100,
            splitLine: {show: false},
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#fff'
                }
            }},
            visualMap: [{
                left: 'right',
                top: '10%',
                type: 'piecewise',
                dimension: 3,
                textStyle: {
                    color: '#fff'
                },
                orient: 'vertical',
                top: "20%",
                pieces: [
                    {min: 0, max: 5, label: "0% to 5%" },
                    {min: 5, max: 25, label: "5% to 25%"},
                    {min: 25, max: 75, label: "25% to 75%"},
                    {min: 75, max: 95, label: "75% to 95%"},
                    {min: 95, max: 100, label: "95% to 100%"}
                ],
               
            }],
            tooltip: {
          
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: ({data})=>{
                    const [x,y,price,percentile] = data;
                    const templateString = `Coordinates: (${x}, ${y})<br/>Price: £${price}<br/> Percentile: ${percentile}%`
                    return templateString
                }
            },
            series: [{
                name: 'Land Prices',

                symbolSize: 20,
                data: [
                    [10.0, 8.04, 2, 50],
                    [8.0, 6.95, 3, 100],
                    [13.0, 7.58, 4, 20],
                    [9.0, 8.81, 5, 30],
                    [11.0, 8.33, 6, 20],
                    [14.0, 9.96, 4, 21],
                    [6.0, 7.24, 3, 0],
                    [4.0, 4.26, 4, 4],
                    [12.0, 10.84, 5, 5],
                    [7.0, 4.82, 3, 25],
                    [5.0, 5.68, 4, 80]
                ],

               
                type: 'scatter'
            }]})

      }, [
        
        chartContainerRef
      ]);
    

    return(
        <ChartContainer ref={chartContainerRef} />
    )
}

export default Chart 