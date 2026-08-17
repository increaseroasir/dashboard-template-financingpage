export type ApprovalStatus = 'approved' | 'pending' | 'not-provided';
export type FunnelShape = 'short-form' | 'zip-survey' | 'gated-inventory';

export interface ApprovalGate {
  enabled: boolean;
  approvalStatus: ApprovalStatus;
  source: string;
}

export interface ProofItem extends ApprovalGate {
  id: string;
  alt: string;
  title: string;
  copy: string;
  image?: {
    src: string;
    width: number;
    height: number;
  };
}

export const funnelConfig = {
  route: '/lp/asta-build/',
  funnel: {
    shape: 'zip-survey' as FunnelShape,
    steps: [],
    cta: {
      label: 'Start My Request',
      destinationUrl: '',
      destinationNote:
        'Add the approved, validated request or first-step URL before enabling this CTA.',
    },
    outOfArea: {
      enabled: false,
      redirectUrl: '',
    },
  },
  brand: {
    name: 'Asta Build',
    logoText: 'Asta Build',
  },
  staging: {
    enabled: true,
    message:
      'Staging template: replace bracketed copy, approved assets, legal links, form destination, and tracking configuration before launch.',
  },
  hero: {
    eyebrow: 'Financing request',
    headline: 'A clearer way to start your [approved financing request].',
    subheadline:
      '[Replace with approved reassurance about eligibility, timing, and any terms.]',
    visual: {
      eyebrow: 'Approved visual pending',
      title: '[Add approved category imagery]',
      description:
        'Use a locally optimized Asta Build asset with explicit dimensions. Do not reuse the reference vehicles or brand artwork.',
    },
  },
  qualifier: {
    prompt: 'What best describes your request?',
    options: [
      {
        label: '[Approved option one]',
        description: 'Replace with an approved request category.',
      },
      {
        label: '[Approved option two]',
        description: 'Replace with an approved request category.',
      },
    ],
    qualifier:
      '[Replace with approved availability, eligibility, or service-area language.]',
  },
  benefit: {
    title: 'What to expect from Asta Build',
    body:
      '[Replace with an approved explanation of the customer outcome and process. Do not imply approval, rates, availability, or speed unless verified.]',
    visual: {
      title: '[Approved supporting visual pending]',
      description:
        'Use a client-owned image or illustration that directly explains the request category.',
    },
  },
  process: {
    title: 'A straightforward process',
    steps: [
      {
        number: '01',
        title: '[Approved first step]',
        description:
          '[Describe the real first action and the information the customer supplies.]',
      },
      {
        number: '02',
        title: '[Approved second step]',
        description:
          '[Describe the real review, matching, or next-step process.]',
      },
      {
        number: '03',
        title: '[Approved third step]',
        description:
          '[Describe the real handoff or outcome without unsupported timing promises.]',
      },
    ],
  },
  proof: {
    heading: 'Customer proof, when approved',
    body:
      'This structural section is intentionally gated. Add approved customer stories, media, and source records before public use.',
    items: [
      {
        id: 'proof-1',
        enabled: false,
        approvalStatus: 'pending' as ApprovalStatus,
        source: '',
        alt: '',
        title: 'Approved customer story pending',
        copy: 'Add an approved, specific customer outcome and source record.',
      },
      {
        id: 'proof-2',
        enabled: false,
        approvalStatus: 'pending' as ApprovalStatus,
        source: '',
        alt: '',
        title: 'Approved customer story pending',
        copy: 'Add an approved, specific customer outcome and source record.',
      },
      {
        id: 'proof-3',
        enabled: false,
        approvalStatus: 'pending' as ApprovalStatus,
        source: '',
        alt: '',
        title: 'Approved customer story pending',
        copy: 'Add an approved, specific customer outcome and source record.',
      },
      {
        id: 'proof-4',
        enabled: false,
        approvalStatus: 'pending' as ApprovalStatus,
        source: '',
        alt: '',
        title: 'Approved customer story pending',
        copy: 'Add an approved, specific customer outcome and source record.',
      },
      {
        id: 'proof-5',
        enabled: false,
        approvalStatus: 'pending' as ApprovalStatus,
        source: '',
        alt: '',
        title: 'Approved customer story pending',
        copy: 'Add an approved, specific customer outcome and source record.',
      },
      {
        id: 'proof-6',
        enabled: false,
        approvalStatus: 'pending' as ApprovalStatus,
        source: '',
        alt: '',
        title: 'Approved customer story pending',
        copy: 'Add an approved, specific customer outcome and source record.',
      },
    ] as ProofItem[],
  },
  comparison: {
    intro: {
      title: 'A different approach starts with clarity.',
      body:
        '[Replace with an approved explanation of why the process is structured this way.]',
    },
    conventional: {
      label: '[Current process]',
      accent: 'warm',
      items: [
        {
          title: '[Documented friction point]',
          description: '[Add a truthful, non-absolute customer friction point.]',
        },
        {
          title: '[Documented friction point]',
          description: '[Add a truthful, non-absolute customer friction point.]',
        },
        {
          title: '[Documented friction point]',
          description: '[Add a truthful, non-absolute customer friction point.]',
        },
      ],
    },
    proposed: {
      label: 'Asta Build',
      accent: 'cool',
      items: [
        {
          title: '[Approved benefit]',
          description: '[Add a verified process benefit with no unsupported promise.]',
        },
        {
          title: '[Approved benefit]',
          description: '[Add a verified process benefit with no unsupported promise.]',
        },
        {
          title: '[Approved benefit]',
          description: '[Add a verified process benefit with no unsupported promise.]',
        },
      ],
    },
  },
  finalCta: {
    title: 'Ready to take the next step?',
    body:
      '[Replace with approved request instructions and any verified time or information expectation.]',
  },
  legal: {
    copyright: '© 2026 Asta Build. All rights reserved.',
    links: [
      { label: 'Privacy policy', href: '', approvalStatus: 'not-provided' as ApprovalStatus },
      { label: 'Terms of use', href: '', approvalStatus: 'not-provided' as ApprovalStatus },
      { label: 'SMS terms', href: '', approvalStatus: 'not-provided' as ApprovalStatus },
    ],
    consent:
      '[Add approved consent language, including the rendered version and timestamp capture requirement, before enabling submission.]',
  },
  tracking: {
    enabled: false,
    pixelId: '',
    conversionApiEndpoint: '',
    conversionEventName: '',
    testEventCode: '',
  },
} as const;

export const approvedProof = funnelConfig.proof.items.filter(
  (item) => item.enabled && item.approvalStatus === 'approved' && item.image,
);

export const hasLiveCta = Boolean(funnelConfig.funnel.cta.destinationUrl);
