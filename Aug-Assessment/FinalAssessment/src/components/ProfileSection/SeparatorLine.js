import { SeparatorDiv, SeparatorText } from "../../styles";
import Separator from "../../svg/Separator";

const SeparatorLine = () => {
  return (
    <SeparatorDiv>
      <Separator />
      <SeparatorText> OR </SeparatorText>
      <Separator />
    </SeparatorDiv>
  );
};

export default SeparatorLine;
