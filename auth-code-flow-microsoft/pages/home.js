import { Card } from "@/components/Card";
import { MainContainer } from "@/components/MainContainer";
import { useFetch, useFetchImage } from "@/hooks/useFetch";
import cookie from "cookie";

const MICROSOFT_PHOTO_ENDPOINT = "https://graph.microsoft.com/v1.0/me/photo/$value"; // https://learn.microsoft.com/en-us/graph/api/profilephoto-get?view=graph-rest-1.0
const MICROSOFT_ME_ENDPOINT = "https://graph.microsoft.com/v1.0/me"; // https://learn.microsoft.com/en-us/graph/api/user-list-contacts?view=graph-rest-1.0&tabs=http
const UTLOOK_CONTACTLISTS_ENDPOINT = "https://graph.microsoft.com/v1.0/me/contacts";

export async function getServerSideProps({ req }) {
  const data = cookie.parse(req.headers.cookie || "");
  console.log("cookie",data);
  return { props: { accessToken: data?.access_token } };
}

export default function Home({ accessToken }) {
  const { response: userProfile } = useFetch(MICROSOFT_ME_ENDPOINT, accessToken);
  console.log("userProfile:", userProfile);
  
  const { response: contactlists } = useFetch(UTLOOK_CONTACTLISTS_ENDPOINT, accessToken);
  console.log("contactlists:", contactlists);
  
  const { response: photoinfo } = useFetchImage(MICROSOFT_PHOTO_ENDPOINT, accessToken);
  console.log("photoinfo:", photoinfo);

  return (
    <MainContainer>
      <Card contactList={contactlists?.value} userProfile={userProfile} photoProfile={photoinfo} />
    </MainContainer>
  );
}
