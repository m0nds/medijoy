export type TreatmentCard = {
  title: string
  description: string
  image: string
}

export type SkinConcernDetail = {
  slug: string
  title: string
  heroImage: string
  whatIs: string
  howWeHelp: string
  treatments: TreatmentCard[]
}

/** 6 cards for the Find Skin Concerns index page */
export const SKIN_CONCERN_CARDS = [
  {
    title: 'Acne & Breakouts',
    description:
      'Professional treatment to clear and prevent blemishes, reduce inflammation and restore skin health with targeted solutions.',
    image: '/assets/images/acne.png',
    slug: 'acne-breakouts',
  },
  {
    title: 'Hyperpigmentation',
    description:
      'Advanced solution for dark spots, melasma, uneven tone, and sun damage to restore bright, more even complexion.',
    image: '/assets/images/hyperpigmentation.png',
    slug: 'hyperpigmentation',
  },
  {
    title: 'Anti-ageing Fine Lines',
    description:
      'Turn back time with treatments that smooth wrinkles, boost collagen production, and restore youthful radiance to your skin.',
    image: '/assets/images/anti-agingFineLines.png',
    slug: 'anti-ageing-fine-lines',
  },
  {
    title: 'Dull Dehydrated Skin',
    description:
      'Revitalise and hydrate your skin for a smoother, softer complexion, with advanced exfoliation and rejuvenating treatments.',
    image: '/assets/images/dullSkin.png',
    slug: 'dull-dehydrated-skin',
  },
  {
    title: 'Uneven Texture',
    description:
      'Refine and retexturise your skin for a smoother, softer complexion, with advanced exfoliation and rejuvenating treatments.',
    image: '/assets/images/unevenTexture.png',
    slug: 'uneven-texture',
  },
  {
    title: 'Enlarged Pores',
    description:
      'Minimise the appearance of enlarged pores with treatments that reduce oil production and refine skin texture for a smoother finish.',
    image: '/assets/images/enlargedPores.png',
    slug: 'enlarged-pores',
  },
] as const

/** Full detail data per concern for the detail page */
export const SKIN_CONCERN_DETAILS: Record<string, SkinConcernDetail> = {
  'acne-breakouts': {
    slug: 'acne-breakouts',
    title: 'Acne & Breakouts',
    heroImage: '/assets/images/acne.png',
    whatIs:
      'Acne occurs when pores become blocked with oil, dead skin cells and bacteria, leading to blackheads, whiteheads or inflamed spots. Deeper breakouts can affect the surrounding skin tissue and may cause scarring as the skin heals.',
    howWeHelp:
      'We start with a thorough skin analysis to understand your unique triggers. Your plan is personalised—combining professional treatments, homecare and lifestyle recommendations—rather than a one-size-fits-all approach. We focus on calming inflammation, preventing new breakouts and healing the skin barrier gently and effectively.',
    treatments: [
      {
        title: 'Microneedling',
        description: 'Stimulates collagen production to improve scar texture.',
        image: '/assets/images/microneedling.png',
      },
      {
        title: 'PRP Vampire Facial',
        description: 'Use your own growth factors to accelerate skin healing',
        image: '/assets/images/prpVampireFacial.png',
      },
    ],
  },
  hyperpigmentation: {
    slug: 'hyperpigmentation',
    title: 'Hyperpigmentation',
    heroImage: '/assets/images/hyperpigmentation.png',
    whatIs:
      'Hyperpigmentation appears as dark patches on the skin caused by excess melanin production. It can affect all skin tones and often appears after acne, sun exposure or hormonal changes.',
    howWeHelp:
      'We focus on gradually brightening the skin while protecting its natural barrier. Treatments are tailored to safely reduce pigmentation, even skin tone, and prevent recurrence.',
    treatments: [
      {
        title: 'Microneedling',
        description: 'Stimulates collagen production to improve scar texture.',
        image: '/assets/images/microneedling.png',
      },
      {
        title: 'Chemical Peel',
        description:
          'Resurface skin to improve texture, clarity & overall tone.',
        image: '/assets/images/chemicalPeels.png',
      },
    ],
  },
  'anti-ageing-fine-lines': {
    slug: 'anti-ageing-fine-lines',
    title: 'Anti-ageing Fine Lines',
    heroImage: '/assets/images/anti-agingFineLines.png',
    whatIs:
      'Fine lines are the earliest visible signs of skin ageing. Over time fine lines develop into wrinkles. They typically appear around the forehead, eyes and mouth, and are caused by repeated facial expressions, collagen loss, and environmental exposure.',
    howWeHelp:
      'We assess skin quality, muscle movement, hydration levels, collagen strength to focus on subtle natural rejuvenation, not overdone results.',
    treatments: [
      {
        title: 'Microneedling',
        description: 'Stimulates collagen production to improve scar texture.',
        image: '/assets/images/microneedling.png',
      },
      {
        title: 'PRP Vampire Facial',
        description: 'Use your own growth factors to accelerate skin healing',
        image: '/assets/images/prpVampireFacial.png',
      },
    ],
  },
  'dull-dehydrated-skin': {
    slug: 'dull-dehydrated-skin',
    title: 'Dull Dehydrated Skin',
    heroImage: '/assets/images/dullSkin.png',
    whatIs:
      'Dull skin is the build-up of dead skin cells causing lack of radiance, tiredness, roughness and unevenness. It is often linked to dehydration, slow cell turnover or environmental stress.',
    howWeHelp:
      'We focus on nourishing the dull skin, improving circulation, and encouraging healthy skin renewal rather than harsh exfoliation.',
    treatments: [
      {
        title: 'Facials',
        description: 'Deep cleansing hydration and rejuvenation.',
        image: '/assets/images/facials.png',
      },
      {
        title: 'PRP Vampire Facial',
        description: 'Use your own growth factors to accelerate skin healing',
        image: '/assets/images/prpVampireFacial.png',
      },
    ],
  },
  'uneven-texture': {
    slug: 'uneven-texture',
    title: 'Uneven Texture',
    heroImage: '/assets/images/unevenTexture.png',
    whatIs:
      'Uneven texture includes roughness, enlarged pores, bumps, or an irregular skin surface that affects smoothness and makeup application. It appears from acne scarring, collagen loss, sun damage, ageing and slow cell renewal.',
    howWeHelp:
      'We use gentle but advanced effective skin-renewal treatments to smooth texture, stimulate collagen production, and improve overall skin quality gradually and safely, preventing future breakouts and healing your skin barrier.',
    treatments: [
      {
        title: 'Dermabrasion',
        description: 'Exfoliation and peach fuzz removal to improve texture.',
        image: '/assets/images/dermabrasion.png',
      },
      {
        title: 'Microneedling',
        description: 'Stimulates collagen production to improve scar texture.',
        image: '/assets/images/microneedling.png',
      },
    ],
  },
  'enlarged-pores': {
    slug: 'enlarged-pores',
    title: 'Enlarged Pores',
    heroImage: '/assets/images/advancedTreatment.png',
    whatIs:
      'Enlarged pores are visible openings on the skin\'s surface that appear more noticeable due to excess oil production, reduced elasticity, or build-up. They are commonly seen on nose, forehead and cheeks.',
    howWeHelp:
      'We treat enlarged pores by targeting the root cause: oil control, skin renewal, and collagen stimulation. We avoid harsh stripping treatments and instead use controlled, professional-grade solutions.',
    treatments: [
      {
        title: 'Dermabrasion',
        description: 'Exfoliation and peach fuzz removal to improve texture.',
        image: '/assets/images/dermabrasion.png',
      },
      {
        title: 'Microneedling',
        description: 'Stimulates collagen production to improve scar texture.',
        image: '/assets/images/microneedling.png',
      },
    ],
  },
}
