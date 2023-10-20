import Image from "next/image";
import Categories from "./components/categories";


function Home() {
    return ( 
        <div className="p-5">
            <Image
            src="/banner-home-01.png" 
            width={0} 
            height={0} 
            className="w-auto h-full"
            sizes="100vh"
            alt="" />

           <div className="mt-5">
                <Categories/>
           </div>
        </div>
     );
}

export default Home;