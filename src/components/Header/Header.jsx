import Button from "../Button"

function Header() {
  return (
    <div className="flex justify-between items-center pt-4 px-10">
        <div className="pr-16 text-xl font-bold flex">
            <p>GRO.</p><p className="text-[#ff3c32]">PRO</p>
        </div>
        
            <ul className="flex gap-8">
                <li>Home</li>
                <li>About Us</li>
                <li>Pricing</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        <div className="flex gap-8 items-center">
            <div>Login</div>
            <Button text={"Register"}/>
        </div>


    </div>
  )
}

export default Header