-- إضافة عمود الصور إلى جدول apps في PostgreSQL.
-- text[] ويقبل NULL افتراضيًا (لا NOT NULL)، فالتطبيقات الحالية تبقى سليمة.
ALTER TABLE apps ADD COLUMN IF NOT EXISTS screenshots text[] DEFAULT NULL;

-- مثال تحديث:
-- UPDATE apps SET screenshots = ARRAY['apps/com.mediahub.app/shots/1.png','apps/com.mediahub.app/shots/2.png'] WHERE id = 30;
-- مثال إفراغ:
-- UPDATE apps SET screenshots = NULL WHERE id = 30;
