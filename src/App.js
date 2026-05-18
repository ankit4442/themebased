import React from 'react'
import Home from './app/Home'
import { Provider } from 'react-redux'
import { store } from './app/service/store'
import { ThemeProvider } from './context/ThemeContext'


const App = () => {
  return (
    <ThemeProvider>

  
    <Provider store={store}>

   
  <Home/>
   </Provider>
     </ThemeProvider>
  )
}

export default App


// import React, { useState } from 'react'

// const App = () => {
//   const [name, setName] = useState('')
//   const [description, setDescription] = useState('')
//   const [edititem, setEdititem] = useState(null)
//   const [data, setData] = useState([
//     { id:1,name: "Ankit", description: "xyz" },
//     { id:2,name: "Lokesh", description: "yzx" }

//   ])

//   const submitData = () => {
//     if(edititem){
//       const updateData = data.map((i)=>{
//         if(edititem.id===i.item){

//           const editDataData = {
//       id:edititem.id,
//       name: name,
//       description: description
//     }
//      setData(updateData)
//     setEdititem(null)
//         }
//       })
//     }
//     else{
//  const newData = {
//       id:Math.random(),
//       name: name,
//       description: description
//     }
//       setData([...data, newData])
//     }
   
  
//     setName("")
//     setDescription("")

//   }
//   const deleteItem=(item)=>{
//   const Data = data.filter((i)=>i.id !==item.id)
// setData(Data)

//   }
//     const editData=(item)=>{
//        setEdititem(item)
//       setName(item.name)
//       setDescription(item.description)
     


//   }

//   return (
//     <div
//       style={{
//         padding: "40px",
//         background: "#f4f7fb",
//         minHeight: "100vh",
//         fontFamily: "Arial"
//       }}
//     >
//       <div
//         style={{
//           maxWidth: "500px",
//           margin: "auto",
//           background: "#fff",
//           padding: "25px",
//           borderRadius: "12px",
//           boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
//         }}
//       >
//         <h2
//           style={{
//             textAlign: "center",
//             marginBottom: "20px",
//             color: "#2563eb"
//           }}
//         >
//           User Form
//         </h2>

//         <div style={{ marginBottom: "15px" }}>
//           <input
//             name="name"
//             placeholder="Enter Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             style={{
//               width: "100%",
//               padding: "12px",
//               borderRadius: "8px",
//               border: "1px solid #d1d5db",
//               outline: "none",
//               fontSize: "16px"
//             }}
//           />
//         </div>

//         <div style={{ marginBottom: "15px" }}>
//           <input
//             name="description"
//             placeholder="Enter Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             style={{
//               width: "100%",
//               padding: "12px",
//               borderRadius: "8px",
//               border: "1px solid #d1d5db",
//               outline: "none",
//               fontSize: "16px"
//             }}
//           />
//         </div>

//         <div
//           onClick={submitData}
//           style={{
//             background: "#2563eb",
//             color: "#fff",
//             padding: "12px",
//             textAlign: "center",
//             borderRadius: "8px",
//             cursor: "pointer",
//             fontWeight: "bold",
//             marginBottom: "25px"
//           }}
//         >
//           {edititem ? "update": "Submit"}
//         </div>

//         <h1
//           style={{
//             textAlign: "center",
//             color: "#111827",
//             marginBottom: "20px"
//           }}
//         >
//           Table
//         </h1>

//         {data.map((i, index) =>
//           <div
//             key={index}
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               background: "#eff6ff",
//               padding: "14px",
//               borderRadius: "10px",
//               marginBottom: "12px",
//               border: "1px solid #bfdbfe"
//             }}
//           >
//             <div
//               style={{
//                 fontWeight: "bold",
//                 color: "#1e3a8a"
//               }}
//             >
//               {i.name}
//             </div>

//             <div
//               style={{
//                 color: "#374151"
//               }}
//             >
//               {i.description}
//             </div>
//              <div
//               style={{
//                 color: "#374151",
//                 cursor:"pointer"
//               }}
//               onClick={()=>editData(i)}
//             >
//             Edit
//             </div>
//             <div
//               style={{
//                 color: "#374151",
//                 cursor:"pointer"
//               }}
//               onClick={()=>deleteItem(i)}
//             >
//             Delete
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default App