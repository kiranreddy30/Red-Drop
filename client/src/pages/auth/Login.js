import React from 'react';
import Form from '../../components/shared/Form/Form';


function Login() {
    return (
        <>  
            <div className="row g-0">
                <div className="col-md-8 form-banner">
                      <img src="./assets/banner1.jpg" alt=""/>
                </div>
                <div className="col-md-4 form-container">
                     <Form formTittle={"Login"} ></Form>
                </div>
            </div>
            
           
           

        </>
    );
}

export default Login
