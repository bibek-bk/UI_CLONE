import image from '../../assets/image.jpg'

function Vission() {
  return (
    <div className='flex gap-4 '>
         <div className=' w-1/2 rounded-3xl overflow-hidden'>
                <img src={image} className='w-ful ' />
            </div>
        <div className='  w-1/2 pr-6'>
            <h1 className='font-bold text-6xl py-10'>Our Vission</h1>
            <p className='text-gray-500 text-2xl/10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veniam distinctio dolore fugiat repellendus dolorum placeat porro et ipsam nihil.</p>
            <p className='text-gray-500 text-2xl/10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veniam distinctio dolore fugiat repellendus dolorum placeat porro et ipsam nihil.</p>

        </div>
    </div>
  )
}

export default Vission