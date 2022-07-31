import type { NextPage } from 'next'
import Head from 'next/head'
import BaseLayout from '../components/core/BaseLayout'
import PaperPanel from '../components/PaperPanel'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const Wrapper = styled.div`
  margin: 0 auto;
  border-radius: 2px;
  background: url('/resources/navbar/glitter_bg.png'); 
  width: fit-content;
  margin: 5rem 2rem;
  @media (min-width: 768px) {
    margin: 5rem auto;
  }
`

const SocialWrapper = styled.div`
  text-align: center;
  color: #FEFEFE;
  padding: 1rem;
`

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <main>
        <Wrapper>
          <Image height={825} width={900} src="/resources/photos/monster_art.png" />
        </Wrapper>
        <SocialWrapper>
        <h2 style={{marginTop: "3rem"}}>Social</h2>
          <LinkWrapper>
          <Link href="https://www.instagram.com/swagsohardimboutthatlife/">
            <a>
              <img
                width={32}
                height={32}
                src="/resources/social_icons/instagram.svg"
              />
            </a>
          </Link>
          <Link href="https://www.tiktok.com/@dogpopstar?is_from_webapp=1&sender_device=pc">
            <a>
              <img
                width={32}
                height={32}
                src="/resources/social_icons/tiktok.svg"
              />
            </a>
          </Link>
          <Link href="https://twitter.com/thankdogforyou">
            <a>
              <img
                width={32}
                height={32}
                src="/resources/social_icons/twitter.svg"
              />
            </a>
          </Link>
          <Link href="https://www.soundcloud.com/dogdick">
            <a>
              <img
                width={32}
                height={32}
                src="/resources/social_icons/soundcloud.svg"
              />
            </a>
          </Link>
          <Link href="https://music.apple.com/us/artist/dog/1294892700">
            <a>
              <img
                width={32}
                height={32}
                src="/resources/social_icons/applemusic.svg"
              />
            </a>
          </Link>
          <Link href="https://open.spotify.com/artist/2befxxza4bZ9woPUthXgsy">
            <a>
              <img
                width={32}
                height={32}
                src="/resources/social_icons/spotify.svg"
              />
            </a>
          </Link>
          </LinkWrapper>
        </SocialWrapper>
      </main>
    </BaseLayout>
    )
}

export default Home
