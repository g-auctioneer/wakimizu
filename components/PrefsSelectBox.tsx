import prefs from "../utils/define";
import { Container } from '@chakra-ui/react'

const PrefsSelectBox = ({ fn }) => {
  return (
    <Container m='20px'>
      <select onChange={fn}>
        {prefs.map((pref, index) => {
          return <option value={pref} key={index}>{pref}</option>
        })}
      </select>
    </Container>
  );
}

export default PrefsSelectBox;
