import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ejyfiphhngdrtimvneir.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqeWZpcGhobmdkcnRpbXZuZWlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0MDczNTEsImV4cCI6MjAxNzk4MzM1MX0.duzAMbhh25CxbkBpwM2NWwDOqoXU75Uaq-23RjUT5c4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
