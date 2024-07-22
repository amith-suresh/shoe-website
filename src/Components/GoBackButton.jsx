import { useNavigate } from "react-router-dom";
import React from 'react'

export default function GoBackButton() {
    const navigate = useNavigate()
    const goBack = ()=>{
        navigate(-1)
    }
  return (
    <button
    className="fixed top-4 left-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={goBack}
>
    Go-Back
</button>
  );
};
