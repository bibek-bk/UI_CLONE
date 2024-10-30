import Mission from "./Mission"
import Teams from "./Teams"
import Vission from "./Vission"

function About() {
    return (
        <div className="px-40" >
            <div className="font-bold text-2xl text-[#B2CC8A]">Our Story</div>
            <div className="flex justify-between">
                <div>
                    <p className="font-semibold text-3xl w-[30rem] ">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam laboriosam p.
                    </p>
                    <p className="w-25rem mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ipsam quia cupiditate deleniti ipsa ipsum?
                    </p>
                </div>
                <div className="flex flex-col space-y-5">
                    <div className="flex gap-4 ">
                        <h1 className="font-semibold text-xl">01.</h1>
                        <div>
                            <h1 className="font-bold text-xl">Lorem ipsum dolor sit amet consectetur.</h1>
                            <p className="text-gray-500 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi in corporis architecto maiores eligendi iste!</p>
                        </div>
                    </div>
                    <div className="flex gap-4 ">
                        <h1 className="font-semibold text-xl">02.</h1>
                        <div>
                            <h1 className="font-bold text-xl">Lorem ipsum dolor sit amet consectetur.</h1>
                            <p className="text-gray-500 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi in corporis architecto maiores eligendi iste!</p>
                        </div>
                    </div>
                    <div className="flex gap-4 ">
                        <h1 className="font-semibold text-xl">03.</h1>
                        <div>
                            <h1 className="font-bold text-xl">Lorem ipsum dolor sit amet consectetur.</h1>
                            <p className="text-gray-500 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi in corporis architecto maiores eligendi iste!</p>
                        </div>
                    </div>

                </div>
            </div>
            <Mission/>
            <Vission/>
            <Teams/>
        </div>
    )
}

export default About