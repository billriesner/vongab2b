const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://uqtzgfntdgyrouzxlcyg.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxdHpnZm50ZGd5cm91enhsY3lnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTc3MjIyMywiZXhwIjoyMDc1MzQ0MjIzfQ.ft5NMc8IV2YXl-cglt27wKvb7tQ7e_QqUawacXmtezY';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function setupDatabase() {
  try {
    console.log('Setting up database...');
    
    // Read the SQL file
    const fs = require('fs');
    const sql = fs.readFileSync('./supabase-setup.sql', 'utf8');
    
    // Execute the SQL
    const { data, error } = await supabase.rpc('exec_sql', { sql });
    
    if (error) {
      console.error('Error setting up database:', error);
      return;
    }
    
    console.log('Database setup completed successfully!');
    console.log('Data:', data);
    
  } catch (error) {
    console.error('Exception:', error);
  }
}

setupDatabase();
