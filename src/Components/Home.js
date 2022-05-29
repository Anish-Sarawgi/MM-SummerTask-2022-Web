import React from 'react'
import '../Styles/Home.css'
import Card from './Card'
import Footer from './Footer'
import Squiggle from './Squiggle'

export default function Home() {
  return (
    <>
    <div>
      <Card/>
      <div className='overview-container'>
      <h1 style={{'margin':'10px 0px'}}>Overview</h1>
      <div style={{'margin':'10px 30px','lineHeight':'1.5rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veniam, aperiam tempore nesciunt repellendus non reprehenderit inventore, unde veritatis cum animi reiciendis assumenda asperiores temporibus dignissimos pariatur. Quos ipsam dolor, obcaecati porro laboriosam cupiditate id dolores tenetur voluptatibus impedit libero, animi minima laborum et labore saepe cumque totam sed consequuntur, illum ipsa eum. Consectetur mollitia illum ab atque doloribus magni tempore facilis ullam cupiditate voluptas, beatae pariatur eos enim aliquid labore ratione nostrum repellendus necessitatibus autem consequuntur excepturi dolor porro laboriosam animi. Nostrum, sapiente consequatur in labore facere aut distinctio, accusantium consectetur repellat id magnam sed dolores nesciunt similique deserunt ab mollitia, maiores tempore nihil saepe quam esse animi? Sint unde laudantium officia vitae tempore! Porro, asperiores illo. Tenetur, atque, ad consequuntur sed suscipit, corporis quia blanditiis qui quasi earum hic voluptatem. Quae corrupti hic voluptas ducimus, ullam iusto atque officia rerum accusamus eius voluptatum totam, vero doloremque laudantium. Accusantium recusandae facere voluptates et molestiae officiis expedita sequi voluptatibus quod voluptas nostrum ex sint, fugiat quisquam, nihil ratione at? Neque laborum nisi iusto est non unde nesciunt nostrum rerum, distinctio dicta labore modi dolores asperiores consequuntur repudiandae enim corrupti eaque, dolore quas porro adipisci recusandae odio placeat. Possimus ex nobis nemo ratione voluptas harum. Voluptates quo adipisci explicabo tempora minus voluptas exercitationem nemo quae numquam dicta. Delectus nesciunt obcaecati cupiditate magnam voluptates minus ab magni quas nulla eligendi. Vitae impedit modi quod voluptas ipsa adipisci est, assumenda architecto, repellat amet, tenetur ullam totam eos facilis vel! Esse fuga nisi recusandae eos veniam eum ea, eaque voluptate amet labore.!</div>
      </div>
    </div>
    <Squiggle/>
    <Footer/>
    </>
  )
}
