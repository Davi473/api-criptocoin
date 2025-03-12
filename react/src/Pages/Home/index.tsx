// import { useState } from 'react'
import styles from "./style"

function Home() {
//   const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <h3 style={{fontSize: 20}}>
            <p style={{fontSize: 15}}>Seja Bem Vindo,</p>
            Davi
          </h3>
      </div>
      <div style={styles.scrollContainer}>
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>Test</h2>
            <p style={{...styles.cardIcone}}>icone</p>  
          </div>
          <div style={styles.cardBody}>
            <p style={styles.cardText}>Compra: <small style={styles.cardValue}>23</small></p>
            <p style={styles.cardText}>Compra: <small style={styles.cardValue}>23</small></p>
            <p style={styles.cardText}>Compra: <small style={styles.cardValue}>23</small></p>
          </div>
        </div>
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>Test</h2>
            <p style={{...styles.cardIcone}}>icone</p>  
          </div>
          <div style={styles.cardBody}>
            <p style={styles.cardText}>Compra: <small style={styles.cardValue}>23</small></p>
            <p style={styles.cardText}>Compra: <small style={styles.cardValue}>23</small></p>
            <p style={styles.cardText}>Compra: <small style={styles.cardValue}>23</small></p>
          </div>
        </div>
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>Test</h2>
            <p style={{...styles.cardIcone}}>icone</p>  
          </div>
          <div style={styles.cardBody}>
            <p style={styles.cardText}>Compra: <small style={styles.cardValue}>23</small></p>
            <p style={styles.cardText}>Compra: <small style={styles.cardValue}>23</small></p>
            <p style={styles.cardText}>Compra: <small style={styles.cardValue}>23</small></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
