import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);
  console.log("countries", countries);

  return (
    <>
      <div className="flex flex-wrap gap-10 w-full justify-center bg-black text-white">
        {countries.map((country) => (
          <div className="border p-2 w-96 flex flex-col items-center justify-center">
            <h2 className="text-lg uppercase  text-red-600">
              {country.name.common}
            </h2>
            <h4 className="text-sm text-red-600">{country.capital}</h4>
            <img className="pt-2 " src={country.flags.png} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
