// import { isString } from "../utils/helper";

class Cell {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  getCell() {
    if (this.value !== null) return "" + this.value;
    else return null;
  }

  getValue() {
    return this.value;
  }
  //   setValue(newValue: string) {
  //     console.log("Cell.setValue", { old: this.value, new: newValue });
  //     this.value = newValue;
  //   }
}

// export const getCellValue = (cell: any) => {
//   let cellValue = "";
//   if (cell) {
//     if (typeof cell.getValue === "function") {
//       cellValue = cell.getValue();
//     } else if (isString(cell)) {
//       cellValue = cell;
//     }
//   }
//   return cellValue;
// };

export default Cell;
