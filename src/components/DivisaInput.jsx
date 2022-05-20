import { TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"

const DivisaInput = ({ value, setValue, symbol, setTouch, t }) => {
  return (
    <Box sx={{ mb: 1, display: "flex", alignItems: "center" }}>
      <TextField size="small" value={value} onChange={e => {
        setValue(+e.target.value);
        setTouch(t);
      }} type="number" />
      <Typography sx={{ ml: 1 }} component="span">{symbol}</Typography>
    </Box>
  )
}

export default DivisaInput;