import { defineCollection, z } from 'astro:content';

// ============================================================================
// HOMEPAGE COLLECTIONS
// ============================================================================

const homepageCollection = defineCollection({
  type: 'data',
  schema: z.object({
    section: z.enum(['hero', 'intro', 'joinCta', 'trustBar']),
    title: z.string(),
    description: z.string(),
    buttonText: z.string().optional(),
    buttonHref: z.string().optional(),
    backgroundImage: z.string().optional(),
    enabled: z.boolean().default(true),
  }),
});

const statsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    number: z.number(),
    prefix: z.string().default(''),
    suffix: z.string().default(''),
    label: z.string(),
    sublabel: z.string(),
    order: z.number().default(0),
    enabled: z.boolean().default(true),
  }),
});

const objectivesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    icon: z.string(),
    title: z.string(),
    description: z.string(),
    order: z.number().default(0),
    enabled: z.boolean().default(true),
  }),
});

// ============================================================================
// ABOUT PAGE COLLECTIONS
// ============================================================================

const aboutSettingsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    pageTitle: z.string(),
    pageDescription: z.string(),
    headerTitle: z.string(),
    headerDescription: z.string(),
    drPatienceImage: z.string(),
    drPatienceName: z.string(),
    drPatienceBio: z.string(),
    whoWeAreTitle: z.string(),
    whoWeAreDescription: z.string(),
    guidingBeliefTitle: z.string(),
    guidingBeliefQuote: z.string(),
    guidingBeliefDescription: z.string(),
    legalStatusTitle: z.string(),
    legalStatusDescription: z.string(),
    joinSectionTitle: z.string(),
    joinSectionDescription: z.string(),
  }),
});

const timelineCollection = defineCollection({
  type: 'data',
  schema: z.object({
    year: z.string(),
    title: z.string().optional(),
    event: z.string(),
    order: z.number().default(0),
    enabled: z.boolean().default(true),
    category: z.enum(['foundation', 'drPatience']).default('foundation'),
  }),
});

const coreValuesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    order: z.number().default(0),
    enabled: z.boolean().default(true),
  }),
});

const drPatienceVirtuesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    order: z.number().default(0),
    enabled: z.boolean().default(true),
  }),
});

// ============================================================================
// BOARD MEMBERS (Existing)
// ============================================================================

const boardMemberCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    role: z.string(),
    description: z.string(),
    image: z.string(),
    category: z.enum(['trustees', 'advisory']),
    order: z.number().default(0),
    enabled: z.boolean().default(true),
  }),
});

const boardSettingsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    showBoardPhotos: z.boolean().default(true),
    trusteesTitle: z.string(),
    trusteesDescription: z.string(),
    advisersTitle: z.string(),
    advisersDescription: z.string(),
    photosHiddenMessage: z.string(),
  }),
});

// ============================================================================
// PROGRAMS / OUR WORK COLLECTIONS
// ============================================================================

const programsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    icon: z.string(),
    description: z.string(),
    stats: z.array(z.object({
      value: z.string(),
      label: z.string(),
    })).optional(),
    highlights: z.array(z.string()).optional(),
    order: z.number().default(0),
    enabled: z.boolean().default(true),
  }),
});

const medicalOutreachCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    date: z.string(),
    location: z.string(),
    impact: z.string(),
    description: z.string(),
    order: z.number().default(0),
    enabled: z.boolean().default(true),
  }),
});

const educationInitiativeCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    date: z.string(),
    order: z.number().default(0),
    enabled: z.boolean().default(true),
  }),
});

const foodSecurityCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    item: z.string(),
    order: z.number().default(0),
    enabled: z.boolean().default(true),
  }),
});

const memorialActivitiesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    when: z.string(),
    order: z.number().default(0),
    enabled: z.boolean().default(true),
  }),
});

const ourWorkSettingsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    pageTitle: z.string(),
    pageDescription: z.string(),
    heroTitle: z.string(),
    heroDescription: z.string(),
    memorialSectionTitle: z.string(),
    memorialSectionDescription: z.string(),
    impactCtaTitle: z.string(),
    impactCtaDescription: z.string(),
  }),
});

// ============================================================================
// FAQ COLLECTIONS
// ============================================================================

const faqCategoryCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    category: z.string(),
    order: z.number().default(0),
    enabled: z.boolean().default(true),
  }),
});

const faqItemCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    categoryId: z.string(),
    question: z.string(),
    answer: z.string(),
    order: z.number().default(0),
    enabled: z.boolean().default(true),
  }),
});

const faqSettingsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    pageTitle: z.string(),
    pageDescription: z.string(),
    headerTitle: z.string(),
    headerDescription: z.string(),
    stillHaveQuestionsTitle: z.string(),
    stillHaveQuestionsDescription: z.string(),
  }),
});

// ============================================================================
// GET INVOLVED / DONATION COLLECTIONS
// ============================================================================

const donationAmountCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    amount: z.number(),
    label: z.string(),
    impact: z.string(),
    order: z.number().default(0),
    enabled: z.boolean().default(true),
  }),
});

const donationMethodCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    icon: z.string(),
    title: z.string(),
    description: z.string(),
    action: z.string().optional(),
    popular: z.boolean().default(false),
    content: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).optional(),
    contactInfo: z.string().optional(),
    order: z.number().default(0),
    enabled: z.boolean().default(true),
  }),
});

const impactAreaCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    icon: z.string(),
    title: z.string(),
    description: z.string(),
    stats: z.string(),
    order: z.number().default(0),
    enabled: z.boolean().default(true),
  }),
});

const getInvolvedSettingsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    pageTitle: z.string(),
    pageDescription: z.string(),
    heroTitle: z.string(),
    heroSubtitle: z.string(),
    heroDescription: z.string(),
    donateSectionTitle: z.string(),
    donateSectionDescription: z.string(),
    allWaysToGiveTitle: z.string(),
    allWaysToGiveDescription: z.string(),
    whereDonationGoesTitle: z.string(),
    whereDonationGoesDescription: z.string(),
    volunteerSectionTitle: z.string(),
    volunteerSectionDescription: z.string(),
    transparencyTitle: z.string(),
    transparencyDescription: z.string(),
  }),
});

// ============================================================================
// CONTACT PAGE COLLECTIONS
// ============================================================================

const contactInfoCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    icon: z.string(),
    title: z.string(),
    value: z.string(),
    href: z.string().optional(),
    order: z.number().default(0),
    enabled: z.boolean().default(true),
  }),
});

const socialLinkCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    url: z.string(),
    icon: z.string(),
    order: z.number().default(0),
    enabled: z.boolean().default(true),
  }),
});

const contactSettingsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    pageTitle: z.string(),
    pageDescription: z.string(),
    headerTitle: z.string(),
    headerDescription: z.string(),
    contactInfoTitle: z.string(),
    formTitle: z.string(),
    formSubmitButton: z.string(),
    followUsTitle: z.string(),
  }),
});

// ============================================================================
// TRANSPARENCY PAGE COLLECTIONS
// ============================================================================

const financialReportCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    date: z.string(),
    description: z.string(),
    file: z.string(),
    size: z.string().default('PDF'),
    order: z.number().default(0),
    enabled: z.boolean().default(true),
  }),
});

const activityReportCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    date: z.string(),
    description: z.string(),
    file: z.string(),
    size: z.string().default('PDF'),
    order: z.number().default(0),
    enabled: z.boolean().default(true),
  }),
});

const meetingNoticeCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    date: z.string(),
    type: z.string(),
    order: z.number().default(0),
    enabled: z.boolean().default(true),
  }),
});

const transparencyStatsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    value: z.string(),
    label: z.string(),
    order: z.number().default(0),
    enabled: z.boolean().default(true),
  }),
});

const transparencySettingsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    pageTitle: z.string(),
    pageDescription: z.string(),
    heroTitle: z.string(),
    heroDescription: z.string(),
    financialReportsTitle: z.string(),
    financialReportsDescription: z.string(),
    activityReportsTitle: z.string(),
    activityReportsDescription: z.string(),
    meetingNoticesTitle: z.string(),
    meetingNoticesDescription: z.string(),
    bankDetailsTitle: z.string(),
    bankDetailsDescription: z.string(),
    accountabilityTitle: z.string(),
    accountabilityDescription: z.string(),
  }),
});

// ============================================================================
// SITE-WIDE SETTINGS
// ============================================================================

const siteSettingsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    siteName: z.string(),
    siteDescription: z.string(),
    defaultTitle: z.string(),
    defaultDescription: z.string(),
    favicon: z.string().optional(),
    logo: z.string(),
  }),
});

const bankDetailsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    accountName: z.string(),
    accountNumber: z.string(),
    bankName: z.string(),
    ussdCode: z.string(),
  }),
});

const navigationCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    label: z.string(),
    href: z.string(),
    order: z.number().default(0),
    enabled: z.boolean().default(true),
    isButton: z.boolean().default(false),
    buttonVariant: z.enum(['primary', 'white', 'outline']).optional(),
  }),
});

const footerSettingsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    description: z.string(),
    copyrightText: z.string(),
    quickLinksTitle: z.string(),
    resourcesTitle: z.string(),
    contactTitle: z.string(),
  }),
});

const footerLinkCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    label: z.string(),
    href: z.string(),
    category: z.enum(['quick', 'resources']),
    order: z.number().default(0),
    enabled: z.boolean().default(true),
  }),
});

const trustBadgeCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    icon: z.string(),
    label: z.string(),
    order: z.number().default(0),
    enabled: z.boolean().default(true),
  }),
});

// ============================================================================
// GALLERY (if needed in future)
// ============================================================================

const galleryImageCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    src: z.string(),
    alt: z.string(),
    caption: z.string().optional(),
    category: z.string().default('general'),
    order: z.number().default(0),
    enabled: z.boolean().default(true),
  }),
});

// ============================================================================
// EXPORT ALL COLLECTIONS
// ============================================================================

export const collections = {
  // Homepage
  homepage: homepageCollection,
  stats: statsCollection,
  objectives: objectivesCollection,
  
  // About
  aboutSettings: aboutSettingsCollection,
  timeline: timelineCollection,
  coreValues: coreValuesCollection,
  drPatienceVirtues: drPatienceVirtuesCollection,
  
  // Board
  board: boardMemberCollection,
  boardSettings: boardSettingsCollection,
  
  // Programs
  programs: programsCollection,
  medicalOutreaches: medicalOutreachCollection,
  educationInitiatives: educationInitiativeCollection,
  foodSecurity: foodSecurityCollection,
  memorialActivities: memorialActivitiesCollection,
  ourWorkSettings: ourWorkSettingsCollection,
  
  // FAQ
  faqCategories: faqCategoryCollection,
  faqItems: faqItemCollection,
  faqSettings: faqSettingsCollection,
  
  // Get Involved
  donationAmounts: donationAmountCollection,
  donationMethods: donationMethodCollection,
  impactAreas: impactAreaCollection,
  getInvolvedSettings: getInvolvedSettingsCollection,
  
  // Contact
  contactInfo: contactInfoCollection,
  socialLinks: socialLinkCollection,
  contactSettings: contactSettingsCollection,
  
  // Transparency
  financialReports: financialReportCollection,
  activityReports: activityReportCollection,
  meetingNotices: meetingNoticeCollection,
  transparencyStats: transparencyStatsCollection,
  transparencySettings: transparencySettingsCollection,
  
  // Site-wide
  siteSettings: siteSettingsCollection,
  bankDetails: bankDetailsCollection,
  navigation: navigationCollection,
  footerSettings: footerSettingsCollection,
  footerLinks: footerLinkCollection,
  trustBadges: trustBadgeCollection,
  
  // Gallery
  galleryImages: galleryImageCollection,
};
