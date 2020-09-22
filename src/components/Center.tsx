import React from "react";
import "antd/dist/antd.css";
import { Button } from "antd";

interface DiffBtn {
  btntext: string;
  onDiffBtnClick(e: React.MouseEvent<HTMLElement, MouseEvent>): any;
  onSampleBtnClick(e: React.MouseEvent<HTMLElement, MouseEvent>): any;
  onResetBtnClick(e: React.MouseEvent<HTMLElement, MouseEvent>): any;
}

const CenterHooks = (props: DiffBtn) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Button
        type="dashed"
        size="small"
        style={{ marginTop: 150 }}
        onClick={(e) => props.onSampleBtnClick(e)}
      >
        {"< Sample >"}
      </Button>
      <Button
        ref={React.createRef()}
        id="btn-diff"
        type="primary"
        style={{ marginTop: 10 }}
        size="large"
        onClick={(e) => props.onDiffBtnClick(e)}
      >
        {props.btntext}
      </Button>
      <Button
        ref={React.createRef()}
        id="btn-clean"
        type="default"
        style={{ marginTop: 10 }}
        onClick={(e) => props.onResetBtnClick(e)}
      >
        {" << reset >> "}
      </Button>
    </div>
  );
};

export default CenterHooks;
