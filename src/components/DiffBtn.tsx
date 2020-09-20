import React from "react";
import "antd/dist/antd.css";
import { Button } from "antd";

interface DiffBtn {
  btntext: string;
  onDiffBtnClick(e: React.MouseEvent<HTMLElement, MouseEvent>): any;
}

const DiffButtonHooks = (props: DiffBtn) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Button
        ref={React.createRef()}
        id="btn-diff"
        type="primary"
        style={{ marginTop: 150 }}
        onClick={(e) => props.onDiffBtnClick(e)}
      >
        {props.btntext}
      </Button>
    </div>
  );
};

export default DiffButtonHooks;
