import { useEffect, useState } from "react";
import "./ViewReg.css"
import Swal from "sweetalert2";
import axios from "axios";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

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
                console.log(res.data.data)
                if (!res.data.data){
                  setLoading(false)
                  setEmpty(true)
                  // console.log("loading:", loading, "empty:", empty)
                }else if(res.data.data[0] === undefined){
                  setLoading(false)
                  setEmpty(true)
                }else{
                  setEmpty(false)
                  setLoading(false)
                  // console.log("loading:", loading, "empty:", empty)
                  const lastIndex = res?.data?.data.length - 1;
                  setHead(Object.keys(res.data.data[lastIndex]))
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

    
      const exportToExcel = () => {
        // Create a new workbook
        const workbook = XLSX.utils.book_new();
    
        // Convert JSON to worksheet
        const worksheet = XLSX.utils.json_to_sheet(info);
    
        // Append the worksheet to the workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    
        // Generate a binary string representation of the workbook
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    
        // Create a Blob from the binary string
        const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    
        // Save the Blob as a file
        saveAs(data, `MarathonData.xlsx`);
      };
    
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
        <button onClick={exportToExcel} style={{paddingInline: "10px", paddingBlock: "3px", color: "white", backgroundColor: "#17B788", marginBlock: "20px"}}>Download Excel</button>
      </div>
      )
    }
  };
  
  export default ViewReg;