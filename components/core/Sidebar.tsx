import Link from "next/link";
import styled from "styled-components";

interface SidebarProps {
  visible: Boolean;
}

const SidebarNav = styled.div<SidebarProps>`
  position: absolute;
  top: 0;
  left: 0;
  padding: 4em 6em;
  background: #5E1124;
  height: 100vh;
  z-index: 1;
  display: ${props => props.visible ? "block" : "none"}
`

const Navigation = styled.ul`
  list-style: none;
  color: #FEFEFE;
  padding: 0;

  > * {
    margin-bottom: 3rem;
  }
`

const Sidebar: React.FC<SidebarProps> = ({ visible }) => {
  return (
    <SidebarNav visible={ visible }>
      <Navigation>
        <li>
          <Link href="/bio">
            <a>
              Bio
            </a>
          </Link>
        </li>
        <li>
          <Link href="/tour">
            <a>
              Tour
            </a>
          </Link>
        </li>
        <li>
          <Link href="/music">
            <a>
              Music
            </a>
          </Link>
        </li>
        <li>
          <Link href="/press">
            <a>
              Press
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              Videos
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              Shop
            </a>
          </Link>
        </li>
      </Navigation>
    </SidebarNav>
  )
}

export default Sidebar;