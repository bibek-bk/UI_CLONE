import image from '../../assets/image.jpg'

function Mission() {
    return (
        <div className='flex my-16 gap-4 '>
            <div className='pt-14 flex flex-col space-y-10'>
                <h1 className="font-bold text-6xl ">Our Mission</h1>
                <p className="text-gray-500 text-2xl/10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quos mollitia maiores error eaque provident ea voluptatum officia dolorem obcaecati accusantium, consequatur venia</p>
                <div className='flex gap-4'>
                    <div className="flex flex-col relative ">
                        <div className='absolute w-[3rem] h-[3rem] rounded-full bg-[#B2CC8A] -z-10 -top-1 -left-3' ></div>
                        <p className="text-5xl font-bold ">
                            94%</p>
                        <p>Client retention</p>
                    </div>
                    <div className="flex flex-col relative ">
                        <div className='absolute w-[3rem] h-[3rem] rounded-full bg-[#FFBC1B] -z-10 -top-1 -left-3' ></div>

                        <p className="text-5xl font-bold">70M+</p>
                        <p>Client retention</p>
                    </div>
                    <div className="flex flex-col relative ">
                        <div className='absolute w-[3rem] h-[3rem] rounded-full bg-[#FF97D4] -z-10 -top-1 -left-3' ></div>

                        <p className="text-5xl font-bold">10K+</p>
                        <p>Client retention</p>
                    </div>
                </div>
            </div>
            <div className='rounded-3xl overflow-hidden'>
                <img src={image} className='w-full' />
            </div>
        </div>
    )
}

export default Mission