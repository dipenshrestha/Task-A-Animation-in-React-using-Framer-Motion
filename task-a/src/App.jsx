import './App.css'
import {motion} from 'framer-motion';
import TrendingBanner from './TrendingBanner'
import Card from './Card'
import './index.css'

function App() {
  return (
    <>
      <TrendingBanner />
      <motion.div className="card-container">
        <Card />
      </motion.div> 
    </>
  )
}

export default App
