import { revalidatePath } from "next/cache";
import { PostTask } from "./tasks";

 
export async function createATask(formData) {
  'use server'
  
// const title = formData.get('title');
// const description = formData.get('description');
// const priority = formData.get('priority');

const rawData = Object.fromEntries(formData.entries());

  console.log('Adding A Task With From Data', rawData);
 const res = await PostTask(rawData)
 if(res.success){
    revalidatePath('/task')
 }
 return res;
}
 
