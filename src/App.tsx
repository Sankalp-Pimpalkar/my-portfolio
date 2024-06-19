import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Hero from "./pages/Hero"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  )
}

export default App