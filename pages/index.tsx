import { useState } from "react";
import SelectBox from "../components/SelectBox";
import WakimizuTable from "../components/WakimizuTable";

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
    <>
      <SelectBox fn={e => setPref(e.target.value)} />
      <WakimizuTable wakimizu={wakimizu} />
    </>
  );
}

export default Index;
