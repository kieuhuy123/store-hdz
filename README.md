# Project Title: Store Ecommerce
#### Video Demo:  <URL HERE>
#### Description:
This project is an Admin Panel built using Next.js, Tailwind CSS, Prisma, MySQL, and NextAuth. The admin panel is designed to manage various aspects of a web application, with seamless navigation and user experience.
## MAKE SURE YOU HAVE Admin SETUP FIRST!
#### Key Features:
- Shadcn UI for Admin
- The admin dashboard serves as a Content Management System (CMS), admin panel, and API hub.
- Manage multiple vendors or stores through a single CMS, allowing control over various categories and products. (For example you can have a "Shoe store" and a "Laptop store" and a "Suit store", and our CMS will generate API routes for all of those individually!)
- Create, update, and delete product categories for effective organization.
- Create, update, and delete products with ease, along with support for multiple product images.
- Create, update, and delete filters like "Color" and "Size" for products, and associate them during product creation.
- Create, update, and delete "Billboards," large text sections that can be attached to a single category or used independently. The admin generates API routes for all scenarios.
- Search through all categories, products, sizes, colors, and billboards with pagination for efficient content discovery.
- Control which products are "featured" and displayed on the homepage for increased visibility.
- Monitor and manage orders, sales, and revenue through the admin dashboard.
- View graphs and charts representing revenue and other key data.
- Implement Clerk Authentication for enhanced security and user management.
- Efficiently create and manage orders.
- Utilizes MySQL, Prisma, and PlanetScale for robust database management and scalability.
### Prerequisites

**Node version 18.x**

### Cloning the repository

```shell
git clone https://github.com/kieuhuy123/store-hdz.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
NEXT_PUBLIC_API_URL=
```

### Connect to PlanetScale and Push Prisma

```shell
npx prisma generate
npx prisma db push
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
