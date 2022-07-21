import React from "react";

import { Grid, Container } from "@material-ui/core";

import { PAGE_TITLE } from "src/constant";

import Page from "src/components/Page";
import OverviewCard from "./components/OverviewCard";

function Overview() {
  return (
    <Page title={`${PAGE_TITLE} | OVERVIEW`}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <OverviewCard />
          <OverviewCard />
          <OverviewCard />
          <OverviewCard />

          <OverviewCard />
          <OverviewCard />
          <OverviewCard />
          <OverviewCard />

          <OverviewCard />
          <OverviewCard />
          <OverviewCard />
          <OverviewCard />
        </Grid>
      </Container>
    </Page>
  );
}

export default Overview;
