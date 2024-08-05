import { HealthTitle } from "../healthTip/HealthTip"

const RegularRunnerTip = () => {
  return (
    <div className="w-full min-h-[100vh] flex items-center flex-col">
      <div className="w-[90%] mt-[1vh] md:mt-[10vh] md:mb-[4vh] sm:shadow-[17px_9px_20.6px_-1px_rgba(0,0,0,0.25)]">
        <HealthTitle
          Title={"Regular Runners Training:"}
          article={"‘Get You Round’ Programme!"}
        /> 
        </div>
             <p className='font-normal italic text-sm sm:text-lg leading-[24px] mb-10'>Credit: Lagos City Marathon.</p>

    </div>
  )
}

export default RegularRunnerTip