import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xxcchwyqbdnvafcosjnf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4Y2Nod3lxYmRudmFmY29zam5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxNTk4NjksImV4cCI6MjA0NTczNTg2OX0.6dUMT4LcHwvu-OrwKyGQY7ZsoP__hRshKlkIErdbVLQ';

export const supabase = createClient(supabaseUrl, supabaseKey);