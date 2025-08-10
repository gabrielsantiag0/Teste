import About from "../../components/about/about";
import { Banner } from "../../components/banner/banner";
import Header from "../../components/header/header";
import Services from "../../components/services/service";
import Video from "../../components/video/video";

export default function Lp() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Services />
      <Video />
    </>
  );
}
