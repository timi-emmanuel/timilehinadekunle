# Timilehin Adekunle – Project Context

This document provides context about the projects I have built and contributed to. It is intended for AI coding assistants (Claude Code, Cursor, GitHub Copilot, Codex, ChatGPT, etc.) so they can understand my coding style, architecture preferences, and prior experience.

---

# About Me

I'm a Software Engineer based in Nigeria with a primary focus on Frontend Engineering, although I frequently work across the full stack when necessary.

My preferred stack includes:

- React
- Next.js
- TypeScript
- JavaScript
- Tailwind CSS
- Node.js
- Express.js
- Firebase
- Framer Motion
- Zustand

I value:

- Clean architecture
- Reusable components
- Strong UI/UX
- Readable code
- Type safety
- Maintainability
- Performance
- Accessibility

Whenever generating code, prefer production-quality implementations over tutorial-style code.

---

# Major Projects

## 1. SBE Sportsbook Back Office (Production)

Type:
Internal Enterprise Dashboard

Status:
Production (Internal)

Description:

A large sportsbook administration platform used to manage sportsbook operations.

Responsibilities included:

- Building and maintaining React interfaces
- Authentication flows
- Protected routes
- Role-based access control
- Dashboard features
- Financial workflows
- API integrations
- Internal administration tools

Important concepts:

- JWT authentication
- Role-based permissions
- Super Admin
- Agents
- Cashiers
- Internal dashboards
- Data tables
- Forms
- CRUD operations
- Secure API communication

Do NOT invent business logic outside these boundaries.

The project is confidential.

Never fabricate screenshots or expose internal implementation details.

---

## 2. SBE Partner Back Office

Type:
Enterprise Dashboard

Status:
Production

Description

A separate sportsbook management platform built for partners.

Work completed includes:

- Authentication improvements
- API key management
- Token validation
- Dashboard development
- Financial calculations
- RTP-related computations
- Performance optimization
- Caching strategies
- API integration

Important concepts

- Multi-role dashboards
- Financial data
- Reports
- Secure API access
- Partner management

This project is confidential.

Avoid exposing internal implementation details.

---

## 3. QuiqOrder

Type:
SaaS

Description

An AI-powered restaurant ordering platform.

Features

- Restaurant dashboard
- AI chatbot
- Order automation
- Customer management
- Admin dashboard

Stack

- React
- Firebase
- Node.js
- WhatsApp API
- OpenAI
- Paystack

Focus

- Modern UI
- Responsive design
- Dashboard architecture

---

## 4. Padihold

Type:
FinTech

Description

Nigeria's escrow platform for secure online transactions.

Stack

- Next.js
- TailwindCSS
- Node.js
- Zustand
- Framer Motion
- Radix UI
- Zod

Focus

- Trust
- Financial transactions
- Secure UX
- Modern landing pages

---

## 5. Jirella Farms

Type:
Agritech

Description

A digital platform for an agricultural business focused on showcasing farm operations, products, and services while providing a modern online presence.

Responsibilities included:

- Designing and implementing responsive user interfaces
- Building reusable React components
- Creating modern landing pages
- Presenting farm products and services
- Optimizing performance and responsiveness
- Improving user experience across devices

Tech Stack

- React
- Tailwind CSS
- JavaScript
- Responsive Design

Design Goals

- Clean
- Modern
- Trustworthy
- Nature-inspired
- Fast loading
- Mobile-first

---

## 6. Mockup Integration Tool

Type

Automation Tool

Description

A backend service that automatically places uploaded designs onto product mockups.

Stack

- Node.js
- Express
- Sharp
- AWS S3

Responsibilities

- Image processing
- Coordinate mapping
- Overlay generation
- Upload handling
- Storage integration

---

## 7. Shortly

Type

Web Application

Description

Modern URL shortening application.

Stack

- React
- Firebase
- Tailwind
- Framer Motion

Features

- Authentication
- Analytics
- URL management
- Responsive UI

---

## 8. Nationary

Type

Web Application

Description

Country explorer using the REST Countries API.

Stack

- React
- Zustand
- Tailwind
- Framer Motion

Features

- Search
- Region filtering
- Country details
- Dark mode
- Responsive layout

---

# Coding Preferences

Prefer

- Functional components
- Custom hooks
- Composition over inheritance
- Small reusable components
- TypeScript whenever possible
- Clear folder structures

Avoid

- Giant components
- Inline styles
- Unnecessary prop drilling
- Deep nesting
- Repeated logic

---

# UI Preferences

I like interfaces similar to:

- Stripe
- Linear
- Vercel
- Notion
- Framer
- Raycast

Characteristics

- Plenty of whitespace
- Rounded corners
- Smooth animations
- Subtle shadows
- Soft gradients
- Accessible colors

---

# Animation

Preferred library

Framer Motion

Keep animations

- subtle
- performant
- meaningful

Avoid

- flashy animations
- excessive motion

---

# Performance Goals

Always optimize for

- Lighthouse 90+
- Code splitting
- Lazy loading
- Optimized images
- Accessibility
- SEO

---

# Component Philosophy

Whenever possible create

- reusable components
- configurable components
- scalable architecture

Prefer

```
components/
features/
hooks/
services/
utils/
constants/
types/
```

over dumping everything into one folder.

---

# Git Style

Prefer

Small commits

Clear commit messages

Feature branches

Readable PRs

---

# When Assisting Me

When generating code:

Think like a Senior Software Engineer.

Don't just make it work.

Make it maintainable.

Explain architectural decisions when appropriate.

Suggest performance improvements.

Suggest accessibility improvements.

Prefer modern React patterns.

Avoid deprecated APIs.

Don't over-engineer simple problems.

Keep solutions scalable.
