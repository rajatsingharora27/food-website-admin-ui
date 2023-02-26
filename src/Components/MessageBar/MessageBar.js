import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addMessageToShow } from "../../Redux/Slices/messageBar";
import { BiError } from "react-icons/bi";

const MessageBar = () => {
  const messageBarStatus = useSelector(
    (store) => store.addMessageToShow.messageToDisplay
  );
  const dispatch = useDispatch();

  const [mesaageBar, setMesaageBar] = useState(true);

  const hideMessageBar = () => {
    console.log("click");
    dispatch(addMessageToShow(-1));
    setMesaageBar(!mesaageBar);
  };

  function scrollUpToPage() {
    if (messageBarStatus.length > 0) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }

  return messageBarStatus.length > 0 ? (
    <div>
      {console.log(messageBarStatus)}

      {messageBarStatus.map((ele, i) => {
        return (
          <div
            className={
              ele.type === "error"
                ? `bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative`
                : `bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative`
            }
            role="alert"
            key={ele.key}
          >
            <strong className="font-bold">
              {ele.type === "error" ? "Error :" : "Success "}
            </strong>
            {console.log(ele)}
            <span className="block sm:inline">{ele.reason}</span>
          </div>
        );
        // <button onClick={hideMessageBar}> X</button>;
      })}
      {scrollUpToPage()}
    </div>
  ) : (
    <></>
  );
};

export default MessageBar;

// <div className="flex flex-row justify-evenly w-full h-1/3 bg-red-300 text-white gap-2">
//       <div className={` flex flex-col`}>
//         {messageBarStatus.map((messageEle, i) => {
//           return (
//             <div className="flex flex-row" key={i}>
//               <div>Icon </div>
//               {console.log(messageEle, i)}
//               <span className="text-white">{messageEle} </span>
//             </div>
//           );
//         }) }
//       </div>
//       {scrollUpToPage()}
//       <button onClick={hideMessageBar}> X</button>
//     </div>
//   ) : (
//     <></>
//   );

{
  /* <div
            key={ele.key}
            className={`flex flex-row justify-evenly w-full h-1/3 ${
              ele.type === "error" ? `bg-red-300` : `bg-green-600`
            } text-white gap-y-2`}
          >
            <div className="flex flex-row justify-start items-center">
              <div>
                <BiError className="" />
              </div>
              <div>{ele.reason}</div>
            </div>
          </div> */
}
