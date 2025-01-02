import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return ( 
        <header className="p-4 md:p-6">
          <div className="bg-white rounded-full py-2 md:py-4 px-4 md:px-8">
            <div className="flex justify-between items-center">
                    <a href="/">
                      <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={48}
                        height={48}
                        />
                    </a>
                      <ul className="hidden lg:flex items-center gap-5 text-[#758493]">
                        <Link href="/development">Development</Link>
                        <Link href="/design">Design</Link>
                        <Link href="/productivity">Productivity</Link>
                      </ul>
                        <a href="/sponsor">
                          <button className="bg-[#3f75ff] p-2 px-4 h-fit my-auto rounded-full text-white">
                            Sponsor
                          </button>
                        </a>
            </div>
          </div>
        </header>
     );
}
 
export default Header;