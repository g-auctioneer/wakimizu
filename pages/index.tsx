import { useState } from "react";
import PrefsSelectBox from "../components/PrefsSelectBox";
import WakimizuTable from "../components/WakimizuTable";
import { ChakraProvider } from '@chakra-ui/react'
// import { Container } from '@chakra-ui/react'

const Index = () => {
  const [ pref, setPref ] = useState("北海道");
  const [ wakimizu, setWakimizu ] = useState({});

  const fetchWakimizu = async () => {
    const result = await fetch(`https://livlog.xyz/webapi/springWater?q=${pref}`)
      .then(res => res.json());
    setWakimizu(result.result);
  }
  fetchWakimizu();

  return (
    <ChakraProvider>
      <PrefsSelectBox fn={e => setPref(e.target.value)} />
      <WakimizuTable wakimizu={wakimizu} />
    </ChakraProvider>
  );
}

export default Index;
