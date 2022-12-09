import React from "react";
import "./TableThanh.css";

type TableThanhProps = {};

const example = [
  {
    number: "1",
    description: "thanh",
    norm: "50505",
    technicalPos: "0010",
    lcLine: {
      line1: "A",
      line2: "B",
      line3: "C",
      line4: "D",
      line5: "E",
      line6: "F",
      line7: "H",
    },
  },

  {
    number: "2",
    description: "thanh van vi",
    norm: "04040",
    technicalPos: "0010",
    lcLine: {
      line1: "1",
      line2: "2",
      line3: "3",
      line4: "4",
      line5: "5",
      line6: "6",
      line7: "7",
    },
  },

  {
    number: "3",
    description: "van vi thanh",
    norm: "0606",
    technicalPos: "0010",
    lcLine: {
      line1: "Q",
      line2: "W",
      line3: "E",
      line4: "R",
      line5: "T",
      line6: "Y",
      line7: "U",
    },
  },
];

const TableThanh: React.FC<TableThanhProps> = (props) => {
  const renderLine = (lines: any) => {
    let lineValue = [];
    for (const line in lines) {
      lineValue.push(lines[line]);
    }
    return lineValue.map((line, index) => {
      return (
        <div className="c-flex-10 row-item-mr" key={index}>
          {line}
        </div>
      );
    });
  };

  return (
    <>
      <div className="table">
        <div className="row-header">
          <label className="c-flex-10 fill-color">lcLine</label>
          <label className="c-flex-10 fill-color"></label>
          <label className="c-flex-10 fill-color"></label>
          <label className="c-flex-10 fill-color"></label>
          <label className="c-flex-10 fill-color"></label>
          <label className="c-flex-10 fill-color"></label>
          <label className="c-flex-10 fill-color"></label>
          <label className="c-flex-10 fill-color"></label>
        </div>
        {/* loop here */}
        {/* <div className="row-table">
          <div className="height row flex-wrap-row">
            <div className="c-flex-10 row-item-mr">10</div>
            <div className="c-flex-10 row-item-mr">10</div>
            <div className="c-flex-10 row-item-mr">10</div>
            <div className="c-flex-10 row-item-mr">10</div>
            <div className="c-flex-10 row-item-mr">10</div>
            <div className="c-flex-10 row-item-mr">10</div>
            <div className="c-flex-10 row-item-mr">10</div>
            <div className="c-flex-10 row-item-mr">10</div>
          </div>
        </div> */}
        {example.map((item) => {
          return (
            <>
              <div className="row-table" key={item.number}>
                <div className="height row flex-wrap-row">
                  {renderLine(item.lcLine)}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default TableThanh;
