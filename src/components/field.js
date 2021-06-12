import React from "react";
import Languages from "./languages";
import Translate from "./translate";

export default ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
