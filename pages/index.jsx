import Link from 'next/link'
import data from '../data'
import styles from '../styles/Home.module.css'
import Cards from '../components/Cards'

const teams = data

export default function Home(){
  return(
    <div>
      <h1>Landing</h1>
      
      <Cards/>
    {/*<Link href='/imperial'><h3>Imperial</h3></Link>
      <Link href='/wnw'><h3>W N W</h3></Link>*/}
    </div>
  )
}