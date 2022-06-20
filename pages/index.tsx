import type { NextPage } from 'next'
import Head from 'next/head'
import BaseLayout from '../components/core/BaseLayout'
import PaperPanel from '../components/PaperPanel'
import styled from 'styled-components'
import Image from 'next/image'

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

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Wrapper>
          <Image height={825} width={900} src="/resources/photos/monster_art.png" />
        </Wrapper>
      </main>
    </BaseLayout>
    )
}

export default Home
