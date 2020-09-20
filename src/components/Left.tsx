import React from "react";
import Handsontable from "handsontable";
import { HotTable } from "@handsontable/react";
import ImportHooks from "../components/Import";

interface Left {
  sheetname: string;
  sheetlist: any;

  sheetdata: any[][] | Handsontable.RowObject[];
  hotTableComponentLeft: React.RefObject<any>;

  onFileSelectChange(e: React.ChangeEvent<HTMLInputElement>): any;
  onSheetSelectChange(e: string): any;
}

const LeftHooks = (props: Left) => {
  const hotLeftSettings = {
    colHeaders: true,
    rowHeaders: true,
    height: 300,
    minRows: 5,
    minCols: 5,
    licenseKey: "non-commercial-and-evaluation",
  };
  return (
    <>
      <div className="left">
        <h1 style={{ marginLeft: 3 }}>{"<元>"}</h1>
        <ImportHooks
          sheetname={props.sheetname}
          sheetlist={props.sheetlist}
          onFileSelectChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.onFileSelectChange(e)
          }
          onSheetSelectChange={(e: string) => props.onSheetSelectChange(e)}
        />
        <HotTable
          ref={props.hotTableComponentLeft}
          data={props.sheetdata}
          style={{ width: "98%" }}
          id="table-left"
          settings={hotLeftSettings}
        />
      </div>
    </>
  );
};

export default LeftHooks;
