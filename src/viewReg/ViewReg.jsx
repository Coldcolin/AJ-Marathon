import { useEffect, useState } from "react";
import "./ViewReg.css"
import Swal from "sweetalert2";
import axios from "axios";

const ViewReg = () => {
    const [info, setInfo] = useState([]);
    const [head, setHead] = useState([]);
    const [loading, setLoading] = useState(false);
    const [empty, setEmpty] = useState(true);

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
                
                const res = await axios.get("https://marathon-apises.vercel.app/api/v1/users")
                if (!res.data.data){
                  setLoading(false)
                  setEmpty(true)
                  // console.log("loading:", loading, "empty:", empty)
                }else{
                  setEmpty(false)
                  setLoading(false)
                  // console.log("loading:", loading, "empty:", empty)
                  setHead(Object.keys(res.data.data[0]))
                  setInfo(res.data.data)
                }
                
            }catch(err){
                console.log(err.message)
                Toast.fire({
                    icon:'error',
                    title: `${err.message}`
                })
                setLoading(false)
            }
          }
          getUsers()
    }, [])
    if(loading === true){
      return <div className="table-container">
        <div><h3>Loading Info...</h3></div>
      </div>
    }else if((loading === false) && (empty === true)){
      return <div className="table-container">
      <div><h3>No reg info</h3></div>
    </div>
    }else{
      return (
        <div className="table-container">
        <div className="table">
          <div className="table-header">
            {head?.map((key) => (
              <div className="table-cells" key={key}>
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
      </div>
      )
    }
  };
  
  export default ViewReg;