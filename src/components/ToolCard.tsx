import Image from "next/image";

const ToolCard = ({
    title,
    imgsrc, 
    href
} : {
    title:string;
    imgsrc: string;
    href: string;
}) => {
    return (
        <a className="w-36 h-36 py-5 bg-white flex flex-col space-y-3 rounded-lg shadow-lg" href={href}>
                  <Image
                        className="m-auto"
                        src={imgsrc}
                        alt={title}
                        width="80"
                        height="80"
                    />
                <p className="text-center text-sm text-[#94a3b8]">{title}</p>
        </a> 
        // <a href={href} className="border border-[#195CC8] flex flex-col gap-4 justify-center items-center text-center p-14 px-16 w-fit rounded-2xl bg-[#E8F0FC]">
        //         <Image
        //             src={imgsrc}
        //             alt={title}
        //             width={80}
        //             height={80}
        //         />
        //         <h3>{title}</h3>
        // </a>
     );
}
 
export default ToolCard;