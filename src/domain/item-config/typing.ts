enum ItemStatus {
  Online = '1',
  Offline = '0',
}

interface RecommendedItem {
  id: string;
  item: string;
  itemName: string;
  itemType: string;
  summary: string;
  status: ItemStatus;
}

export { RecommendedItem };
