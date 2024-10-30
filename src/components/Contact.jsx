import Button from "./Button"
import { SiTicktick } from "react-icons/si";

function Contact() {
  return (
    <div className="flex flex-col items-center gap-6 my-20 " >
      <p className="flex flex-col justify-center items-center gap-4 text-6xl font-bold ">
        <p>Register For Our Free </p>
        <p> 7-Day Trial now </p>
      </p>
      <div className="flex  gap-16 text-lg   ">
        <p className="flex gap-4 items-center justify-center"><SiTicktick />No credit card required </p>
        <p className="flex gap-4 items-center justify-center"><SiTicktick /> Cancel any time</p>
      </div>
      <div className="flex gap-32 items-center ">
        <div className="w-80">
          <input placeholder="enter your email address" type="email" name="email" className="w-full text-black px-4 py-2" />
        </div>
        <Button text={'Subscibe Now'} style={'bg-black text-white text-xl px-10 py-4 rounded-full'} />
      </div>
    </div>
  )
}

export default Contact