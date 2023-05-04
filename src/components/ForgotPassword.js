import axios from 'axios';
import React, { useState } from 'react'
import Layout from './Layout';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [result, setResult] = useState("");
    const getPassword = () => {
        axios.post("http://192.168.5.35:8000/forgotpassword/", {
            "email": email
        })
            .then((res) => setResult(res.data.detail))
            .then(toast.info("Mail sent"))
            navigate('/login')
    }
    return (
        <Layout>
            <div className='container'>
                <div className='d-flex justify-content-center'>
                    <div className='card w-50' style={{ marginTop: "100px", marginBottom: "200px" }}>
                        <div className='card-header'>
                            <h2>GetPassword</h2>
                        </div>
                        <div className='card-body'>
                            <div>
                                <label className='form-label'>Email : </label>
                                <input className='form-control' onChange={(e) => setEmail(e.target.value)}></input>
                            </div>
                            <div>
                                <button className='btn btn-primary' onClick={getPassword}>submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ForgotPassword