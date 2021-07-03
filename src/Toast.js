
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function Toast(){


    const notify = () => 
    toast.success("Welcome To Our Hospital!");
  //  const closeToast=()=>{
  //      t=document.getElementsByClassName("alert").value
  //       t.style.display="none";
  // }
 
return(
  <div>

{/* <div class="alert" style={{ padding: "20px", backgroundColor: "#EAE479",marginTop:"5px",color: "white",display:"block"}}>
  <span class="closebtn" style={{ marginLeft: "15px",color: "black",fontWeight: "bold",
   float: "right",fontSize: "22px",lineHeight: "20px", cursor: "pointer", transition: "0.3s"}} 
   onClick={closeToast}>&times;</span> 
  <strong style={{color:"black"}}>Hello!</strong><span style={{color:"black"}}> Welcome to Our Website</span>
</div>
 <div> */}
 <label onClick={setTimeout(notify,1000)}></label>
 <ToastContainer />
</div>

)
}
export default Toast