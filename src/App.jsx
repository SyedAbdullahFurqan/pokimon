import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Poki from './Poki'

function App() {
  const [count, setCount] = useState([])
    const [Test, setTest] = useState(true)
const [change, setChange] = useState({
 name: " "
});
//const api ="https://pokeapi.co/api/v2/evolution-chain?offset=20&limit=20" https://pokeapi.co/api/v2/version

const pk= async ()=>{

  try {
    const get = await fetch("https://pokeapi.co/api/v2/pokemon?Limit=24")
const rec= await get.json()
    
const fet =  rec.results.map (async (curr)=>{

  const second=await fetch(curr.url)
 const set=  await second.json()
 console.log(set)
return set;
})

console.log(fet)
const succecs= await Promise.all(fet)
setCount(succecs)

  } catch (error) {
    console.log(error ,"error")
  }
  
}

useEffect(() => {
  pk()
}, []);



const  pook =(e)=>{

  setChange({
  ...change,
  
  [e.target.name]:e.target.value 
})
setTest(false)

  
}
const search = count.filter(sea => 
  sea.name.toLowerCase().includes(change.name.toLowerCase())

)




  return (
    <>
    <div className='container' style={{textAlign:"center"}}>

  
  <h1 className='poki'>Pokimon</h1> 
  <input type="text"  name='name' onChange={pook} placeholder='poki' />

<div className='card bg-amber-600'>
{search.length > 0 ? (
  search.map((data) => (
    <Poki key={data.id} data={data} />
  ))
) : (
  count.map((data) => (
    <Poki key={data.id} data={data} />
  ))
)}  
{/*

data image


<div className='data' key={data.id}>
<img src={data.sprites.other.dream_world.front_default} style={{width:"200px"}} alt="" />

<h1>{data.name}</h1>
<span> Height:  {data.height}</span>
<p> Weight {data.weight}</p>


</div>

ablity


data.types.map((ab)=>{
return(
  <div>

<button>{ab.type.name}</button>
  </div>
)

})*/}

</div>


  </div>
     </>
  )
}

export default App
