This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Deploy

```bash
cd /home/angelreh/repos/landing-page-me

npm run build 

# Stop nginx
sudo systemctl stop nginx

# Copy files 
sudo cp -R /home/angelreh/repos/landing-page-me/out/* /var/www/html/

# Start nginx server
sudo systemctl restart nginx
```