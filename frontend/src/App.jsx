import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import Navbar from "./component/Navbar"
import { useColorModeValue } from "./components/ui/color-mode"
import { Toaster } from "@/components/ui/toaster"

function App() {

  const bgColor = useColorModeValue("white", "#1a1f2b");
  return (
    <Box minH={"100vh"} bg={bgColor}>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  )
}

export default App
