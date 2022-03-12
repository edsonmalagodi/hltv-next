import data from '../../data'
import styles from '../../styles/Home.module.css'

export default function Cards(props){

  const image = data.map((e) => {
    return (
      <div className={styles.cards}>
        {e.image}
      </div>
    )
  })

}