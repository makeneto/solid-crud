import { createClient } from "@supabase/supabase-js"

export const supabaseUrl = "https://mylcsnmrcbdrphqobkdv.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15bGNzbm1yY2JkcnBocW9ia2R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5NTU1NjgsImV4cCI6MjA1MjUzMTU2OH0.5xhLUigdpvT_nvjqWi4-218rV1XXGjJhfz_eWCrZ48c"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase