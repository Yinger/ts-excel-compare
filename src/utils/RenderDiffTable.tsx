import Handsontable from "handsontable";
import Cell from "../components/Cell";
const daff = require("daff");

export function renderDiff(
  instance: any,
  td: HTMLTableCellElement,
  row: number,
  col: number,
  prop: string | number,
  value: Handsontable.CellValue,
  cellProperties: Handsontable.CellProperties
) {
  //   var tt = {};
  //   tt.getCell = function (x, y) {
  //     let v = instance.getDataAtCell(y, x);
  //     if (v == null) return v;
  //     return "" + v;
  //   };
  var tt = new Cell(value);
  var view = new daff.coopy.SimpleView();
  var cell = daff.coopy.DiffRender.renderCell(tt, view, col, row);
  var className = cell.category;
  var value2 = cell.pretty_value;

  //   Handsontable.renderers.TextRenderer.apply(this, arguments);
  if (className !== "") {
    td.className = className;
  }

  td.innerHTML = value2;
  return value2;
}

// const tt ={
//     getCell:function;
// };

// class tt {

//   getCell = (cell: any) => {
//     let cellValue = null;
//     if (cell) {
//       if (typeof cell.getValue === "function") {
//         cellValue = cell.getValue();
//       } else if (isString(cell)) {
//         cellValue = cell;
//       }
//     }

//     if (cellValue !== null) cellValue = "" + cellValue;

//     return cellValue;
//   };
// }

// interface tt{
//     getCell: any ;
// }
// tt.getCell = ()=>{

// }

// const isString = (value: any) => {
//   return typeof value === "string" || value instanceof String;
// };

// const getCellValue = (cell: any) => {
//   let cellValue = null;
//   if (cell) {
//     if (typeof cell.getValue === "function") {
//       cellValue = cell.getValue();
//     } else if (isString(cell)) {
//       cellValue = cell;
//     }
//   }

//   if (cellValue !== null) cellValue = "" + cellValue;

//   return cellValue;
// };
