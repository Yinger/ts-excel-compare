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

  public static SampleDataLeft = () => {
    var TestData = [
      [
        "Date",
        "Symbol",
        "Open",
        "High",
        "Low",
        "Close",
        "Volume",
        "ask",
        "cash",
        "type",
        "amount",
        "nonce",
      ],
      [
        "2019-07-08 00:00:00",
        "BTCUSD",
        "11475.07",
        "11540.33",
        "11469.53",
        "11506.43",
        "10.77073088",

        "0",
        "100000000",
        "exchange limit",
        "5",
        "payload_nonce",
      ],
      [
        "2019-07-07 23:00:00",
        "BTCUSD",
        "11423.0",
        "11482.72",
        "11423.0",
        "11475.07",
        "32.99655899",

        "0",
        "100000000",
        "exchange limit",
        "5",
        "payload_nonce",
      ],
      [
        "2019-07-07 22:00:00",
        "BTCUSD",
        "11526.25",
        "11572.74",
        "11333.59",
        "11423.0",
        "48.9377301868",

        "0",
        "100000000",
        "exchange limit",
        "5",
        "payload_nonce",
      ],
      [
        "2019-07-07 21:00:00",
        "BTCUSD",
        "11515.8",
        "11562.65",
        "11475.2",
        "11526.25",
        "25.3239076786",

        "0",
        "100000000",
        "exchange limit",
        "5",
        "payload_nonce",
      ],
      [
        "2019-07-07 20:00:00",
        "BTCUSD",
        "11547.98",
        "11624.88",
        "11423.94",
        "11515.8",
        "63.2119724403",

        "0",
        "100000000",
        "exchange limit",
        "5",
        "payload_nonce",
      ],
      [
        "2019-07-07 19:00:00",
        "BTCUSD",
        "11470.47",
        "11610.0",
        "11432.32",
        "11547.98",
        "67.915214697",

        "0",
        "100000000",
        "exchange limit",
        "5",
        "payload_nonce",
      ],
      [
        "2019-07-07 18:00:00",
        "BTCUSD",
        "11502.04",
        "11525.0",
        "11426.74",
        "11470.47",
        "31.1094771869",

        "0",
        "100000000",
        "exchange limit",
        "5",
        "payload_nonce",
      ],
      [
        "2019-07-07 17:00:00",
        "BTCUSD",
        "11201.6",
        "11566.43",
        "11201.6",
        "11502.04",
        "121.5256740453",

        "0",
        "100000000",
        "exchange limit",
        "5",
        "payload_nonce",
      ],
      [
        "2019-07-07 16:00:00",
        "BTCUSD",
        "11254.97",
        "11254.97",
        "11135.01",
        "11201.6",
        "23.5194946648",

        "0",
        "100000000",
        "exchange limit",
        "5",
        "payload_nonce",
      ],
      [
        "2019-07-07 15:00:00",
        "BTCUSD",
        "11358.05",
        "11408.02",
        "11189.0",
        "11254.97",
        "64.0821938629",

        "0",
        "100000000",
        "exchange limit",
        "5",
        "payload_nonce",
      ],
    ];

    return TestData;
  };

  public static SampleDataRight = () => {
    var TestData = [
      [
        "Date",
        "Symbol",
        "Open",
        "High",
        "Low",
        "Close",
        "Volume",
        "bid",
        "ask",
        "Buy",
        "type2",
        "amount",
      ],
      [
        "2019-07-07 23:00:00",
        "BTCUSD",
        "11423.0",
        "11482.72",
        "11423.0",
        "11475.07",
        "32.99655899",
        "6",
        "0",
        "3",
        "exchange limit",
        "5",
      ],
      [
        "2019-07-07 22:00:00",
        "BTCUSD",
        "11526.25",
        "11572.74",
        "11333.59",
        "11423.0",
        "48.9377301868",
        "6",
        "0",
        "9",
        "exchange limit",
        "5",
      ],
      [
        "2019-07-07 21:00:00",
        "BTCUSD",
        "11515.8",
        "11562.65",
        "11478.2",
        "11526.25",
        "25.3239076786",
        "6",
        "0",
        "9",
        "exchange limit",
        "5",
      ],
      [
        "2019-07-07 20:00:00",
        "BTCUSD",
        "11547.98",
        "11624.88",
        "11423.94",
        "11515.8",
        "63.2119724403",
        "6",
        "0",
        "9",
        "exchange limit",
        "5",
      ],
      [
        "2019-07-07 19:00:00",
        "BTCUSD",
        "11470.47",
        "11610.0",
        "11432.32",
        "11547.98",
        "67.915214697",
        "6",
        "0",
        "9",
        "exchange limit",
        "5",
      ],
      [
        "2019-07-07 18:10:00",
        "BTCUSD",
        "11502.04",
        "11525.0",
        "11426.74",
        "11470.47",
        "31.1094771869",
        "6",
        "0",
        "9",
        "exchange limit",
        "5",
      ],
      [
        "2019-07-07 17:20:00",
        "BBBBTCUSD",
        "11201.06",
        "11566.23",
        "11211.56",
        "11503.4",
        "121.5246740453",
        "5",
        "0",
        "9",
        "exchange limit",
        "5",
      ],
      [
        "2019-07-07 16:00:00",
        "BTCUSD",
        "11254.97",
        "11254.97",
        "11135.01",
        "11200.6",
        "23.5194946648",
        "6",
        "0",
        "9",
        "exchange limit",
        "5",
      ],
      [
        "2019-07-07 15:00:00",
        "BTCUSD",
        "11358.05",
        "11408.02",
        "11189.0",
        "11254.97",
        "64.0821938629",
        "6",
        "1",
        "9",
        "exchange limit",
        "5",
      ],
      [
        "2019-07-07 14:00:00",
        "BTCUSD",
        "11383.54",
        "11428.95",
        "11358.05",
        "11358.05",
        "8.2622672695",
        "6",
        "0",
        "9",
        "exchange limit",
        "5",
      ],
    ];

    return TestData;
  };
}
