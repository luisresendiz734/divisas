import { Box, Card, CardContent, LinearProgress, Link, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { getAllSymbolsCombinations, getConversion } from "../utils/api";
import DivisaInput from "./DivisaInput";
import SelectVirtualized from "./SelectVirtualized";

const Converter = () => {
  
  const [isLoading, setIsLoading] = useState(false);

  const [options, setOptions] = useState(null);
  const [option, setOption] = useState("");

  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [touch, setTouch] = useState("1");

  useEffect(() => {
    const handleGetAllSymbolsCombinations = async () => {
      setIsLoading(true);
      const data = await getAllSymbolsCombinations();
      setOptions(data);
      setIsLoading(false);
    }

    handleGetAllSymbolsCombinations();
  }, [])

  useEffect(() => {
    const handleGetConversion = async () => {
      if(typeof firstValue !== "number" || !option.length || touch !== "1") return;
      if(firstValue == 0) {
        setSecondValue(0);
        return;
      }
      setIsLoading(true);
      const conversion = await getConversion(option.split("/")[0], option.split("/")[1], firstValue);
      setSecondValue(conversion.result);
      setTouch("");
      setIsLoading(false);
    }

    handleGetConversion();
  }, [option, firstValue]);

  useEffect(() => { 
    const handleGetConversion = async () => {
      if(typeof secondValue !== "number" || !option.length || touch !== "2") return;
      if(secondValue == 0) {
        setFirstValue(0);
        return;
      }
      setIsLoading(true);
      const conversion = await getConversion(option.split("/")[1], option.split("/")[0], secondValue);
      setFirstValue(conversion.result);
      setTouch("");
      setIsLoading(false);
    }

    handleGetConversion();
  }, [secondValue]);


  return (
    <Card sx={{ width: "95%", maxWidth: "20rem", height: "20rem", overflow: "visible"}}>
      {isLoading && <LinearProgress />}
      <CardContent>
        <Typography variant="h5" sx={{ mb: 2 }}>Conversor de divisas</Typography>
        {options && <SelectVirtualized option={option} setOption={setOption} options={options} />}
        <Box sx={{ my: 2}}>
          <DivisaInput value={firstValue} setValue={setFirstValue} setTouch={setTouch} t="1" symbol={option ? option.split("/")[0] : ""} />
          <DivisaInput value={secondValue} setValue={setSecondValue} setTouch={setTouch} t="2" symbol={option ? option.split("/")[1] : ""} />
        </Box>
        <Link href="https://github.com/luisresendiz734/divisas" target="_blank">Github</Link>
      </CardContent>
    </Card>
  )
}

export default Converter;