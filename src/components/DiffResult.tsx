import React from "react";
// import Handsontable from "handsontable";
import { HotTable } from "@handsontable/react";
import { renderDiff } from "../utils/RenderDiffTable";

interface DiffResult {
  hotTableComponentDiffResult: React.RefObject<any>;
}

const DiffResultHooks = (props: DiffResult) => {
  const hotDiffResultSettings = {
    minRows: 10,
    minCols: 10,
    minSpareCols: 0,
    minSpareRows: 0,
    colHeaders: false,
    contextMenu: false,
    rowHeaders: false,
    readOnly: true,
    // stretchH: "all",
    renderAllRows: true,
    licenseKey: "non-commercial-and-evaluation",
  };

  return (
    <>
      <HotTable
        ref={props.hotTableComponentDiffResult}
        data={[[""]]}
        style={{ width: "98%" }}
        id={"tableresult"}
        settings={hotDiffResultSettings}
        renderer={renderDiff}
        className="diffhandsontable"
        stretchH={"all"}
      ></HotTable>
    </>
  );
};

export default DiffResultHooks;
