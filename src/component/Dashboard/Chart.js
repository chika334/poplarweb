import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Chart from "react-apexcharts";

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

  const transactions = useSelector((state) => state.transactions.transaction);

  useEffect(() => {
    const tranx = transactions === null ? "" : transactions;
    // console.log(tranx)
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

  return (
    <>
      {
        values.series.map((all, index) =>
        all.data.length === 0 ? (
          <h2 key={index}>PENDING...</h2>
        ) : (
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
