import styled from "styled-components"
import NavItem from "./NavItem"

const NavWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // background: url('/resources/navbar/glitter_bg.png');
    padding: 2rem 1rem;
    margin: 0 2rem;
  }
`

const Navbar: React.FC = () => {
  return (
    <NavWrapper>
      <NavItem
        width={130}
        height={55}
        background="/resources/navbar/bio_bg.png"
        text="Bio"
        link="/bio"
      />
      <NavItem
        width={85}
        height={91}
        background="/resources/navbar/video_bg.png"
        text="Tour"
        link="/tour"
      />
      <NavItem
        width={91}
        height={91}
        background="/resources/navbar/music_bg.png"
        text="Music"
        link="/music"
      />
      <NavItem
        width={98}
        height={91}
        background="/resources/navbar/press_bg.png"
        text="Press"
        link="/press"
      />
      <NavItem
        width={85}
        height={91}
        background="/resources/navbar/video_bg.png"
        text="Videos"
        link="/videos"
      />
      <NavItem
        width={85}
        height={91}
        background="/resources/navbar/shop_bg.png"
        text="Shop"
        link="https://dogpopstar.myshopify.com"
      />
    </NavWrapper>
  )
}

export default Navbar;