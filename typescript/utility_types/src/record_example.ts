interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "contact";

const x: Record<Page, PageInfo> = {
  home: { title: "home" },
  about: { title: "about" },
  contact: { title: "contact" },
};

type ItemID = string;
type AvailabilityTypes = "in_stock" | "sold_out" | "pre_order";

interface Stock {
  availability: AvailabilityTypes;
  amount: number;
}

const store: Record<ItemID, Stock> = {
  item1: { availability: "in_stock", amount: 20 },
  item2: { availability: "sold_out", amount: 0 },
  item3: { availability: "sold_out", amount: 0 },
};

type AdsetID = string;
type CampaignID = string;

interface Adset {
  id: AdsetID;
  campaignId: CampaignID;
  name: string;
}

const adsets: Adset[] = [
  {
    id: "adset_1",
    campaignId: "campaign_1",
    name: "Adset1 (belongs to campaign 1)",
  },
  {
    id: "adset_2",
    campaignId: "campaign_1",
    name: "Adset2 (belongs to campaign 1)",
  },
  {
    id: "adset_3",
    campaignId: "campaign_2",
    name: "Adset3 (belongs to campaign 2)",
  },
];
