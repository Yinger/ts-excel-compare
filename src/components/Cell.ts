class Cell {
  value: string;
  instance: any;

  constructor(value: string, instance: any) {
    this.value = value;
    this.instance = instance;
  }

  getCell(x: number, y: number) {
    let v = this.instance.getDataAtCell(y, x);
    if (v === null) return v;
    else if (v === undefined) return "";
    return "" + v;
  }

  getValue() {
    return this.value;
  }
}

export default Cell;
