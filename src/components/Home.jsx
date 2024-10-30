import Button from "./Button"
import home from '../assets/home.png'
function Home() {
    return (

        <div>
            <div className=" bg-[#F5F7F6] rounded-3xl py-24  mx-12 my-6 ">        
            <div className="flex flex-col items-center justify-center text-5xl font-bold ">
                <h1>We are changing the </h1>
                <h1 className="pt-2">whole game.</h1>
            </div>
            <div className="flex justify-center items-center mt-6 gap-4">
                <Button style={'bg-black text-white'} text={'Get Started'}/>
                <Button  text={'View Pricing'}/>

            </div>  
            <div className="flex justify-center pt-4"><img src={home}/></div>
            </div>
        </div>
    )
}

export default Home