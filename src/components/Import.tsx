import React from "react";
import { ExcelHelper } from "../utils/ExcelHelper";
import { Input, Select } from "antd";

interface Import {
  sheetname: string;
  sheetlist: any;
  onFileSelectChange(e: React.ChangeEvent<HTMLInputElement>): any;
  onSheetSelectChange(e: string): any;
}

const ImportHooks = (props: Import) => {
  return (
    <Input.Group compact style={{ marginRight: 10, marginTop: -15 }}>
      <input
        name={"file-upload"}
        style={{ width: "50%" }}
        type="file"
        accept={ExcelHelper.SheetJSFT()}
        aria-label="Select original file"
        onChange={(e) => props.onFileSelectChange(e)}
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
