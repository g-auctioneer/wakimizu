import prefs from "../utils/define";

const PrefsSelectBox = ({ fn }) => {
  return (
    <select onChange={fn}>
      {prefs.map((pref, index) => {
        return <option value={pref} key={index}>{pref}</option>
      })}
    </select>
  );
}

export default PrefsSelectBox;
