import{A as o}from"./main-7bc9a818.js";const a=()=>import("./c.2a7cd87a.js"),i=(i,l,m)=>new Promise((n=>{const r=l.cancel,c=l.confirm;o(i,"show-dialog",{dialogTag:"dialog-box",dialogImport:a,dialogParams:{...l,...m,cancel:()=>{n(!(null==m||!m.prompt)&&null),r&&r()},confirm:o=>{n(null==m||!m.prompt||o),c&&c(o)}}})})),l=(o,a)=>i(o,a),m=(o,a)=>i(o,a,{confirmation:!0}),n=(o,a)=>i(o,a,{prompt:!0});export{l as a,n as b,m as s};