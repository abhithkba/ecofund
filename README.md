
# EcoFund

Introducing our groundbreaking crypto crowdfunding platform, dedicated to fueling sustainable development through investments in clean solar and wind energy projects. Join us as we empower individuals to make a meaningful impact on our planet's future, driving forward innovative solutions for a greener and more sustainable world.

**Demo Video Link** - https://drive.google.com/file/d/1VYUWE-OhY0TSm6BjNdw1TNHY8UcwzCqN/view?usp=sharing


## Tech Stack

**Client:** Next.js, TailwindCSS

**Server:** Next.js

**Blockchain** Solana

**Wallet:** Phantom Wallet

**Payment:** CandyPay


## Features

- Simple, Fast and cheap as its solana based
- Easy cross-border payments
- Anonymous contributions
- Supports multiple wallets
- Elegant and easy-to-use UI


## Run Locally

Clone the project

```bash
  git clone https://github.com/abhithkba/ecofund.git
```

Go to the project directory

```bash
  cd ecofund
```

Create ```.env``` file.

Go to [candypay website](https://candypay.fun/)

SignUp and get the Public and Private API Keys

Add the API Keys to ```.env```

```bash
  CANDYPAY_private_api_key="your-private-key"
  CANDYPAY_public_api_key="your-public-key"
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
App started on ```localhost:3000```

## Future Works

In addition to the existing features, new features will be added in the future. These include a vote proposal for all the accounts which donated to the project. Their voting power will be based on the amount of money donated. Eg Imagine a project request 10000000 an initial amount of 1000000 will be unlocked. Based on the results of their performance those who have  donated can vote to whether continue this project or not. 