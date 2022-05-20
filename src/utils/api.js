
const getAllSymbols = async () => {
  try {
    const URL = "https://api.apilayer.com/exchangerates_data/symbols";

    const headers = new Headers();
    headers.append("apikey", "bH06UnChD1gukOjPepYr8pwlFKpl0MKJ");

    const response = await fetch(URL, { headers });
    const json = await response.json();

    return json.success ? Object.keys(json.symbols) : [];
  } catch (error) {
    console.error(error);
  }
}

const getAllSymbolsCombinations = async () => {

  const symbols = await getAllSymbols();
  const combinations = []

  for(let i = 0; i < symbols.length; ++i) {
    for(let j = i + 1; j < symbols.length; ++j) {
      combinations.push({ value: `${symbols[i]}/${symbols[j]}`, label: `${symbols[i]}/${symbols[j]}` });
    }
  }

  return combinations;
}

const getConversion = async (from, to, amount) => {
  try {
    const url = `https://api.apilayer.com/exchangerates_data/convert?from=${from}&to=${to}&amount=${amount}`;

    const headers = new Headers();
    headers.append("apikey", "bH06UnChD1gukOjPepYr8pwlFKpl0MKJ");

    const response = await fetch(url, { headers });
    const json = await response.json();
    
    return json.success ? json : null;
  } catch (error) {
    console.error(error);
  }
}

export { getAllSymbols, getAllSymbolsCombinations, getConversion };