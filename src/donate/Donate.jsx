import './Donate.css'
import './DonateRes.css'
import {NavLink} from "react-router-dom"

const Donate = () => {
  return (
    <div className='donate_main_body'>
      <div className="donate_hero_wrapper">
        DONATE
      </div>
      <div className="donate_info">
        <h2 className="donate_h2">
        Support The Ajegunle City Youth Marathon!
        </h2>
        <p className="donate_p">
        Your donations shall go to support underserved Adolescents and Young Persons, identified from the marathon activities whom thereafter, will be enrolled into the developmental programs to provide them with opportunities and support systems they deserve, to ensure sustainable impact.
        </p>
      </div>
      <div className="donate_get_intouch_wrapper">
        
      </div>
      <div className="donate_imp">
        <h2>In which way would you want to support ACYM?</h2>
        <section></section>
        <a href="https://paystack.com/pay/usjyu5o2ri" className="donate_button">Donate</a>
      </div>
    </div>
  )
}

export default Donate