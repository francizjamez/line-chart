import { Box, Text } from "@airtable/blocks/ui";
import React from "react";
import { Line } from "react-chartjs-2";
import License from "./License";

const data = {
  labels: ["Oct 1", "Oct 2", "Oct 3", "Oct 2"],
  datasets: [
    {
      backgroundColor: ["#6078FF", "#6078FF", "#6078FF", "#6078FF"],
      borderColor: ["#6078FF"],
      data: ["123.0", "321.0", "212.0", "333.0"],
      pointRadius: 0,
      lineTension: 0.2,
      borderWidth: 3,
      fill: false,
    },
  ],
};

const Showcase = () => {
  return (
    <Box display="flex" flexDirection="column">
      <License />
      <Text marginY={3} size="xlarge" fontWeight={600} textAlign="center">
        Sample Line chart
      </Text>
      <Box flex={1} padding={3}>
        <Line
          responsive={true}
          data={data}
          options={{
            hover: {
              mode: "nearest",
              intersect: false,
            },
            maintainAspectRatio: false,
            bezierCurve: false,
            legend: { display: false },
            scales: {
              yAxes: [
                {
                  gridLines: { display: false },
                  ticks: {
                    fontColor: "#CCC",
                    maxTicksLimit: 5,
                    callback: function (value) {
                      return value.toLocaleString("en-US", {
                        // style: "currency",
                        // currency: "USD",
                        compactDisplay: "short",
                        notation: "compact",
                        minimumSignificantDigits: 3,
                        maximumSignificantDigits: 3,
                      });
                    },
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: { display: false },
                  ticks: {
                    fontColor: "#CCC",
                  },
                },
              ],
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Showcase;
