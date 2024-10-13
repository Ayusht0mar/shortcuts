import DesignShortcuts from "@/components/DesignShortcuts";
import DevelopmentShortcuts from "@/components/DevelopmentShortcuts";
import Header from "@/components/Header";
import HeroArea from "@/components/HeroArea";
import SponsorCard from "@/components/SponsorCard";

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroArea/>
      <DevelopmentShortcuts/>
      <SponsorCard/>
      <DesignShortcuts/>
    </div>
  );
}
