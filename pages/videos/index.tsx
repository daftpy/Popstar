import { NextPage } from "next";
import BaseLayout from "../../components/core/BaseLayout";
import styled from "styled-components";
import PaperPanel from "../../components/PaperPanel";

const Wrapper = styled.div`
  margin: 0 1.5rem;
  @media (min-width: 768px) {
    margin: 0 auto;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 3rem;
`

const VideoWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 3rem;
  width: 100%;
  max-width: 425px;


  @media (min-width: 1200px) {
    :nth-child(even) {
      margin-left: 2rem;
    }
  }

  iframe {
    width:100%;
    height:250px;
  }
  fieldset, legend {
      margin:0;
      padding:0;
      width:100%;
      height:100%;
  }
`

const Videos: NextPage = () => {
  return (
    <BaseLayout>
      <Wrapper>
        <PaperPanel>
          <main>
            <ContentWrapper>
              <VideoWrapper>
                <iframe src="https://www.youtube.com/embed/iN5ktLJGe6M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </VideoWrapper>
              <VideoWrapper>
                <iframe src="https://www.youtube.com/embed/7je4uPFoy8I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </VideoWrapper>
              <VideoWrapper>
                <iframe src="https://www.youtube.com/embed/0eyUP1-ETIQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </VideoWrapper>
              <VideoWrapper>
                <iframe src="https://www.youtube.com/embed/GWd6cDBJ158" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </VideoWrapper>
              <VideoWrapper>
                <iframe src="https://www.youtube.com/embed/Vnuq0O1SMA4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </VideoWrapper>
              <VideoWrapper>
                <iframe src="https://www.youtube.com/embed/nB1iHB9yn5k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </VideoWrapper>
            </ContentWrapper>
          </main>
        </PaperPanel>
      </Wrapper>
    </BaseLayout>
  )
}

<iframe width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

export default Videos;