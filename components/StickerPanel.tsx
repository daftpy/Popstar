import Image from "next/image";
import styled from "styled-components";
import PaperPanel from "./PaperPanel";

interface IProps {
  children?: React.ReactNode;
}

const StickerRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Content = styled.div`
  flex-grow: 1;
  text-align: center;
  font-family: 'Water Brush', cursive;
  overflow: hidden;
  white-space: nowrap;

  h1 {
    font-weight: normal;
    margin-bottom: 3rem;
  }
`

const MiddleRow = styled.div`
  display: flex;
`

const StickerPanel: React.FC<IProps> = ({children}) => {
  return (
    <PaperPanel>
      <StickerRow>
        <Image
          width={120}
          height={77}
          src="/resources/press/rainbow.png"
        />
        <Image
          width={80}
          height={77}
          src="/resources/press/heart.png"
        />
        <Image
          width={80}
          height={77}
          src="/resources/press/star.png"
        />
        <Image
          width={120}
          height={77}
          src="/resources/press/rainbow.png"
        />
      </StickerRow>
      <MiddleRow>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center"}}>
          <Image
            width={85}
            height={82}
            layout="fixed"
            src="/resources/press/heart_red.png"
          />
          <Image
            width={68}
            height={65}
            layout="fixed"
            src="/resources/press/flower_orange.png"
          />
          <Image
            width={68}
            height={65}
            layout="fixed"
            src="/resources/press/star_blue.png"
          />
          <Image
            width={75}
            height={72}
            layout="fixed"
            src="/resources/press/heart_purple.png"
          />
        </div>
        <Content>
          <h1>Press Releases</h1>
            {children}
        </Content>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center"}}>
          <Image
            width={76}
            height={73}
            layout="fixed"
            src="/resources/press/star_gold.png"
          />
          <Image
            width={76}
            height={73}
            layout="fixed"
            src="/resources/press/flower_blue.png"
          />
          <Image
            width={120}
            height={77}
            layout="fixed"
            src="/resources/press/rainbow.png"
          />
          <Image
            width={68}
            height={65}
            layout="fixed"
            src="/resources/press/peace_purple.png"
          />
        </div>
      </MiddleRow>
      <StickerRow>
        <Image
          width={75}
          height={72}
          layout="fixed"
          src="/resources/press/peace_green.png"
        />
        <Image
          width={75}
          height={72}
          layout="fixed"
          src="/resources/press/star_pink.png"
        />
        <Image
          width={120}
          height={77}
          src="/resources/press/rainbow.png"
        />
        <Image
          width={68}
          height={65}
          layout="fixed"
          src="/resources/press/flower.png"
        />
        <Image
          width={88}
          height={85}
          layout="fixed"
          src="/resources/press/flower_red.png"
        />
      </StickerRow>
    </PaperPanel>
  )
}

export default StickerPanel;