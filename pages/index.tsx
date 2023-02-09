import { useEffect, useState } from "react";
import prefs from "../utils/define";

const Index = () => {
  const [pref, setPref] = useState("北海道");
  const [wakimizu, setWakimizu] = useState({});

  const fetchWakimizu = async () => {
    const result = await fetch(`https://livlog.xyz/webapi/springWater?q=${pref}`)
      .then(res => res.json());
    setWakimizu(result.result);
  }

  useEffect(() => {
    if (Object.keys(wakimizu).length) {
      // not empty
    }
  }, [wakimizu]);

  return (
    <>
      <div>
        <select onChange={e => setPref(e.target.value)}>
          {prefs.map((pref, index) => {
            return <option value={pref} key={index}>{pref}</option>
          })}
        </select>
        <button onClick={fetchWakimizu}>
          検索
        </button>
      </div>
      <div>
      </div>
    </>
  );
}

export default Index;
