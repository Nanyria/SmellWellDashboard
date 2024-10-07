import type { RegisteredComponent } from "@builder.io/sdk-angular";
import { AppComponent } from "./app.component";
import { BuilderPage } from "./components/builder-page.component";
import { Counter } from "./counter.component";
import { KeywordRanking } from "./components/keyword-sales-dashboard/KeywordRanking.component";
import { KeywordSalesDashboardComponent } from "./components/keyword-sales-dashboard/KeywordSalesDashboard.component";
import { OrganicRanking } from "./components/keyword-sales-dashboard/OrganicRanking.component";
import { SalesOverview } from "./components/keyword-sales-dashboard/SalesOverview.component";
import { TargetVsReality } from "./components/keyword-sales-dashboard/TargetVsReality.component";
import { TopProducts } from "./components/keyword-sales-dashboard/TopProducts.component";

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: AppComponent,
    name: "AppComponent",
  },
  {
    component: BuilderPage,
    name: "BuilderPage",
    inputs: [
      {
        name: "model",
        type: "string",
      },
    ],
  },
  {
    component: Counter,
    name: "Counter",
    inputs: [
      {
        name: "initialCount",
        type: "number",
      },
    ],
  },
  {
    component: KeywordRanking,
    name: "KeywordRanking",
  },
  {
    component: KeywordSalesDashboardComponent,
    name: "KeywordSalesDashboardComponent",
  },
  {
    component: OrganicRanking,
    name: "OrganicRanking",
  },
  {
    component: SalesOverview,
    name: "SalesOverview",
  },
  {
    component: TargetVsReality,
    name: "TargetVsReality",
  },
  {
    component: TopProducts,
    name: "TopProducts",
  },
];
