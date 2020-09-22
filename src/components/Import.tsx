import React from "react";
import { ExcelHelper } from "../utils/ExcelHelper";
import { Input, Select } from "antd";
import "antd/dist/antd.css";

interface Import {
  sheetname: string;
  sheetlist: any;
  fileRef: React.RefObject<any>;
  onFileSelectChange(e: React.ChangeEvent<HTMLInputElement>): any;
  onSheetSelectChange(e: string): any;
}

const ImportHooks = (props: Import) => {
  return (
    <Input.Group
      compact
      style={{ marginRight: 10, marginTop: -25, marginBottom: 3 }}
    >
      <input
        name={"file-upload"}
        style={{ width: "50%", marginTop: 10 }}
        type="file"
        accept={ExcelHelper.SheetJSFT()}
        aria-label="Select original file"
        onChange={(e) => props.onFileSelectChange(e)}
        ref={props.fileRef}
      ></input>
      <Select
        style={{ width: "40%" }}
        value={props.sheetname}
        onChange={(e) => props.onSheetSelectChange(e)}
      >
        {props.sheetlist}
      </Select>
    </Input.Group>
  );
};

ImportHooks.defaultProps = {
  sheetname: "Sheet1",
  sheetlist: null,
};

export default ImportHooks;
