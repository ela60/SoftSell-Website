import Head from 'next/head';
import ChatWidget from '@/components/ChatWidget';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Navbar from '@/components/Navbar';
import Testimonials from '@/components/Testimonials';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
  return (
    <>
      <Head>
        <title>SoftSell | AI-Powered Sales Chatbot</title>
        <meta name="description" content="SoftSell helps you convert visitors into customers using AI-powered chat support." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="SoftSell, AI chatbot, customer service, sales automation, Next.js chatbot" />
        <meta name="author" content="Ambia Ela" />
        <meta property="og:title" content="SoftSell | AI Chat Assistant for Sales" />
        <meta property="og:description" content="Boost your sales with SoftSell, the AI-powered chatbot that engages and converts visitors." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://your-live-site.com" />
        <link rel="icon" href="/Favicon.png" />
      </Head>

      <main>
        <Navbar />
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
        <ChatWidget />
        <Footer />
      </main>
    </>
  );
}
