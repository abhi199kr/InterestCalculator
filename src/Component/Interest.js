import React, { useState } from 'react'
import "./Interest.css"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Interest = () => {
    const [type,setType]=useState("si")
    const [principle,setPrinciple]=useState()
    const [rate,setRate]=useState()
    const [time,setTime]=useState()
    const [result,setResult]=useState(0)
    const [amont ,setAmount]=useState()
    const [err,setErr]=useState()
    const [graph,setGraph]=useState([])
    // const data = 
    // [

    
    //   {
    //     name: 'Page A',
    //     uv: result,
        
    //   }
    // ]
     
     
  
    function calculate(e)
    {
       
        let interest;
        e.preventDefault()
        if(!principle || !rate ||!time )
        {
          setErr("All fields are mandatory")
        }
       else{
      setErr("")
      if(type==="si")
      {
          interest=(principle*rate*time)/100
       
          setResult(interest)
          setAmount(Number(principle)+Number(interest))
          const data={name:"si",uv:result}
          setGraph([data,...graph])
          console.log("gr:",graph)

      }
     else{
      interest=principle*(Math.pow((1+rate/100),time)) - principle
      setResult(interest.toFixed(2))
      setAmount((Number(principle)+Number(interest)).toFixed(2))
      setGraph(...graph, {
        name: 'Page A',
        uv: result,
        
      },)
      const data={name:"ci",uv:result}
      setGraph([data,...graph])
      console.log("gr:",graph)

      console.log("gr:",graph)
     }
    }
    }
    
    
  return (
    <>
    
       
     
  <div className='bgi d-flex justify-content-center align-item-center'>
    <div className='card p-5 mt-5 '>
    <form action="" onSubmit={calculate}>
    <select name="" id="" onChange={(e)=>setType(e.target.value)}>
        <option value="si">simple Interest</option>
        <option value="ci">Compound Interest</option>
    </select>
    <br />
        <label htmlFor="">Priciple:
        <br />
        <input type="text" onChange={(e)=>setPrinciple(e.target.value)} /></label>
        <br />
        <label htmlFor="">Rate:
        <br />
        <input type="text"  onChange={(e)=>setRate(e.target.value)}/></label>
        <br />
        <label htmlFor="">Time:
        <br />
        <input type="text" onChange={(e)=>setTime(e.target.value)} /></label>
        <br />
        <span className='text-danger'>{err}</span>
        <br />
        <button className='px-3 btn btn-success rounded-2 mt-1'>submit</button>
        
        
    </form>
    <p className='h4 mt-2'>Total Interest:{result}</p>
    <p className='h4'>Total Amount:{amont}</p>
   

</div>
{/* Charts sections */}

        <BarChart
        className='m-auto mt-5'
          width={400}
          height={300}
          data={graph}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="amt" stackId="a" fill="#82ca9d" /> */}
          <Bar dataKey="uv" fill="blue" />
        </BarChart>
      
</div>
    </>
    
  )
}

export default Interest
