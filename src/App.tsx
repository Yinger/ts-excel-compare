import React, { useState } from "react";
import { Select } from "antd";
import "./App.css";
import { ExcelHelper, ExcelDomain } from "./utils/ExcelHelper";
import ImportHooks from "./components/Import";

function App() {
  const [sheetname, setSheetname] = useState("Sheet1");
  const [sheetlist, setSheetlist] = useState<any[] | null>(null);
  const fileHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    event.persist();
    if (event.target.files) {
      var excelHelper = new ExcelHelper();
      let fileObj = event.target.files[0];

      if (fileObj) {
        //just pass the fileObj as parameter
        excelHelper.convertFileToExcel(
          fileObj,
          (err: any, resp: ExcelDomain) => {
            if (err) {
              console.log(err);
            } else {
              var sheets = resp.sheets;
              let sheetnames = [];

              for (var i = 0; i < sheets.length; i++) {
                sheetnames.push(
                  <Select.Option key={sheets[i]} value={sheets[i]}>
                    {sheets[i]}
                  </Select.Option>
                );
              }
              setSheetname(sheets[0]);
              setSheetlist(sheetnames);
            }
          }
        );
      }
    }
  };
  return (
    <div className="App">
      <ImportHooks
        sheetname={sheetname}
        sheetlist={sheetlist}
        onFileSelectChange={(e) => fileHandler(e, "")}
        onSheetSelectChange={(e) => {}}
      ></ImportHooks>
    </div>
  );
}

export default App;
