import AboutImg from '../assets/about.png';
export default function About(){
    return <section className='flex flex-col md:flex-row bg-primary px-5'>
        <div className='md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='py-5 md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white text-2xl'>
                <h1 className='text-4xl border-b-4 border-[#2b2d77] mb-4 w-[170px] font-bold'>About me</h1>
                <p >Hey there! I'm Vignesh Kumar, a passionate developer with a love for crafting digital experiences. Currently, I'm diving deep into the world of Artificial Intelligence and Machine Learning through my AIML degree journey.
                    My journey in web development has been exhilarating, especially with React.js and the MERN stack (MongoDB, Express.js, React.js, Node.js). I thrive on the challenge of bringing ideas to life through elegant and efficient code.
                    </p><br/>
                <p>When I'm not coding, you can find me exploring the latest trends in tech, honing my skills through personal projects, or simply enjoying a good cup of coffee.
                </p> <br/>  <p >I'm excited to connect, collaborate, and create meaningful experiences together. Let's turn ideas into reality!
                    </p>
            </div>
        </div>
    </section>
}