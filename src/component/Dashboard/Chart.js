import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Chart from "react-apexcharts";
import moment from "moment";

export default function DashboardCharts() {
  const [values, setValues] = useState({
    series: [
      {
        name: "Transactions",
        data: [],
      },
    ],
  });

  const options = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      type: "datetime",
    },
    stroke: {
      curve: "smooth",
    },
  };

  // const { series } = values;

  const transactions = useSelector((state) => state.transactions.transaction);

  useEffect(() => {
    const tranx = transactions === null ? "" : transactions;
    console.log(tranx)
    if (!transactions) return

    const series = transactions.map(t => {
      return {
        name: "Transactions",
        data: [{ 
          x: t.request.timestamp,
          y: t.request.amount
        }]
      }
    })

    setValues({ series })
  }, [transactions]);

  // const tran = () =>
  //   transactions === null
  //     ? ""
  //     : transactions.map((all) => {
  //         setValues({
  //           series: values.series.map((data) => {
  //             const s = {
  //               name: data.name,
  //               data: [...data.data],
  //             };
  //             s.data.push({
  //               x: all.request.timestamp,
  //               y: all.request.amount,
  //             });
  //             console.log(s.data)
  //             return s;
  //           }),
  //         });
  //       });
  // console.log(values.series);

  // const dataAll = series.map((all) => {
  //   console.log(all);
  // });

  // console.log(values);
  return (
    <>
      {
        values.series.map((all, index) =>
          // console.log(all.data)
        all.data.length === 0 ? (
          <h2 key={index}>PENDING...</h2>
        ) : (
          // <div key={index}>
          //   <Chart
          //     options={options}
          //     series={values.series}
          //     type="line"
          //     width="100%"
          //     height={300}
          //   />
          // </div>
          ""
        )
        )
      }
      <Chart
        options={options}
        series={values.series}
        type="line"
        width="100%"
        height={300}
      />
    </>
  );
}
