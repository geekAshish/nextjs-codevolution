# Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

# Deploy on Vercel

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# What is NextJS

# Next.js simplifies the process of building a web application for production

1. Routing
2. API Route
3. Rendering
4. Data Fetching
5. Styling
6. Optimization
7. Dev and prod build system

# Public Folder: Holds all the statics file and images

## 2

# React Server Components contd.

1. Server Components
   In Next.js, all components are Server components by default
   They have the ability to run tasks like reading files or fetching data from a
   database
   However, they don't have the ability to use hooks or handle user interactions
2. Client Components
   To create a Client component, it's necessary to add "use client" at the top of
   the component file
   Client components can't perform tasks like reading files, but they have the
   ability to use hooks and manage interactions

## 3. Routing

# Routing Conventions

1. All routes must be placed inside the app folder
2. Every file that corresponds to a route must be named page.js or page.tsx
3. Every folder corresponds to a path segment in the browser URL

home route -- app/page.tsx
profile -- app/profile/page.tsx
about -- app/about/page.tsx

# Nested route

blog route -- app/blog/first/page.tsx

# dynamic route

products -- app/products/[productId]/page.tsx

# Nested dynamic route

products-review -- app/products/[productId]/reviews/[reviewId]

# Catch all Segments

docs -- app/docs/[...slug]/page.tsx

# Page Not Found

for whole app level: not-found.tsx
for component level: notFound() -- with condition -- you could create a specific page for that

# File Colocation

1. if you create a folder and inside that, if you create file another then page.tsx, next-js doesn't render that on the ui, you can use it like component and create a file name page.tsx

2. you can create a separate folder for component : src/component

# Private Folders

src/app/\_lib/page.tsx, format-date.ts

- Private Folders contd.
  1. For separating UI logic from routing logic
  2. For consistently organizing internal files across a project
  3. For sorting and grouping files in code editors
  4. And finally, for avoiding potential naming conflicts with future Next.js file
     conventions
  5. If you want to include an underscore in URL segments, you can prefix the folder
     name with "%5F," which is the URL-encoded form of an underscore

# Route Group

src/app/(auth)/login.tsx, register-user.tsx, forgot-password.tsx

if we do that next-js won't count auth as a route, it just for grouping purpose
group then by there nature

# Layouts

1. A page is Ul that is unique to a route
2. A layout is Ul that is shared between multiple pages in the app

## How to Create Layouts

1. You can define a layout by default exporting a React component from a layout.js
   or layout.tsx file
2. That component should accept a children prop that will be populated with a child
   page during rendering

# Nested Layout

You can also create a layout for a specific page, inside it's folder
Page content will go inside the layout {children}

# Route Group Layout

(auth-layout)/login, register, layout.tsx
login page and register page have the same layout

- Route Group uses:
  1. To organize your project in a manner that doesn't affect the URL
  2. To selectively apply a layout to certain segments while leaving others unchanged

# Routing Metadata

- Configuring Metadata
  1. Export a static metadata object
  2. Export a dynamic generateMetadata function
     - Metadata rules
       1. Both layout.tsx and page.tsx files can export metadata. If defined in a layout, it
          applies to all pages in that layout, but if defined in a page, it applies only to that
          page
       2. Metadata is read in order, from the root level down to the final page level
          When there's metadata in multiple places for the same route, they get combined,
          but page metadata will replace layout metadata if they have the same properties

## Static route

page.tsx
export const metadata = {
title: 'About us',
}

## dynamic route

import { Metadata } from "next";
export const generateMetadata = ({ params }: {params: {productId: string}}): Metadata => {
return {title: `product ${params.productId}`,};
};

# Title Metadata

# Link component Navigation
replace tap in Link component, replaces the current path with the next path

# Active Link
To navigate in client side, we ue Link component

# Navigate Programmatically

app/order-product/page.tsx

# Templates

layout.tsx --> template.tsx --> page.tsx
we should use layout instead of template most of the time
layout, stores the state of the component, but if you don't want to preserve the state use layout

## Templates are similar to layouts in that they wrap each child layout or page

1. But, with templates, when a user navigates between routes that share a template,
a new instance of the component is mounted, DOM elements are recreated, state
is not preserved, and effects are re-synchronized

2. A template can be defined by exporting a default React component from a
template.js or template.tsx file

3. Similar to layouts, templates also should accept a children prop which will render
the nested segments in the route.



# Loading

# Error Handling
if the error happens in any component, it doesn't break ui

Automatically wrap a route segment and its nested children in a React Error Boundary

Create error IJI tailored to specific segments using the file-system hierarchy to adjust granularity

Isolate errors to affected segments while keeping the rest of the application functional

Add functionality to attempt to recover from an error without a full page reload

## Recovering from Errors
we can call reset method which we'll get from errorboundry props, and we can call it to recover





