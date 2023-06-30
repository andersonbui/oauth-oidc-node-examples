import { ConnectButton } from "@/components/ConnectButton";
import { MainContainer } from "@/components/MainContainer";

// flujo implementado en Spotify https://developer.spotify.com/documentation/web-api/tutorials/code-flow
export default function Home() {
  return (
    <MainContainer>
      <ConnectButton href="/api/login">Conectar con Spotify</ConnectButton>
    </MainContainer>
  );
}
