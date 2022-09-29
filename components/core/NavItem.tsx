import Link from "next/link";
import styled from "styled-components";

interface Props {
  background: string;
  width: number;
  height: number;
  text: string;
  link: string;
}

interface ItemProps {
  background: string;
  width: number;
  height: number; 
}

const Item = styled.div<ItemProps>`
  // background: url(${ props => props.background }) no-repeat;
  // height: ${ props=> props.height }px;
  // width: ${ props => props.width }px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: 'Pinyon Script', cursive;
  font-weight: bold;
  font-size: 2rem;
`

const NavItem: React.FC<Props> = ({ background, width, height, text, link }) => {
  return (
    <Link href={link}>
      <a>
        <Item
          background={ background }
          width={ width }
          height={ height }
        >
          { text }
        </Item>
      </a>
    </Link>
  )  
}

export default NavItem;