
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
function FooterRow() {
  return (
    <div className="flex justify-between items-center">
        <div className="flex gap-2">
            <div>Terms</div>
            <div>Privacy</div>
            <div>Security</div>
        </div>
        <div>Gro.Pro 2020 | All Rights Reserved</div>
        <div className='flex gap-14'>
        <CiTwitter  />
        <FaInstagram />
        <CiTwitter />
        <FaInstagram />
        </div>
    </div>
  )
}

export default FooterRow