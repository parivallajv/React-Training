import { HeaderFont } from "../styles/ChartStyle";
import {
  FlagSmDiv,
  NameFont,
  PhotoBorder,
  PhotoTag,
  RankContainer,
  RankFontSm,
  RankHeader,
  RankMiniCard,
  RankMiniCardBg,
  RankNum,
  ReviewsCount,
  RoleFont,
  ScoreDiv,
  ScoreFlex,
  StarSmDiv,
} from "../styles/RankStyle";
import person1 from "../Images/person1.jpeg";
import person2 from "../Images/person2.png";
import person3 from "../Images/person3.jpeg";
import person4 from "../Images/person4.png";
import StarSm from "../svg/StarSm";
import StarSmMt from "../svg/StarSmMt";
import StarGoldSm from "../svg/StarGoldSm";
import FlagSm from "../svg/FlagSm";

const RankComponent = () => {
  return (
    <div>
      <RankHeader>
        <HeaderFont>See where you are</HeaderFont>
      </RankHeader>
      <RankContainer>
        <RankMiniCard>
          <div>
            <RankNum>154</RankNum>
          </div>
          <div>
            <PhotoBorder>
              <PhotoTag src={person1} />
            </PhotoBorder>
          </div>
          <div>
            <NameFont>Gustavo Torff</NameFont>
            <RoleFont>Loan Officer</RoleFont>
            <ScoreFlex>
              <ScoreDiv>4.0</ScoreDiv>
              <StarSmDiv>
                <StarSm />
                <StarSm />
                <StarSm />
                <StarSm />
                <StarSmMt />
              </StarSmDiv>
              <ReviewsCount>(9,999)</ReviewsCount>
            </ScoreFlex>
          </div>
        </RankMiniCard>
        <RankMiniCard>
          <div>
            <RankNum>155</RankNum>
          </div>
          <div>
            <PhotoBorder>
              <PhotoTag src={person2} />
            </PhotoBorder>
          </div>
          <div>
            <NameFont>Adison Herwitz</NameFont>
            <RoleFont>Loan Officer</RoleFont>
            <ScoreFlex>
              <ScoreDiv>4.0</ScoreDiv>
              <StarSmDiv>
                <StarSm />
                <StarSm />
                <StarSm />
                <StarSm />
                <StarSmMt />
              </StarSmDiv>
              <ReviewsCount>(9,999)</ReviewsCount>
            </ScoreFlex>
          </div>
        </RankMiniCard>
        <RankMiniCardBg>
          <div>
            <RankNum>156</RankNum>
          </div>
          <div>
            <PhotoBorder>
              <PhotoTag src={person3} />
              <FlagSmDiv>
                <FlagSm />
              </FlagSmDiv>
            </PhotoBorder>
            <RankFontSm>Top 5%</RankFontSm>
          </div>
          <div>
            <NameFont>Amber Ernst</NameFont>
            <RoleFont>Senior Loan Consultant</RoleFont>
            <ScoreFlex>
              <ScoreDiv>5.0</ScoreDiv>
              <StarSmDiv>
                <StarGoldSm />
                <StarGoldSm />
                <StarGoldSm />
                <StarGoldSm />
                <StarGoldSm />
              </StarSmDiv>
              <ReviewsCount>(9,999)</ReviewsCount>
            </ScoreFlex>
          </div>
        </RankMiniCardBg>
        <RankMiniCard>
          <div>
            <RankNum>157</RankNum>
          </div>
          <div>
            <PhotoBorder>
              <PhotoTag src={person4} />
            </PhotoBorder>
          </div>
          <div>
            <NameFont>Ahmad Kenter</NameFont>
            <RoleFont>Mortgage Consultant</RoleFont>
            <ScoreFlex>
              <ScoreDiv>3.0</ScoreDiv>
              <StarSmDiv>
                <StarSm />
                <StarSm />
                <StarSm />
                <StarSmMt />
                <StarSmMt />
              </StarSmDiv>
              <ReviewsCount>(9,999)</ReviewsCount>
            </ScoreFlex>
          </div>
        </RankMiniCard>
      </RankContainer>
    </div>
  );
};

export default RankComponent;
