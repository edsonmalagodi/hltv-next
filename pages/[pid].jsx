import { useRouter } from 'next/router'
import datas from '../data.js'

import styles from '../styles/Home.module.css'



const Teams = () =>{
	const router = useRouter()
	const { pid } = router.query
	const teams = datas[pid]

	const getPlayers = teams?.players.map((e) =>{
		return(			
			<img className={styles.playerimg} src={e.player_image}></img>
		)

	})

	return (
		<div className={styles.container}>			
			<img className={styles.images} src={teams?.image}/>		
			<h1>{teams?.name}</h1>							
			<div>{getPlayers}</div>
			<img src={teams?.player_image}></img>
		</div>
	)
}	

export default Teams