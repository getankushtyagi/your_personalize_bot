import { useColorScheme } from '@mui/joy/styles';
import clsx from 'clsx';
import Head from 'next/head';
import { useRouter } from 'next/router';
// import { SecondaryFeatures } from '@app/landing-page/components/SecondaryFeatures';
// import { Testimonials } from '@app/landing-page/components/Testimonials';
import Script from 'next/script';
import { useEffect, useState } from 'react';

import CompanyLogos from '@app/components/landing-page/CompanyLogos';
// import { CallToAction } from '@app/landing-page/components/CallToAction';
// import { Faqs } from '@app/landing-page/components/Faqs';
import { Footer } from '@app/components/landing-page/Footer';
import { Header } from '@app/components/landing-page/Header';
import { Hero } from '@app/components/landing-page/Hero';
import { HeroChatGPTPlugin } from '@app/components/landing-page/HeroChatGPTPlugin';
import Languages from '@app/components/landing-page/Languages';
// import { Pricing } from '@app/landing-page/components/Pricing';
import { PrimaryFeatures } from '@app/components/landing-page/PrimaryFeatures';
import SEO from '@app/components/SEO';

import ChatBotBenefits from './ChatBotBenefits';
import Cta from './Cta';
import FAQ from './FAQ';
import FeaturesForChatGPTPlugin from './FeaturesForChatGPTPlugin';
import FeaturesForChatWithData from './FeaturesForChatWithData';
import FeaturesForCustomerSupport from './FeaturesForCustomerSupport';
import FeaturesForDevs from './FeaturesForDevs';
import FeaturesForInfluencers from './FeaturesForInfluencers';
import FeaturesForSlack from './FeaturesForSlack';

export default function Home() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  const { mode, setMode } = useColorScheme();

  useEffect(() => {
    // Force dark mode on the landing page
    const handleRouteChange = (newPath: string) => {
      window.location.href = router.basePath + newPath;
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    setMounted(true);
    setMode('dark');
  }, []);

  return (
    <>
      <SEO
        title="PGMind - Build ChatGPT Agents trained on your custom data"
        description="PGMind offers a no-code platform to create custom AI chatbots trained on your data. Our solution streamlines customer support, onboards new team members, and simplifies your team's workflow."
      />

      <Head>
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_APP_URL}`} />
        <meta property="og:site_name" content="pgmind" />
        <meta property="og:type" content="website" />
      </Head>
      {/* <div className="w-full p-2 text-center bg-indigo-500">
        <h2>
          🔔 Rebranding Alert - Databerry.ai is now ⛓️{' '}
          <strong>PGMind.ai</strong>
        </h2>
      </div> */}
      <Header />

      <script
        defer
        src="https://cdn.jsdelivr.net/npm/pgmind-chat-bubble@1.0.1"
        id="cllugzm1r000nupixfy5l1s8h"
        data-name="databerry-chat-bubble"
      ></script>

      <main className={clsx('bg-black min-heigh-full', mounted ? mode : '')}>
        {/* <Hero /> */}
        <HeroChatGPTPlugin />
        {/* <CompanyLogos /> */}
        {/* <Image
          src="/features.png"
          alt="features"
          width="800"
          height="200"
          className="mx-auto"
        /> */}
        {/* <PrimaryFeatures /> */}
        {/* 
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
      <Faqs /> */}
        <FeaturesForChatWithData />
        <FeaturesForCustomerSupport />
        <FeaturesForDevs />
        <Languages />
        {/* <FeaturesForChatGPTPlugin /> */}
        {/* <FeaturesForSlack /> */}
        {/* <FeaturesForInfluencers /> */}
        {/* <ChatBotBenefits /> */}
        <FAQ />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
