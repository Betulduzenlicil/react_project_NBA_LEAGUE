import { useState } from "react";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import { data } from "./helper/data";

function App() {
  const [myData, setMyData] = useState(data)
  // const [first, setFirst] = useState("");
  // let newArr = [];

  const handleData = (e) => {
    setMyData(myData.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase())))
  } 

  // const handleChange = (e) => {
  //   // console.log(e.target.value);
  //   setFirst(e.target.value);
  // };
  // if (first === "") {
  //   newArr = data;
  // } else {
  //   newArr = data.filter((item) =>
  //     item.name.toLowerCase().includes(first.toLowerCase())
  //   );
  // }
  return (
    <div>
      <Header handleChange={handleData} />
      <CardContainer data={myData} />
      {/* <CardContainer data={newArr} /> */}
    </div>
  );
}

export default App;
