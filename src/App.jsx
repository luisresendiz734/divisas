import { Box } from "@mui/system"
import Converter from "./components/Converter"

const App = () => {

  return (
    <Box sx={{
      width: "100vw", height: "100vh",
      display: "flex", justifyContent: "center",
      pt: 4,
      backgroundColor: "#f2f2f2"
    }}>
      <Converter />
    </Box>
  )
}

export default App;