import FooterColumn from "./FooterColumn"
import FooterRow from "./FooterRow"

function Footer() {
  return (
    <div className="px-40 py-4">
        <div className="flex justify-between ">
            <FooterColumn/>
            <FooterColumn/>
            <FooterColumn/>
            <FooterColumn/>
            <FooterColumn/>
        </div>
        <div className="w-full h-[0.15rem] bg-gray-700 my-6"></div>
        <FooterRow/>

    </div>
  )
}

export default Footer