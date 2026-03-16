import { acneProven, antiAgingProven, deepCleansingProven, dermalFillersProven, foreheadLinesProven, jawlineProven, microneedlingProven, profhiloProven, skinboosterProven, crowFeetProven, chemicalPeelProven, hydratingFacialProven, prpProven, dermabrasionProven } from "../assets/images/proven results"

export type ResultFilter = {
  slug: string
  label: string
}

export type ResultCard = {
  id: string
  treatmentName: string
  duration: string
  /** Single image used for both before/after panels; replace with beforeImage/afterImage when you have pairs */
  image: string
  filterSlugs: string[]
}

export const PROVEN_RESULT_FILTERS: ResultFilter[] = [
  { slug: 'all', label: 'All Results' },
  { slug: 'acne-breakouts', label: 'Acne and breakouts' },
  { slug: 'anti-ageing', label: 'Anti-ageing' },
  { slug: 'texture', label: 'Texture' },
  { slug: 'hydration', label: 'Hydration' },
]

/** Proven result cards with treatment name, duration, image, and which filters they belong to */
export const PROVEN_RESULTS: ResultCard[] = [
  {
    id: 'hydrating-skin-booster',
    treatmentName: 'Hydrating Skin Booster',
    duration: '5 Weeks',
    image: skinboosterProven,
    filterSlugs: ['hydration', 'texture', 'acne-breakouts'],
  },
  {
    id: 'hydrating-facial',
    treatmentName: 'Hydrating Facial',
    duration: '4 Weeks',
    image: hydratingFacialProven,
    filterSlugs: ['hydration', 'acne-breakouts'],
  },
  {
    id: 'dermabrasion',
    treatmentName: 'Dermabrasion',
    duration: '4 Weeks',
    image: dermabrasionProven,
    filterSlugs: ['texture',],
  },
  {
    id: 'dermal-fillers',
    treatmentName: 'Dermal Fillers',
    duration: '5 Weeks',
    image: dermalFillersProven,
    filterSlugs: ['texture', 'hydration'],
  },
  {
    id: 'deep-cleansing-facial',
    treatmentName: 'Deep Cleansing Facial',
    duration: '12 Weeks',
    image: deepCleansingProven,
    filterSlugs: ['acne-breakouts', 'hydration'],
  },
  {
    id: 'microneedling',
    treatmentName: 'Microneedling',
    duration: '2 Weeks',
    image: microneedlingProven,
    filterSlugs: ['acne-breakouts',],
  },
  {
    id: 'prp-vampire-facials',
    treatmentName: 'PRP Vampire Facials',
    duration: '4 Weeks',
    image: prpProven,
    filterSlugs: ['anti-ageing','acne-breakouts'],
  },
  {
    id: 'anti-ageing-facials',
    treatmentName: 'Anti-ageing Facials',
    duration: '4 Weeks',
    image: antiAgingProven,
    filterSlugs: ['anti-ageing', 'acne-breakouts'],
  },
  {
    id: 'forehead-lines',
    treatmentName: 'Forehead Lines',
    duration: '4 Weeks',
    image: foreheadLinesProven, 
    filterSlugs: [''],
  },
  {
    id: 'crows-feet',
    treatmentName: "Crow's Feet",
    duration: '4 Weeks',
    image: crowFeetProven, 
    filterSlugs: ['anti-ageing'],
  },
  {
    id: 'chin-jawline',
    treatmentName: 'Chin & Jawline Contouring',
    duration: '4 Weeks',
    image: jawlineProven, 
    filterSlugs: ['anti-ageing', 'texture'],
  },
  {
    id: 'profhilo',
    treatmentName: 'Profhilo',
    duration: '4 Weeks',
    image: profhiloProven,
    filterSlugs: ['texture'],
  },
  {
    id: 'chemical-peel',
    treatmentName: 'Chemical Peel',
    duration: '4 Weeks',
    image: chemicalPeelProven,
    filterSlugs: ['texture', ],
  },
  {
    id: 'acne-treatment',
    treatmentName: 'Acne Treatment',
    duration: '8 Weeks',
    image: acneProven,
    filterSlugs: ['acne-breakouts'],
  },
]

export function getResultsByFilter(filterSlug: string): ResultCard[] {
  if (filterSlug === 'all') {
    return PROVEN_RESULTS
  }
  return PROVEN_RESULTS.filter((r) => r.filterSlugs.includes(filterSlug))
}
