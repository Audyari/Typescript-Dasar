export enum CustomerType {
  VIP = "VIP",
  REGULAR = "REGULAR",
  GUEST = "GUEST",
}

export type Customer = {
  id: number;
  name: string;
  type: CustomerType;
};
