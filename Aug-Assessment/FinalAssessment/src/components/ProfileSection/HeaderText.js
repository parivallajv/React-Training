import { GreyHighLighter, HeaderDivision, HeaderFont } from "../../styles";

const HeaderText = () => {
  return (
    <HeaderDivision>
      <HeaderFont>
        We found <GreyHighLighter>10 profiles</GreyHighLighter> matching your
        details. Select a profile to claim
      </HeaderFont>
    </HeaderDivision>
  );
};

export default HeaderText;
