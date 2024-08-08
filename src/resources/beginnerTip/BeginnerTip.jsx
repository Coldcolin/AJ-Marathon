import { HealthTitle } from "../healthTip/HealthTip"
import logo from '../../assets/beginnerLogo.png'


export const Training = () => {
  return (
    <>
      <p className="font-bold text-[1.1rem] leading-[1.5rem] font-poppins">Speed Play: <span className="font-light">Training involves changing the speed at which you run throughout your training session.</span></p>
      <p className="font-bold text-[1.1rem] leading-[1.5rem] font-poppins">Super Slow: <span className="font-light">Really, really slow, so slow it hardly seems worth putting your kit on.</span></p>
      <p className="font-bold text-[1.1rem] leading-[1.5rem] font-poppins">Easy Jog: <span className="font-light">No pressure, just loosening up or a recovery run.</span></p>
      <p className="font-bold text-[1.1rem] leading-[1.5rem] font-poppins">Slow: <span className="font-light">Still a slow pace but a little faster than an ‘easy jog’.</span></p>
      <p className="font-bold text-[1.1rem] leading-[1.5rem] font-poppins">Comfortable: <span className="font-light">You can chat easily to your training partner and keep the pace consistent.</span></p>
      <p className="font-bold text-[1.1rem] leading-[1.5rem] font-poppins">Steady: <span className="font-light">Even-paced run where you can chat in short sentences.</span></p>
      <p className="font-bold text-[1.1rem] leading-[1.5rem] font-poppins">Brisk: <span className="font-light">Slightly breathless, not easy to hold any conversation with your training partner.</span></p>
      <p className="font-bold text-[1.1rem] leading-[1.5rem] font-poppins">Hard: <span className="font-light">You certainly know you’re working, conversation is definitely out.</span></p>
      <p className="font-bold text-[1.1rem] leading-[1.5rem] font-poppins mt-[1rem]">W/U <span className="font-light">Warm up.</span></p>
      <p className="font-bold text-[1.1rem] leading-[1.5rem] font-poppins">W/D <span className="font-light">Warm down</span></p>
      </>
  )
}

const BeginnerTip = () => {
  return (
    <div className="w-full min-h-[100vh] flex items-center flex-col">
      <div className="w-[90%] mt-[1vh] md:mt-[10vh] md:mb-[4vh] sm:shadow-[17px_9px_20.6px_-1px_rgba(0,0,0,0.25)]">
        <HealthTitle
          Title={"BEGINNERS TRAINING:"}
          article={"‘Get You Round’ Programme!"}
        />
        <div className="flex">
          <table className=" border-2 border-[#000]">
            <thead className="bg-white mt-4">
              <tr className="bg-white text-black ">
                <th className="bg-white text-black">WK</th>
                <th className="bg-white text-black">MON</th>
                <th className="bg-white text-black">TUE</th>
                <th className="bg-white text-black">WED</th>
                <th className="bg-white text-black">THU</th>
                <th className="bg-white text-black">FRI</th>
                <th className="bg-white text-black">SAT</th>
                <th className="bg-white text-black">SUN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">1</td>
                <td className="text-center">30 mins easy</td>
                <td className="text-center">Rest</td>
                <td className="text-center">45mins easy</td>
                <td className="text-center">Rest</td>
                <td className="text-center">30mins easy</td>
                <td className="text-center">Rest</td>
                <td className="text-center">1 hour run/walk</td>
              </tr>
              <tr>
                <td className="text-center">2</td>
                <td className="text-center">40 mins easy</td>
                <td className="text-center">Rest</td>
                <td className="text-center">50 mins easy</td>
                <td className="text-center">Rest</td>
                <td className="text-center">40 mins in c 10x2 mins fast</td>
                <td className="text-center">Rest/Jog</td>
                <td className="text-center">1.25 hour easy</td>
              </tr>
              <tr>
                <td className="text-center">3</td>
                <td className="text-center">30 mins easy</td>
                <td className="text-center">Rest</td>
                <td className="text-center">1 hour easy</td>
                <td className="text-center">Rest</td>
                <td className="text-center">40 mins in c 6x2 mins fast</td>
                <td className="text-center">Rest/Jog</td>
                <td className="text-center">1.5 hour very easy</td>
              </tr>
              <tr>
                <td className="text-center">4</td>
                <td className="text-center">30mins easy</td>
                <td className="text-center">Rest</td>
                <td className="text-center">1 hour easy</td>
                <td className="text-center">Rest</td>
                <td className="text-center">30 mins easy</td>
                <td className="text-center">Rest</td>
                <td className="text-center">1 hour run/walk</td>
              </tr>
              <tr>
                <td className="text-center">5</td>
                <td className="text-center">30 mins easy</td>
                <td className="text-center">1 hour</td>
                <td className="text-center">Rest</td>
                <td className="text-center">15 mins W/U</td>
                <td className="text-center">Rest</td>
                <td className="text-center">30 mins easy</td>
                <td className="text-center">1.75 hours</td>
              </tr>
              <tr>
                <td className="text-center">6</td>
                <td className="text-center">40mins easy</td>
                <td className="text-center">Rest</td>
                <td className="text-center">70 mins easy</td>
                <td className="text-center">Fast W/D</td>
                <td className="text-center">W/U 5x3 mins, fast W/D</td>
                <td className="text-center">Rest</td>
                <td className="text-center">2 hours easy</td>
              </tr>
              <tr>
                <td className="text-center">7</td>
                <td className="text-center">20mins</td>
                <td className="text-center">W/U 15x9 secFast W/D</td>
                <td className="text-center">Rest</td>
                <td className="text-center">Rest</td>
                <td className="text-center">Rest</td>
                <td className="text-center">30 mins faster</td>
                <td className="text-center">2.25 hours very easy</td>
              </tr>
              <tr>
                <td className="text-center">8</td>
                <td className="text-center">30 mins easy</td>
                <td className="text-center">40 mins easy</td>
                <td className="text-center">1 hour steady</td>
                <td className="text-center">80 mins easy</td>
                <td className="text-center">30 mins </td>
                <td className="text-center">Rest </td>
                <td className="text-center">2.5 hours or 3 hours run/walk</td>
              </tr>
              <tr>
                <td className="text-center">9</td>
                <td className="text-center">Rest</td>
                <td className="text-center">30 mins</td>
                <td className="text-center">75 mins easy</td>
                <td className="text-center">Rest</td>
                <td className="text-center">30 mins easy</td>
                <td className="text-center">Rest/Jog</td>
                <td className="text-center">Rest</td>
              </tr>
              <tr>
                <td className="text-center">10</td>
                <td className="text-center">Rest</td>
                <td className="text-center">40 mins easy</td>
                <td className="text-center">1.5 hours very easy</td>
                <td className="text-center">Rest</td>
                <td className="text-center">1 hour</td>
                <td className="text-center">Rest</td>
                <td className="text-center">2 hours</td>
              </tr>
              <tr>
                <td className="text-center">11</td>
                <td className="text-center">Rest</td>
                <td className="text-center">30 mins easy</td>
                <td className="text-center">1 hour</td>
                <td className="text-center">Rest</td>
                <td className="text-center">1 hour</td>
                <td className="text-center">Rest</td>
                <td className="text-center">Half Marathon</td>
              </tr>
              <tr>
                <td className="text-center">12</td>
                <td className="text-center">Rest</td>
                <td className="text-center">Rest</td>
                <td className="text-center">40mins</td>
                <td className="text-center">Rest</td>
                <td className="text-center">Rest</td>
                <td className="text-center">1.5 hours easy</td>
                <td className="text-center"></td>
              </tr>
            </tbody>
          </table>
          <img src={logo} alt="" className="float-right" />
        </div>
        <Training />
        <p className='font-normal italic text-sm sm:text-lg leading-[24px] mb-10 text-left'>Credit: Lagos City Marathon.</p>
      </div>
    </div>
  )
}

export default BeginnerTip