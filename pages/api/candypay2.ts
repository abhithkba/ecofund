import { CandyPay } from "@candypay/checkout-sdk";
import Image from "next/image";

const sdk = new CandyPay({
  api_keys: {
    private_api_key: process.env.CANDYPAY_private_api_key2,
    public_api_key: process.env.CANDYPAY_public_api_key2,
  },
  network: "devnet", // use 'mainnet' for prod and 'devnet' for dev environment
  config: {
    collect_shipping_address: false,
  },
});

const handler = async (req: any, res: any) => {
  try {
    const response = await sdk.session.create({
      success_url: `http://localhost:3000/success`,
      cancel_url: `http://localhost:3000/cancel`,
      // additional SPL tokens, SOL and USDC are the supported tokens by default
      items: [
        {
          name: "Donate for a better tomorrow",
          // price in USD
          price: 1,
          image: "https://ibb.co/s1kFgJs",
          quantity: 1
        },
      ],
    });

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Error creating session",
    });
  }
};

export default handler;
