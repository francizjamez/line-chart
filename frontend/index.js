import {
  initializeBlock,
  useBase,
  useRecords,
  useGlobalConfig,
  Box,
} from "@airtable/blocks/ui";
import React, { useEffect } from "react";
import GlobalConfigKeys from "./global.config";
import Settings from "./components/Settings";

import BarChart from "./components/BarChart";
import Breakdown from "./components/Breakdown";
import MRR from "./components/MRR";
import LineChart from "./components/Linechart";
import License from "./components/License";

import Showcase from "./components/Showcase";

function SimpleChartApp() {
  const base = useBase();
  const globalConfig = useGlobalConfig();

  const tableId = globalConfig.get(GlobalConfigKeys.TABLE_ID);
  const table = base.getTableByIdIfExists(tableId);

  if (!localStorage.getItem("license")) {
    return <Showcase />;
  }

  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      display="flex"
      flexDirection="column"
      backgroundColor="rgba(96, 120, 255, 0.1)"
      padding="10px"
      height="max-content"
    >
      <Settings table={table} />
      {/* <License /> */}
      <Box display="flex" flexWrap="wrap">
        <LineChart table={table} />
      </Box>
    </Box>
  );
}

async function gumroadRequest(url) {
  const res = await fetch(
    `https://api.gumroad.com/v2/${url}?access_token=tZNtPHEmS44923Jg_J6c8Ep0Gi1R_-f5-cmCzHFFBoE`,
    {
      method: "GET",
    }
  );
  return await res.json();
}

initializeBlock(() => <SimpleChartApp />);
