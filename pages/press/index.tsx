import { NextPage } from "next";
import BaseLayout from "../../components/core/BaseLayout";
import styled from "styled-components";
import { PressRelease, getSortedPress } from "../../lib/press";

const PressPanel = styled.div`
  text-align: center;
  border-bottom: 1px solid #e3e3e3;
`

const PressWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 4rem;
  max-width: 80%;

  > * {
    margin: 0 0 5rem 0;
  }
`
const Publication = styled.div`
  margin: 0 0 3rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 1rem;

  p {
    margin: 0;
  }
  a {
    font-family: 'Crete Round', serif;
    font-size: .8rem;
  }
`
const PublicationHeader = styled.h4`
  font-size: 1.8rem;
  margin: 0;
`

const Press: NextPage = ({pressData}: any) => {
  const perPage = 5;

  const pressPages = pressData.reduce((resultArray: Array<Array<PressRelease>>, pressItem: PressRelease, index: number) => {
    const pageIndex = Math.floor(index/perPage);

    if(!resultArray[pageIndex]) {
      resultArray[pageIndex] = []
    }
    resultArray[pageIndex].push(pressItem);

    return resultArray;
  }, []);
  return (
    <BaseLayout>
      <PressWrapper>
        {pressPages.map((pressSeries: any) => {
          return (
            <PressPanel key={pressSeries}>
              {pressSeries.map((pressRelease:PressRelease) => {
                return (
                  <Publication key={pressRelease.publication+pressRelease.date.toString()}>
                    <PublicationHeader>{pressRelease.publication}</PublicationHeader>
                    <a href={pressRelease.link}>{pressRelease.link}</a>
                    <p>{pressRelease.date.toString()}</p>
                  </Publication>
                )
              })}
            </PressPanel>
          )
        })}
      </PressWrapper>
    </BaseLayout>
  )
}

export const getStaticProps = async () => {
  const pressData: PressRelease[] = await getSortedPress();
  return {
    props: {
      pressData
    }
  }
}

export default Press;