import Header from "@/components/Header";
import HeroArea from "@/components/HeroArea";
import { ReactElement } from "react";

const ToolsLayout = ({children}: {children: ReactElement}) => {
    return ( 
        <div>
            <div className="bg-[#3f75ff]">
                <Header/>
                <HeroArea/>
            </div>
            {children}
        </div>
     );
}
 
export default ToolsLayout;