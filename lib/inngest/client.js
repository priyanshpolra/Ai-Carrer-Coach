import { Inngest } from "inngest";


export const inngest = new Inngest({
    id : "polarai", 
    name:"polarai",
    credentials:{
        gemini:{
            apiKey:process.env.GEMINI_API_KEY
        }
    }
})