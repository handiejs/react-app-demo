interface RecommendedItem {
  item: string;
  paramName?: string;
}

interface RecommendedStrategy {}

enum BusinessStatus {
  Online = '1',
  Offline = '0',
}

interface BusinessSide {
  id: string;
  bizId: string;
  token: string;
  interfaceName: string;
  itemList: RecommendedItem[];
  strategyList: RecommendedStrategy[];
  shuffleCount: number;
  status: BusinessStatus;
}

export { RecommendedItem, RecommendedStrategy, BusinessStatus, BusinessSide };
