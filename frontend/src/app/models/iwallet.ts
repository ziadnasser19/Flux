export interface IWallet {
  id: string;
  bankName: string;
  balance: number;
  currency: string;
  cardNumber: string; // Last 4 digits or masked
  expiryDate: string;
  theme: 'type1' | 'type2'; // For the gradient colors (Purple or Black)
  status: 'Active' | 'Inactive';
}
