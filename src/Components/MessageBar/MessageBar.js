import { useSelector } from "react-redux";

const MessageBar = () => {
  const messageBarStatus = useSelector(
    (store) => store.addMessageToShow.messageToDisplay
  );

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
