import { Card } from "@/components/Card";
import { MainContainer } from "@/components/MainContainer";
import { useFetch } from "@/hooks/useFetch";
import cookie from "cookie";

const SPOTIFY_ME_ENDPOINT = "https://api.spotify.com/v1/me";
const SPOTIFY_PLAYLISTS_ENDPOINT = (userId) =>
  userId ? `https://api.spotify.com/v1/users/${userId}/playlists` : null;

export async function getServerSideProps({ req }) {
  const data = cookie.parse(req.headers.cookie || "");
  console.log("cookie",data);
  return { props: { accessToken: data?.access_token } };
}

export default function Home({ accessToken }) {
  const { response: userProfile } = useFetch(SPOTIFY_ME_ENDPOINT, accessToken);
  console.log("userProfile:",userProfile);
  
  const playlistUrl = SPOTIFY_PLAYLISTS_ENDPOINT(userProfile?.id);
  const { response: userPlaylists } = useFetch(playlistUrl, accessToken);
  console.log("userPlaylists:",userPlaylists);

  return (
    <MainContainer>
      <Card userPlaylists={userPlaylists} userProfile={userProfile} />
    </MainContainer>
  );
}
