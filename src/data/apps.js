import { site } from "./site";

/*
 لإضافة تطبيق: أضف سطرًا هنا فقط.
 الحقول الاختيارية (كلها تقبل null أو الحذف):
   icon, shots (مصفوفة صور أو null), description, tagline, category, play,
   platforms: { ios, web, windows }  ← روابط
   privacy: { collectsData, permissions, thirdParties, updated }
 المسارات النسبية للصور تُقرأ من storageBase، والروابط الكاملة (https) تُستخدم كما هي.
*/
const raw = [
  { name: "UniversalPrint", pkg: "com.devbelmel.universalprinter", v: "1.0", mb: 11.7, sdk: 26, shots: null },
  { name: "AliAffiliateApp", pkg: "com.aliaffiliate.app", v: "1.0", mb: 6.6, sdk: 24, shots: null },
  { name: "Offers", pkg: "com.devbelmel.offers_app", v: "1.0", mb: 14.4, sdk: 24, shots: null },
  { name: "AppStore", pkg: "com.devbelmel.appstore_app", v: "0.1.0", mb: 4.4, sdk: 26, shots: null },
  { name: "Manhal", pkg: "com.devbelmel.manhal_app", v: "1.0", mb: 10.3, sdk: 24, shots: null },
  { name: "Hikmah", pkg: "com.hikmah.app", v: "1.0", mb: 18.0, sdk: 24, shots: null },
  { name: "ManhalPatched", pkg: "com.devbelmel.manhalpatched_app", v: "1.0", mb: 10.3, sdk: 24, shots: null },
  { name: "MediaHub Admin", pkg: "com.mediahub.admin", v: "1.0", mb: 2.8, sdk: 24, shots: null },
  { name: "MediaHub", pkg: "com.mediahub.app", v: "1.0", mb: 5.5, sdk: 24, shots: null },
  { name: "MobileCodeStudio", pkg: "com.mobilecodestudio.app", v: "0.1.0-stage1", mb: 10.5, sdk: 26, shots: null },
  { name: "PartsCompat", pkg: "com.devbelmel.partscompat_app", v: "1.0", mb: 9.8, sdk: 24, shots: null },
  { name: "Quranic Admin", pkg: "com.quranicschool.admin", v: "1.0.0", mb: 14.9, sdk: 24, shots: null },
  { name: "Quranic Parents", pkg: "com.quranicschool.parents", v: "1.0.0", mb: 15.0, sdk: 24, shots: null },
  { name: "Shwiya", pkg: "com.devbelmel.shwiya_app", v: "0.1.0", mb: 13.4, sdk: 26, shots: null },
  { name: "TikClone", pkg: "com.devbelmel.tikclone_app", v: "0.1.0", mb: 13.3, sdk: 26, shots: null },
];

const full = (p) => (!p ? null : /^https?:/.test(p) ? p : site.storageBase + p);

export const apps = raw.map((r) => ({
  id: r.name.toLowerCase().replace(/\s+/g, "-"),
  name: r.name,
  pkg: r.pkg,
  tagline: r.tagline ?? "تطبيق أندرويد من منهل",
  description: r.description ?? null,
  category: r.category ?? "أخرى",
  version: r.v,
  sizeMB: r.mb,
  androidMin: r.sdk ? ({ 24: "7.0", 26: "8.0" }[r.sdk] ?? `API ${r.sdk}`) : null,
  icon: full(r.icon),
  // null أو undefined أو مصفوفة فارغة ← تصبح [] والواجهة تخفي المعرض
  screenshots: Array.isArray(r.shots) ? r.shots.filter(Boolean).map(full) : [],
  platforms: {
    android: { apk: full(`apps/${r.pkg}/app-release.apk`), play: r.play ?? null },
    ...(r.platforms ?? {}),
  },
  privacy: { updated: "2026-10-04", collectsData: false, permissions: [], thirdParties: [], ...(r.privacy ?? {}) },
}));

export const findApp = (id) => apps.find((a) => a.id === id);
