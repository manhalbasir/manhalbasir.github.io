# موقع منهل (React + Vite)

## التشغيل محليًا
    npm install
    npm run dev

## النشر على GitHub Pages
1. ارفع المشروع إلى مستودع GitHub (الفرع main).
2. Settings → Pages → Source: GitHub Actions.
3. `storageBase` مضبوط على مشروع Supabase الخاص بمنهل (src/data/site.js).

## التعديل
- التطبيقات: `src/data/apps.js` (حقل `shots` يقبل null أو مصفوفة صور).
- الخدمات المنجزة: `src/data/projects.js`.
- روابط السياسات لـ Google Play: `https://USER.github.io/REPO/#/privacy/<id>` مثل `#/privacy/mediahub`.
- راجع حقل `privacy` لكل تطبيق قبل تقديمه إلى Google Play ليطابق ما يفعله التطبيق فعلًا.

## قاعدة البيانات
شغّل `db/migration.sql` لإضافة العمود `screenshots` (يقبل NULL).
