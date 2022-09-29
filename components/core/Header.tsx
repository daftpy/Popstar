import Link from "next/link";
import styled from "styled-components";

const Brand = styled.div`
  font-weight: bold;
  font-size: 4rem;
  color: rgb(51 65 85); 
  // background: url('resources/tape_bg.png') no-repeat;
  font-family: 'Pinyon Script', cursive;
  min-width: 364px;
`
const Rotation = styled.div`
  // transform: rotate(-16deg);
`
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem 0 2rem;
  align-items: center;
`
const Menu = styled.div`
  position: absolute;
  top: 3rem;
  right: 2rem;
  width: 24px;
  height: 24px;
  cursor: mouse;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

interface HeaderProps {
  visibility: Boolean;
  toggleSidebar: (toggle: Boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ visibility, toggleSidebar }) => {
  const toggleVisibility = () => {
    toggleSidebar(!visibility);
  }
  return (
    <HeaderWrapper>
      <Brand>
        <Rotation>
          <Link href="/">
            <a>Dog</a>
          </Link>
        </Rotation>
      </Brand>
      <Menu onClick={ toggleVisibility }>
        <img src="/resources/menu_icon.svg" />
      </Menu>
    </HeaderWrapper>
  )  
}
export default Header;