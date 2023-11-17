# Store Ecommerce
## Đảm bảo bạn đã setup Admin trước! 
#### Tính năng chính:
- Shadcn UI for Admin
- Hiển thị sản phẩm nổi bật ở trang chủ
- Ở trang danh mục sản phẩm: có bộ lọc theo “Size” và “Color”
- Thêm các sản phẩm vào giỏ hàng và thanh toán.
- Hiện thị sản phẩm liên quan ở mỗi trang sản phẩm lẻ.

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
