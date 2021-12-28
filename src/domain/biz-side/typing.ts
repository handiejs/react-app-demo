enum BusinessStatus {
  Online = 'online',
  Offline = 'offline',
}

interface BusinessSide {
  id: string;
  name: string;
  interfaceCategory: any[];
  recommendedList: any[];
  recommendedStrategies: any[];
  random: number;
  status: BusinessStatus;
}

export { BusinessSide };
