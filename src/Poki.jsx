import React from 'react'

const Poki = ({data}) => {
  return (
    <>
      <div className='data ' key={data.id}>
<img className='img1' src={data.sprites.other.dream_world.front_default} style={{width:"200px"}} alt="" />

<h1>{data.name}</h1>
   <button>
{data.types.map((poki)=>poki.type.name).join(" ")}
</button>

<div className='poki '>

<p> Height:  {data.height}</p>
<p className='weight'>  Weight {data.weight}</p>


<p>Experice:  {data.
base_experience}</p>
<p>
 Ablity: {data.abilities.map((abli)=> abli.ability.name).slice(0,1).join(" ")}
</p>

</div>
</div>

    </>
  )
}

export default Poki
