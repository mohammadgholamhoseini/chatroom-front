import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
export default  function Notification (props){
    const notify = ()=>{

    }

    return (
        <div>
            <ToastContainer position="bottom-left"
                            theme="colored"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={true}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover/>
        </div>
    );
}
