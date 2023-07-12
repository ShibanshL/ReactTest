import "./Checkout_ALL_CSS.css";

interface CustomInput {
  leftIcon?: string;
  label: string;
  rightIcon?: string;
  err?: boolean;
  rIcon?: string;
}

const CustomInputTags = (e: CustomInput) => {
  if (e.rightIcon) {
    return (
      <>
        <div className="FormInputs">
          <label>{`<${e.label}>`}</label>
          <div className="InputPart">
            <input type="text" />
            <img src={e.rightIcon} className={`rightImg_${e.rIcon}`} />
          </div>
        </div>
      </>
    );
  }

  if (e.err) {
    return (
      <>
        <div className="FormInputs_err">
          <label>{`<${e.label}>`}</label>
          <div className="InputPart">
            <input type="text" />
            <img src={e.leftIcon} className="rightImg" />
          </div>
          <label className="Error">{`<error message>`}</label>
        </div>
      </>
    );
  }

  if (e.leftIcon) {
    return (
      <>
        <div className="FormInputs">
          <label>{`<${e.label}>`}</label>
          <div className="InputPart">
            <img src={e.leftIcon} className="leftImg" />
            <input type="text" />
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="FormInputs">
        <label>{`<${e.label}>`}</label>
        <div className="InputPart">
          <input type="text" />
        </div>
      </div>
    </>
  );
};

const Dividor = (e: { width: number; mt?: number; mb?: number }) => {
  return (
    <>
      <div
        style={{
          height: "2px",
          width: `${e.width}%`,
          background: "#e0e0e0",
          marginTop: e.mt ? `${e.mt}vh` : "3vh",
          marginBottom: e.mb ? `${e.mb}vh` : "3vh",
        }}
        className="Dividor"
      ></div>
    </>
  );
};

export { CustomInputTags, Dividor };
