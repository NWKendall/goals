import React from "react";
import { rulesData } from "./data.js";


const Rules = () => {
    
const printRules = () => {
    Object.entries(rulesData).forEach(ent => {
        let key = ent[0]
        let val = ent[1]
      
        if(typeof val === "object") {
            // let vals = val.list.map(l => l)
            return <li>{key}: {val.name} </li>
        }
        
        else {
            return <li>{key}: {val}</li>
        }
      
})
}
  return (
    <div>
        {printRules()}
    </div>
  )
};

export default Rules;



//     <ol>
//       <li>Must wak up early! 7:15!</li>
//       <li>
//         No Phone until earliest 18:30. No longer than 1 hour. Youtube for
//         coding/study music only.
//       </li>
//       <li>Must stretch to fix up your back.</li>
//       <ol>Food -</ol>
//         <li>Vegan</li>
//         <li>No Eggs</li>
//         <li>Less bread / carbs</li>
//         <li>More veg</li>
//         <li>Fruits and Oatmeal</li>
//       <ol>Contribute - </ol>
//         <li>walk fitz</li>
//         <li>cook healthy food with love</li>
//         <li>help clean"</li>
//         <li>Get outside as much as you can!</li>
//     </ol>
