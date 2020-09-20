import React from "react";
import "antd/dist/antd.css";
import { Button } from "antd";

interface DiffBtn {
  btntext: string;
  onDiffBtnClick(e: React.MouseEvent<HTMLElement, MouseEvent>): any;
}

const DiffButtonHooks = (props: DiffBtn) => {
  return (
    <Button
      ref={React.createRef()}
      id="btn-diff"
      type="primary"
      style={{ width: 100, marginTop: 50 }}
      onClick={(e) => props.onDiffBtnClick(e)}
    >
      {props.btntext}
    </Button>
  );
};

export default DiffButtonHooks;
