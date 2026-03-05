import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: {
      name: 'DPTF CMS',
      mark: () => null,
    },
    navigation: [
      { label: '⚙️ Site', items: ['siteSettings', 'navigation', 'footerSettings', 'footerLinks', 'socialLinks'] },
      { label: '🏠 Homepage', items: ['homepage', 'stats', 'coreValues', 'objectives', 'programs'] },
      { label: '👥 About', items: ['aboutSettings', 'board', 'boardSettings', 'drPatienceVirtues', 'timeline'] },
      { label: '📋 Our Work', items: ['ourWorkSettings', 'impactAreas', 'medicalOutreaches', 'educationInitiatives', 'foodSecurity', 'memorialActivities'] },
      { label: '❓ FAQ', items: ['faqSettings', 'faqCategories', 'faqItems'] },
      { label: '🤝 Get Involved', items: ['getInvolvedSettings', 'donationAmounts', 'donationMethods'] },
      { label: '📊 Transparency', items: ['transparencySettings', 'transparencyStats', 'financialReports', 'activityReports', 'meetingNotices', 'bankDetails', 'trustBadges'] },
      { label: '📞 Contact', items: ['contactSettings', 'contactInfo'] },
      { label: '🖼️ Gallery', items: ['galleryImages'] },
    ],
  },
  singletons: {
    // Site Settings
    siteSettings: singleton({
      label: '⚙️ Site Settings',
      path: 'src/content/siteSettings/settings',
      format: 'json',
      schema: {
        fields: {
          siteName: fields.text({ label: 'Site Name' }),
          siteDescription: fields.text({ label: 'Site Description', multiline: true }),
          defaultTitle: fields.text({ label: 'Default Page Title' }),
          defaultDescription: fields.text({ label: 'Default Meta Description', multiline: true }),
          logo: fields.text({ label: 'Logo Path' }),
          favicon: fields.text({ label: 'Favicon Path' }),
        },
      },
    }),
    // About Settings
    aboutSettings: singleton({
      label: '⚙️ About Page Settings',
      path: 'src/content/aboutSettings/settings',
      format: 'json',
      schema: {
        fields: {
          pageTitle: fields.text({ label: 'Page Title' }),
          pageDescription: fields.text({ label: 'Page Description', multiline: true }),
          headerTitle: fields.text({ label: 'Header Title' }),
          headerDescription: fields.text({ label: 'Header Description', multiline: true }),
          drPatienceImage: fields.text({ label: 'Dr. Patience Image Path' }),
          drPatienceName: fields.text({ label: 'Dr. Patience Full Name' }),
          drPatienceBio: fields.text({ label: 'Dr. Patience Biography', multiline: true }),
          whoWeAreTitle: fields.text({ label: 'Who We Are Title' }),
          whoWeAreDescription: fields.text({ label: 'Who We Are Description', multiline: true }),
          guidingBeliefTitle: fields.text({ label: 'Guiding Belief Title' }),
          guidingBeliefQuote: fields.text({ label: 'Guiding Belief Quote' }),
          guidingBeliefDescription: fields.text({ label: 'Guiding Belief Description', multiline: true }),
          legalStatusTitle: fields.text({ label: 'Legal Status Title' }),
          legalStatusDescription: fields.text({ label: 'Legal Status Description', multiline: true }),
          joinSectionTitle: fields.text({ label: 'Join Section Title' }),
          joinSectionDescription: fields.text({ label: 'Join Section Description', multiline: true }),
        },
      },
    }),
    // Board Settings
    boardSettings: singleton({
      label: '⚙️ Board Settings',
      path: 'src/content/boardSettings/settings',
      format: 'json',
      schema: {
        fields: {
          showBoardPhotos: fields.checkbox({ label: 'Show Board Photos', defaultValue: true }),
          trusteesTitle: fields.text({ label: 'Trustees Section Title' }),
          trusteesDescription: fields.text({ label: 'Trustees Section Description', multiline: true }),
          advisersTitle: fields.text({ label: 'Advisers Section Title' }),
          advisersDescription: fields.text({ label: 'Advisers Section Description', multiline: true }),
          photosHiddenMessage: fields.text({ label: 'Photos Hidden Message' }),
        },
      },
    }),
    // Contact Settings
    contactSettings: singleton({
      label: '⚙️ Contact Page Settings',
      path: 'src/content/contactSettings/settings',
      format: 'json',
      schema: {
        fields: {
          pageTitle: fields.text({ label: 'Page Title' }),
          pageDescription: fields.text({ label: 'Page Description', multiline: true }),
          headerTitle: fields.text({ label: 'Header Title' }),
          headerDescription: fields.text({ label: 'Header Description', multiline: true }),
          contactInfoTitle: fields.text({ label: 'Contact Info Title' }),
          formTitle: fields.text({ label: 'Form Title' }),
          formSubmitButton: fields.text({ label: 'Form Submit Button Text' }),
          followUsTitle: fields.text({ label: 'Follow Us Title' }),
        },
      },
    }),
    // FAQ Settings
    faqSettings: singleton({
      label: '⚙️ FAQ Page Settings',
      path: 'src/content/faqSettings/settings',
      format: 'json',
      schema: {
        fields: {
          pageTitle: fields.text({ label: 'Page Title' }),
          pageDescription: fields.text({ label: 'Page Description', multiline: true }),
          headerTitle: fields.text({ label: 'Header Title' }),
          headerDescription: fields.text({ label: 'Header Description', multiline: true }),
          stillHaveQuestionsTitle: fields.text({ label: 'Still Have Questions Title' }),
          stillHaveQuestionsDescription: fields.text({ label: 'Still Have Questions Description', multiline: true }),
        },
      },
    }),
    // Get Involved Settings
    getInvolvedSettings: singleton({
      label: '⚙️ Get Involved Settings',
      path: 'src/content/getInvolvedSettings/settings',
      format: 'json',
      schema: {
        fields: {
          pageTitle: fields.text({ label: 'Page Title' }),
          pageDescription: fields.text({ label: 'Page Description', multiline: true }),
          heroTitle: fields.text({ label: 'Hero Title' }),
          heroSubtitle: fields.text({ label: 'Hero Subtitle' }),
          heroDescription: fields.text({ label: 'Hero Description', multiline: true }),
          donateSectionTitle: fields.text({ label: 'Donate Section Title' }),
          donateSectionDescription: fields.text({ label: 'Donate Section Description', multiline: true }),
          allWaysToGiveTitle: fields.text({ label: 'All Ways to Give Title' }),
          allWaysToGiveDescription: fields.text({ label: 'All Ways to Give Description', multiline: true }),
          whereDonationGoesTitle: fields.text({ label: 'Where Donation Goes Title' }),
          whereDonationGoesDescription: fields.text({ label: 'Where Donation Goes Description', multiline: true }),
          volunteerSectionTitle: fields.text({ label: 'Volunteer Section Title' }),
          volunteerSectionDescription: fields.text({ label: 'Volunteer Section Description', multiline: true }),
          transparencyTitle: fields.text({ label: 'Transparency Title' }),
          transparencyDescription: fields.text({ label: 'Transparency Description', multiline: true }),
        },
      },
    }),
    // Our Work Settings
    ourWorkSettings: singleton({
      label: '⚙️ Our Work Settings',
      path: 'src/content/ourWorkSettings/settings',
      format: 'json',
      schema: {
        fields: {
          pageTitle: fields.text({ label: 'Page Title' }),
          pageDescription: fields.text({ label: 'Page Description', multiline: true }),
          heroTitle: fields.text({ label: 'Hero Title' }),
          heroDescription: fields.text({ label: 'Hero Description', multiline: true }),
          memorialSectionTitle: fields.text({ label: 'Memorial Section Title' }),
          memorialSectionDescription: fields.text({ label: 'Memorial Section Description', multiline: true }),
          impactCtaTitle: fields.text({ label: 'Impact CTA Title' }),
          impactCtaDescription: fields.text({ label: 'Impact CTA Description', multiline: true }),
        },
      },
    }),
    // Transparency Settings
    transparencySettings: singleton({
      label: '⚙️ Transparency Settings',
      path: 'src/content/transparencySettings/settings',
      format: 'json',
      schema: {
        fields: {
          pageTitle: fields.text({ label: 'Page Title' }),
          pageDescription: fields.text({ label: 'Page Description', multiline: true }),
          heroTitle: fields.text({ label: 'Hero Title' }),
          heroDescription: fields.text({ label: 'Hero Description', multiline: true }),
          financialReportsTitle: fields.text({ label: 'Financial Reports Title' }),
          financialReportsDescription: fields.text({ label: 'Financial Reports Description', multiline: true }),
          activityReportsTitle: fields.text({ label: 'Activity Reports Title' }),
          activityReportsDescription: fields.text({ label: 'Activity Reports Description', multiline: true }),
          meetingNoticesTitle: fields.text({ label: 'Meeting Notices Title' }),
          meetingNoticesDescription: fields.text({ label: 'Meeting Notices Description', multiline: true }),
          bankDetailsTitle: fields.text({ label: 'Bank Details Title' }),
          bankDetailsDescription: fields.text({ label: 'Bank Details Description', multiline: true }),
          accountabilityTitle: fields.text({ label: 'Accountability Title' }),
          accountabilityDescription: fields.text({ label: 'Accountability Description', multiline: true }),
        },
      },
    }),
    // Footer Settings
    footerSettings: singleton({
      label: '⚙️ Footer Settings',
      path: 'src/content/footerSettings/settings',
      format: 'json',
      schema: {
        fields: {
          description: fields.text({ label: 'Footer Description', multiline: true }),
          copyrightText: fields.text({ label: 'Copyright Text' }),
          quickLinksTitle: fields.text({ label: 'Quick Links Title' }),
          resourcesTitle: fields.text({ label: 'Resources Title' }),
          contactTitle: fields.text({ label: 'Contact Title' }),
        },
      },
    }),
    // Bank Details
    bankDetails: singleton({
      label: '🏦 Bank Details',
      path: 'src/content/bankDetails/details',
      format: 'json',
      schema: {
        fields: {
          accountName: fields.text({ label: 'Account Name' }),
          accountNumber: fields.text({ label: 'Account Number' }),
          bankName: fields.text({ label: 'Bank Name' }),
          ussdCode: fields.text({ label: 'USSD Code' }),
        },
      },
    }),
  },
  collections: {
    // Navigation
    navigation: collection({
      label: '🧭 Navigation Links',
      slugField: 'id',
      path: 'src/content/navigation/*',
      format: 'json',
      schema: {
        id: fields.slug({ name: { label: 'ID' } }),
        label: fields.text({ label: 'Label' }),
        href: fields.text({ label: 'URL' }),
        order: fields.number({ label: 'Order' }),
        isButton: fields.checkbox({ label: 'Is Button Style', defaultValue: false }),
        enabled: fields.checkbox({ label: 'Enabled', defaultValue: true }),
      },
    }),
    // Footer Links
    footerLinks: collection({
      label: '🔗 Footer Links',
      slugField: 'id',
      path: 'src/content/footerLinks/*',
      format: 'json',
      schema: {
        id: fields.slug({ name: { label: 'ID' } }),
        label: fields.text({ label: 'Label' }),
        href: fields.text({ label: 'URL' }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Quick Links', value: 'quick' },
            { label: 'Resources', value: 'resources' },
          ],
          defaultValue: 'quick',
        }),
        order: fields.number({ label: 'Order' }),
        enabled: fields.checkbox({ label: 'Enabled', defaultValue: true }),
      },
    }),
    // Social Links
    socialLinks: collection({
      label: '📱 Social Media Links',
      slugField: 'id',
      path: 'src/content/socialLinks/*',
      format: 'json',
      schema: {
        id: fields.slug({ name: { label: 'ID' } }),
        name: fields.text({ label: 'Platform Name' }),
        url: fields.text({ label: 'URL' }),
        icon: fields.text({ label: 'Icon Name' }),
        order: fields.number({ label: 'Order' }),
        enabled: fields.checkbox({ label: 'Enabled', defaultValue: true }),
      },
    }),
    // Homepage Sections
    homepage: collection({
      label: '🏠 Homepage Sections',
      slugField: 'section',
      path: 'src/content/homepage/*',
      format: 'json',
      schema: {
        section: fields.slug({ name: { label: 'Section' } }),
        title: fields.text({ label: 'Title' }),
        description: fields.text({ label: 'Description', multiline: true }),
        buttonText: fields.text({ label: 'Button Text' }),
        buttonHref: fields.text({ label: 'Button URL' }),
        enabled: fields.checkbox({ label: 'Enabled', defaultValue: true }),
      },
    }),
    // Stats
    stats: collection({
      label: '📊 Stats',
      slugField: 'id',
      path: 'src/content/stats/*',
      format: 'json',
      schema: {
        id: fields.slug({ name: { label: 'ID' } }),
        number: fields.number({ label: 'Number Value' }),
        prefix: fields.text({ label: 'Prefix (e.g., ₦)' }),
        suffix: fields.text({ label: 'Suffix (e.g., +)' }),
        label: fields.text({ label: 'Label' }),
        sublabel: fields.text({ label: 'Sublabel' }),
        order: fields.number({ label: 'Order' }),
        enabled: fields.checkbox({ label: 'Enabled', defaultValue: true }),
      },
    }),
    // Core Values
    coreValues: collection({
      label: '💎 Core Values',
      slugField: 'id',
      path: 'src/content/coreValues/*',
      format: 'json',
      schema: {
        id: fields.slug({ name: { label: 'ID' } }),
        title: fields.text({ label: 'Title' }),
        description: fields.text({ label: 'Description', multiline: true }),
        order: fields.number({ label: 'Order' }),
        enabled: fields.checkbox({ label: 'Enabled', defaultValue: true }),
      },
    }),
    // Objectives
    objectives: collection({
      label: '🎯 Objectives',
      slugField: 'id',
      path: 'src/content/objectives/*',
      format: 'json',
      schema: {
        id: fields.slug({ name: { label: 'ID' } }),
        icon: fields.text({ label: 'Icon' }),
        title: fields.text({ label: 'Title' }),
        description: fields.text({ label: 'Description', multiline: true }),
        order: fields.number({ label: 'Order' }),
        enabled: fields.checkbox({ label: 'Enabled', defaultValue: true }),
      },
    }),
    // Programs
    programs: collection({
      label: '📋 Programs',
      slugField: 'id',
      path: 'src/content/programs/*',
      format: 'json',
      schema: {
        id: fields.slug({ name: { label: 'ID' } }),
        title: fields.text({ label: 'Title' }),
        icon: fields.text({ label: 'Icon' }),
        description: fields.text({ label: 'Description', multiline: true }),
        stats: fields.array(
          fields.object({
            value: fields.text({ label: 'Stat Value' }),
            label: fields.text({ label: 'Stat Label' }),
          }),
          { label: 'Stats', itemLabel: (props) => props.fields.value.value }
        ),
        highlights: fields.array(fields.text({ label: 'Highlight' }), { label: 'Highlights' }),
        order: fields.number({ label: 'Order' }),
        enabled: fields.checkbox({ label: 'Enabled', defaultValue: true }),
      },
    }),
    // Board Members
    board: collection({
      label: '👥 Board Members',
      slugField: 'id',
      path: 'src/content/board/*',
      format: 'json',
      schema: {
        id: fields.slug({ name: { label: 'ID' } }),
        name: fields.text({ label: 'Name' }),
        role: fields.text({ label: 'Role' }),
        description: fields.text({ label: 'Description', multiline: true }),
        image: fields.text({ label: 'Image Path' }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Trustees', value: 'trustees' },
            { label: 'Advisory', value: 'advisory' },
          ],
          defaultValue: 'trustees',
        }),
        order: fields.number({ label: 'Order' }),
        enabled: fields.checkbox({ label: 'Enabled', defaultValue: true }),
      },
    }),
    // Dr. Patience Virtues
    drPatienceVirtues: collection({
      label: '✨ Dr. Patience Virtues',
      slugField: 'id',
      path: 'src/content/drPatienceVirtues/*',
      format: 'json',
      schema: {
        id: fields.slug({ name: { label: 'ID' } }),
        title: fields.text({ label: 'Title' }),
        description: fields.text({ label: 'Description', multiline: true }),
        order: fields.number({ label: 'Order' }),
        enabled: fields.checkbox({ label: 'Enabled', defaultValue: true }),
      },
    }),
    // Timeline
    timeline: collection({
      label: '📅 Timeline Events',
      slugField: 'id',
      path: 'src/content/timeline/*',
      format: 'json',
      schema: {
        id: fields.slug({ name: { label: 'ID' } }),
        year: fields.text({ label: 'Year' }),
        title: fields.text({ label: 'Title' }),
        event: fields.text({ label: 'Event Description', multiline: true }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Dr. Patience', value: 'drPatience' },
            { label: 'Foundation', value: 'foundation' },
          ],
          defaultValue: 'drPatience',
        }),
        order: fields.number({ label: 'Order' }),
        enabled: fields.checkbox({ label: 'Enabled', defaultValue: true }),
      },
    }),
    // Impact Areas
    impactAreas: collection({
      label: '🌍 Impact Areas',
      slugField: 'id',
      path: 'src/content/impactAreas/*',
      format: 'json',
      schema: {
        id: fields.slug({ name: { label: 'ID' } }),
        icon: fields.text({ label: 'Icon' }),
        title: fields.text({ label: 'Title' }),
        description: fields.text({ label: 'Description', multiline: true }),
        stats: fields.text({ label: 'Stats Display' }),
        order: fields.number({ label: 'Order' }),
        enabled: fields.checkbox({ label: 'Enabled', defaultValue: true }),
      },
    }),
    // Medical Outreaches
    medicalOutreaches: collection({
      label: '🏥 Medical Outreaches',
      slugField: 'id',
      path: 'src/content/medicalOutreaches/*',
      format: 'json',
      schema: {
        id: fields.slug({ name: { label: 'ID' } }),
        title: fields.text({ label: 'Title' }),
        date: fields.text({ label: 'Date' }),
        location: fields.text({ label: 'Location' }),
        impact: fields.text({ label: 'Impact Summary' }),
        description: fields.text({ label: 'Description', multiline: true }),
        order: fields.number({ label: 'Order' }),
        enabled: fields.checkbox({ label: 'Enabled', defaultValue: true }),
      },
    }),
    // Education Initiatives
    educationInitiatives: collection({
      label: '🎓 Education Initiatives',
      slugField: 'id',
      path: 'src/content/educationInitiatives/*',
      format: 'json',
      schema: {
        id: fields.slug({ name: { label: 'ID' } }),
        title: fields.text({ label: 'Title' }),
        description: fields.text({ label: 'Description', multiline: true }),
        date: fields.text({ label: 'Date/Period' }),
        order: fields.number({ label: 'Order' }),
        enabled: fields.checkbox({ label: 'Enabled', defaultValue: true }),
      },
    }),
    // Food Security
    foodSecurity: collection({
      label: '🍲 Food Security Items',
      slugField: 'id',
      path: 'src/content/foodSecurity/*',
      format: 'json',
      schema: {
        id: fields.slug({ name: { label: 'ID' } }),
        item: fields.text({ label: 'Item Name' }),
        order: fields.number({ label: 'Order' }),
        enabled: fields.checkbox({ label: 'Enabled', defaultValue: true }),
      },
    }),
    // Memorial Activities
    memorialActivities: collection({
      label: '🕯️ Memorial Activities',
      slugField: 'id',
      path: 'src/content/memorialActivities/*',
      format: 'json',
      schema: {
        id: fields.slug({ name: { label: 'ID' } }),
        title: fields.text({ label: 'Title' }),
        description: fields.text({ label: 'Description', multiline: true }),
        when: fields.text({ label: 'When' }),
        order: fields.number({ label: 'Order' }),
        enabled: fields.checkbox({ label: 'Enabled', defaultValue: true }),
      },
    }),
    // FAQ Categories
    faqCategories: collection({
      label: '📂 FAQ Categories',
      slugField: 'id',
      path: 'src/content/faqCategories/*',
      format: 'json',
      schema: {
        id: fields.slug({ name: { label: 'ID' } }),
        category: fields.text({ label: 'Category Name' }),
        order: fields.number({ label: 'Order' }),
        enabled: fields.checkbox({ label: 'Enabled', defaultValue: true }),
      },
    }),
    // FAQ Items
    faqItems: collection({
      label: '❓ FAQ Items',
      slugField: 'id',
      path: 'src/content/faqItems/*',
      format: 'json',
      schema: {
        id: fields.slug({ name: { label: 'ID' } }),
        categoryId: fields.text({ label: 'Category ID' }),
        question: fields.text({ label: 'Question' }),
        answer: fields.text({ label: 'Answer', multiline: true }),
        order: fields.number({ label: 'Order' }),
        enabled: fields.checkbox({ label: 'Enabled', defaultValue: true }),
      },
    }),
    // Donation Amounts
    donationAmounts: collection({
      label: '💰 Donation Amounts',
      slugField: 'id',
      path: 'src/content/donationAmounts/*',
      format: 'json',
      schema: {
        id: fields.slug({ name: { label: 'ID' } }),
        amount: fields.number({ label: 'Amount (₦)' }),
        label: fields.text({ label: 'Display Label' }),
        impact: fields.text({ label: 'Impact Description' }),
        order: fields.number({ label: 'Order' }),
        enabled: fields.checkbox({ label: 'Enabled', defaultValue: true }),
      },
    }),
    // Donation Methods
    donationMethods: collection({
      label: '💳 Donation Methods',
      slugField: 'id',
      path: 'src/content/donationMethods/*',
      format: 'json',
      schema: {
        id: fields.slug({ name: { label: 'ID' } }),
        icon: fields.text({ label: 'Icon' }),
        title: fields.text({ label: 'Title' }),
        description: fields.text({ label: 'Description', multiline: true }),
        popular: fields.checkbox({ label: 'Mark as Popular', defaultValue: false }),
        content: fields.array(
          fields.object({
            label: fields.text({ label: 'Label' }),
            value: fields.text({ label: 'Value' }),
          }),
          { label: 'Content Items', itemLabel: (props) => props.fields.label.value }
        ),
        order: fields.number({ label: 'Order' }),
        enabled: fields.checkbox({ label: 'Enabled', defaultValue: true }),
      },
    }),
    // Transparency Stats
    transparencyStats: collection({
      label: '📈 Transparency Stats',
      slugField: 'id',
      path: 'src/content/transparencyStats/*',
      format: 'json',
      schema: {
        id: fields.slug({ name: { label: 'ID' } }),
        value: fields.text({ label: 'Value' }),
        label: fields.text({ label: 'Label' }),
        order: fields.number({ label: 'Order' }),
        enabled: fields.checkbox({ label: 'Enabled', defaultValue: true }),
      },
    }),
    // Financial Reports
    financialReports: collection({
      label: '📑 Financial Reports',
      slugField: 'id',
      path: 'src/content/financialReports/*',
      format: 'json',
      schema: {
        id: fields.slug({ name: { label: 'ID' } }),
        title: fields.text({ label: 'Title' }),
        date: fields.text({ label: 'Date' }),
        description: fields.text({ label: 'Description', multiline: true }),
        file: fields.text({ label: 'File Path' }),
        size: fields.text({ label: 'File Size/Type' }),
        order: fields.number({ label: 'Order' }),
        enabled: fields.checkbox({ label: 'Enabled', defaultValue: true }),
      },
    }),
    // Activity Reports
    activityReports: collection({
      label: '📄 Activity Reports',
      slugField: 'id',
      path: 'src/content/activityReports/*',
      format: 'json',
      schema: {
        id: fields.slug({ name: { label: 'ID' } }),
        title: fields.text({ label: 'Title' }),
        date: fields.text({ label: 'Date' }),
        description: fields.text({ label: 'Description', multiline: true }),
        file: fields.text({ label: 'File Path' }),
        size: fields.text({ label: 'File Size/Type' }),
        order: fields.number({ label: 'Order' }),
        enabled: fields.checkbox({ label: 'Enabled', defaultValue: true }),
      },
    }),
    // Meeting Notices
    meetingNotices: collection({
      label: '📋 Meeting Notices',
      slugField: 'id',
      path: 'src/content/meetingNotices/*',
      format: 'json',
      schema: {
        id: fields.slug({ name: { label: 'ID' } }),
        title: fields.text({ label: 'Title' }),
        date: fields.text({ label: 'Date' }),
        type: fields.text({ label: 'Meeting Type' }),
        order: fields.number({ label: 'Order' }),
        enabled: fields.checkbox({ label: 'Enabled', defaultValue: true }),
      },
    }),
    // Trust Badges
    trustBadges: collection({
      label: '🛡️ Trust Badges',
      slugField: 'id',
      path: 'src/content/trustBadges/*',
      format: 'json',
      schema: {
        id: fields.slug({ name: { label: 'ID' } }),
        icon: fields.text({ label: 'Icon' }),
        label: fields.text({ label: 'Label' }),
        order: fields.number({ label: 'Order' }),
        enabled: fields.checkbox({ label: 'Enabled', defaultValue: true }),
      },
    }),
    // Contact Info
    contactInfo: collection({
      label: '📞 Contact Information',
      slugField: 'id',
      path: 'src/content/contactInfo/*',
      format: 'json',
      schema: {
        id: fields.slug({ name: { label: 'ID' } }),
        icon: fields.text({ label: 'Icon' }),
        title: fields.text({ label: 'Title' }),
        value: fields.text({ label: 'Value', multiline: true }),
        order: fields.number({ label: 'Order' }),
        enabled: fields.checkbox({ label: 'Enabled', defaultValue: true }),
      },
    }),
    // Gallery Images
    galleryImages: collection({
      label: '🖼️ Gallery Images',
      slugField: 'id',
      path: 'src/content/galleryImages/*',
      format: 'json',
      schema: {
        id: fields.slug({ name: { label: 'ID' } }),
        src: fields.text({ label: 'Image Path' }),
        alt: fields.text({ label: 'Alt Text' }),
        caption: fields.text({ label: 'Caption' }),
        category: fields.text({ label: 'Category' }),
        order: fields.number({ label: 'Order' }),
        enabled: fields.checkbox({ label: 'Enabled', defaultValue: true }),
      },
    }),
  },
});
