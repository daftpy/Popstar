import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
}

const Paper = styled.div`
  display: flex;
  flex-direction: column;
`

const Top = styled.div`
  background: url('/resources/paper/torn-border.png');
  height: 65px;
  width: 100%;
`
const Bottom = styled.div`
  background: url('/resources/paper/torn-border-upsidedown.png');
  height: 65px;
  width: 100%;
`
const Content = styled.div`
  padding: 0 1.8rem;
  background: white;
  min-height: 300px;
`

const PaperPanel: React.FC<Props> = ({ children }) => {
  return (
    <Paper>
      <Top></Top>
        <Content>
          { children }
        </Content>
      <Bottom></Bottom>
    </Paper>
  )
}

export default PaperPanel;