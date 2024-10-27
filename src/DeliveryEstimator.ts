// src/DeliveryEstimator.ts

import moment from 'moment';
interface ProviderData {
    provider: string;
    region: string;
}

// Mock function to get provider and region based on pincode
const mockPincodeData: { [key: string]: ProviderData } = {
    "12345": { provider: "A", region: "urban" },
    "67890": { provider: "B", region: "rural" },
    "11111": { provider: "General", region: "suburban" },
  };
  
  const getProviderByPincode = (pincode: string): ProviderData => {
    return mockPincodeData[pincode] || { provider: "General", region: "unknown" };
  };

// Delivery rules for Provider A
const getProviderADeliveryDate = () => {
  const now = moment();
  const cutoff = moment().set({ hour: 17, minute: 0 }); // 5 PM cutoff
  return now.isBefore(cutoff) ? now.format("YYYY-MM-DD") : now.add(1, 'days').format("YYYY-MM-DD");
};

// Delivery rules for Provider B
const getProviderBDeliveryDate = () => {
  const now = moment();
  const cutoff = moment().set({ hour: 9, minute: 0 }); // 9 AM cutoff
  return now.isBefore(cutoff) ? now.format("YYYY-MM-DD") : now.add(1, 'days').format("YYYY-MM-DD");
};

// Delivery rules for General Partners
const getGeneralPartnerDeliveryDate = (region: string) => {
  const now = moment();
  const daysToAdd = region === "urban" ? 2 : region === "rural" ? 5 : 3;
  return now.add(daysToAdd, 'days').format("YYYY-MM-DD");
};

// Main function to get estimated delivery date
export const getEstimatedDeliveryDate = (pincode: string) => {
  const { provider, region } = getProviderByPincode(pincode);

  switch (provider) {
    case "A":
      return getProviderADeliveryDate();
    case "B":
      return getProviderBDeliveryDate();
    default:
      return getGeneralPartnerDeliveryDate(region);
  }
};
