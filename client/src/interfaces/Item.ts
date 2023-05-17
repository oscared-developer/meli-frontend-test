export interface Item {
  id: string;
  thumbnail: string;
  shipping: {
    free_shipping: boolean;
  };
  price: string;
  title: string;
  address: {
    state_name: string;
  };
}
