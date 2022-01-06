interface RecommendedItem {
  item: string;
  paramName?: string;
}

interface RecommendedStrategy {}

enum BusinessStatus {
  Fresh = '0',
  Online = '1',
  Offline = '2',
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
