import GradientText from '@/components/GradientText';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen px-4">
      <GradientText className="text-8xl lg:text-9xl font-geist-mono">404</GradientText>
      <p className="subtitle">Page Not Found</p>
      <p className="paragraph mt-6">
        Oh, so you’re an explorer! Sadly, there’s nothing but dust here. Let’s get
        you home.
      </p>
      <Link href="/#home" className="w-1/2 md:max-w-1/4 mt-4 site-button">
        Take Me Home
      </Link>
    </div>
  );
}
