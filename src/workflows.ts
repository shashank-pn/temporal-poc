import { proxyActivities } from '@temporalio/workflow';
// Only import the activity types
import type * as activities from './activities';

const { greet, fetchSfccOrders, sfccOrderImport, ap21CustomerCreate, ap21OrderExport } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});

/** A workflow that simply calls an activity */
export async function example(name: string): Promise<string> {
  return await greet(name);
}



export async function sureshWorkflow(params:any): Promise<any> {
  return {data: 'suresh_was_here' , ...params};
}

export async function parentWorkflow(): Promise<any> {

  const orders = await fetchSfccOrders();
  const chunkSize = 10;

  for (let i = 0; i < orders.length; i += chunkSize) {
      const chunk = orders.slice(i, i + chunkSize);

      await Promise.all(chunk.map(async order=>{
          const zOrder = await sfccOrderImport(order);
          const ap21Customer = await ap21CustomerCreate(zOrder.customer);
          await ap21OrderExport(zOrder, ap21Customer);
      }))
  }

}