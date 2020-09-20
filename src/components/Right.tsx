import React from "react";
import Handsontable from "handsontable";
import { HotTable } from "@handsontable/react";
import ImportHooks from "../components/Import";

interface Right {
  sheetname: string;
  sheetlist: any;

  sheetdata: any[][] | Handsontable.RowObject[];
  hotTableComponentRight: React.RefObject<any>;

  onFileSelectChange(e: React.ChangeEvent<HTMLInputElement>): any;
  onSheetSelectChange(e: string): any;
}

const RightHooks = (props: Right) => {
  const hotRightSettings = {
    colHeaders: true,
    rowHeaders: true,
    height: 300,
    minRows: 5,
    minCols: 5,
    licenseKey: "non-commercial-and-evaluation",
  };
  return (
    <>
      <div className="right">
        <h1 style={{ marginLeft: 3 }}>{"<先>"}</h1>
        <ImportHooks
          sheetname={props.sheetname}
          sheetlist={props.sheetlist}
          onFileSelectChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.onFileSelectChange(e)
          }
          onSheetSelectChange={(e: string) => props.onSheetSelectChange(e)}
        />
        <HotTable
          ref={props.hotTableComponentRight}
          data={props.sheetdata}
          style={{ width: "98%" }}
          id="table-left"
          settings={hotRightSettings}
        />
      </div>
    </>
  );
};

export default RightHooks;
