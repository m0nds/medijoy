export type ServiceCategory = {
  slug: string
  label: string
}

export type ServiceAddOn = {
  title: string
  description: string
  price: number
}

export type ServiceCard = {
  slug: string
  title: string
  description: string
  image: string
  priceFrom: number
  duration: string
  categorySlug: string
  detailImage?: string
}

export type ServiceDetail = ServiceCard & {
  overview: string
  benefits: string[]
  savePercent: number
  downtime: string
  sessionsOrResults: string
  resultWeeks?: number
  addOns: ServiceAddOn[]
}

import {
  antiAgingProven,
  chemicalPeelProven,
  crowFeetProven,
  deepCleansingProven,
  dermalFillersProven,
  dermabrasionProven,
  foreheadLinesProven,
  hydratingFacialProven,
  jawlineProven,
  microneedlingProven,
  profhiloProven,
  prpProven,
  skinboosterProven,
  underEyesProven,
} from '../assets/images/proven results'

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { slug: 'facial-treatment', label: 'Facial Treatment' },
  { slug: 'advanced-treatment', label: 'Advanced Treatment' },
  { slug: 'botox', label: 'Botox' },
  { slug: 'skin-boosters', label: 'Skin Boosters' },
]

const COMMON_ADDONS: ServiceAddOn[] = [
  { title: 'LED Light Therapy', description: 'Reduces inflammation and promotes healing', price: 20 },
  { title: 'Neck & Décolletage Upgrade', description: 'Extend treatment to neck and chest area', price: 120 },
  { title: 'Aftercare Kit', description: 'Essential post treatment for skin recovery', price: 20 },
]

export const SERVICES: ServiceCard[] = [
  {
    slug: 'profhilo',
    title: 'Profhilo',
    description: 'Improves firmness without adding volume',
    image: '/assets/images/profhilo.png',
    priceFrom: 120,
    duration: '35 Mins',
    categorySlug: 'skin-boosters',
    detailImage: profhiloProven,
  },
  {
    slug: 'hydrating-skin-booster',
    title: 'Hydrating Skin Booster',
    description: 'Improves skin hydration',
    image: '/assets/images/services/hydratingBooster.png',
    priceFrom: 100,
    duration: '30 Mins',
    categorySlug: 'skin-boosters',
    detailImage: skinboosterProven,
  },
  {
    slug: 'dermal-fillers',
    title: 'Dermal Fillers',
    description: 'Restore volume and enhance contours',
    image: '/assets/images/services/dermalFillers.png',
    priceFrom: 195,
    duration: '30 Mins',
    categorySlug: 'skin-boosters',
    detailImage: dermalFillersProven,
  },
  {
    slug: 'under-eye-booster',
    title: 'Under Eye Booster',
    description: 'Improves under-eye texture and hydration',
    image: '/assets/images/services/underEyeBooster.png',
    priceFrom: 80,
    duration: '30 Mins',
    categorySlug: 'skin-boosters',
    detailImage: underEyesProven,
  },
  {
    slug: 'deep-cleansing-facial',
    title: 'Deep Cleansing Facial',
    description: 'Deep pore cleaning, extraction and purification',
    image: '/assets/images/services/deepCleansing.png',
    priceFrom: 50,
    duration: '40 - 60 Mins',
    categorySlug: 'facial-treatment',
    detailImage: deepCleansingProven,
  },
  {
    slug: 'chin-jawline-contouring',
    title: 'Chin & Jawline Contouring',
    description: 'Enhance the shape of chin & jawline',
    image: '/assets/images/services/chinJawline.png',
    priceFrom: 200,
    duration: '45 - 60 Mins',
    categorySlug: 'facial-treatment',
    detailImage: jawlineProven,
  },
  {
    slug: 'chin-jawline-contouring',
    title: 'Chin & Jawline Contouring',
    description: 'Enhance the shape of chin & jawline',
    image: '/assets/images/services/chinJawline.png',
    priceFrom: 200,
    duration: '45 - 60 Mins',
    categorySlug: 'advanced-treatment',
    detailImage: jawlineProven,
  },
  {
    slug: 'hydrating-facial',
    title: 'Hydrating Facial',
    description: 'Intense hydration and moisture restoration',
    image: '/assets/images/services/hydratingFacial.png',
    priceFrom: 50,
    duration: '40 Mins',
    categorySlug: 'facial-treatment',
    detailImage: hydratingFacialProven,
  },
  {
    slug: 'anti-ageing-facial',
    title: 'Anti-ageing Facial',
    description: 'Collagen boosting and wrinkle reduction',
    image: '/assets/images/services/antiAgingFacial.png',
    priceFrom: 90,
    duration: '40 - 60 Mins',
    categorySlug: 'facial-treatment',
    detailImage: antiAgingProven,
  },
  {
    slug: 'microneedling',
    title: 'Microneedling',
    description: 'Collagen induction therapy for skin rejuvenation',
    image: '/assets/images/microneedling.png',
    priceFrom: 200,
    duration: '45 - 75 Mins',
    categorySlug: 'facial-treatment',
    detailImage: microneedlingProven,
  },
  {
    slug: 'microneedling',
    title: 'Microneedling',
    description: 'Collagen induction therapy for skin rejuvenation',
    image: '/assets/images/microneedling.png',
    priceFrom: 200,
    duration: '45 - 75 Mins',
    categorySlug: 'advanced-treatment',
    detailImage: microneedlingProven,
  },
  {
    slug: 'dermabrasion',
    title: 'Dermabrasion',
    description: 'Exfoliation and peach fuzz removal',
    image: '/assets/images/dermabrasion.png',
    priceFrom: 90,
    duration: '45 Mins',
    categorySlug: 'facial-treatment',
    detailImage: dermabrasionProven,
  },
  {
    slug: 'dermabrasion',
    title: 'Dermabrasion',
    description: 'Exfoliation and peach fuzz removal',
    image: '/assets/images/dermabrasion.png',
    priceFrom: 90,
    duration: '45 Mins',
    categorySlug: 'advanced-treatment',
    detailImage: dermabrasionProven,
  },
  {
    slug: 'chemical-peel',
    title: 'Chemical Peel',
    description: 'Resurface skin for texture and clarity',
    image: '/assets/images/services/chemicalPeel.png',
    priceFrom: 85,
    duration: '35 - 40 Mins',
    categorySlug: 'botox',
    detailImage: chemicalPeelProven,
  },
  {
    slug: 'prp-vampire-facial',
    title: 'PRP Vampire Facial',
    description: 'Use your own growth factors to accelerate healing',
    image: '/assets/images/prpVampireFacial.png',
    priceFrom: 200,
    duration: '45 - 60 Mins',
    categorySlug: '',
    detailImage: prpProven,
  },
  {
    slug: 'forehead-lines',
    title: 'Forehead Lines',
    description: 'Smooth horizontal forehead lines',
    image: '/assets/images/botox.png',
    priceFrom: 150,
    duration: '45 Mins',
    categorySlug: 'botox',
    detailImage: foreheadLinesProven,
  },
  {
    slug: 'crows-feet',
    title: "Crow's Feet",
    description: 'Target fine lines around the eyes',
    image: '/assets/images/services/crowFeet.png',
    priceFrom: 100,
    duration: '45 Mins',
    categorySlug: 'botox',
    detailImage: crowFeetProven,
  },
  {
    slug: 'jawline-contouring',
    title: 'Jawline & Contouring',
    description: 'Enhance jawline definition and balance',
    image: '/assets/images/services/chinJawline.png',
    priceFrom: 200,
    duration: '60 - 75 Mins',
    categorySlug: '',
    detailImage: jawlineProven,
  },
]

type DetailOverrides = Pick<
  ServiceDetail,
  'overview' | 'benefits' | 'savePercent' | 'downtime' | 'sessionsOrResults' | 'addOns'
> & { resultWeeks?: number }

const DETAILS: Record<string, DetailOverrides> = {
  profhilo: {
    overview:
      'Profhilo is an injectable skin booster that deeply hydrates and remodels ageing skin, improving firmness without adding volume.',
    benefits: [
      'Intense Skin Hydration',
      'Improved Firmness and Elasticity',
      'Natural Skin Rejuvenation',
      'Long Lasting Natural Results',
      'Versatile Treatment Areas',
      'Tissue Remodelling',
    ],
    savePercent: 10,
    downtime: 'Minimal',
    sessionsOrResults: 'Results: 4 months',
    resultWeeks: 4,
    addOns: COMMON_ADDONS,
  },
  'hydrating-skin-booster': {
    overview:
      'A targeted injectable treatment that improves skin hydration, texture and glow from within.',
    benefits: [
      'Improved Skin Smoothness',
      'Enhances Glow',
      'Supports Long Term Hydration',
      'Brighter Skin Tone',
      'Reduced Wrinkles',
      'Increased Skin Texture',
    ],
    savePercent: 10,
    downtime: 'Minimal',
    sessionsOrResults: 'Results: 4 months',
    resultWeeks: 5,
    addOns: COMMON_ADDONS,
  },
  'dermal-fillers': {
    overview:
      'Designed to restore lips, cheeks, jawline, and neck structure with volume.',
    benefits: [
      'Non-Surgical and Immediate Results',
      'Restores Facial Volume',
      'Plump Lips',
      'Skin Hydration',
      'Reversible',
      'Enhances Facial Contour',
    ],
    savePercent: 10,
    downtime: 'Mild swelling possible',
    sessionsOrResults: 'Results: 6 months',
    resultWeeks: 5,
    addOns: [
      { title: 'Extra filler (0.05ml)', description: 'Extend treatment to neck and chest area', price: 120 },
      ...COMMON_ADDONS.slice(1),
    ],
  },
  'under-eye-booster': {
    overview:
      'Designed to improve hydration and skin quality in the delicate eye area.',
    benefits: [
      'Improves Under Eyes Texture',
      'Reduces Tired Appearance',
      'Boost Hydration',
      'Brighter Skin Tone',
      'Reduced Fine Lines',
      'Increased Skin Thickness',
    ],
    savePercent: 10,
    downtime: 'Minimal',
    sessionsOrResults: 'Results: 4 months',
    resultWeeks: 4,
    addOns: [
      { title: 'LED Light Therapy', description: 'Reduces inflammation and promotes healing', price: 20 },
      { title: "Crow's Feet Botox", description: 'Extend result for a longer time', price: 20 },
      { title: 'Aftercare Kit', description: 'Essential post treatment for skin recovery', price: 20 },
    ],
  },
  'deep-cleansing-facial': {
    overview:
      'A comprehensive facial treatment designed to deeply cleanse pores, remove impurities, and leave your skin refreshed and rejuvenated. Perfect for congested skin and blackhead concerns.',
    benefits: [
      'Deep hydration',
      'Removes blackhead and impurities',
      'Refreshed and glowing complexion',
      'Reduced appearance of pores',
      'Reduced sensitivity',
      'Improved skin texture',
    ],
    savePercent: 10,
    downtime: 'None',
    sessionsOrResults: '4 - 6 Sessions',
    resultWeeks: 12,
    addOns: COMMON_ADDONS,
  },
  'chin-jawline-contouring': {
    overview:
      'A non-surgical contouring treatment designed to improve facial symmetry and enhance structure, using dermal fillers to create a more defined and balanced facial profile of the lower face. Ideal for clients looking for subtle yet noticeable facial enhancement without surgery.',
    benefits: [
      'Enhanced jawline definition',
      'Balanced facial proportions',
      'Natural looking structured face',
      'Improves skin texture',
      'Pigmentation correction',
      'Tattoo removal',
    ],
    savePercent: 10,
    downtime: 'Mild redness',
    sessionsOrResults: '2 - 3 Sessions',
    resultWeeks: 4,
    addOns: [
      { title: 'LED Light Therapy', description: 'Reduces inflammation and promotes healing', price: 20 },
      { title: 'Extra filler (0.05ml)', description: 'Extend treatment to neck and chest area', price: 120 },
      { title: 'Aftercare Kit', description: 'Essential post treatment for skin recovery', price: 20 },
    ],
  },
  'hydrating-facial': {
    overview:
      'A deeply nourishing facial that restores moisture, strengthens the skin barrier, and improves overall skin comfort and glow. Perfect for dry, dehydrated or stressed skin.',
    benefits: [
      'Deep hydration',
      'Plump, healthier skin',
      'Reduced dryness and tightness',
      'Regulated oil production',
      'Reduced sensitivity',
      'Enhanced radiance',
    ],
    savePercent: 10,
    downtime: 'None',
    sessionsOrResults: '4 - 6 Sessions',
    resultWeeks: 4,
    addOns: COMMON_ADDONS,
  },
  'anti-ageing-facial': {
    overview:
      'The Anti-Ageing Facial is a non-invasive treatment designed to improve skin firmness, hydration, and radiance while reducing the appearance of fine lines. It focuses on stimulating skin renewal and restoring a youthful glow through medical-grade skincare techniques.',
    benefits: [
      'Smooth fine lines and early wrinkles',
      'Improves elasticity and firmness',
      'Supports collagen production',
      'Suitable for all skin types',
      'Boost hydration and radiance',
      'Enhanced product absorption',
    ],
    savePercent: 10,
    downtime: 'None',
    sessionsOrResults: '2 - 3 Sessions',
    resultWeeks: 4,
    addOns: COMMON_ADDONS,
  },
  microneedling: {
    overview:
      'A result driven rejuvenation that stimulates collagen production to improve texture, scars and fine lines. Microneedling creates micro-channels in the skin, triggering natural healing and collagen production.',
    benefits: [
      'Improved acne scar',
      'Boost collagen',
      'Refine skin texture',
      'Evened skin tone',
      'Minimized pore size',
      'Fade stretch marks',
    ],
    savePercent: 10,
    downtime: 'Mild redness',
    sessionsOrResults: '2 - 3 Sessions',
    resultWeeks: 2,
    addOns: COMMON_ADDONS,
  },
  dermabrasion: {
    overview:
      'A professional exfoliation treatment that gently resurfaces the skin by removing outer layers of dead skin cells to reveal smooth, brighter, and more even-toned skin. Excellent for clients with dull skin and uneven texture.',
    benefits: [
      'Non invasive and painless',
      'Immediate smoother skin',
      'Brightens dull complexion',
      'Improves skin texture',
      'Pigmentation correction',
      'Tattoo removal',
    ],
    savePercent: 10,
    downtime: 'Minimal',
    sessionsOrResults: '1 - 3 Sessions',
    resultWeeks: 4,
    addOns: COMMON_ADDONS,
  },
  'chemical-peel': {
    overview:
      'A chemical Peel is a professional skin resurfacing treatment that gently exfoliates the top layers of the skin to improve texture, clarity, and overall tone.',
    benefits: [
      'Minimizes Enlarged Pores',
      'Boost Skin Radiance',
      'Refine Skin Texture',
      'Reduces Acne and Congestion',
      'Versatile Treatment Areas',
      'Tightens Pores',
    ],
    savePercent: 10,
    downtime: 'Minimal',
    sessionsOrResults: '1 - 3 Sessions',
    resultWeeks: 4,
    addOns: [
      { title: 'LED Light Therapy', description: 'Reduces inflammation and promotes healing', price: 20 },
      { title: 'Hydrating Serum Boost', description: 'Enhances skin repair and collagen stimulation', price: 25 },
      { title: 'Aftercare Kit', description: 'Essential post treatment for skin recovery', price: 20 },
    ],
  },
  'prp-vampire-facial': {
    overview:
      'A deeply nourishing facial that restores moisture, strengthens the skin barrier, and improves overall skin comfort and glow. Perfect for dry, dehydrated or stressed skin.',
    benefits: [
      'Deep hydration',
      'Plump, healthier skin',
      'Reduces dryness and tightness',
      'Improves skin texture',
      'Natural and safe',
      'Long lasting results',
    ],
    savePercent: 10,
    downtime: 'Mild redness',
    sessionsOrResults: '2 - 4 Sessions',
    resultWeeks: 4,
    addOns: COMMON_ADDONS,
  },
  'forehead-lines': {
    overview:
      'Botulinum toxin is carefully injected into the forehead muscle to reduce activity that causes lines to form. Creating a more relaxed and youthful appearance while maintaining natural movement.',
    benefits: [
      'Smooths horizontal forehead lines',
      'Prevents deep wrinkle formation',
      'Creates a refreshed, relaxed look',
      'Non-surgical and quick treatment',
      'Chronic migraine relief',
      'Confidence boost',
    ],
    savePercent: 10,
    downtime: 'Minimal',
    sessionsOrResults: 'Results: 3 - 4 months',
    resultWeeks: 4,
    addOns: [
      { title: 'LED Light Therapy', description: 'Reduces inflammation and promotes healing', price: 20 },
      { title: 'Hydrating Serum Boost', description: 'Enhances skin repair and collagen stimulation', price: 20 },
      { title: 'Aftercare Kit', description: 'Essential post treatment for skin recovery', price: 20 },
    ],
  },
  'crows-feet': {
    overview:
      "Targets fine lines around the eyes and mouth caused by smiling and squinting.",
    benefits: [
      'Smooths eyes wrinkles',
      'Preserves natural expressions',
      'Refreshes the eyes area',
      'Non-surgical and quick treatment',
      'Improved skin texture',
      'Prevents further creasing',
    ],
    savePercent: 10,
    downtime: 'Minimal',
    sessionsOrResults: 'Results: 3 - 4 months',
    resultWeeks: 4,
    addOns: [
      { title: 'Under Eyes Skin Booster', description: 'Reduces fold behind the eyes for longer', price: 20 },
      { title: 'Facial Slimming Consultation', description: 'A consultation and personalized advice', price: 10 },
      { title: 'Aftercare Kit', description: 'Essential post treatment for skin recovery', price: 20 },
    ],
  },
  'jawline-contouring': {
    overview:
      'A non-surgical contouring treatment designed to improve facial symmetry and enhance structure, using dermal fillers to create a more defined and balanced facial profile of the lower face. Ideal for clients looking for subtle yet noticeable facial enhancement without surgery.',
    benefits: [
      'Enhanced jawline definition',
      'Balanced facial proportions',
      'Natural looking structured face',
      'Improves skin texture',
      'Pigmentation correction',
      'Tattoo removal',
    ],
    savePercent: 10,
    downtime: 'Mild redness',
    sessionsOrResults: '2 - 3 Sessions',
    resultWeeks: 4,
    addOns: [
      { title: 'LED Light Therapy', description: 'Reduces inflammation and promotes healing', price: 20 },
      { title: 'Extra filler (0.05ml)', description: 'Extend treatment to neck and chest area', price: 120 },
      { title: 'Aftercare Kit', description: 'Essential post treatment for skin recovery', price: 20 },
    ],
  },
}

function mergeServiceDetail(card: ServiceCard): ServiceDetail | null {
  const extra = DETAILS[card.slug]
  if (!extra) return null
  return { ...card, ...extra }
}

export function getServiceBySlug(slug: string): ServiceDetail | null {
  const card = SERVICES.find((s) => s.slug === slug)
  if (!card) return null
  return mergeServiceDetail(card)
}

export function getServicesByCategory(categorySlug: string): ServiceCard[] {
  return SERVICES.filter((s) => s.categorySlug === categorySlug)
}
