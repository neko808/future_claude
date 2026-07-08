import path from 'path'
import { getPayload } from 'payload'
import { NextResponse } from 'next/server'

import config from '@/payload.config'

const assetsDir = path.resolve(process.cwd(), 'public/assets')

export async function GET() {
  const payload = await getPayload({ config })

  // Skip if already seeded.
  const existing = await payload.findGlobal({ slug: 'home', depth: 0 })
  if (existing.heroLead) {
    return NextResponse.json({ ok: true, skipped: 'already seeded' })
  }

  const upload = async (file: string, alt: string) => {
    const doc = await payload.create({
      collection: 'media',
      data: { alt },
      filePath: path.join(assetsDir, file),
    })
    return doc.id
  }

  const logo = await upload('logo.svg', 'CREATIVE logo')
  const heroBackground = await upload('opt3_copy.webp', 'Astronaut in the void')
  const suitsVideo = await upload('front_face_suit_space.mp4', 'AX-09 suit rotating')
  const helmet = await upload('helmetzx.png', 'AX-09 flower-filled bubble helmet')

  const lead = 'Pressure rated EVA systems engineered for missions beyond low orbit.'

  await payload.updateGlobal({
    slug: 'home',
    data: {
      logo,
      navLinks: [
        { label: 'SOLUTIONS' },
        { label: 'COMPANY' },
        { label: 'PRESS' },
        { label: 'SUPPORT' },
      ],
      heroTag: 'THE VOID',
      heroTitle: 'BUILT FOR THE VOID',
      heroLead: lead,
      heroCtaLabel: 'MEET THE AX 09',
      heroBackground,
      suitsTitle: 'NEXT-GEN SPACE SUITS',
      suitsLead: lead,
      suitsVideo,
      panelLabel: 'MF GR UNIT    LOW PRS\nANT SR 6823',
      suitsCtaLabel: 'MEET THE AX 09',
      memoryTitle: 'Memory',
      memoryRows: [
        { addr: '0x000689239835 b6', data: 'datax56' },
        { addr: '0x000689237395 a8', data: 'datax32' },
        { addr: '0x000689239576 d3', data: 'datax28' },
        { addr: '0x000689239827 a2', data: 'datax87' },
        { addr: '0x000689231875 b8', data: 'datax35' },
        { addr: '0x000689236987 s3', data: 'datax76' },
        { addr: '0x000689235698 c5', data: 'datax29' },
        { addr: '0x000689231368 a2', data: 'datax96' },
      ],
      stats: [
        { tag: 'THE VOID', num: '200', label: 'Missions suported' },
        { tag: 'THE VOID', num: '100', label: 'Pressure Integrity' },
        { tag: 'THE VOID', num: '0.01', label: 'Failure Rate' },
        { tag: 'THE VOID', num: 'x', label: 'Possibilities' },
      ],
      hudTitle: 'ADVANCED HUD SYSTEM',
      hudLead: lead,
      hudLifeTitle: 'LIFE SYSTEMS',
      hudLifeLead: lead,
      helmet,
      systemsTitle: 'LIFE SYSTEMS',
      systemsLead: lead,
      systemsCtaLabel: 'MEET THE AX 09',
      cards: [
        { title: 'MOBILITY', desc: 'Advanced material design for dexterity.' },
        { title: 'EVA SYSTEMS', desc: lead },
      ],
    },
  })

  return NextResponse.json({ ok: true, seeded: true })
}
