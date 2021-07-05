export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  selected?: boolean;
  readyToEdit?: boolean;
};
