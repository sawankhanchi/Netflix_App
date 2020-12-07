import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";

const App = () => (
    <>
      <h1 className="heading_style"> List of 5 top Netflix Series in 2020 </h1>
      {Sdata.map((val, index) => {
        console.log(index);
        return (
            <Card
              key={val.id}
              imgsrc={val.imgsrc}
              title={val.title}
              sname={val.sname}
              link={val.links}
            />
        );
      })}
    </>
  );

  export default App;
  