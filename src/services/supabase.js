import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zbkmswrabygspfhtwloq.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpia21zd3JhYnlnc3BmaHR3bG9xIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczODMxMzUzNSwiZXhwIjoyMDUzODg5NTM1fQ.86gPvwpMBBsnCKQjjYEDWXSIiyHlJ1kYYCb2eEVSOsQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;