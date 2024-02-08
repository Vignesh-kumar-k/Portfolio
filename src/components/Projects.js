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
        <div className=" py-5 w-1/2">
            <div className="flex px-10 gap-5">
            <div>
                <img src={websiteimg1} />
                <div>
                    <p>An E-commerce website built with MERN Stack</p>
                </div>
            </div>
            <div>
                <img src={websiteimg2} />
            </div>
            <div>
                <img src={websiteimg3} />
            </div>
            </div>
        </div>
    </section>
}