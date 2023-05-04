import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { Form, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Addadress() {
    const[states,setStates]=useState()
    const[name,setName]=useState("")
    const[locality,setLocality]=useState()
    const[city,setCity]=useState()
    const[pincode,setPincode]=useState()
    const navigate=useNavigate()
    
    const STATE_CHOICES = [
        { name: 'Karnataka' },

        { name: 'Andhra Pradesh' },

        { name: 'Kerala' },

        { name: 'Tamil Nadu' },

        { name: 'Maharashtra' },

        { name: 'Uttar Pradesh' },

        { name: 'Goa' },

        { name: 'Gujarat' },

        { name: 'Rajasthan' },

        { name: 'Himachal Pradesh' },

        { name: 'Telangana' },

        { name: 'Arunachal Pradesh' },

        { name: 'Assam' },
        { name: 'Bihar' },

        { name: 'Chhattisgarh' },

        { name: 'Haryana' },

        { name: 'Jharkhand' },

        { name: 'Madhya Pradesh' },

        { name: 'Manipur' },

        { name: 'Meghalaya' },

        { name: 'Mizoram' },

        { name: 'Nagaland' },

        { name: 'Odisha' },

        { name: 'Punjab' },

        { name: 'Sikkim' },

        { name: 'Tripura' },

        { name: 'Uttarakhand' },

        { name: 'West Bengal' },

        { name: 'Andaman and Nicobar Islands' },

        { name: 'Chandigarh' },

        { name: 'Dadra and Nagar Haveli and Daman and Diu' },

        { name: 'Delhi' },

        { name: 'Jammu and Kashmir' },

        { name: 'Lakshadweep' },

        { name: 'Ladakh' },

        { name: 'Puducherry' }]
        const handleSubmit=(e)=>{
            e.preventDefault()
            navigate('/addressInfo')
            // console.log(name,"iam values")
        }

    return (
        <Layout>
            <div>
                <h5 style={{
                    marginTop: "60px", color: "var(--unnamed-color-228e38)",
                    marginLeft: "80px",
                    font: "normal normal bold 24px/35px Poppins",
                    letterSpacing: "0px",
                    color: " #228E38",
                    opacity: 1
                }}>Add Address:</h5>
                <form>

                    <label style={{ display: "flex", justifyContent: "center", marginLeft: "-220px" }}>Name:</label>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <input type="text" style={{
                            width: "390px",
                            height: "54px", marginLeft: "100px", borderRadius: "5PX"
                        }}value={name} onChange={(e)=>setName(e.target.value)}></input>
                    </div>
                    <label style={{ display: "flex", justifyContent: "center", marginLeft: "-220px", marginTop: "20px" }}>Locality:</label>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <input type="text" style={{
                            width: "390px",
                            height: "54px", marginLeft: "100px", borderRadius: "5PX"
                        }} value={locality} onChange={(e)=>setLocality(e.target.value)}></input>
                    </div>
                    <label style={{ display: "flex", justifyContent: "center", marginLeft: "-250px", marginTop: "20px" }}>City</label>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <input type="text" style={{
                            width: "390px",
                            height: "54px", marginLeft: "100px", borderRadius: "5PX"
                        }} name={city} onChange={(e)=>setCity(e.target.value)}></input>
                    </div>
                    <label style={{ display: "flex", justifyContent: "center", marginLeft: "-250px", marginTop: "20px" }}>State</label>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <select style={{
                            width: "390px",
                            height: "54px", marginLeft: "100px", borderRadius: "5PX"
                        }} value={states} onChange={((e)=>setStates(e.target.value))}>
                            <option>Select State</option>
                            {STATE_CHOICES.map((e,i)=>(
                            <option value={e.name} key={i}>
                               
                                   { e.name}
                              
                            </option>
                              ))}
                        </select>
                    </div>
                    <label style={{ display: "flex", justifyContent: "center", marginLeft: "-230px", marginTop: "20px" }}>Pincode</label>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <input type="text" style={{
                            width: "390px",
                            height: "54px", marginLeft: "100px", borderRadius: "5PX"
                        }} value={pincode} onChange={(e)=>setPincode(e.target.value)}></input>
                    </div>
                    <button style={{ marginLeft: "660px", marginTop: "20px", width: "10%", height: "40px", color: "white", backgroundColor: "green", border: "0" }} onClick={handleSubmit}>Submit</button>
                </form>

            </div>

        </Layout>

    )
}

export default Addadress
