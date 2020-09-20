import React, { useState } from "react";
import { Row, Col, Select } from "antd";
import "handsontable/dist/handsontable.full.css";
import "./App.css";
import { ExcelHelper, ExcelDomain, SheetDomain } from "./utils/ExcelHelper";
import LeftHooks from "./components/Left";
import { WorkBook } from "xlsx/types";

function App() {
  var excelHelper = new ExcelHelper();
  const [leftsheetname, setLeftSheetname] = useState("Sheet1");
  const [leftsheetlist, setLeftSheetlist] = useState<any[] | null>(null);
  const [hotTableComponentLeft] = useState(React.createRef());
  const [leftsheetdata, setLeftSheetData] = useState(
    JSON.parse(JSON.stringify(ExcelHelper.BlankData(11, 13)))
  );
  const [leftWorkbook, setLeftWorkbook] = useState<WorkBook>();
  const fileHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    event.persist();
    if (event.target.files) {
      let fileObj = event.target.files[0];

      if (fileObj) {
        excelHelper.convertFileToExcel(
          fileObj,
          (err: any, resp: ExcelDomain) => {
            if (err) {
              console.log(err);
            } else {
              let sheetnames = [];
              for (var i = 0; i < resp.sheets.length; i++) {
                sheetnames.push(
                  <Select.Option key={resp.sheets[i]} value={resp.sheets[i]}>
                    {resp.sheets[i]}
                  </Select.Option>
                );
              }
              if (field === "left") {
                setLeftSheetname(resp.sheets[0]);
                setLeftSheetlist(sheetnames);
                setLeftSheetData(resp.items);
                setLeftWorkbook(resp.workbook);
              }
            }
          }
        );
      }
    }
  };

  const onSheetFieldChange = (selectedSheetName: string, field: string) => {
    var wb = null;
    if (field === "left") wb = leftWorkbook;
    // else wb = rightWorkbook;

    if (wb !== undefined && wb !== null && selectedSheetName !== undefined) {
      excelHelper.getSheet(
        wb,
        selectedSheetName,
        (err: any, resp: SheetDomain) => {
          if (err) {
            console.log(err);
          } else {
            if (field === "left") {
              setLeftSheetname(selectedSheetName);
              setLeftSheetData(resp.items);
            }
          }
        }
      );
    }
  };

  return (
    <div className="App">
      <Row>
        <Col span={11}>
          <LeftHooks
            sheetname={leftsheetname}
            sheetlist={leftsheetlist}
            onFileSelectChange={(e) => fileHandler(e, "left")}
            onSheetSelectChange={(e) => onSheetFieldChange(e, "left")}
            hotTableComponentLeft={hotTableComponentLeft}
            sheetdata={leftsheetdata}
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
