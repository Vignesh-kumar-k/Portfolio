import Heroimg from "../assets/hero.png"
export default function Hero(){
    return <section className="flex px-5 py-32 bg-secondary justify-center">
        <div className="w-1/2">
            <h1 className="text-white text-6xl font-hero-font">HI <br/> Im vignesh
                <p className="text-2xl">A passionate developer always learning.</p>
            </h1>
        </div>
        <img className='w-1/3' src={Heroimg}/>
    </section>
}