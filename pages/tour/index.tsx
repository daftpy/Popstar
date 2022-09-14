import { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";
import BaseLayout from "../../components/core/BaseLayout";

const TourWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;
  // color: #FEFEFE;
  min-width: 100%;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 0 3rem;
    flex-direction: row;
  }
`

const TourDate = styled.div`
  font-family: "Water Brush", cursive;
`

const TourTickets = styled.div`
  font-weight: bold;
`

const Background = styled.div`
  min-height: 100vh;
  padding: 3rem 0;
  background-image: url('resources/tour/baggies.png'), url('resources/tour/bears.png');
  background-position: left bottom, right top;
  background-repeat: no-repeat, no-repeat;
  background-size: 280px, 300px;
  background-origin: border-box;
`
const TourInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const VenueName = styled.div`
  font-weight: bold;
`

const Tour: NextPage = () => {
  return (
    <BaseLayout>
      <Background>
          <p style={{textAlign: 'center', fontSize: '1.5rem', marginBottom: '3rem'}}>
            For bookings contact ham@lowsarecords.com
          </p>
          <Link href="https://themoroccan.com/event/yards4le-ezra-kaden-jomie-hamilton/">
            <a>
              <TourWrapper>
                <TourInfo>
                  <VenueName>Moroccan Lounge</VenueName>
                  <TourDate>Sept 14th</TourDate>
                </TourInfo>
                <TourTickets>
                  TICKETS
                </TourTickets>
              </TourWrapper>
            </a>
          </Link>
        {/* <TourWrapper>
          <TourDate>May 3rd</TourDate>
          <TourTickets>TICKETS</TourTickets>
        </TourWrapper>
        <TourWrapper>
          <TourDate>May 4th</TourDate>
          <TourTickets>TICKETS</TourTickets>
        </TourWrapper> */}
      </Background>
    </BaseLayout>
  )
}

export default Tour;