-- Add status column to contact_submissions for read/unread tracking
ALTER TABLE public.contact_submissions 
ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'read'));