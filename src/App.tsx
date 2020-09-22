import React, { useState, useRef } from "react";
import { WorkBook } from "xlsx/types";
import { Row, Col, Select } from "antd";

import { ExcelHelper, ExcelDomain, SheetDomain } from "./utils/ExcelHelper";
import { diff } from "./utils/Diff";
import LeftHooks from "./components/Left";
import RightHooks from "./components/Right";
import CenterHooks from "./components/Center";
import DiffResultHooks from "./components/DiffResult";

import "handsontable/dist/handsontable.full.css";
import "./App.scss";
import "normalize.css";

function App() {
  var excelHelper = new ExcelHelper();
  const [leftsheetname, setLeftSheetname] = useState("Sheet1");
  const [leftsheetlist, setLeftSheetlist] = useState<any[] | null>(null);
  const [hotTableComponentLeft] = useState(React.createRef());
  const [leftsheetdata, setLeftSheetData] = useState(
    JSON.parse(JSON.stringify(ExcelHelper.BlankData(12, 8)))
  );
  const [leftWorkbook, setLeftWorkbook] = useState<WorkBook>();
  const [rightsheetname, setRightSheetname] = useState("Sheet1");
  const [rightsheetlist, setRightSheetlist] = useState<any[] | null>(null);
  const [hotTableComponentRight] = useState(React.createRef());
  const [rightsheetdata, setRightSheetData] = useState(
    JSON.parse(JSON.stringify(ExcelHelper.BlankData(12, 8)))
  );
  const [rightWorkbook, setRightWorkbook] = useState<WorkBook>();
  const [diffBtnText] = useState(">> Diff <<");
  const [hotTableComponentDiffResult] = useState(React.createRef());

  const leftFileSelectRef = useRef<any>(null);
  const rightFileSelectRef = useRef<any>(null);

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
              } else {
                setRightSheetname(resp.sheets[0]);
                setRightSheetlist(sheetnames);
                setRightSheetData(resp.items);
                setRightWorkbook(resp.workbook);
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
    else wb = rightWorkbook;

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
            } else {
              setRightSheetname(selectedSheetName);
              setRightSheetData(resp.items);
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
            fileRef={leftFileSelectRef}
          />
        </Col>
        <Col span={2}>
          <CenterHooks
            btntext={diffBtnText}
            onDiffBtnClick={(e) => {
              diff(leftsheetdata, rightsheetdata, hotTableComponentDiffResult);
            }}
            onSampleBtnClick={(e) => {
              setLeftSheetData(ExcelHelper.SampleDataLeft);
              setRightSheetData(ExcelHelper.SampleDataRight);
            }}
            onResetBtnClick={(e) => {
              // window.location.reload();
              leftFileSelectRef.current.value = "";
              rightFileSelectRef.current.value = "";
              setLeftSheetlist(null);
              setRightSheetlist(null);
              setLeftSheetname("Sheet1");
              setRightSheetname("Sheet1");
              setLeftSheetData(
                JSON.parse(JSON.stringify(ExcelHelper.BlankData(12, 8)))
              );
              setRightSheetData(
                JSON.parse(JSON.stringify(ExcelHelper.BlankData(12, 8)))
              );
            }}
          />
        </Col>
        <Col span={11}>
          <RightHooks
            sheetname={rightsheetname}
            sheetlist={rightsheetlist}
            onFileSelectChange={(e) => fileHandler(e, "right")}
            onSheetSelectChange={(e) => onSheetFieldChange(e, "right")}
            hotTableComponentRight={hotTableComponentRight}
            sheetdata={rightsheetdata}
            fileRef={rightFileSelectRef}
          />
        </Col>
        <Col span={24} style={{ textAlign: "center" }}>
          <DiffResultHooks
            hotTableComponentDiffResult={hotTableComponentDiffResult}
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
