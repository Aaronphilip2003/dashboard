import "./chart.scss"
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import HackerNewsComponent from "./HackerNewsComponent";


const data = [
  { name: "January", Total: 1100},
  { name: "February", Total: 2100},
  { name: "March", Total: 820},
  { name: "April", Total: 1620},
  { name: "May", Total: 820},
  { name: "June", Total: 1720},
];

const Chart = ({aspect , title}) => {
  return (
    <div className='chart'>
      <div className="title">{title}</div>
       <ResponsiveContainer width="100%" aspect={aspect}>
          <HackerNewsComponent/>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
