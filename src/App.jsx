import {Model, Skybox, ThirdPersonCamera, useKeyboard, useLoop, World} from "lingo3d-react"
import { useRef } from "react"
function App() {
  const key = useKeyboard()
  const characterRef = useRef()
  const movtion = key === "w"? "walking" : "idle"
  useLoop(()=>{
    characterRef.current.moveForward(-5)
  },key === "w")
  return (
    <World>
      <Model src="Grassland.glb" scale={270} physics="map" />
      <ThirdPersonCamera active mouseControl>
          <Model 
              ref={characterRef}
              src="Fox.fbx" 
              physics="character"
              animations={{idle:"Idle.fbx", walking:"Walking.fbx"}}
              animation = {movtion}
          />
      </ThirdPersonCamera>
      <Skybox texture="skybox.jpg"/>
    </World>
  )
}
export default App
