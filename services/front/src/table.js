import React, { useState, useEffect } from "react";
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import axios from "axios";
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import CalenderFilter from "./Components/Calender-filter";

const tableHead = {
  identify: "Tipo",
  definition: "Identificação",
  version: "Versão",
  description: "Campaign Descrição",
  ip: "IP",
  eventAt: "Data",
};

const Table = () => {

  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  const [calenderClick, setcalenderClick] = React.useState(false);

  function calenderOnClick(e) {
    setcalenderClick(!calenderClick);
  }

  const [currentPage, setCurrentPage] = React.useState(1);
  const [value, setValue] = React.useState("");
  React.useEffect(() => {
    if (!value) {
      updatePage(1);
    } else {
      const query = value === "_" ? "" : value
      searchData.current(query);
      if (value === "_")
        setValue("")
    }
  }, [value]);

  const updatePage = p => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(cloneDeep(allData.slice(from, to)));
  };

  const [allData, setAllData] = useState([]);

  const countPerPage = 10;

  const [collection, setCollection] = React.useState(
    cloneDeep(allData.slice(0, countPerPage))
  );
  const searchData = React.useRef(
    throttle(async (val) => {
      const query = val.toLowerCase();
      setCurrentPage(1);
      const result = await axios("http://localhost:4000/api/logs");
      const allData2 = result.data.items;
      const source = allData2.filter((s) => s['definition'].toLowerCase().includes(query));
      const data = cloneDeep(
        source
          .slice(0, countPerPage)
      );
      setAllData(source);
      setCollection(data);
    }, 400)
  );

  const tableRows = rowData => {
    const { key, index } = rowData;
    const tableCell = Object.keys(tableHead);
    const columnData = tableCell.map((keyD, i) => {
      return <td key={i}>{key[keyD]}</td>;
    });

    return <tr key={index}>{columnData}</tr>;
  };

  const tableData = () => {
    return collection.map((key, index) => tableRows({ key, index }));
  };

  const headRow = () => {
    return Object.values(tableHead).map((title, index) => (
      <td key={index}>{title}</td>
    ));
  };


  React.useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:4000/api/logs");
      setAllData(result.data.items);
      setTimeout(() => {
        setValue("_")
      }, 1600);

    })();
  }, []);

  const handleSelect = async (date) => {
    const result = await axios("http://localhost:4000/api/logs");
    const allData2 = result.data.items;
    let filtered = allData2.filter((data) => {
      let dataDate = new Date(data["eventAt"]);
      return (dataDate >= date.selection.startDate &&
        dataDate <= date.selection.endDate);
    })
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    setAllData(filtered);
    console.log(filtered.length);
    setCurrentPage(1);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  return (
    <>
      <div className="dflex">

        <div className="search ">
          <input
            placeholder="Pesquisar por identificação..."
            value={value}
            onChange={e => setValue(e.target.value)}
          />

        </div>
        <div >
          <CalenderFilter calenderOnClick={calenderOnClick} />
          {calenderClick && (
            <div className="Datepicker">
              <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
              />
            </div>
          )}
        </div>
      </div>
      <table>
        <thead>
          <tr>{headRow()}</tr>
        </thead>
        <tbody className="trhover">{tableData()}</tbody>
      </table>
      <Pagination
        pageSize={countPerPage}
        onChange={updatePage}
        current={currentPage}
        total={allData.length}
      />
    </>
  );
};
export default Table;
