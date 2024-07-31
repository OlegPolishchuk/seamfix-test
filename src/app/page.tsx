'use client'

import {useEffect, useId} from 'react';
import { useSeamfix } from './SeamfixProvider'; // обновите путь, если нужно

//https://api.verified.africa/sfx-verify/v3/sdk/generate-api-verification-link

export default function Home() {
  const { Seamfix } = useSeamfix();

  useEffect(() => {
    if (Seamfix) {
      // Seamfix.init({
      //   tokenId: "VF-1722329929560",
      //   userId: 1721219718911,
      //   publicKey: 'gfP6h58tuxWPpste9XxU',
      //   authenticationToken: 'd5ce28dfbbbe4b481f457463e36e0a9d3298f4b25ef863f93090bffd5f71f95d4ff65febdbaa72d8f2cb05d5bcf14c4c7d58198a92dc0a4b04dd823717eab6fb763f1259f1d20568a0e5abe41fa09a9a',
      //   linkIdentifier: new Date(), // нужно генерировать уникальное значение
      //   callbackUrl: "http://localhost:3000/api/verification/responce",
      //   redirectUrl: "https://www.google.com",
      //   userDetails: {},
      //   // personalizationDetail: "",
      //   searchParameter: 'CA000000000SFX',
      //   documentId: '000092564',
      //   countryCode: 'UG',
      //   verificationType: 'UG-ID-VERIFICATION-BOOLEAN-MATCH',
      //   lastName: 'Nyakana',
      //
      //
      //   // Real data
      //
      //   // userid: 1716284370535,
      //   // publicKey: 'IWNmElpmbFFkd2PeDmB0',
      //   //
      //   // tokenId: 'VF-1722253205500',
      //   // authenticationToken: 'ae3b22225610cc813b2efd8729a8feddb1afbbe3e64f52e1011304453ec5948668f8c93fd117418fea9f51a62510f15bd222e3f8be22d53dccb7db8cde72cf4ef5bdc1e296333e3b29bb1ae54ac5777a',
      //   //
      //   // linkIdentifier: new Date(), // нужно генерировать уникальное значение
      //   // callbackUrl: "http://localhost:3000/api/verification/responce",
      //   // // sourceImage: img,
      //   // redirectUrl: "https://www.google.com",
      //   // userDetails: {},
      //   // // personalizationDetail: "",
      //   // userId: 1721219718911,
      //   //
      //   // sourceImage: img,
      //   // // personalizationDetail: "",
      //
      //
      //   //fake parameters!!!
      //   // "tokenId": "VF-1680278122794",
      //   // "authenticationToken": "83c2431f95eddc34011f3a7daa5a273efafac76ceda9105f88e0eefdb96e0e43cac7b2eebb06b69a9f1908c1a6556e79d6064fe73d3387c50548d4e56e3a609aa9d4f89c82a791d1f9bd3052df65ad03",
      //   // "linkIdentifier": new Date(), //12345678901
      //   // "callbackUrl": "https://webhook.site/81d37d63-c7b5-4af3-b347-edc5415a3be1",
      //   // "redirectUrl": "https://verified.africa",
      //   // "personalizationDetail": "Kelechi Ogbufe",
      //   // sourceImage: img,
      //   // userDetails: {},
      //   //
      //   // userId: 1721219718911,
      //   // publicKey: 'gfP6h58tuxWPpste9XxU',
      //   // // personalizationDetail: "",
      // })


      Seamfix.init({
        tokenId: "VF-1722329929560",
        userId: 1721219718911,
        publicKey: 'gfP6h58tuxWPpste9XxU',
        authenticationToken: '20838a9f20d127632a730c525d5a344e7a5cd7bfd943b44aaddaa1bac71221dcbdf9079b9cb15568ee8629d61c8434a76f6498b949ba2b92f68d74543cbc4a7aa6943e8d626116051ff7b9231cc12245',
        linkIdentifier: Date.now(),
        callbackUrl: process.env.NEXT_APP_CALLBACK_URL,
        sourceImage: "",
        redirectUrl: "https://www.google.com",
        userDetails: {},
        personalizationDetail: ""
      })
    }
  }, [Seamfix]);

  return (
    <main>
    </main>
  );
}
