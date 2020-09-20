import XLSX, { WorkBook } from "xlsx";

export interface ExcelDomain {
  items: [] | undefined;
  sheets: string[];
  workbook: XLSX.WorkBook;
}

export interface SheetDomain {
  items: [] | undefined;
}

export class ExcelHelper {
  public static SheetJSFT = () => {
    var jsft = ["xlsx"];
    return jsft
      .map(function (x) {
        return "." + x;
      })
      .join(",");
  };

  public static BlankData = (row: number, col: number) => {
    var data: string[][] = new Array(row)
      .fill("")
      .map(() => new Array(col).fill(""));

    return data;
  };

  public getSheet = (wb: WorkBook, sheetname: string, callback: any) => {
    return new Promise(function (resolve, reject) {
      var wsItem = wb.Sheets[sheetname];

      /* Convert array of arrays */
      var items = XLSX.utils.sheet_to_json(wsItem, { header: 1 });

      var data = {
        items: items as [] | undefined,
      } as SheetDomain;

      resolve(data);
      return callback(null, data);
    });
  };

  public convertFileToExcel = (file: Blob, callback: any) => {
    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      var rABS = !!reader.readAsBinaryString;
      reader.onload = function (e) {
        /* Parse data */
        var bstr = e?.target?.result;
        var wb = XLSX.read(bstr, { type: rABS ? "binary" : "array" });

        /* Get first worksheet */
        var wsnameItems = wb.SheetNames[0];
        var wsItem = wb.Sheets[wsnameItems];

        /* Convert array of arrays */
        var items = XLSX.utils.sheet_to_json(wsItem, { header: 1 });

        var data = {
          items: items,
          // locations: locations,
          sheets: wb.SheetNames,
          workbook: wb,
        } as ExcelDomain;

        resolve(data);
        return callback(null, data);
      };
      if (file && rABS) reader.readAsBinaryString(file);
      else reader.readAsArrayBuffer(file);
    });
  };
}
