import React from 'react'
import jsPDF from "jspdf";
import "jspdf-autotable";


  function getDate(postdate) {
    let date = new Date(postdate);
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let postDate = date.getFullYear() + "-" + month + "-" + day;
    return postDate;
  }
  export function generatePDF() {
    let document = new jsPDF();
    const Column = ["Criteria", "Marks"];

    console.log(name, date);
    let Rows = [];
    criterias.map((criteria) => {
      const Criteria = [criteria.name, criteria.value];
      Rows.push(Criteria);
    });
    Rows.push(["Total", getTotal]);
    document.text(name, 60, 15);
    document.autoTable(Column, Rows, { startY: 40 });
    document.text(`Date :${getDate(date)}`, 150, 38);
    document.save(name);
  };

 
