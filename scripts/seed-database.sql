-- Seed database with sample data
-- Run this in your Supabase SQL editor

-- Insert sample users into profiles table
INSERT INTO profiles (id, role, display_name, avatar_url, created_at) VALUES
  (gen_random_uuid(), 'user', 'Anna Schmidt', null, NOW() - INTERVAL '30 days'),
  (gen_random_uuid(), 'premium', 'Michael Weber', null, NOW() - INTERVAL '25 days'),
  (gen_random_uuid(), 'teacher', 'Sarah Müller', null, NOW() - INTERVAL '20 days'),
  (gen_random_uuid(), 'moderator', 'Thomas Fischer', null, NOW() - INTERVAL '15 days'),
  (gen_random_uuid(), 'user', 'Lisa Wagner', null, NOW() - INTERVAL '10 days'),
  (gen_random_uuid(), 'premium', 'Hans Bauer', null, NOW() - INTERVAL '5 days');

-- Insert sample courses into courses table
INSERT INTO courses (id, title, description, level, duration, is_free, created_at, instructor_id) VALUES
  (gen_random_uuid(), 'Deutsch für Anfänger', 'Lernen Sie die Grundlagen der deutschen Sprache', 'Beginner', '8 Wochen', true, NOW() - INTERVAL '20 days', null),
  (gen_random_uuid(), 'Grammatik Grundlagen', 'Verstehen Sie die deutsche Grammatik', 'Intermediate', '6 Wochen', false, NOW() - INTERVAL '15 days', null),
  (gen_random_uuid(), 'Konversation', 'Verbessern Sie Ihre Sprechfähigkeiten', 'Advanced', '4 Wochen', false, NOW() - INTERVAL '10 days', null),
  (gen_random_uuid(), 'Deutsche Kultur', 'Entdecken Sie die deutsche Kultur und Traditionen', 'Beginner', '3 Wochen', true, NOW() - INTERVAL '5 days', null),
  (gen_random_uuid(), 'Geschäftliches Deutsch', 'Deutsch für den Arbeitsplatz', 'Intermediate', '5 Wochen', false, NOW() - INTERVAL '3 days', null);

-- Update the existing admin user to have a display name
UPDATE profiles 
SET display_name = 'System Administrator' 
WHERE role = 'admin' AND display_name IS NULL;
