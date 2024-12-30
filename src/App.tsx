import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Grid, GridItem } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Grid templateAreas={{
        base: "main"
      }}>
        <GridItem area={"main"}>
        
        </GridItem>
      </Grid>
    </div>
  )
}

export default App
