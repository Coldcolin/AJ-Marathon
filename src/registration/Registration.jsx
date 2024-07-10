import { useState } from "react";
import "./Registration.css";
import axios from "axios";
import Swal from "sweetalert2";

const Registration = () => {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(false);
    const [agree, setAgree] = useState(false);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        timer: 3000,
        showConfirmButton: false,
        didOpen: (toast) =>{
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    const submit= async(e)=>{
        e.preventDefault();

        try{
            setLoading(true)
            await axios.post("https://marathonapi.onrender.com/api/v1/signup", userData)
        
            Toast.fire({
                icon: 'success',
                title: 'You have successfully signed up'
            })
            setLoading(false)
            window.location.href = "https://paystack.com/pay/ajegunlecityyouthmarathon2024";
        }catch(err){
            console.log(err.message)
            Toast.fire({
                icon:'error',
                title: "something went wrong, try again"
            })
        }
    }
  return (
    <div className="Registration-Container">
        <h2>Registration Form</h2>
        <form className="Registration-Form" onSubmit={submit}>
            <h3 className="Registration-Header">Participant Details</h3>
            <div className="Registration-One">
                <p>Full Name</p>
                <div>
                    <input placeholder="First Name" required={true} onChange={(e)=> setUserData((p)=> {return {...p, firstName: e.target.value}})}/>
                    <input placeholder="Last Name" required={true} onChange={(e)=> setUserData((p)=> {return {...p, lastName: e.target.value}})}/>
                </div>
            </div>
            <div className="Registration-Two">
            <p>Date of Birth</p>
                <div>
                    <input placeholder="dd-mm-yy" type="date" required={true} onChange={(e)=> setUserData((p)=> {return {...p, DOB: e.target.value}})}/>
                    <label>Sex</label>
                    <select required={true} onChange={(e)=> setUserData((p)=> {return {...p, Sex: e.target.value}})}>
                        <option value="">--select--</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <label>Marital Status</label>
                    <select required={true} onChange={(e)=> setUserData((p)=> {return {...p, Status: e.target.value}})}>
                        <option value="">--select--</option>
                        <option value="Married">Married</option>
                        <option value="Single">Single</option>
                        <option value="Divorced">Divorced</option>
                    </select>
                </div>
            </div>
            <div className="Registration-Three">
            <p>Phone Number</p>
                <div>
                    <input placeholder="enter a valid phone number" required={true} onChange={(e)=> setUserData((p)=> {return {...p, Phone: e.target.value}})}/>
                </div>
            </div>
            <div className="Registration-Three">
            <p>Email</p>
                <div>
                    <input placeholder="example@xample.com" required={true} onChange={(e)=> setUserData((p)=> {return {...p, email: e.target.value}})}/>
                </div>
            </div>
            <div className="Registration-Four" required={true}>
            <p>Address</p>
                <div>
                    <input placeholder="Street address" required={true} onChange={(e)=> setUserData((p)=> {return {...p, Address: e.target.value}})}/>
                    {/* <input placeholder="Street address Line 2"/> */}
                    <div>
                        <select required={true} onChange={(e)=> setUserData((p)=> {return {...p, LGA: e.target.value}})}>
                            <option value="">--LGA--</option>
                            <option value="Ajeromi Ifelodun LGA">Ajeromi Ifelodun LGA</option>
                            <option value="Ifelodun LCDA">Ifelodun LCDA</option>
                            <option value="">others</option>
                        </select>
                        <input placeholder="If others please indicate" required={true} onChange={(e)=> setUserData((p)=> {return {...p, LGA: e.target.value}})}/>
                        <input placeholder="Ward" required={true} onChange={(e)=> setUserData((p)=> {return {...p, Ward: e.target.value}})}/>
                    </div>
                    
                </div>
            </div>
            <div className="Registration-Five">
            <p>State of Origin</p>
                <div>
                    <input placeholder="State" required={true} onChange={(e)=> setUserData((p)=> {return {...p, State: e.target.value}})}/>
                    <input placeholder="LGA" required={true} onChange={(e)=> setUserData((p)=> {return {...p, StateLGA: e.target.value}})}/>
                </div>
            </div>
            <div className="Registration-Six">
            <p>Emergency Contact</p>
                <div>
                    <div>
                    <input placeholder="First Name" required={true} onChange={(e)=> setUserData((p)=> {return {...p, EmergencyFirstName: e.target.value}})}/>
                    <input placeholder="Relationship" onChange={(e)=> setUserData((p)=> {return {...p, EmergencyRelationship: e.target.value}})}/>
                    </div>
                    <div>
                    <input placeholder="Last Name" required={true} onChange={(e)=> setUserData((p)=> {return {...p, EmergencyLastName: e.target.value}})}/>
                    <input placeholder="Phone Number" required={true} onChange={(e)=> setUserData((p)=> {return {...p, EmergencyPhone: e.target.value}})}/>
                    </div>
                </div>
            </div>
            <div className="Registration-Seven">
            <div className="Registration-Category">
            <p>Marathon Category</p>
            <div>
                <select required={true} onChange={(e)=> setUserData((p)=> {return {...p, Category: e.target.value}})}>
                    <option value="">--Select Category--</option>
                    <option value="Master Division">Master Division (Persons with disability 18-29 years)
</option>
                    <option value="Open Division">Open division (18-35 years)
</option>
                </select>
            </div>
            </div>
            <p>T-shirt Size</p>
                <div>
                    <div>
                        <input type="checkbox" onChange={(e)=> { if(e.target.checked){ setUserData((p)=> {return {...p, shirt: "XS"}})}}}/>
                        <label>XS</label>
                    </div>
                    <div>
                        <input type="checkbox" onChange={(e)=> { if(e.target.checked){ setUserData((p)=> {return {...p, shirt: "S"}})}}}/>
                        <label>S</label>
                    </div>
                    <div>
                        <input type="checkbox" onChange={(e)=> { if(e.target.checked){ setUserData((p)=> {return {...p, shirt: "M"}})}}}/>
                        <label>M</label>
                    </div>
                    <div>
                        <input type="checkbox" onChange={(e)=> { if(e.target.checked){ setUserData((p)=> {return {...p, shirt: "L"}})}}}/>
                        <label>L</label>
                    </div>
                    <div>
                        <input type="checkbox" onChange={(e)=> { if(e.target.checked){ setUserData((p)=> {return {...p, shirt: "XL"}})}}}/>
                        <label>XL</label>
                    </div>
                    <div>
                        <input type="checkbox" onChange={(e)=> { if(e.target.checked){ setUserData((p)=> {return {...p, shirt: "XXL"}})}}}/>
                        <label>XXL</label>
                    </div>
                </div>
            </div>
            <div className="Registration-Waiver">
                <h3>Waiver & Release</h3>
                <p>
                I confirm that I am in good shape, health, and condition. I don't have any medical condition or medical history that will affect my participation in this event. I will follow the rule and regulations of the marathon event. I acknowledge that this marathon race requires physical activity and there are possible risks and danger. I release the marathon event organizers for any responsibility in case of an accident, illness, or injury. I allow my photo to be taken during the event and used for event advertising and marketing. I confirm that all information in this registration form is accurate and true.
                </p>
                <div>
                    <input type="checkbox" onChange={(e)=> { if(e.target.checked){setAgree(true)}else{setAgree(false)}}}/>
                    <p>Agree to terms and conditions</p>
                </div>
            </div>
            <button type="submit" disabled={agree=== true? false: true} style={agree?{}:{backgroundColor: "#7bf8d2"}}>{loading === true? "Paying...": "Pay"}</button>
        </form>
    </div>
  )
}

export default Registration
