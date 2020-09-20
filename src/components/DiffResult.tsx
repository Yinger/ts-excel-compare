import React from "react";
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
    renderAllRows: true,
    licenseKey: "non-commercial-and-evaluation",
  };

  return (
    <>
      <span style={{ fontSize: 24 }}>{"比較結果"}</span>
      <HotTable
        ref={props.hotTableComponentDiffResult}
        data={[[""]]}
        style={{ width: "100%", padding: 15 }}
        id={"tableresult"}
        settings={hotDiffResultSettings}
        renderer={renderDiff}
        className="diffhandsontable"
        stretchH={"all"}
      />
    </>
  );
};

export default DiffResultHooks;
