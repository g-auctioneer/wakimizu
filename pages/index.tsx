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
  fetchWakimizu();

  return (
    <>
      <SelectBox fn={e => setPref(e.target.value)} />
      <Table wakimizu={wakimizu} />
    </>
  );
}

const SelectBox = ({ fn }) => {
  return (
    <select onChange={fn}>
      {prefs.map((pref, index) => {
        return <option value={pref} key={index}>{pref}</option>
      })}
    </select>
  );
}

const Table = ({ wakimizu }) => {
  if (!Object.keys(wakimizu).length) {
    return null;
  }

  // FIXME: keyにindexを使うのは微妙
  // https://ja.reactjs.org/docs/lists-and-keys.html#keys
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
