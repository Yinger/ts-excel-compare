(this["webpackJsonpts-excel-compare"]=this["webpackJsonpts-excel-compare"]||[]).push([[0],{287:function(e,t){},404:function(e,t,n){e.exports=n(591)},409:function(e,t,n){},411:function(e,t,n){},415:function(e,t){},416:function(e,t){},419:function(e,t){},421:function(e,t){},432:function(e,t){},434:function(e,t){},460:function(e,t){},462:function(e,t){},463:function(e,t){},469:function(e,t){},471:function(e,t){},489:function(e,t){},491:function(e,t){},503:function(e,t){},506:function(e,t){},512:function(e,t){},514:function(e,t){},591:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(82),l=n.n(i),o=(n(409),n(104)),c=n(593),s=n(595),u=n(596),h=(n(410),n(411),n(220)),f=n(232),m=n.n(f),d=function e(){Object(h.a)(this,e),this.getSheet=function(e,t,n){return new Promise((function(a,r){var i=e.Sheets[t],l={items:m.a.utils.sheet_to_json(i,{header:1})};return a(l),n(null,l)}))},this.convertFileToExcel=function(e,t){return new Promise((function(n,a){var r=new FileReader,i=!!r.readAsBinaryString;r.onload=function(e){var a,r=null===e||void 0===e||null===(a=e.target)||void 0===a?void 0:a.result,l=m.a.read(r,{type:i?"binary":"array"}),o=l.SheetNames[0],c=l.Sheets[o],s={items:m.a.utils.sheet_to_json(c,{header:1}),sheets:l.SheetNames,workbook:l};return n(s),t(null,s)},e&&i?r.readAsBinaryString(e):r.readAsArrayBuffer(e)}))}};d.SheetJSFT=function(){return["xlsx"].map((function(e){return"."+e})).join(",")},d.BlankData=function(e,t){return new Array(e).fill("").map((function(){return new Array(t).fill("")}))};var g=n(288),S=n(171),b=n(594),p=(n(381),function(e){return r.a.createElement(b.a.Group,{compact:!0,style:{marginRight:10,marginTop:-15}},r.a.createElement("input",{name:"file-upload",style:{width:"50%"},type:"file",accept:d.SheetJSFT(),"aria-label":"Select original file",onChange:function(t){return e.onFileSelectChange(t)}}),r.a.createElement(c.a,{style:{width:"40%"},value:e.sheetname,onChange:function(t){return e.onSheetSelectChange(t)}},e.sheetlist))});p.defaultProps={sheetname:"Sheet1",sheetlist:null};var v=p,w=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"left",style:{padding:10}},r.a.createElement("h1",{style:{marginLeft:3}},"<\u5143\u30fboriginal>"),r.a.createElement(v,{sheetname:e.sheetname,sheetlist:e.sheetlist,onFileSelectChange:function(t){return e.onFileSelectChange(t)},onSheetSelectChange:function(t){return e.onSheetSelectChange(t)}}),r.a.createElement(S.a,{ref:e.hotTableComponentLeft,data:e.sheetdata,style:{width:"100%"},settings:{colHeaders:!0,rowHeaders:!0,height:305,minRows:5,minCols:5,colWidth:100,licenseKey:"non-commercial-and-evaluation",id:"table-left"},stretchH:"all"})))},y=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"right",style:{padding:10}},r.a.createElement("h1",{style:{marginLeft:3}},"<\u5148\u30fbmodified>"),r.a.createElement(v,{sheetname:e.sheetname,sheetlist:e.sheetlist,onFileSelectChange:function(t){return e.onFileSelectChange(t)},onSheetSelectChange:function(t){return e.onSheetSelectChange(t)}}),r.a.createElement(S.a,{ref:e.hotTableComponentRight,data:e.sheetdata,style:{width:"100%"},settings:{colHeaders:!0,rowHeaders:!0,height:305,minRows:5,minCols:5,colWidth:100,licenseKey:"non-commercial-and-evaluation",id:"table-right"},stretchH:"all"})))},E=n(283),C=function(e){return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(E.a,{ref:r.a.createRef(),id:"btn-diff",type:"primary",style:{marginTop:150},onClick:function(t){return e.onDiffBtnClick(t)}},e.btntext))},O=n(397),j=function(){function e(t,n){Object(h.a)(this,e),this.value=void 0,this.instance=void 0,this.value=t,this.instance=n}return Object(O.a)(e,[{key:"getCell",value:function(e,t){var n=this.instance.getDataAtCell(t,e);return null===n?n:void 0===n?"":""+n}},{key:"getValue",value:function(){return this.value}}]),e}(),k=n(288);function T(e,t,n,a,r,i,l){var o=new j(i,e),c=new k.coopy.SimpleView,s=k.coopy.DiffRender.renderCell(o,c,a,n),u=s.category,h=s.pretty_value;return""!==u&&(t.className=u),t.innerHTML=h,h}var F=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{style:{fontSize:24}},"\u6bd4\u8f03\u7d50\u679c"),r.a.createElement(S.a,{ref:e.hotTableComponentDiffResult,data:[[""]],style:{width:"100%",padding:15},id:"tableresult",settings:{minRows:10,minCols:10,minSpareCols:0,minSpareRows:0,colHeaders:!1,contextMenu:!1,rowHeaders:!1,readOnly:!0,renderAllRows:!0,licenseKey:"non-commercial-and-evaluation"},renderer:T,className:"diffhandsontable",stretchH:"all"}))};var R=function(){var e=new d,t=Object(a.useState)("Sheet1"),n=Object(o.a)(t,2),i=n[0],l=n[1],h=Object(a.useState)(null),f=Object(o.a)(h,2),m=f[0],S=f[1],b=Object(a.useState)(r.a.createRef()),p=Object(o.a)(b,1)[0],v=Object(a.useState)(JSON.parse(JSON.stringify(d.BlankData(12,10)))),E=Object(o.a)(v,2),O=E[0],j=E[1],k=Object(a.useState)(),T=Object(o.a)(k,2),R=T[0],x=T[1],D=Object(a.useState)("Sheet1"),_=Object(o.a)(D,2),A=_[0],N=_[1],B=Object(a.useState)(null),H=Object(o.a)(B,2),J=H[0],L=H[1],V=Object(a.useState)(r.a.createRef()),W=Object(o.a)(V,1)[0],K=Object(a.useState)(JSON.parse(JSON.stringify(d.BlankData(12,10)))),M=Object(o.a)(K,2),P=M[0],I=M[1],z=Object(a.useState)(),G=Object(o.a)(z,2),$=G[0],q=G[1],Q=Object(a.useState)(">> Diff <<"),U=Object(o.a)(Q,1)[0],X=Object(a.useState)(r.a.createRef()),Y=Object(o.a)(X,1)[0],Z=function(t,n){if(t.persist(),t.target.files){var a=t.target.files[0];a&&e.convertFileToExcel(a,(function(e,t){if(e)console.log(e);else{for(var a=[],i=0;i<t.sheets.length;i++)a.push(r.a.createElement(c.a.Option,{key:t.sheets[i],value:t.sheets[i]},t.sheets[i]));"left"===n?(l(t.sheets[0]),S(a),j(t.items),x(t.workbook)):(N(t.sheets[0]),L(a),I(t.items),q(t.workbook))}}))}},ee=function(t,n){var a=null;void 0!==(a="left"===n?R:$)&&null!==a&&void 0!==t&&e.getSheet(a,t,(function(e,a){e?console.log(e):"left"===n?(l(t),j(a.items)):(N(t),I(a.items))}))},te=function(e){e.preventDefault(),function(e,t,n){var a=n.current.hotInstance,r=[],i=new g.TableView(e),l=new g.TableView(t);i.trim(),l.trim();var o=g.compareTables(i,l).align(),c=new g.TableView([]),s=new g.CompareFlags;s.show_unchanged=!1,s.always_show_header=!0,s.always_show_order=!0,s.never_show_order=!1,s.unchanged_context=!0,new g.TableDiff(o,s).hilite(c),0!==c.height&&(r=c.data,a.loadData(r))}(O,P,Y)};return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null,r.a.createElement(u.a,{span:11},r.a.createElement(w,{sheetname:i,sheetlist:m,onFileSelectChange:function(e){return Z(e,"left")},onSheetSelectChange:function(e){return ee(e,"left")},hotTableComponentLeft:p,sheetdata:O})),r.a.createElement(u.a,{span:2},r.a.createElement(C,{btntext:U,onDiffBtnClick:function(e){te(e)}})),r.a.createElement(u.a,{span:11},r.a.createElement(y,{sheetname:A,sheetlist:J,onFileSelectChange:function(e){return Z(e,"right")},onSheetSelectChange:function(e){return ee(e,"right")},hotTableComponentRight:W,sheetdata:P})),r.a.createElement(u.a,{span:24,style:{textAlign:"center"}},r.a.createElement(F,{hotTableComponentDiffResult:Y}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[404,1,2]]]);
//# sourceMappingURL=main.20ca8a39.chunk.js.map