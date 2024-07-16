import { useEffect, useState } from "react";
import "./ViewReg.css"
import Swal from "sweetalert2";
import axios from "axios";

const ViewReg = () => {
    const [info, setInfo] = useState([]);
    const [head, setHead] = useState([]);
    const [loading, setLoading] = useState(false);

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

    useEffect(()=>{
        const getUsers= async()=>{
            try{
                setLoading(true)
                
                const res = await axios.get("https://marathonapi.onrender.com/api/v1/users")
                setHead(Object.keys(res.data.data[0]))
                setInfo(res.data.data)
                setLoading(false)
            }catch(err){
                console.log(err.message)
                Toast.fire({
                    icon:'error',
                    title: "something went wrong, try again"
                })
                setLoading(false)
            }
          }
          getUsers()
    }, [])
    
    return (
      <div className="table-container">
        {
            loading? <div><h3>Loading Info...</h3></div>:
            <div className="table">
          <div className="table-header">
            {head?.map((key) => (
              <div className="table-cell" key={key}>
                {key}
              </div>
            ))}
          </div>
          <div className="table-body">
            {info?.map((row, rowIndex) => (
              <div className="table-row" key={rowIndex}>
                {Object.values(row).map((value, cellIndex) => (
                  <div className="table-cell" key={cellIndex}>
                    {value}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        }
      </div>
    );
  };
  
  export default ViewReg;