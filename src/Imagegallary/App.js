import React, {useState } from "react";
import './index.css'

const App = () => {
  const [inputvalue, setInputvalue] = useState("");
  const [data, setData] = useState("");
  const [image, setImage] = useState([]);
  const page = 1;
  const API_key = "563492ad6f91700001000001a50248a19756492687753a2523d04a50";
  const fetchApi = () => {
    fetch(
      `https://api.pexels.com/v1/search?query=${inputvalue}&page=${page}&per_page=20`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: API_key,
        },
      }
    ).then((response)=>response.json())
    .then((fetchdata)=>{
      setImage(fetchdata.photos)
    })
  };
console.log(image)
const onChangehandle = (e) => {
  setInputvalue(e.target.value);
  // console.log(inputvalue);
};
const onClickhandle = () => {
  setData(inputvalue);
  // console.log(data);
  fetchApi();
}


  return (
    <div className="maindiv">
      <div className="inputdiv">
      <input onChange={onChangehandle} />
      <button onClick={onClickhandle}>Search</button>
      </div>
      <div className="card">
    {image && image.length >0 && image.map((value)=>(     
        <div className="imagediv">
        <img  src={value.src.portrait} width='300'/>
        </div>
   
    ))}
    </div>
    </div>
  );
};

export default App;
