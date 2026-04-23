import { revalidatePath } from "next/cache";
import { PostTask } from "./tasks";
import { redirect } from "next/navigation";


 
export async function createATask(formData) {
  'use server'
  
const rawData = Object.fromEntries(formData.entries());

  console.log('Adding A Task With From Data', rawData);
 const res = await PostTask(rawData)
 if(res.success){
    revalidatePath('/task')
    
 }
 return res;
}
 
export async function addNewTask(formData) {
  'use server'

const rawData = Object.fromEntries(formData.entries());

  console.log('Adding A Task With From Data', rawData);
 const res = await PostTask(rawData)
 if(res.success){
    revalidatePath('/task')
      redirect('/task'); 
 }
 return res;
}