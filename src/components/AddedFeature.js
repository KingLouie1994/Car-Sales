import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

const AddedFeature = ({ feature, removeItem }) => {
  return (
    <li>
      <button className="button" onClick={() => removeItem({ feature })}>
        X
      </button>
      {feature.name}
    </li>
  );
};

export default connect(state => state, actionCreators)(AddedFeature);
