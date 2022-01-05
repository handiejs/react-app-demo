enum ItemStatus {
  Fresh = '0',
  Online = '1',
  Offline = '2',
}

interface RecommendedItem {
  id: string;
  item: string;
  itemName: string;
  itemType: string;
  summary: string;
  status: ItemStatus;
}

export { ItemStatus, RecommendedItem };
