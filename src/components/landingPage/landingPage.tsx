import Footer from "./footer";
import Section1 from "./Section1";
import Section2 from "./Section2";
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";

export default function LandingPage() {
  return (
    <div className="w-full">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}
