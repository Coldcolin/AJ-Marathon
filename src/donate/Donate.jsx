import './Donate.css'
import './DonateRes.css'

const Donate = () => {
  return (
    <div className='donate_main_body'>
      <div className="donate_main_wrapper">
        <div className="donate_wrapper">
          <h1 className='donate_wrapper_H1'>Support The Ajegunle City Marathon</h1>
          <p className='donate_wrapper_P'>All proceeds shall go to support disadvantaged AYP, identified from the marathon activities whom thereafter, will be prioritized and enrolled into the development program interventions of various organizations in consortium and partnership of this project to ensure sustainable impact</p>
          <h2 className='donate_wrapper_H2'>Donation Details</h2>
          <div className="donate_donation_option">
            <p className='donate_donation_option_P'>Donation Option</p>
            <div className="donate_option_btn_wrapper">
              <button className='donate_one_time_btn'>One-Time</button>
              <button className='donate_montly_btn'>Monthly</button>
            </div>
          </div>
          <div className="donate_donation_type">
            Donation Type
            <select name="" id="">ywgwg</select>
          </div>
          <div className="donate_donation_type">
            Donation Amount
            <select name="" id="">ywgwg</select>
          </div>
          <h2 className='donate_wrapper_H2'>Contact Details</h2>
          <div className="donate_name_wrapper">
            <div className='donate_first_name'>
              First Name
              <input type="text" />
            </div>
            <div className='donate_first_name'>
              Last Name
              <input type="text" />
            </div>
          </div>
          <div className="donate_email_wrapper">
            Email
            <input type="text" />
          </div>
          <div className="donate_cancel_wrapper">
            <button className='donate_cancel_btn'>Cancel</button>
            <button className='donate_checkout_btn'>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donate