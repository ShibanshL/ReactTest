import "./Checkout_ALL_CSS.css";
import { useState } from "react";

interface CustomInput {
  leftIcon?: string;
  label: string;
  rightIcon?: string;
  err?: boolean;
  rIcon?: string;
}

const CustomInputTags = (e: CustomInput) => {
  const [funName, setFunName] = useState("InputPart");

  return (
    <>
      <div
        className="FormInputs"
        style={{
          border: e.err ? "1.5px solid red" : "1.5px solid #e0e0e0",
        }}
      >
        <label
          style={{
            color: e.err ? "red" : "#595959",
          }}
        >{`<${e.label}>`}</label>
        <div className={funName}>
          {e.leftIcon ? <img src={e.leftIcon} className="leftImg" /> : null}
          <input type="text" />
          {e.rightIcon ? <img src={e.rightIcon} className="rightImg" /> : null}
        </div>
        {e.err ? <p className="ErrorMSG">{`<error message>`}</p> : null}
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
