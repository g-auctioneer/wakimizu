import { useState } from "react";
import prefs from "../utils/define";

const Index = () => {
  const [pref, setPref] = useState("北海道");

  const fetchWakimizu = () => {
    // exec
  }

  return (
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
  );
}

export default Index;
