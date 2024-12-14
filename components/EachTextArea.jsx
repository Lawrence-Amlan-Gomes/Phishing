const EachTextArea = ({
    label,
    isReal,
    name,
    type,
    placeholder,
    value,
    setValue,
    iserror,
    error,
  }) => {
    return (
      <>
        {isReal ? (
          <div>
            <div className="sm:text-[18px] text-[13px] font-bold tracking-wider mb-1 text-start mt-5">{value != "" ? label : ""}</div>
            <textarea
              className={`p-3 border-[2px] sm:text-[18px] text-[13px] resize-none max-h-[100px] box-border w-full rounded-md focus:outline-none focus:outline-[1px] focus:shadow-none bg-transparent placeholder:text-zinc-400 ${
                !iserror
                  ? "border-green-700 text-green-600 focus:outline-green-600"
                  : "border-red-600 text-red-600 focus:outline-red-600"
              }`}
              type={type}
              value={value}
              name={name}
              onChange={(e) => setValue(e.target.value)}
              placeholder={placeholder}
              autoComplete="off"
            />
            {iserror ? (
              <div className="text-red-600 mt-1 text-start sm:text-[14px] text-[12px] w-full">
                {error}
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <div>
            <input
              className={`h-[1px] w-[1px] float-left`}
              type={type}
              value={value}
              name={name}
              onChange={() => console.log("hello")}
              placeholder={placeholder}
            />
          </div>
        )}
      </>
    );
  };
  
  export default EachTextArea;