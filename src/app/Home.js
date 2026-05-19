import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./service/counterSlice";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const {theme,changeTheme} = useContext(ThemeContext);


  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      background: theme === "dark" ? "black" : "#3b82f6",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "20px",
          textAlign: "center",
          width: "300px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          transition: "0.3s",
        }}
      >
      <div>
        <button 
         style={{
              padding: "10px 20px",
              backgroundColor: "#22c55e",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              fontSize: "20px",
              cursor: "pointer",
            }}
        onClick={()=>changeTheme()}>
          change Theme dark
        </button>
      </div>
        <h2
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            marginBottom: "15px",
            color: "#333",
          }}
        >
          Counter App 🚀
        </h2>

        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "#2563eb",
            marginBottom: "20px",
          }}
        >
          {count?.counter}
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <button
            onClick={() => dispatch(decrement())}
            style={{
              padding: "10px 20px",
              backgroundColor: "#ef4444",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            -
          </button>

          <button
            onClick={() => dispatch(increment())}
            style={{
              padding: "10px 20px",
              backgroundColor: "#22c55e",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
