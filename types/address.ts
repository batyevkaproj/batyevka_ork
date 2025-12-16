export type Street = {
  id: number;
  name: string;
};

export type House = {
  id: number;
  number: string;
  streetId?: number;
  isActive?: boolean;
};
