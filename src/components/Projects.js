import websiteimg1 from "../assets/img1.png"
import websiteimg2 from "../assets/aiimg.png"
import websiteimg3 from "../assets/website-blog.jpg"
export default function Projects(){
    return <section className="flex flex-col px-5 py-20 justify-center bg-primary text-white">
        <div className="w-1/2">
            <div className="flex justify-center"> 
                <h1 className="text-4xl border-b-4 w-[128px] border-[#2b2d77] text-bold ">Projects</h1>
            </div>
        </div>
        <div className="w-full">
            <div className="flex px-10 gap-5">
            <div className="relative"> 
                <img className="h-[100px]" src={websiteimg1} />
               <div className="absolute left-0 right-0 bottom-0 top-0 bg-secondary">
                     <p className="text-center py-5">An E-commerce website built with MERN stack</p>
               </div> 
            </div>
            <div> 
                <img className="h-[200px]" src={websiteimg2} />
                <div>
                     <p>NLP enabled AI voice assistant</p>
               </div>
            </div>
            </div>
        </div>
    </section>
}