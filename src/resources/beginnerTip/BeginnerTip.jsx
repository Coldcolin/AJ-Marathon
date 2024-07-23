import { HealthTitle } from "../healthTip/HealthTip"
import logo from '../../assets/beginnerLogo.png'

const BeginnerTip = () => {
  return (
    <div className="w-full min-h-[100vh] flex justify-center">
      <div className="w-[90%]">
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
      </div>
    </div>
  )
}

export default BeginnerTip