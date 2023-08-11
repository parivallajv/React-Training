import { Paragraph, TestimonalCards, TestimonalDivision, TestimonalImg, TestimonalJob, TestimonalPara, TestimonalSubTitile, TestimonalTitle } from "../sunny-styles";

import Person1Img from "../images/desktop/image-emily.jpg";
import Person2Img from "../images/desktop/image-thomas.jpg";
import Person3Img from "../images/desktop/image-jennie.jpg";

const Testimonal = () => {
    return (<div> <TestimonalTitle>CLIENT TESTIMONALS</TestimonalTitle>
    <TestimonalDivision>
      <TestimonalCards>
        <TestimonalImg src={Person1Img} alt="Person1Img" />
        <TestimonalPara>
          We put our trust in Sunnyside and they delivered, making sure our
          needs were met and deadlines were always hit
        </TestimonalPara>
        <TestimonalSubTitile>Emily R.</TestimonalSubTitile>
        <TestimonalJob>Marketing Director</TestimonalJob>
      </TestimonalCards>
      <TestimonalCards>
        <TestimonalImg src={Person2Img} alt="Person2Img" />
        <TestimonalPara>
          Sunnyside’s enthusiasm coupled with their keen interest in our
          brand’s success made it a satisfying and enjoyable experience.
        </TestimonalPara>
        <TestimonalSubTitile>Thomas S.</TestimonalSubTitile>
        <TestimonalJob>Chief Operating Officer</TestimonalJob>
      </TestimonalCards>
      <TestimonalCards>
        <TestimonalImg src={Person3Img} alt="Person3Img" />
        <TestimonalPara>
          Incredible end result! Our sales increased over 400% when we worked
          with Sunnyside. Highly recommended!
        </TestimonalPara>
        <TestimonalSubTitile> Jennie F.</TestimonalSubTitile>
        <TestimonalJob>Business Owner</TestimonalJob>
      </TestimonalCards>
    </TestimonalDivision> </div>);
}
 
export default Testimonal;