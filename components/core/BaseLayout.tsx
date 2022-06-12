import { useState } from 'react';

import styled from 'styled-components';
import Header from './Header';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface Props {
  children?: React.ReactNode;
  home?: boolean;
}
const Background = styled.div`
  min-height: 100vh;
`
const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0;
  min-height: 100vh;
  font-family: 'Crete Round', serif;
`
const MainContent = styled.div`
  margin-top: 4rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`

const BaseLayout: React.FC<Props> = ({children, home}) => {
  const [sidebarVis, toggleSidebarVis] = useState<Boolean>(false);
  return (
    <Background>
      <Sidebar visible={ sidebarVis } />
      <Container>
        <Header visibility={ sidebarVis } toggleSidebar={ toggleSidebarVis } />
        <Navbar />
        <MainContent>
          { children }
        </MainContent>
      </Container>
    </Background>
  )
}

export default BaseLayout;