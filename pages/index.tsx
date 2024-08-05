import { useState, useEffect, useRef } from 'react';
import Section from '../components/Section';
import Carousel from '../components/Carousel';
import ShuffleText from 'shuffle-text';
import { Parallax, Background } from 'react-parallax';


interface SectionData {
  title: string;
  description: string;
  sub: string;
  images?: string[];
  button?: { text: string;};
  className: string;
  bg?: string[];
}


const sections: SectionData[] = [
  { title: 'Welcome to Strippy', description: '- the wildest corner of the NFT universe where our main feline, Trippy Cat, reigns supreme!', images: ['/image1.gif'], className: 'gradient-1', bg: ['/bg.jpg'], sub:''},
  { title: '', description: 'Ever wondered what happens when you mix a cat with a kaleidoscope and sprinkle a dash of cosmic dust?', images: ['/image2.jpg'], className: 'gradient-2',bg: ['/bg.jpg'], sub:'' },
  { title: 'Tokenomies', description: 'Alright, cool cats, let’s talk tokenomics – the funky science behind our groovy NFT ecosystem.', images: ['/image3.jpg'], className: 'gradient-3',bg: ['/bg.jpg'],sub:'Total Supply: There are only 10,000 Trippy Cats in the universe.  Each one is as unique as a snowflake but way more colorful and trippy.  Rarity: From common kitties to legendary felines, the rarity of your Trippy Cat determines just how much swagger it brings to your collection. The rarer, the trippier!  Minting: Want to mint your own Trippy Cat? Just a few clicks, a sprinkle of digital magic, and voilà – your very own piece of psychedelic art!  Staking & Rewards: Stake your Trippy Cats to earn MeowCoins – the official currency of Strippy. Use them to get exclusive access to special drops, events, and more. Plus, who doesn’t love earning while holding onto their favorite feline friend?  Community: Join the Strippy community and connect with fellow cat lovers, traders, and dreamers. Share your trippy experiences, trade your cats, and be part of the most vibrant, colorful, and downright fun NFT community out there.' },
  { title: 'How to Buy', description: 'You get Trippy Cat – the grooviest, far-out feline that’s here to take you on a psychedelic adventure. Whether you’re a seasoned NFT collector or just a curious wanderer, Strippy is your portal to a world where reality bends, colors pop, and cats rule.', images: ['/image4.jpg'], button: { text: 'Buy Now!' }, className: 'gradient-4',bg: ['/bg.jpg'], sub:'' },
  {
    title: 'PFP',
    description: 'Get your unique profile picture.',
    button: { text: 'Open Modal' },
    className: 'gradient-1',
    bg: ['/bg.jpg'],
    sub:''
  },
  { title: 'Join our community.', description: '', images: ['/image5.jpg'], button: { text: 'Follow us' }, className: 'gradient-2',bg: ['/bg.jpg'], sub:'Hop on, fellow traveler, and let’s dive into the trippy, whimsical world of Strippy! ' },
  {
    title: 'Sketches',
    description: 'Our latest sketches.',
    images: ['/sketch1.jpg', '/sketch2.jpg', '/sketch3.jpg', '/sketch4.jpg'],
    className: 'gradient-2',
    bg: ['/bg.jpg'],
    sub:''
  },
];

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const welcomeRef = useRef<HTMLDivElement>(null);
  

  useEffect(() => {
    // Assuming you have an element with the ID "myText"
    const el = document.getElementById('myText');
    if (el) {
      const text = new ShuffleText(el);
      text.start();
    }
    if (welcomeRef.current) {
      welcomeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="reverse-scroll">
      {sections.slice(0, 6).map((section, index) => (
        <div key={index} ref={section.title === 'Welcome to Strippy' ? welcomeRef : null}>
          <Parallax bgImage={section.bg?.[0]}strength={-250} blur={{ min: -15, max: 15 }}>
            <Section {...section} />
          </Parallax>
        </div>
      ))}
      <div className="py-10 px-5 text-center min-h-screen gradient-3">
        <h1 id="myText" className="text-5xl mb-4 text-yellow-400">Sketches</h1>
        <p className="text-2xl mb-4 text-pink-500">Our latest sketches.</p>
        <div className="w-full h-full">
          <Carousel images={sections[5].images} />
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-5 rounded">
            <h2 className="text-2xl mb-4">Modal Title</h2>
            <p className="mb-4">This is the modal content.</p>
            <button onClick={() => setShowModal(false)} className="bg-buttonBg text-buttonText px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
