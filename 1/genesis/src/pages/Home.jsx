import React from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card';
import data from '../data/data.json';

const Home = () => {
    const child = data.map((item) => {
        return <Card key={item.id} title={item.title} image={item.image} artist={item.artist} />
    });
  return (
    <Layout children={child}/>
  )
}

export default Home