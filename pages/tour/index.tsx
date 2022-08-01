import { NextPage } from "next";
import styled from "styled-components";
import BaseLayout from "../../components/core/BaseLayout";

const TourWrapper = styled.div`
  margin: 8rem 10%;
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
  color: #FEFEFE;
  @media (min-width: 768px) {
    margin: 8rem 30%;
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

const Tour: NextPage = () => {
  return (
    <BaseLayout>
      <Background>
          <p style={{textAlign: 'center', color: 'white', fontSize: '1.5rem'}}>
            For bookings contact ham@lowsarecords.com
          </p>
        {/* <TourWrapper>
          <TourDate>May 2nd</TourDate>
          <TourTickets>TICKETS</TourTickets>
        </TourWrapper>
        <TourWrapper>
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