import { NextPage } from "next";
import BaseLayout from "../../components/core/BaseLayout";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 3rem;
`

const VideoWrapper = styled.div`
  margin-bottom: 3rem;
  width: 500px;

  :nth-child(even) {
    margin-left: 2rem;
  }

  iframe {
    width:100%;
    height:300px;
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
      <main>
        <Wrapper>
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
        </Wrapper>
      </main>
    </BaseLayout>
  )
}

export default Videos;