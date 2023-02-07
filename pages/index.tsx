// import { useState } from "react";
import prefs from "../utils/define";

const Index = () => {
  return (
    <div>
      <select>
        {prefs.map(pref => {
          return <option value={pref}>{pref}</option>
        })}
      </select>
    </div>
  );
}

export default Index;
