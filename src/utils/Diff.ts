const daff = require("daff");

export const diff = (left: [][], right: [][], ref: React.RefObject<any>) => {
  var instance = ref.current.hotInstance;
  var result = [];
  let tableLeft = new daff.TableView(left);
  let tableRight = new daff.TableView(right);

  tableLeft.trim();
  tableRight.trim();

  var ct = daff.compareTables(tableLeft, tableRight);

  let align = ct.align();
  let output = new daff.TableView([]);
  let flags = new daff.CompareFlags();
  flags.show_unchanged = false;
  flags.always_show_header = true;
  flags.always_show_order = true;
  flags.never_show_order = false;
  flags.unchanged_context = true;

  var td = new daff.TableDiff(align, flags);
  td.hilite(output);

  if (output.height !== 0) {
    result = output.data;
    instance.loadData(result);
  }
};
