export async function greet(name: string): Promise<string> {
  return `Hello, ${name}!`;
}

export async function ap21CustomerCreate(params:any): Promise<any> {
  return {...params};
}

export async function ap21OrderExport(order:any, customer: any): Promise<any> {
  return {...order, customer};
}

export async function sfccOrderImport(order: any): Promise<any> {
  return {...order};
}

export async function fetchSfccOrders(): Promise<Array<any>> {
// fetch orders
  const orders =  [
    {customer: {name: 'suresh'}, id: 1, product: 1 , items: 2},
    {customer: {name: 'ramesh'}, id: 2, product: 2 , items: 2},
    {customer: {name: 'barath'}, id: 3, product: 3 , items: 2},
  ];
  return orders;
  
}
