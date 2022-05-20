import { FormControl, FormHelperText, InputLabel, Typography } from "@mui/material";
import WindowedSelect from "react-windowed-select";


const SelectVirtualized = ({ option, setOption, options }) => {
  return (
    <>
      <FormControl variant="standard">
        <WindowedSelect onChange={e => setOption(e.value)} options={options} />
        <FormHelperText>Seleccionar divisas</FormHelperText>
      </FormControl>
    </>
  );
}

export default SelectVirtualized;