import image from '../../assets/image.jpg'
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
function Card() {
  return (
    <div className='w-80 border rounded-3xl overflow-hidden bg-[#F4F4F4] '>
        <div className='   '>
        <img src={image} />
        </div>
        <div className='flex flex-col items-center justify-center gap-2 py-2'>
            <p>Pansy Parkinson</p>
            <p>Developer</p>
        </div>
        <div className='flex  justify-between mx-20 my-4'>
        <CiTwitter  />
        <FaInstagram />
        <CiTwitter />
        <FaInstagram />
        </div>
    </div>
  )
}

export default Card