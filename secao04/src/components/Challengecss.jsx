import styles from './challenge.module.css'




const Challengecss = ({carros}) => {
  return (
    carros.map((car,index)=>(
       <div className={styles.container}>
        <div className={styles.card}>
         <img className={styles.imagens} src={car.img} alt="carros" />
         <h1 className={styles.title}>{car.nome}</h1>
         <h2 className={styles.age}>Ano: {car.ano}</h2>
       </div>
       </div>
    ))
  )
}

export default Challengecss