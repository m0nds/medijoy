export type FaqItem = {
  question: string
  answer: string
}

export type FaqCategory = {
  title: string
  items: FaqItem[]
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    title: 'Consultations',
    items: [
      {
        question: 'What happens during a consultation?',
        answer:
          'During your £20 consultation, we will discuss your skin concerns, assess your skin condition, review your history, and create a personalized treatment plan. This fee is fully redeemable when you proceed with any treatment.',
      },
      {
        question: 'How long does a consultation take?',
        answer:
          'Consultations typically take 30-45 minutes. I believe in taking the time to really understand your needs and answer all your questions thoroughly.',
      },
      {
        question: 'Is the £20 refundable?',
        answer:
          'The £20 consultation fee is non-refundable, but it will be deducted from the cost of your first treatment if you decide to proceed on the same day.',
      },
    ],
  },
  {
    title: 'Treatments',
    items: [
      {
        question: 'Do treatments hurt?',
        answer:
          "Most treatments involve minimal discomfort. For injectable treatments like anti-wrinkle injections and skin boosters, we use ultra-fine needles and can apply numbing cream if needed. Most clients describe it as a quick pinch. For facials and other non-invasive treatments, you'll find them relaxing and comfortable.",
      },
      {
        question: 'Can I combine treatments?',
        answer:
          "Absolutely! Many clients benefit from combining treatments for comprehensive skin rejuvenation. For example, pairing skin boosters with facials, or adding LED therapy to microneedling. During your consultation, I'll recommend the best combination for your goals and budget.",
      },
      {
        question: 'How soon will I see results?',
        answer:
          "This depends on the treatment. Facials provide an immediate glow. Anti-wrinkle injections take 3-7 days to fully settle. Skin boosters show gradual improvement over 2-4 weeks. Treatments like microneedling and PRP build collagen over several weeks. During your consultation, I'll give you a realistic timeline for your specific treatment.",
      },
      {
        question: 'How long do results last?',
        answer:
          'Results vary by treatment: Anti-wrinkle injections last 3-4 months. Skin boosters last 6-9 months. Facials provide immediate results with cumulative benefits over time. Microneedling and PRP offer long-lasting collagen stimulation. I\'ll recommend a maintenance plan to keep your skin looking its best.',
      },
    ],
  },
  {
    title: 'Safety',
    items: [
      {
        question: 'Are treatments safe?',
        answer:
          'Yes. I only use premium, clinically approved products from reputable manufacturers. I am fully qualified, insured, and follow strict hygiene and safety protocols. During your consultation, I will assess your suitability for treatment and discuss any potential risks or side effects.',
      },
      {
        question: 'What are the side effects?',
        answer:
          'Side effects are generally minimal. You may experience temporary redness, slight swelling, or tenderness at the treatment site. These typically resolve within a few hours to a few days. I will provide detailed aftercare instructions to minimize any side effects and ensure optimal results.',
      },
      {
        question: 'Who cannot have treatment?',
        answer:
          'Certain treatments may not be suitable if you are pregnant, breastfeeding, have active skin infections, or certain medical conditions. During your consultation, we will review your medical history to ensure any treatment is safe for you.',
      },
    ],
  },
  {
    title: 'Booking & Policies',
    items: [
      {
        question: 'How do I book an appointment?',
        answer:
          "You can book through our online booking system, call us, or send a message via social media. We'll confirm your appointment and send you pre-treatment instructions if needed.",
      },
      {
        question: 'What is your cancellation policy?',
        answer:
          'We require 48 hours notice for cancellations or rescheduling. Cancellations with less than 48 hours notice may incur a cancellation fee. We understand that emergencies happen—please just let us know as soon as possible.',
      },
      {
        question: 'Do you offer payment plans?',
        answer:
          'Yes! We offer flexible payment options for certain treatments. We can discuss this during your consultation to find a plan that works for your budget.',
      },
      {
        question: 'What should I bring to my appointment?',
        answer:
          "Just yourself! For injectable treatments, it's best to arrive with a clean face (no makeup). If you have any medical documentation related to skin conditions or allergies, feel free to bring that along.",
      },
    ],
  },
]
