export enum CustomerType {
  VIP,
  REGULAR,
  GUEST,
}

export type Customer = {
  id: number;
  name: string;
  type: CustomerType;
};
