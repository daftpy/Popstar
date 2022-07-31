import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import BaseLayout from "../../components/core/BaseLayout";
import PaperPanel from "../../components/PaperPanel";

const BioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  margin: 0 2rem;
  @media (min-width: 768px) {
    margin: 0 auto;
  }
  @media (min-width: 992px) {
    flex-direction: row;
    min-width: fit-content;
  }
`
const PicturePanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin: 2rem 0;
    transform: rotate(9deg);
  }

  > *:first-child {
    transform: rotate(-9deg);
  }

  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: space-around;
  }
  @media (min-width: 992px) {
    margin-left: 3rem;
    flex-direction: column;
  }
`

const Bio: NextPage = () => {
  return (
    <BaseLayout>
      <BioWrapper>
        <PaperPanel>
          <h1>Bio</h1>
          <p>
            Dog the singer, rapper & producer.
          </p>
          <p>
            Birth name, Samuel Wilton, born and raised in Oklahoma City, Oklahoma. He would make the journey out to Los Angeles to pursue college and popstar fame. His early years as an artist were built around releases to the social platform SoundCloud, As well as collaborative works with viral hit contemporaries Caspr and Carolesdaughter.
            The Carolesdaughter collaboration, Too Fast, being featured with a music video on the emo rap taste-making channel Trash Gang.
          </p>
          <p>  
            Pushing for a more professional image. Dog would release an album built for attention on mainstream music platforms Apple Music & Spotify. It was a resounding success. Particularly in the case of the single Suicide. Featuring stripped back guitars and melancholy vocals. This track would grab the attention of the YouTube channel Astari. Astari (early adopter of Lil Peep, 6 Dogs and many more underground legends) would skyrocket the world’s exposure to Dog’s Music.
          </p>
          <p>
            With this foundation in place, Dog secured a position in the roster of indie label Cleopatra Records. Under the leadership of Brian & Kyle Perera, Monster would be released. Through Midwest Math Rock guitars, performed by Hottub Johny, and distorted singing. Dog would turn a critical eye to his past. All that glitters is not gold. The lead single here, Drama Queen, rejects the bustle of urban life for a chance to “look at the blue birds.”
          </p>  
          <p>
            Instead of the larger than life figures collaborators of yesterday , “Monster” singularly features underground darling 33 life. Going forward it is hard to predict what heights Dog will climb to. Frequently spotted with Hamilton, (on the trail of Zombieland score sampling “Up Now”), Dog has consistently switched styles and pulled from a wide range of inspirations. Always with a painful insight into the woes of these times. But the message is clear in the end it’s all okay.
          </p>
          <h2 style={{marginTop: "3rem"}}>Social</h2>
          <Link href="https://www.instagram.com/swagsohardimboutthatlife/">
            <a>
              <img
                style={{marginRight: "3rem"}}
                width={32}
                height={32}
                src="/resources/social_icons/instagram.svg"
              />
            </a>
          </Link>
          <Link href="https://www.tiktok.com/@dogpopstar?is_from_webapp=1&sender_device=pc">
            <a>
              <img
                style={{marginRight: "3rem"}}
                width={32}
                height={32}
                src="/resources/social_icons/tiktok.svg"
              />
            </a>
          </Link>
          <Link href="https://twitter.com/thankdogforyou">
            <a>
              <img
                style={{marginRight: "3rem"}}
                width={32}
                height={32}
                src="/resources/social_icons/twitter.svg"
              />
            </a>
          </Link>
          <Link href="https://www.soundcloud.com/dogdick">
            <a>
              <img
                style={{marginRight: "3rem"}}
                width={32}
                height={32}
                src="/resources/social_icons/soundcloud.svg"
              />
            </a>
          </Link>
          <Link href="https://music.apple.com/us/artist/dog/1294892700">
            <a>
              <img
                style={{marginRight: "3rem"}}
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
          <h2 style={{marginTop: "3rem"}}>Booking</h2>
          <p>
            For bookings contact ham@lowsarecords.com
          </p>
        </PaperPanel>
        <PicturePanel>
          <div>
            <Image
              width={250}
              height={286}
              src="/resources/photos/dog1.png"
            />
          </div>
          <div>
            <Image
              width={250}
              height={289}
              layout="fixed"
              src="/resources/photos/dog2.png"
            />
          </div>
        </PicturePanel>
      </BioWrapper>
    </BaseLayout>
  )
}

export default Bio;