import { useState } from "react";
import prefs from "../utils/define";

const Index = () => {
  const [pref, setPref] = useState("北海道");
  const [wakimizu, setWakimizu] = useState({});

  const fetchWakimizu = async () => {
    const result = await fetch(`https://livlog.xyz/webapi/springWater?q=${pref}`)
      .then(res => res.json());
    setWakimizu(result.result);
  }

  return (
    <>
      <div>
        <select onChange={e => setPref(e.target.value)}>
          {prefs.map((pref, index) => {
            return <option value={pref} key={index}>{pref}</option>
          })}
        </select>
        <button onClick={fetchWakimizu}>検索</button>
      </div>
      <div>
        <Table wakimizu={wakimizu}/>
      </div>
    </>
  );
}

const Table = ({wakimizu}) => {
  if (!Object.keys(wakimizu).length) {
    return null;
  }

  let index = 0;
  const tableCells = Object.keys(wakimizu).map(key => (
    <tr key={key}>
      <td>{++index}</td>
      <td>{wakimizu[key].name}</td>
      <td>{wakimizu[key].overview}</td>
      <td>{wakimizu[key].address}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>名称</th>
          <th>概説</th>
          <th>住所</th>
        </tr>
      </thead>
      <tbody>
        {tableCells}
      </tbody>
    </table>
  );
}

export default Index;
