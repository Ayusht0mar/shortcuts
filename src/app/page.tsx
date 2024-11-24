import DesignShortcuts from "@/components/DesignShortcuts";
import DevelopmentShortcuts from "@/components/DevelopmentShortcuts";
import Header from "@/components/Header";
import HeroArea from "@/components/HeroArea";
import ProductivityShortcuts from "@/components/ProductivityShortcuts";
// import SponsorCard from "@/components/SponsorCard";

export default function Home() {
  return (
    <div>
      <div className="bg-[#3f75ff]">
        <Header/>
        <HeroArea/>
      </div>
      <DevelopmentShortcuts/>
      {/* <SponsorCard/> */}
      <DesignShortcuts/>
      <ProductivityShortcuts/>
    </div>
  );
}
