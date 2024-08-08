import { Training } from "../beginnerTip/BeginnerTip"
import { HealthTitle } from "../healthTip/HealthTip"

const RegularRunnerTip = () => {
  return (
    <div className="w-full min-h-[100vh] flex items-center flex-col">
      <div className="w-[90%] mt-[1vh] md:mt-[10vh] md:mb-[4vh] sm:shadow-[17px_9px_20.6px_-1px_rgba(0,0,0,0.25)]">
        <HealthTitle
          Title={"Regular Runners Training:"}
          article1={"Experienced Runners Training Programme"}
          article2={"This programme has been specially put together by fitness experts, nutritionists and other marathon experts to provide experienced runners with a training schedule that begins in July and builds up over three months leading up to Race Day!"}
        />
        <div>
          <Training />
          <p className='font-normal italic text-sm sm:text-lg leading-[24px] mb-10 text-left'>Credit: Lagos City Marathon.</p>
        </div>
      </div>

    </div>
  )
}

export default RegularRunnerTip