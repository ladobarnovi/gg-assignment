// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import styles from './App.module.css'
import KYCReportContainer from "../KYCReportContainer/KYCReportContainer.tsx";

export default function App() {

  return (
    <div className={styles.app}>
      <h1 className={styles.pageTitle}>Dashboard</h1>
      <KYCReportContainer />
    </div>
  )
}
