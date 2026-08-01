# MH Group B

我把客人的 **“premium, luxury, urban NY style”** 定義成「高級曼哈頓住宅＋精品室內建築雜誌」風格：深色城市感、精準網格、高對比襯線字、香檳金細節、大片住宅攝影與克制的動態，而不是計程車、自由女神、磚牆或俗氣的紐約元素。

目前附件中我看到的是 **Logo** 與完整 **Home Page concept**，沒有看到獨立的 Portfolio Page screenshot。因此以下 Prompt 已設定：Lovable 若同時收到客人核准的 Portfolio reference，必須照該圖；若沒有，才使用首頁 Featured Projects 的視覺系統延伸。整體亦保留你的 Cloudflare、routing、metadata、圖片資產與 mobile QA 規則，但已把原本 Footer Credit Law 完全替換，不會出現 Bluluma、Lovable、Web Design by 或 Powered by。fileciteturn0file0

```text

You are a senior luxury brand web designer, UX architect, front-end engineer, and Cloudflare deployment specialist.

Build a COMPLETE, CLIENT-READY website for:

MH Group LLC

Location: New York, NY

This is a new official company website. Complete the entire build in one project.

Do not create a rough prototype.

Do not leave unfinished sections.

Do not use lorem ipsum.

Do not use placeholder project names.

Do not invent business claims, awards, certifications, team members, statistics, addresses, phone numbers, email addresses, testimonials, or services.

Do not fabricate property projects or use generated images that could be mistaken for MH Group LLC’s completed work.

==================================================

1. PROJECT PRIORITY HIERARCHY

==================================================

When instructions conflict, follow this priority order:

TIER 1 — CLIENT-SPECIFIC NON-NEGOTIABLE RULES

TIER 2 — ENGINEERING AND DEPLOYMENT RULES

TIER 3 — VERIFIED BUSINESS CONTENT

TIER 4 — APPROVED HOME AND PORTFOLIO LAYOUT REFERENCES

TIER 5 — MH GROUP LLC VISUAL DIRECTION

TIER 6 — GENERAL QUALITY AND RESPONSIVE RULES

The client-approved screenshots control the layout.

Do not redesign the approved Home Page or Portfolio Page into a different template.

Improve the approved concepts only through:

- more precise spacing

- stronger responsive behaviour

- improved typography

- better image crops

- cleaner alignment

- refined hover states

- stronger accessibility

- better performance

- more polished visual hierarchy

Fidelity is more important than adding new sections.

==================================================

2. CLIENT-SPECIFIC NON-NEGOTIABLE RULES

==================================================

These rules override any conflicting general website rules.

A. FOOTER COPYRIGHT RULE

The bottom copyright bar must display only:

© [CURRENT YEAR] MH Group LLC. All rights reserved.

Generate the year dynamically in code.

Do not display any of the following anywhere on the public website:

- Web Design by Bluluma

- Designed by Bluluma

- Website by Bluluma

- Powered by Bluluma

- Powered by Lovable

- Made with Lovable

- Designed by any agency

- Developer credits

- Builder credits

- Platform credits

Do not include Bluluma, SwiftLift, SwiftSite, Sonykun Design, Lovable, or any web designer attribution in the footer, source-visible interface, metadata, Open Graph text, accessibility labels, or public-facing legal pages.

Privacy Policy and Terms of Use links may appear separately only if real legal pages and actual legal content have been supplied. Do not create fake legal documents.

B. PROJECT IMAGE FORMAT RULE

Every Portfolio and Project photograph must be a physical WebP file committed to the repository.

All project photographs must:

- use the .webp extension

- be stored inside /public/images/projects/

- use descriptive lowercase kebab-case filenames

- be referenced with absolute repository paths

- include explicit width and height attributes

- include meaningful alt text

- use responsive object positioning

- lazy-load unless used above the fold

Use these filenames for the approved featured projects:

/public/images/projects/upper-east-side-residence.webp

/public/images/projects/tribeca-loft.webp

/public/images/projects/midtown-apartment.webp

/public/images/projects/greenwich-village-penthouse.webp

If supplied source files are JPG, JPEG, PNG, HEIC, TIFF, or another raster format, convert them to WebP during development and commit the final WebP files.

Do not reference the original JPG, JPEG, PNG, HEIC, or TIFF project photographs after conversion.

Do not perform image conversion during the production build. The final optimized WebP files must already exist in the repository before deployment.

Use approximately 82–86 WebP quality. Preserve enough resolution for large luxury real estate layouts without serving unnecessarily oversized files.

The final codebase must contain zero JPG, JPEG, or PNG references for Portfolio and Project photography.

Logos, icons, and vector graphics should remain SVG where appropriate.

C. REAL PROJECT AUTHENTICITY RULE

Use only client-supplied project photography for completed projects.

Do not generate fake project images.

Do not download unrelated luxury apartment stock photos and present them as completed MH Group LLC projects.

Do not crop project photography out of the approved webpage screenshot.

Do not change the project location or project service description.

If an approved project does not have a supplied image, do not invent one. The project should remain unpublished until a real image is available.

==================================================

3. APPROVED REFERENCE FILES

==================================================

Use the uploaded MH Group LLC logo reference as the brand authority.

Use the uploaded “MH Group Concept” screenshot as the Home Page layout authority.

If a separate client-approved Portfolio or Projects Page screenshot is uploaded into this Lovable project, that screenshot is the absolute layout authority for the Portfolio Page.

For the approved screenshots, match as closely as possible:

- section order

- section proportions

- hero composition

- text alignment

- image placement

- image-to-text balance

- grid structure

- visual rhythm

- header composition

- footer composition

- dark and light section alternation

- project card proportions

- typography scale relationships

- CTA positioning

Do not simplify the approved layout into standard builder sections.

Do not replace it with generic shadcn cards.

Do not turn the website into a rounded-card SaaS template.

Do not use oversized gradient blobs.

Do not use floating decorative shapes.

Do not introduce horizontal marquee text.

Do not use glassmorphism as the dominant visual language.

Do not use pill-shaped buttons.

The approved concept should remain clearly recognizable after implementation.

==================================================

4. BRAND AND LOGO EXECUTION

==================================================

Brand name:

MH Group LLC

Primary brand colour:

#133846

Accent colour:

#BF935B

Recreate the approved logo as a clean, precise SVG using the supplied logo reference.

The logo includes:

- a minimal architectural geometric symbol

- the MH Group LLC wordmark

- warm gold colouring

- a refined, understated luxury appearance

For the website header and footer, use the horizontal logo lockup shown in the approved Home Page concept:

architectural icon + MH Group LLC wordmark

Do not use the circular avatar background as the normal header logo.

Do not redesign the logo symbol.

Do not replace it with a generic building icon.

Do not distort its proportions.

Do not add gradients, bevels, shadows, or 3D effects to the logo.

Prepare:

- /public/images/logo-mh-group-horizontal.svg

- /public/images/logo-mh-group-icon.svg

- /public/favicon.svg

Use the gold logo on dark backgrounds.

Create a dark teal or black logo variation only if necessary on light backgrounds, while preserving the original symbol geometry.

==================================================

5. VISUAL DIRECTION: PREMIUM URBAN NEW YORK

==================================================

Interpret “premium, luxury, urban New York style” as:

A sophisticated Manhattan residential and architectural editorial experience combining:

- luxury New York real estate

- boutique interior architecture

- refined property management

- premium hospitality

- high-end editorial publishing

- discreet private-client service

The website should feel appropriate for:

- a Manhattan luxury residence

- an architectural design publication

- a private real estate advisory company

- a premium interior and move-in service

The design must feel urban and New York-based without relying on clichés.

Do not use:

- yellow taxi graphics

- subway graphics

- street-sign graphics

- Statue of Liberty illustrations

- Times Square neon styling

- exposed brick as a decorative cliché

- generic New York skyline vectors

- fake gold foil effects

- excessive black-and-gold luxury styling

- nightclub visual styling

New York should be communicated through:

- architectural precision

- editorial composition

- Manhattan residential photography

- disciplined grid systems

- tall vertical proportions

- confident typography

- restrained asymmetry

- deep urban colour

- subtle brass detailing

- high-quality white space

- sophisticated image cropping

==================================================

6. DESIGN SYSTEM

==================================================

PRIMARY COLOUR

#133846

Use for:

- main dark backgrounds

- header after scrolling

- footer

- dark content sections

- overlays

- primary text on light backgrounds when appropriate

ACCENT COLOUR

#BF935B

Use selectively for:

- eyebrow labels

- active navigation underline

- fine rules

- icon outlines

- button backgrounds

- small numeric details

- project hover details

- subtle borders

Do not overuse the accent colour.

It should feel like brushed brass, not bright yellow or orange.

SUPPORTING COLOURS

Deep Urban Teal:

#0B252E

Darkest Background:

#08191F

Warm Ivory:

#F4F0E8

Soft Paper:

#FAF8F3

Main Dark Text:

#172126

Muted Text:

#687277

Warm Border:

rgba(191, 147, 91, 0.38)

Light Border:

rgba(19, 56, 70, 0.16)

Dark Section Text:

#F4F0E8

White:

#FFFFFF

Avoid pure black for large surfaces unless necessary.

Use deep teal-black tones instead.

==================================================

7. TYPOGRAPHY

==================================================

The approved concept uses a luxury editorial contrast between an elegant display serif and a clean modern sans serif.

Use:

English display headings:

Bodoni Moda

English body, navigation, buttons, labels:

Manrope

Traditional Chinese display headings:

Noto Serif TC

Traditional Chinese body, navigation, buttons, labels:

Noto Sans TC

Do not use the serif font for long body paragraphs.

Typography characteristics:

- strong high-contrast serif headlines

- elegant but readable

- compact headline line-height

- restrained uppercase labels

- generous label tracking

- clean modern body copy

- controlled paragraph widths

- no oversized body text

- no ultra-thin body weights

Desktop homepage hero heading:

approximately 68–82px using a fluid clamp

Mobile homepage hero heading:

approximately 42–50px using a fluid clamp

Major section headings:

approximately 44–58px desktop

approximately 34–42px mobile

Body text:

16–18px desktop

16px mobile

Eyebrow labels:

11–13px

uppercase

0.16em–0.22em letter spacing

Navigation:

12–14px

medium or semibold

uppercase or carefully tracked small caps

Do not let a heading end with a single orphaned word.

Use intentional line breaks matching the approved concept.

==================================================

8. SHAPE AND COMPONENT LANGUAGE

==================================================

Use:

- square or nearly square buttons

- approximately 0–4px corner radius

- thin borders

- restrained brass rules

- full-bleed project images

- clean editorial columns

- precise alignment

- visible negative space

- architectural line icons

Do not use:

- rounded-2xl cards

- pill buttons

- cartoon illustrations

- bubbly UI

- generic dashboard components

- heavy shadows

- thick borders

- large glowing gradients

Primary button:

- gold background

- dark teal text

- uppercase label

- right-arrow icon

- subtle darkening or upward transition on hover

Secondary button:

- transparent background

- thin gold border

- ivory or dark teal text depending on context

- same dimensions and typography as the primary button

Use one consistent button system throughout the website.

==================================================

9. WEBSITE STRUCTURE

==================================================

Create these public routes:

/

Home

/projects

Projects

/services

Services

/our-philosophy

Our Philosophy

/contact

Contact

Only create individual project detail pages when real content and real project images are available for that project.

Do not create empty project detail pages.

Use React Router.

All internal page changes must scroll to the top.

Every route must work through:

- internal navigation

- direct URL access

- browser refresh

- copied links

==================================================

10. HEADER

==================================================

Match the approved screenshot.

Desktop header:

- overlay the top of the homepage hero

- approximately 76–84px tall

- horizontally aligned logo and navigation

- logo on the left

- navigation centred or positioned across the remaining header space

- language switch on the right

- comfortable spacing

- no wrapped navigation labels

Navigation:

HOME

PROJECTS

SERVICES

OUR PHILOSOPHY

CONTACT

Language control:

EN | 中文

Active navigation:

- gold text or gold underline

- thin and restrained

- no pill background

When the user scrolls:

- transition to a solid or slightly translucent #133846 header

- maintain strong readability

- use a subtle bottom border

- avoid heavy blur effects

Mobile header:

- logo on the left

- accessible menu button on the right

- full-screen or full-width dark menu panel

- language switch included inside the menu

- no navigation overflow

- no tiny touch targets

- no horizontal scrolling

==================================================

11. HOME PAGE — FOLLOW THE APPROVED CONCEPT

==================================================

The Home Page section order must remain:

1. Header and hero

2. Integrated services overview

3. Featured projects

4. Four-step process

5. Our philosophy split section

6. Maggie Huang Team partnership section

7. Full-width final CTA

8. Footer

9. Copyright bar

Do not reorder these sections.

--------------------------------------------------

11.1 HERO

--------------------------------------------------

Match the approved split hero composition.

Desktop composition:

- approximately 38–42% editorial text zone on the left

- approximately 58–62% luxury residential image zone on the right

- full-width hero

- approximately 82–92svh

- dark teal colour field and subtle gradient connecting both sides

- image remains clearly visible

- text remains fully readable

- header overlays the hero

Use a real supplied Manhattan residential image.

Do not fabricate a completed MH Group LLC project for the hero unless the image is confirmed as actual company work.

Eyebrow:

ONE PARTNER. EVERY STEP HOME.

Headline:

Your All-in-One

Real Estate & Home

Solution in New York

Supporting copy:

From buying or selling to managing, designing, furnishing, and moving in — we take care of everything so you can enjoy the results.

Primary CTA:

EXPLORE OUR SERVICES

Link to:

/services

Secondary CTA:

VIEW OUR PROJECTS

Link to:

/projects

Include the short horizontal gold rule shown in the concept.

Mobile hero:

- use a full-bleed background image

- apply a dark teal gradient overlay

- position all copy above the image

- preserve the same headline wording

- maintain at least 20px side padding

- stack buttons cleanly

- do not shrink the headline until it loses visual authority

--------------------------------------------------

11.2 SERVICES OVERVIEW

--------------------------------------------------

Background:

Warm Ivory or Soft Paper

Eyebrow:

INTEGRATED. SEAMLESS. EXCEPTIONAL.

Heading:

A One-Stop Solution for Your Home Journey

Create four equal service columns on desktop.

Use refined custom architectural line icons in the accent colour.

Do not use generic filled icon circles.

Service 1:

REAL ESTATE

SALES & PURCHASE

Expert guidance for buying, selling, and investing in residential properties across Manhattan.

Service 2:

PROPERTY

MANAGEMENT

Comprehensive management services that protect your investment and maximize value.

Service 3:

RENOVATION & PROJECT

MANAGEMENT

End-to-end renovation management with trusted contractors and meticulous attention to detail.

Service 4:

FURNITURE, STYLING &

MOVE-IN SERVICE

Curated furniture selection, professional styling, and seamless move-in for a perfect start.

Desktop:

- four columns

- subtle vertical dividers

- equal visual height

- centred icons and headings

- readable paragraph widths

Tablet:

- two columns

Mobile:

- one column

- horizontal separators instead of cramped columns

--------------------------------------------------

11.3 FEATURED PROJECTS

--------------------------------------------------

Background:

#133846 or #0B252E

Eyebrow:

FEATURED PROJECTS

Heading:

Spaces We Transform

CTA:

VIEW ALL PROJECTS

Link to:

/projects

Display these four approved projects in this order:

1. UPPER EAST SIDE RESIDENCE

Interior Renovation & Furnishing

2. TRIBECA LOFT

Full Renovation & Design

3. MIDTOWN APARTMENT

Interior Design & Styling

4. GREENWICH VILLAGE PENTHOUSE

Furnishing & Move-In Service

Use only the matching real WebP project photographs.

Desktop:

- four editorial image cards in one row

- minimal gaps

- strong consistent image height

- no rounded corners

- titles positioned within a subtle bottom gradient overlay

- use ivory titles and muted ivory service descriptions

Hover:

- slight image scale, no more than approximately 1.025

- slightly stronger bottom overlay

- thin gold line or arrow appears

- 250–400ms transition

- no dramatic parallax

Tablet:

- two-column grid

Mobile:

- one-column editorial stack

- full-width imagery

- no tiny carousel controls

--------------------------------------------------

11.4 PROCESS

--------------------------------------------------

Background:

Warm Ivory

Eyebrow:

OUR PROCESS

Heading:

A Seamless Experience from Start to Finish

Create four horizontal process steps on desktop with restrained connecting arrows or fine rules.

Step 01:

DISCOVER

We listen to your goals and understand your lifestyle and investment needs.

Step 02:

PLAN

We craft a tailored strategy with the right property, design, and service plan.

Step 03:

MANAGE

Our team executes every detail with precision, transparency, and constant communication.

Step 04:

ENJOY

Move in with confidence and enjoy a home that reflects your vision.

Use:

- large gold step numbers

- fine architectural icons

- black or dark teal step titles

- subtle directional connecting lines

Mobile:

- display as a vertical sequence

- preserve step numbers

- use one subtle vertical connecting line

- do not squeeze four steps into a horizontal row

--------------------------------------------------

11.5 OUR PHILOSOPHY

--------------------------------------------------

Match the approved horizontal split composition.

Left side:

dark teal editorial text panel

Right side:

large real interior photograph

Eyebrow:

OUR PHILOSOPHY

Heading:

Built on Trust.

Driven by Excellence.

Copy:

At MH Group LLC, we believe a home is more than a space—it’s where life happens and wealth grows. We’re committed to delivering unparalleled service, craftsmanship, and value at every step.

Values:

INTEGRITY

EXPERTISE

EXCELLENCE

Use three small gold architectural line icons.

Do not add additional value claims.

Desktop:

approximately 47% copy and 53% image

Mobile:

text first

image second

--------------------------------------------------

11.6 MAGGIE HUANG TEAM PARTNERSHIP

--------------------------------------------------

Match the approved white split section.

Left side:

- MH Group architectural icon

- partnership label

- heading

- paragraph

- gold CTA

Right side:

- supplied Maggie Huang Team group photograph

- monochrome or carefully controlled neutral treatment matching the approved screenshot

Eyebrow:

In Partnership with

Heading:

The Maggie Huang Team

Copy:

As the parent company, MH Group LLC provides the space-extended services and resources that power The Maggie Huang Team’s real estate expertise and client success.

CTA:

LEARN MORE ABOUT THE MAGGIE HUANG TEAM

Use only the verified official Maggie Huang Team URL if it has been supplied in the project materials.

If no verified external URL has been supplied, link the CTA to:

/our-philosophy#partnership

Do not invent an external URL.

--------------------------------------------------

11.7 FINAL CTA

--------------------------------------------------

Create a full-width CTA using a real New York city or residential view supplied by the client.

Apply a dark teal overlay.

Heading:

Ready to Begin Your Journey?

Supporting copy:

Let us take care of the details, so you can enjoy the possibilities.

Button:

GET IN TOUCH

Link to:

/contact

Keep the section refined and relatively compact.

Do not turn it into a large sales funnel banner.

==================================================

12. PROJECTS / PORTFOLIO PAGE

==================================================

The page navigation label must be:

PROJECTS

The route must be:

/projects

Use the client-approved Portfolio Page screenshot as the layout authority whenever that screenshot is available in the Lovable project.

Match its:

- hero composition

- project grid

- card dimensions

- image order

- typography

- whitespace

- filter or navigation system

- project information placement

- dark and light section sequence

Do not reinterpret an approved Portfolio Page screenshot into a generic gallery.

If no separate Portfolio Page screenshot is available, use the following fallback extension of the approved Home Page design.

--------------------------------------------------

12.1 PORTFOLIO FALLBACK HERO

--------------------------------------------------

Background:

#133846

Eyebrow:

OUR PROJECTS

Heading:

Spaces We Transform

Use restrained editorial spacing and one real wide project photograph.

Do not add invented marketing paragraphs.

--------------------------------------------------

12.2 PORTFOLIO FALLBACK GRID

--------------------------------------------------

Use a premium 12-column editorial grid rather than identical boxed cards.

Desktop fallback composition:

- first project: 7 columns

- second project: 5 columns

- third project: 5 columns

- fourth project: 7 columns

Alternate image proportions to create an architectural editorial rhythm while maintaining alignment.

Projects:

UPPER EAST SIDE RESIDENCE

Interior Renovation & Furnishing

TRIBECA LOFT

Full Renovation & Design

MIDTOWN APARTMENT

Interior Design & Styling

GREENWICH VILLAGE PENTHOUSE

Furnishing & Move-In Service

Use:

- full-width WebP imagery

- no rounded corners

- project title below or over the lower image edge

- location and service hierarchy

- thin gold lines

- generous vertical spacing

- no unnecessary card backgrounds

- no fake project dates

- no fake project sizes

- no fake budgets

- no fake client names

Do not create filters unless filters appear in the approved Portfolio screenshot or real project categories have been supplied.

Project cards should link only to existing completed project detail pages.

If no detail page content exists, the cards should remain non-deceptive visual entries and must not lead to empty pages.

==================================================

13. SERVICES PAGE

==================================================

Route:

/services

Page title:

Services | MH Group LLC

Use the same four verified services.

Create:

1. restrained editorial hero

2. four alternating service sections

3. approved four-step process

4. final contact CTA

Services:

REAL ESTATE SALES & PURCHASE

Expert guidance for buying, selling, and investing in residential properties across Manhattan.

PROPERTY MANAGEMENT

Comprehensive management services that protect your investment and maximize value.

RENOVATION & PROJECT MANAGEMENT

End-to-end renovation management with trusted contractors and meticulous attention to detail.

FURNITURE, STYLING & MOVE-IN SERVICE

Curated furniture selection, professional styling, and seamless move-in for a perfect start.

Use only verified imagery.

Do not invent detailed service deliverables, commission structures, guarantees, neighbourhood coverage, response times, pricing, or legal claims.

==================================================

14. OUR PHILOSOPHY PAGE

==================================================

Route:

/our-philosophy

Page title:

Our Philosophy | MH Group LLC

Create:

1. editorial page hero

2. Built on Trust. Driven by Excellence. section

3. Integrity, Expertise, Excellence values

4. Maggie Huang Team partnership section with id="partnership"

5. final contact CTA

Use only the approved philosophy and partnership copy already provided.

Do not invent a company history, founder biography, timeline, staff roster, mission statistics, awards, or client numbers.

==================================================

15. CONTACT PAGE

==================================================

Route:

/contact

Page title:

Contact | MH Group LLC

Use the same visual system:

- dark teal hero

- warm ivory contact area

- restrained gold details

- strong editorial typography

- clean layout

Heading:

Ready to Begin Your Journey?

Supporting copy:

Let us take care of the details, so you can enjoy the possibilities.

Location:

New York, NY

Use the exact verified phone number, email address, and social links from the supplied client materials.

Do not guess information that is unclear in a screenshot.

Do not manufacture contact information.

Do not add social icons unless valid official URLs have been supplied.

Do not create a fake form submission endpoint.

A contact form may be displayed only when a real working endpoint, Resend integration, or other verified submission method is configured.

When a working form is available, use these labels:

Full Name

Email Address

Phone Number

Service of Interest

Project or Property Details

Preferred Contact Method

Submit Inquiry

Include:

- clear validation

- keyboard accessibility

- visible error messages

- visible success state

- bot protection

- no fake success confirmation

Do not embed a map unless a complete verified street address is supplied.

==================================================

16. ENGLISH AND TRADITIONAL CHINESE

==================================================

Preserve the approved header control:

EN | 中文

Implement an actual language switch.

Use:

English code:

en

Traditional Chinese code:

zh-TW

Store the user’s selection in localStorage using:

mhgroup-language

Update the HTML lang attribute when the language changes.

Do not reload the page unnecessarily.

Keep the same layout in both languages.

Do not use Simplified Chinese.

Use these Traditional Chinese translations.

NAVIGATION

HOME

首頁

PROJECTS

項目案例

SERVICES

服務

OUR PHILOSOPHY

我們的理念

CONTACT

聯絡我們

HERO

ONE PARTNER. EVERY STEP HOME.

一站式夥伴，陪您完成家的每一步。

Your All-in-One Real Estate & Home Solution in New York

您在紐約的全方位房地產與居家服務方案

From buying or selling to managing, designing, furnishing, and moving in — we take care of everything so you can enjoy the results.

從買賣房產，到物業管理、設計、裝修、家具配置與入住安排，我們統籌每一個環節，讓您專注享受成果。

EXPLORE OUR SERVICES

探索我們的服務

VIEW OUR PROJECTS

查看項目案例

SERVICES OVERVIEW

INTEGRATED. SEAMLESS. EXCEPTIONAL.

整合．無縫．卓越

A One-Stop Solution for Your Home Journey

一站式成就您的理想家居旅程

REAL ESTATE SALES & PURCHASE

房地產買賣

Expert guidance for buying, selling, and investing in residential properties across Manhattan.

提供住宅買賣與投資的專業指導，服務範圍涵蓋曼哈頓。

PROPERTY MANAGEMENT

物業管理

Comprehensive management services that protect your investment and maximize value.

全面的物業管理服務，協助保護您的投資並提升物業價值。

RENOVATION & PROJECT MANAGEMENT

裝修與項目管理

End-to-end renovation management with trusted contractors and meticulous attention to detail.

從規劃到完成的全程裝修管理，配合值得信賴的承包商，嚴謹掌握每一項細節。

FURNITURE, STYLING & MOVE-IN SERVICE

家具配置、空間造型與入住服務

Curated furniture selection, professional styling, and seamless move-in for a perfect start.

精選家具、專業空間造型與無縫入住安排，讓新居從第一天起就完整到位。

PROJECTS

FEATURED PROJECTS

精選項目

OUR PROJECTS

我們的項目

Spaces We Transform

我們改造的空間

VIEW ALL PROJECTS

查看所有項目

UPPER EAST SIDE RESIDENCE

上東區住宅

Interior Renovation & Furnishing

室內翻新與家具配置

TRIBECA LOFT

翠貝卡閣樓住宅

Full Renovation & Design

全面翻新與設計

MIDTOWN APARTMENT

中城公寓

Interior Design & Styling

室內設計與空間造型

GREENWICH VILLAGE PENTHOUSE

格林威治村頂層住宅

Furnishing & Move-In Service

家具配置與入住服務

PROCESS

OUR PROCESS

服務流程

A Seamless Experience from Start to Finish

從開始到完成的無縫體驗

DISCOVER

了解需求

We listen to your goals and understand your lifestyle and investment needs.

我們聆聽您的目標，深入了解您的生活方式與投資需求。

PLAN

規劃方案

We craft a tailored strategy with the right property, design, and service plan.

我們根據合適的物業、設計方向與服務內容，制定專屬策略。

MANAGE

統籌執行

Our team executes every detail with precision, transparency, and constant communication.

我們以精準、透明與持續溝通的方式，統籌執行每一項細節。

ENJOY

安心入住

Move in with confidence and enjoy a home that reflects your vision.

安心入住，享受真正體現您理想與品味的家。

PHILOSOPHY

OUR PHILOSOPHY

我們的理念

Built on Trust. Driven by Excellence.

以信任為本，以卓越為準則。

At MH Group LLC, we believe a home is more than a space—it’s where life happens and wealth grows. We’re committed to delivering unparalleled service, craftsmanship, and value at every step.

在 MH Group LLC，我們相信家不只是一個空間，更是生活發生與資產成長的地方。我們致力於在每一個環節提供卓越服務、精湛品質與長期價值。

INTEGRITY

誠信

EXPERTISE

專業

EXCELLENCE

卓越

PARTNERSHIP

In Partnership with

合作夥伴

The Maggie Huang Team

The Maggie Huang Team

As the parent company, MH Group LLC provides the space-extended services and resources that power The Maggie Huang Team’s real estate expertise and client success.

作為母公司，MH Group LLC 提供延伸服務與資源，協助 The Maggie Huang Team 強化其房地產專業與客戶服務成果。

LEARN MORE ABOUT THE MAGGIE HUANG TEAM

進一步了解 The Maggie Huang Team

FINAL CTA

Ready to Begin Your Journey?

準備開始您的家居旅程嗎？

Let us take care of the details, so you can enjoy the possibilities.

讓我們處理所有細節，您只需專注享受更多可能。

GET IN TOUCH

聯絡我們

==================================================

17. IMAGE PIPELINE

==================================================

This website will deploy through GitHub to Cloudflare.

Never use:

- lovable-uploads

- /__l5e/

- blob URLs

- temporary preview URLs

- builder-only asset references

- local absolute computer paths

- base64 images in normal page content

Every permanent visual asset must be:

A. a physical file inside /public/images/

or

B. a verified direct external URL when it is not project photography

Project photography is an exception to external hotlinking.

All project photography must be downloaded, converted to WebP, committed to /public/images/projects/, and served locally from the repository.

Recommended asset structure:

/public/images/

  logo-mh-group-horizontal.svg

  logo-mh-group-icon.svg

  favicon.svg

  og-image.webp

  home/

    home-hero-new-york-residence.webp

    home-philosophy-interior.webp

    home-maggie-huang-team.webp

    home-final-cta-new-york.webp

  projects/

    upper-east-side-residence.webp

    tribeca-loft.webp

    midtown-apartment.webp

    greenwich-village-penthouse.webp

Use WebP for all normal photographic assets whenever possible, including hero, interiors, team photography, and CTA backgrounds.

Do not upscale small images until they become visibly soft.

Do not stretch images.

Use intentional object-position values for important compositions.

Hero image:

loading="eager"

fetchpriority="high"

Below-the-fold images:

loading="lazy"

Always include width and height to reduce layout shift.

Before completion, search the entire codebase and confirm zero occurrences of:

lovable-uploads

__l5e

.jpg

.jpeg

The .jpg and .jpeg restriction applies especially to all project and portfolio photo references.

==================================================

18. RESPONSIVE BEHAVIOUR

==================================================

Validate at approximately:

375px

768px

1024px

1440px

1920px

Mobile side padding:

minimum 20px

Desktop content width:

approximately 1240–1360px depending on section

Use fluid spacing with clamp() where useful.

Requirements:

- no text touches the viewport edge

- no horizontal scrolling

- no navigation wrapping

- no clipped headings

- no overlapping buttons

- no tiny project labels

- no broken Chinese line wrapping

- no footer column overflow

- no sticky element blocking content

- no oversized empty sections

- no forced desktop layouts on mobile

The mobile version must feel intentionally designed, not merely stacked.

==================================================

19. MOTION AND INTERACTION

==================================================

Use restrained motion only.

Allowed:

- subtle navigation underline

- button arrow movement

- image scale up to approximately 1.025

- short fade or upward reveal

- smooth header background transition

- subtle opacity changes

- smooth anchor scrolling

Motion duration:

approximately 200–500ms

Respect prefers-reduced-motion.

Do not use:

- continuous floating animation

- aggressive parallax

- cursor followers

- loading screens

- horizontal auto-scrolling marquees

- spinning logos

- large reveal masks

- excessive scroll effects

- cinematic animation that delays access to content

The website should feel expensive because of precision, not animation volume.

==================================================

20. ACCESSIBILITY

==================================================

Use semantic HTML.

Requirements:

- one H1 per page

- logical heading order

- descriptive alt text

- keyboard-accessible navigation

- keyboard-accessible language switch

- visible focus states

- accessible mobile menu

- sufficient contrast

- labelled form inputs

- no text embedded inside raster images

- decorative SVGs marked appropriately

- correct aria-expanded state for menus

- correct lang attribute for English and Traditional Chinese

Gold text must not be used on light backgrounds where contrast is insufficient.

==================================================

21. SEO AND METADATA

==================================================

Use these exact page title formats:

Home | MH Group LLC

Projects | MH Group LLC

Services | MH Group LLC

Our Philosophy | MH Group LLC

Contact | MH Group LLC

Homepage meta description:

MH Group LLC provides integrated real estate, property management, renovation, interior styling, furnishing, and move-in services in New York.

Create:

/public/images/og-image.webp

The Open Graph image should use:

- MH Group LLC logo

- primary #133846 background

- accent #BF935B

- restrained New York residential imagery

- no web design credit

- no Lovable branding

Add:

- canonical tags

- Open Graph metadata

- Twitter card metadata

- favicon

- sitemap.xml

- robots.txt

Only add structured data using verified information.

Do not invent:

- street address

- phone number

- email

- opening hours

- price range

- reviews

- ratings

- employee count

==================================================

22. ENGINEERING AND CLOUDFLARE DEPLOYMENT

==================================================

Use a stable React and Vite architecture suitable for Cloudflare Pages.

Expected production command:

npm run build

Expected output directory:

dist

Use React Router for public routes.

Create:

/public/_redirects

with:

/* /index.html 200

This ensures direct route access and refresh compatibility on Cloudflare Pages.

Do not include Netlify-specific deployment logic.

Do not create unnecessary server-side rendering complexity.

Keep the project maintainable and clearly organized.

Recommended structure:

src/

  components/

  pages/

  sections/

  content/

  data/

  hooks/

  lib/

  styles/

Store shared bilingual content in a central typed content file.

Store project records in a central project data file.

Do not duplicate the same content across components.

Use reusable components without forcing every section into the same generic card component.

Ensure:

- no TypeScript errors

- no console errors

- no broken links

- no missing imports

- no invalid routes

- no builder-only asset paths

- no unused placeholder components

- no empty buttons

- no href="#"

- no fake project detail links

==================================================

23. FOOTER

==================================================

Match the approved concept’s dark footer structure.

Desktop footer may include:

- MH Group LLC horizontal logo

- Navigation

- Services

- Verified contact information

- Verified social links only

Navigation:

Home

Projects

Services

Our Philosophy

Contact

Services:

Real Estate Sales & Purchase

Property Management

Renovation & Project Management

Furniture, Styling & Move-In Service

Use only verified phone, email, and social URLs.

Do not guess unreadable information from the screenshot.

The final bottom copyright bar must contain exactly:

© [DYNAMIC CURRENT YEAR] MH Group LLC. All rights reserved.

Do not append any designer, developer, builder, agency, platform, hosting, or powered-by credit.

==================================================

24. FINAL QUALITY CHECK

==================================================

Do not declare the project complete until every item passes.

[ ] Approved Home Page section order has been preserved

[ ] Approved Home Page remains visually recognizable

[ ] Approved Portfolio screenshot has been followed when available

[ ] Premium Manhattan editorial direction is clearly visible

[ ] Primary colour is #133846

[ ] Accent colour is #BF935B

[ ] Logo closely matches the supplied reference

[ ] Header works on desktop and mobile

[ ] EN and Traditional Chinese switching works

[ ] Language preference persists

[ ] All public routes work on direct access and refresh

[ ] /public/_redirects exists

[ ] Build succeeds with npm run build

[ ] Cloudflare output is dist

[ ] No Netlify-specific configuration

[ ] No lovable-uploads references

[ ] No /__l5e/ references

[ ] Every project photograph is WebP

[ ] Every project photograph exists under /public/images/projects/

[ ] No project JPG, JPEG, PNG, HEIC, or TIFF references remain

[ ] No fake project photography

[ ] No invented business facts

[ ] No invented contact information

[ ] No dead project detail links

[ ] No empty buttons

[ ] No generic rounded SaaS cards

[ ] No pill-shaped buttons

[ ] Mobile layout is clean at 375px

[ ] Traditional Chinese does not overflow

[ ] Accessibility focus states are visible

[ ] Every page has unique metadata

[ ] og-image.webp exists under /public/images/

[ ] Copyright year is dynamic

[ ] Copyright bar contains no web design credit

[ ] Bluluma is not mentioned publicly

[ ] Lovable is not mentioned publicly

[ ] No “Powered by” text appears anywhere

[ ] No console errors

[ ] No TypeScript errors

[ ] No broken images

[ ] No broken internal links

Complete and verify the entire website before presenting the final result.

```Attach 是所有 screenshot reference images, project 的照片跟 logo，這些照片你都可以用 anywhere

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1558a628-9fb4-4238-966f-5fbc1cde0b25).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
