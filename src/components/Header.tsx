import Image from "next/image";

const Header = () => {
    return ( 
        <header className="py-3 border-b-2 border-[#195CC8]">
          <div className="w-[84vw] mx-auto">
                  <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={48}
                    height={48}
                    />
            
          </div>
        </header>
     );
}
 
export default Header;