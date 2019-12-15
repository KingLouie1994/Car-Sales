import React from "react";
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";

const AdditionalFeature = ({ feature, addItem }) => {
  return (
    <li>
      <button className="button" onClick={() => addItem({ feature })}>
        Add
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default connect(state => state, actionCreators)(AdditionalFeature);
