import { NextPage } from "next";
import BaseLayout from "../../components/core/BaseLayout";
import Image from "next/image";
import styled from "styled-components";
import PaperPanel from "../../components/PaperPanel";

const PressWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 4rem;
  max-width: 80%;
`

const StickerRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Content = styled.div`
  flex-grow: 1;
  text-align: center;
  font-family: 'Water Brush', cursive;
`

const PressHeader = styled.h2`
  font-weight: normal;
  margin-bottom: 0;
`

const PressList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 0;
`

const MiddleRow = styled.div`
  display: flex;
`

const Press: NextPage = () => {
  return (
    <BaseLayout>
      <PressWrapper>
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
              <h1 style={{marginBottom: "1rem"}}>Press Releases</h1>
              <PressHeader>2022</PressHeader>
              <PressList>
                <li>Press 1</li>
                <li>Press 2</li>
                <li>Press 3</li>
              </PressList>
              <PressHeader>2021</PressHeader>
              <PressList>
                <li>Press 1</li>
                <li>Press 2</li>
                <li>Press 3</li>
              </PressList>
              <PressHeader>2020</PressHeader>
              <PressList>
                <li>Press 1</li>
                <li>Press 2</li>
                <li>Press 3</li>
              </PressList>
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
      </PressWrapper>
    </BaseLayout>
  )
}

export default Press;