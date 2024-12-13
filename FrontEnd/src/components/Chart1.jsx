import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';


const Chart1 = () => {

  return (
    <div className='ml-[-30px] hidden bg-gray-100 rounded-lg w-[500px] lg:ml-[20px] xl:block'>
    
  <BarChart
  xAxis ={[{scaleType:'band', dataKey:'month',
    categoryGapRatio: 0.8,
    label:'From 23 May 2021 to 23 May 2022',
    
  }]}
  yAxis={[{
    valueFormatter:(value)=>`${value}k`
  }]}
series={[
{dataKey:'expenses',
  label: 'Net: -$109,876.33',

  color:'#cdcdcd',


 }
]}
dataset={[
  { month: "January", expenses: 8.5 },
  { month: "February", expenses: 10 },
  { month: "March", expenses: 6 },
  { month: "May", expenses: 7 },
  { month: "June", expenses: 7.5 },
  { month: "July", expenses: 8.5 },
  { month: "August", expenses: 9 },
  { month: "September", expenses: 8.2 },
  { month: "October", expenses: 6 },
  { month: "November", expenses: 9.8 },
  { month: "December", expenses: 9 },
]}
  width={500}
  height={400}
  borderRadius={10}
  
  />
 
  </div>
  )
}

export default Chart1