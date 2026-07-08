import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home',
  label: 'Home Page',
  access: {
    read: () => true,
  },
  admin: {
    description: 'Edit every section of the "Built for the Void" landing page.',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Nav',
          fields: [
            { name: 'logo', type: 'upload', relationTo: 'media', label: 'Logo image' },
            {
              name: 'navLinks',
              type: 'array',
              label: 'Nav links',
              fields: [{ name: 'label', type: 'text', required: true }],
            },
          ],
        },
        {
          label: 'Hero',
          fields: [
            { name: 'heroTag', type: 'text', label: 'Small tag', defaultValue: 'THE VOID' },
            { name: 'heroTitle', type: 'text', defaultValue: 'BUILT FOR THE VOID' },
            { name: 'heroLead', type: 'textarea' },
            { name: 'heroCtaLabel', type: 'text', label: 'Button label', defaultValue: 'MEET THE AX 09' },
            { name: 'heroBackground', type: 'upload', relationTo: 'media', label: 'Background image' },
          ],
        },
        {
          label: 'Suits',
          fields: [
            { name: 'suitsTitle', type: 'text', defaultValue: 'NEXT-GEN SPACE SUITS' },
            { name: 'suitsLead', type: 'textarea' },
            { name: 'suitsVideo', type: 'upload', relationTo: 'media', label: 'Panel video' },
            { name: 'panelLabel', type: 'textarea', label: 'Panel label (HUD text)' },
            { name: 'suitsCtaLabel', type: 'text', label: 'Button label', defaultValue: 'MEET THE AX 09' },
            { name: 'memoryTitle', type: 'text', defaultValue: 'Memory' },
            {
              name: 'memoryRows',
              type: 'array',
              label: 'Memory readout rows',
              fields: [
                { name: 'addr', type: 'text', required: true },
                { name: 'data', type: 'text', required: true },
              ],
            },
          ],
        },
        {
          label: 'Stats',
          fields: [
            {
              name: 'stats',
              type: 'array',
              label: 'Stat cards',
              fields: [
                { name: 'tag', type: 'text', defaultValue: 'THE VOID' },
                { name: 'num', type: 'text', required: true },
                { name: 'label', type: 'text', required: true },
              ],
            },
          ],
        },
        {
          label: 'HUD',
          fields: [
            { name: 'hudTitle', type: 'text', defaultValue: 'ADVANCED HUD SYSTEM' },
            { name: 'hudLead', type: 'textarea' },
            { name: 'hudLifeTitle', type: 'text', label: 'Life systems title', defaultValue: 'LIFE SYSTEMS' },
            { name: 'hudLifeLead', type: 'textarea', label: 'Life systems lead' },
            { name: 'helmet', type: 'upload', relationTo: 'media', label: 'Helmet image' },
          ],
        },
        {
          label: 'Systems',
          fields: [
            { name: 'systemsTitle', type: 'text', defaultValue: 'LIFE SYSTEMS' },
            { name: 'systemsLead', type: 'textarea' },
            { name: 'systemsCtaLabel', type: 'text', label: 'Button label', defaultValue: 'MEET THE AX 09' },
            {
              name: 'cards',
              type: 'array',
              label: 'Feature cards',
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'desc', type: 'textarea', required: true },
              ],
            },
          ],
        },
        {
          label: 'News',
          fields: [
            { name: 'newsTitle', type: 'text', defaultValue: 'LATEST NEWS' },
            { name: 'newsCtaLabel', type: 'text', label: 'Button label', defaultValue: 'SEE ALL NEWS' },
            { name: 'newsCtaUrl', type: 'text', label: 'Button link', defaultValue: '#' },
            {
              name: 'newsItems',
              type: 'array',
              label: 'News cards',
              fields: [
                { name: 'date', type: 'text', required: true },
                { name: 'title', type: 'text', required: true },
                { name: 'url', type: 'text', label: 'Link', defaultValue: '#' },
                { name: 'image', type: 'upload', relationTo: 'media', label: 'Thumbnail' },
              ],
            },
          ],
        },
        {
          label: 'Wide CTA',
          fields: [
            { name: 'wideTag', type: 'text', label: 'Small tag', defaultValue: 'THE VOID' },
            { name: 'wideTitle', type: 'text', defaultValue: 'BUILT FOR THE VOID' },
            { name: 'wideLead', type: 'textarea' },
            { name: 'wideCtaLabel', type: 'text', label: 'Button label', defaultValue: 'MEET THE AX 09' },
          ],
        },
        {
          label: 'Footer',
          fields: [
            { name: 'footerLogo', type: 'upload', relationTo: 'media', label: 'Footer wordmark' },
            {
              name: 'footerLinks',
              type: 'array',
              label: 'Footer links',
              fields: [
                { name: 'label', type: 'text', required: true },
                { name: 'url', type: 'text', defaultValue: '#' },
              ],
            },
            {
              name: 'footerSocials',
              type: 'array',
              label: 'Social links',
              admin: { description: 'Order maps to the icons: Facebook, X, Instagram, TikTok.' },
              fields: [
                {
                  name: 'platform',
                  type: 'select',
                  required: true,
                  defaultValue: 'facebook',
                  options: [
                    { label: 'Facebook', value: 'facebook' },
                    { label: 'X', value: 'x' },
                    { label: 'Instagram', value: 'instagram' },
                    { label: 'TikTok', value: 'tiktok' },
                  ],
                },
                { name: 'url', type: 'text', required: true, defaultValue: '#' },
              ],
            },
            {
              name: 'copyright',
              type: 'text',
              defaultValue: '© Copyright 2026. Creative Technologies',
            },
          ],
        },
      ],
    },
  ],
}
