import { NextPage } from "next";
import BaseLayout from "../../components/core/BaseLayout";
import styled from "styled-components";
import Image from "next/image";

const ImageWrapper = styled.div`
  margin: 0 auto;
  width: fit-content;
  padding: 1.5rem 0;
`

const EmbedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem 2rem;

  & > * {
    margin: 0 auto;
    margin-top: 3rem;
  }

  @media (min-width: 992px) {
    margin: 0 auto;
    flex-direction: row;

    & > * {
      margin: 2rem;
    }
  }
`

const Music: NextPage = () => {
  const soundcloudEmbed = (
    <>
     <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1344453991&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
    </iframe>
    </>
  )

  const spotifyEmbed = (
    <>
    <iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/artist/2befxxza4bZ9woPUthXgsy?utm_source=generator" width="100%" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
    </iframe>
    </>
  )

  const appleEmbed = (
    <>
      <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameBorder="0" height="450" style={{width: "100%", maxWidth: "660px", overflow: "hidden", background: "transparent"}} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/monster/1609159099">
      </iframe>
    </>
  )
  return (
    <BaseLayout>
      <ImageWrapper>
        <Image
          src="/resources/photos/cover_photo_good_boy.jpg"
          width={600}
          height={600}
        />
      </ImageWrapper>
      <EmbedWrapper>
        { soundcloudEmbed }
        { spotifyEmbed }
        { appleEmbed }
      </EmbedWrapper>
    </BaseLayout>
  )
}

export default Music;