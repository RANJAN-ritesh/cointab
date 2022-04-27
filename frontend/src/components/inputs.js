import { useEffect, useState } from "react"

export const Inputs = ()=>{
    const [weight,setWeight] = useState(0)
    const [pin,setPin] = useState(0)
    const [select,setSelect] = useState("")
    const [pincodes,setPincodes] = useState([])
    const [data,setData] = useState([])
    const [zone,setZone] = useState("")
    const [amt,setAmt] = useState(0)

    useEffect(()=>{
        fetch("http://localhost:3001/rates")
        .then((e)=>e.json())
        .then((e)=>(setData(e)))

        fetch("http://localhost:3001/pincode")
        .then((e)=>e.json())
        .then((e)=>setPincodes(e))
    },[])
    // console.log("pincodes",pincodes)
    // console.log("datas",data)
    
    function handleAmount(){
        function round(value, step) {
            return Math.round(value / 5) * 0.5;
        }
        const payload = {
            weight:round(weight),
            pin,
            select
        }
        // console.log(payload)
        console.log(payload)
        
        pincodes.map((e)=>{
            // console.log(e.CustomerPincode)
            if(e.CustomerPincode == pin){
                setZone(e.Zone)
            }
            // console.log(e)
        })
 let num = 0
        data.map((e)=>{
            if(e.Zone == zone && e.RateType == select){
                // console.log("findata",e)
                if(weight <= 0.5){
                    num = (e.FirstHalfKG)
                }else if(weight > 0.5){
                    // console.log("greater")
                    let amt = +e.FirstHalfKG
                    let additionalWt = (weight - 0.5)/0.5
                    let namt = +additionalWt*(+e.AdditionalHalfKG)
                    let fin = Math.abs(amt+namt)
                    num = (fin)
                }
            }
        })
        setAmt(num)
    }
    return(
        <div className="parentDiv">
        <div className="inputDiv">
        <label>Weight:</label>
            <input type="Number" onChange={(e)=>{setWeight(e.target.value)}}/>

            <label>Pincode:</label>
            <input type="Number" onChange={(e)=>{setPin(e.target.value)}}/>

            <label>Delivery Type:</label>
            <select onChange={(e)=>{setSelect(e.target.value)}}>
                <option>Rate Type</option>
                <option value="Forward">Forward</option>
                <option value="Forward & RTO">Forward & RTO</option>
            </select>

            <button onClick={handleAmount}>Calculate Amount</button>
        </div>
            <div className="amtDiv">
                <p style={{fontSize:"1rem",fontWeight:"550"}}><span style={{fontSize:"1.2rem",fontWeight:"550",color:"blue",marginLeft:"1rem",marginRight:"1rem"}}>Total Amount :</span>{amt}</p>
            </div>
        </div>
    )
}