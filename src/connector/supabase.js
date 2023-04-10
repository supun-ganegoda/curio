import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yhyosqjdghnuncevyqkx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InloeW9zcWpkZ2hudW5jZXZ5cWt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA5NzQyNzEsImV4cCI6MTk5NjU1MDI3MX0.SCso3dtG6kY3l-gcLHT4oFGn-l2uJ-PSEG84NxIF-gE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
