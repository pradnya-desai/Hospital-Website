
// function DoctorLoginRegister(){
//     //     var x=document.getElementById("log-in");
//     //     var y=document.getElementById("register");    
//     // var z=document.getElementById("btn");
//     const Registerr = () => {
//         document.getElementById(logIn1).style.left = "-400px";
//         document.getElementById(register).style.left = "50px";
//         document.getElementById(btn).style.left = "110px";
//     };
//     const LogInn = () => {
//         document.getElementById(logIn1).style.left = "50px";
//         document.getElementById(register).style.left = "450px";
//         document.getElementById(btn).style.left = "0px";
//     };

// // const formBox={
    
// //         width: '380px',
// //         height: '480px',
// //         position: 'relative',
// //         margin: '6% auto',
// //         background:'lavenderblush',
// //         padding: '5px',
// //         overflow:'hidden',
      
// // };
// // const buttonBox={
 
// //         width: '220px',
// //         margin: '35px auto',
// //         position: 'relative',
// //         boxShadow: '0 0 20px 9px #ff61241f',
// //       borderRadius: '30px',
     
// // };
// // const btn={
    
// //         top: '0',
// //         left: '0',
// //         position: 'absolute',
// //         width: '110px',
// //         height: '100%',
// //         backgroundColor:'blue',
// //         borderRadius: '30px',
// //         transition: '0.5s',
        
// // };
// // const toggleBtn={
    
// //         padding:'10px 30p',
// //         cursor:'pointer',
// //         background:'transparent',
// //         border:'0',
// //         outline: 'none',
// //         position:'relative',
      
// // };

// // const inputGroup={
// //     top:'180px',
// //     position: 'absolute',
// //     width: '280px',
// //     transition: '.5s',
// //   };
// //   const inputField={
// //     width: '100%',
// //     padding:'10px 0',
// //     margin:'5px 0',
// //     borderLeft:'0',
// //     borderTop:'0',
// //     borderBottom: '1px solid #999',
// //     borderRight:'0',
// //     outline: 'none',
// //     background: 'transparent',
// //   };
// //   const submitBtn={
// //     width:'85%',
// //     padding:'10px 30px',
// //     cursor: 'pointer',
// //     display: 'block',
// //     margin: 'auto',
// //     background: 'linear-gradient(to right,#F26FC9, #8772EF)',
// //     border:'0',
// //     outline: 'none',
// //     borderRadius: '30px',
// //   };
// //   const checkBox={
// //     margin: '30px 10px 30px 0px',
  
// //   };
// //  const span={
// //     color: '#777',
// //     fontSize: '12px',
// //     bottom:'149px',
// //     position: 'absolute',
// //     fontSize: '16px',
// //   };
// //   const logIn1={
// //     left:'50px',
// //   };
// //   const register={
// //     left: '450px',
// //   };
// //   const backBtn={
// //     width:'35%',
// //     padding:'10px 30px',
// //     cursor: 'pointer',
// //     display: 'block',
// //     margin: 'auto',
// //     background: 'linear-gradient(to right,#F26FC9, #8772EF)',
// //     border:'0',
// //     outline: 'none',
// //     borderRadius: '30px',
// //     marginTop: '50px',
// //   };
//  return (
//         <div style={{height:"100%", width:"100%",position:"a"}}>
//             <div style={formBox}>
//                 <div style={buttonBox}>
//                     <div id={btn}></div>
//                     <button type="button" style={toggleBtn} onClick={LogInn}>Log In</button>
//                     <button type="button" style={toggleBtn} onclick={Registerr}>Register</button>
//                 </div>
//                 <form style={inputGroup} id={logIn1}>
//                     <input type="text" style={inputField} placeholder="Email-id" required />
//                     <input type="text" style={inputField} placeholder="Password" required />
//                     <input type="checkbox" style={checkBox} /><span>Remember Me</span>
//                     <button type="submit" style={submitBtn}>Login</button>
//                     <button type="submit" style={backBtn}>Back</button>

//                 </form>
//                 <form style={inputGroup} id={register}>
//                     <input type="text" style={inputField} placeholder="Name" required />
//                     <input type="text" style={inputField} placeholder="Email-id" required />
//                     <input type="text" style={inputField} placeholder="Password" required />
//                     {/* <input type="checkbox" class="check-box"><span>i</span> */}
//                     <button type="submit" style={submitBtn}>Register</button>
//                     <button type="submit" style={backBtn}>Back</button>
//                 </form>
//             </div>

//         </div>
//     );
// };
// export default DoctorLoginRegister;