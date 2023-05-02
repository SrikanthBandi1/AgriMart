import React from 'react'
import Layout from './Layout'

function AddressInfo() {
    return (
        <Layout>

        
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <div class="card" style={{
                        background: "#FFFFFF 0% 0% no-repeat padding-box",
                        boxShadow: "0px 3px 6px #19FC0057",
                        borderRadius: "36px",
                        opacity: 1,
                        marginTop:"120px"
                    }}>
                        <h6 style={{ textAlign: "center" }}>Add Adress</h6>
                        <p style={{ marginLeft: "50px" }}>Name:</p>
                        <p style={{ marginLeft: "50px" }}>Locality:</p>
                        <p style={{ marginLeft: "50px" }}>City:</p>
                        <p style={{ marginLeft: "50px" }}>State:</p>
                        <p style={{ marginLeft: "50px" }}>Pincode:</p>



                    </div>
                </div>


            </div>
        </div>
        </Layout>
    )
}

export default AddressInfo
