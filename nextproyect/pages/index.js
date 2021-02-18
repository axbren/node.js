import React from 'react'
/*import Navigation from "../components/navigation"*/
import Head from 'next/head'
import Container from '../components/Container'
import fetch from 'isomorphic-fetch'
import  Users from '../components/Users'
const Index = (props) =>{
    console.log(props)
return (
    <div>
      
      <Container>
      <Head>
          <title>Home</title>
          </Head>
<h1>Next</h1>
<Users users={props.users}/>


  </Container>
  </div>
    )
}

Index.getInitialProps = async (ctx) =>{
 const res = await fetch('https://jsonplaceholder.typicode.com/users')
 const data = await res.json();
 return{users: data}
}
export default Index