import { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import BaseLayout from "../../components/core/BaseLayout";
import PaperPanel from "../../components/PaperPanel";

const BioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  margin: 0 2rem;
  @media (min-width: 768px) {
    margin: 0 auto;
  }
  @media (min-width: 992px) {
    flex-direction: row;
    min-width: fit-content;
  }
`
const PicturePanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin: 2rem 0;
    transform: rotate(9deg);
  }

  > *:first-child {
    transform: rotate(-9deg);
  }

  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: space-around;
  }
  @media (min-width: 992px) {
    margin-left: 3rem;
    flex-direction: column;
  }
`

const Bio: NextPage = () => {
  return (
    <BaseLayout>
      <BioWrapper>
        <PaperPanel>
          <h1>Bio</h1>
          <p>
            Samuel Wilton hails from the mid-west. Dog however is 
            all west coast sensibilities and star power. Starting 
            his musical journey at 14. He produced beats under the 
            moniker, dogdick. As time passed his sound and persona 
            matured.
          </p>
          <p>
            Not quite Rap. Not quite Pop. Dog defies easy labels. 
            One constant remains, Dog’s music connects with his 
            audience on an intimate level.
          </p>
          <h2 style={{marginTop: "3rem"}}>Social</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quisque molestie sit amet tortor sit amet fringilla. 
          </p>
          <img
            style={{marginRight: "3rem"}}
            width={32}
            height={32}
            src="/resources/social_icons/instagram.svg"
          />
          <img
            style={{marginRight: "3rem"}}
            width={32}
            height={32}
            src="/resources/social_icons/soundcloud.svg"
          />
          <img
            width={32}
            height={32}
            src="/resources/social_icons/applemusic.svg"
          />
          <h2 style={{marginTop: "3rem"}}>Booking</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quisque molestie sit amet tortor sit amet fringilla. 
          </p>
        </PaperPanel>
        <PicturePanel>
          <div>
            <Image
              width={250}
              height={286}
              src="/resources/photos/dog1.png"
            />
          </div>
          <div>
            <Image
              width={250}
              height={289}
              layout="fixed"
              src="/resources/photos/dog2.png"
            />
          </div>
        </PicturePanel>
      </BioWrapper>
    </BaseLayout>
  )
}

export default Bio;