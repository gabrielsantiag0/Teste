import About from "../../components/about/about";
import { Banner } from "../../components/banner/banner";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import HowWeWork from "../../components/howWeWork/howwework";
import Services from "../../components/services/service";
import Video from "../../components/video/video";
import WhyChooseUs from "../../components/whyChooseUs/whyChooseUs";

export default function Lp() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Services />
      <Video />
      <HowWeWork />
      <WhyChooseUs />
      <Footer />
    </>
  );
}
