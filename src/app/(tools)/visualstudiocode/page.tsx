import Header from "@/components/Header";
import Search from "@/components/Search";

const VisualStudioCode = () => {
    return ( 
        <div>
            <Header/>
            <div className="w-[94vw] lg:w-[60vw] mx-auto my-16">
                <h1 className="font-extrabold text-3xl mb-6 md:mb-0 lg:text-6xl lg:leading-snug text-[#B7B7BF]">
                    Visual Studio Code
                </h1>
                <p className="w-3/4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem qui vel mollitia voluptatem quas fugit molestias totam earum quo illum assumenda nemo doloremque, delectus cupiditate minus harum asperiores nihil eius.
                </p>
                <Search placeholder="Search Shortcut"/>

                <ul>
                    <li className="flex justify-between"><p>Cut line</p><p>Ctrl + X</p></li>
                </ul>
            </div>
        </div>
     );
}
 
export default VisualStudioCode;