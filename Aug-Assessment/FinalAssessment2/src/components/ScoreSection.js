import { MainContainer } from "../ProfileStyles";
import {
  Header,
  ScoreCard,
  ScoreNum,
  ScoreText,
  XpLogoBorder,
  SearchFont,
  ScoreNumLarge,
  SubHeader,
  SubHeaderFlex,
  ScoreColor,
  GreenBar,
  BlueBar,
  PinkBar,
  CyanBar,
  Legends,
  GreenDot,
  BlueDot,
  PinkDot,
  CyanDot,
  LegendFont,
  Note,
  NoteTitle,
  NoteFont,
  MiniCards,
  ProfileCard,
  MiniCardTitle,
  ChevronRightBorder,
  MiniCardsLayout,
  MiniCard,
  MiniCardFlex,
  MiniCardFontNum,
  MiniCardText,
  MiniCardFlex2,
  GreenProgressDiv,
  MiniCardNumLight,
} from "../ScoreStyles";
import XpLogo from "../svg/XpLogo";
import ChevronRight from "../svg/ChevronRight";
import GreenProgress from "../svg/Greenprogress";

const ScoreSection = () => {
  return (
    <MainContainer>
      <ScoreCard>
        <Header>
          <XpLogoBorder>
            <XpLogo />
          </XpLogoBorder>
          <ScoreText>Your Search Rank Score : </ScoreText>
          <ScoreNum>392</ScoreNum>
        </Header>
        <SubHeader>
          <div>
            <SearchFont>Search Rank Score</SearchFont>
          </div>
          <SubHeaderFlex>
            <ScoreNumLarge>392</ScoreNumLarge>
            <SearchFont>of 550 Possible</SearchFont>
          </SubHeaderFlex>
        </SubHeader>
        <ScoreColor>
          <GreenBar />
          <BlueBar />
          <PinkBar />
          <CyanBar />
        </ScoreColor>
        <Legends>
          <GreenDot />
          <LegendFont>Profile</LegendFont>
          <BlueDot />
          <LegendFont>Reviews</LegendFont>
          <PinkDot />
          <LegendFont>Replies</LegendFont>
          <CyanDot />
          <LegendFont>Connections</LegendFont>
        </Legends>
        <Note>
          <NoteTitle>Calculator :</NoteTitle>
          <NoteFont>
            Add <NoteTitle>118</NoteTitle> points by replying to reviews and
            improve your search ranking
          </NoteFont>
        </Note>
        <MiniCardsLayout>
          <MiniCard>
            <MiniCardFlex>
              <MiniCardTitle>Profile</MiniCardTitle>
              <ChevronRightBorder>
                <ChevronRight />
              </ChevronRightBorder>
            </MiniCardFlex>
            <MiniCardFlex2>
              <MiniCardFontNum>21 </MiniCardFontNum>
              <MiniCardText>incomplete items</MiniCardText>
            </MiniCardFlex2>
            <GreenProgressDiv>
              <GreenProgress />
            </GreenProgressDiv>
          </MiniCard>

          <MiniCard>
            <MiniCardFlex>
              <MiniCardTitle>Reviews</MiniCardTitle>
              <ChevronRightBorder>
                <ChevronRight />
              </ChevronRightBorder>
            </MiniCardFlex>
            <MiniCardFlex2>
              <MiniCardFontNum>55 </MiniCardFontNum>
              <MiniCardText>of </MiniCardText>
              <MiniCardNumLight>75</MiniCardNumLight>
              <MiniCardText>recent</MiniCardText>
            </MiniCardFlex2>
            <GreenProgressDiv>
              <GreenProgress />
            </GreenProgressDiv>
          </MiniCard>

          <MiniCard>
            <MiniCardFlex>
              <MiniCardTitle>Replies</MiniCardTitle>
              <ChevronRightBorder>
                <ChevronRight />
              </ChevronRightBorder>
            </MiniCardFlex>
            <MiniCardFlex2>
              <MiniCardFontNum>18 </MiniCardFontNum>
              <MiniCardText>reviews need replies</MiniCardText>
            </MiniCardFlex2>
            <GreenProgressDiv>
              <GreenProgress />
            </GreenProgressDiv>
          </MiniCard>

          <MiniCard>
            <MiniCardFlex>
              <MiniCardTitle>Connections</MiniCardTitle>
              <ChevronRightBorder>
                <ChevronRight />
              </ChevronRightBorder>
            </MiniCardFlex>
            <MiniCardFlex2>
              <MiniCardFontNum>3 </MiniCardFontNum>
              <MiniCardText>of</MiniCardText>
              <MiniCardNumLight>5</MiniCardNumLight>
              <MiniCardText>connections</MiniCardText>
            </MiniCardFlex2>
            <GreenProgressDiv>
              <GreenProgress />
            </GreenProgressDiv>
          </MiniCard>
        </MiniCardsLayout>
      </ScoreCard>
    </MainContainer>
  );
};

export default ScoreSection;
