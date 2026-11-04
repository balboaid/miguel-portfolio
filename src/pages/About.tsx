import MotionFade from '../components/MotionFade';
import SectionTitle from '../components/SectionTitle';
import { useTranslation } from '../hooks/useTranslation';

export default function About() {
  const { t } = useTranslation();
  const about = t?.about || { title: 'About', p1: '', p2: '', p3: '' };

  return (
    <div id='about' className='w-full py-32 bg-black text-gray-300'>
      <div className='max-w-5xl mx-auto px-6'>
        <MotionFade>
          <SectionTitle title={about.title} />

          <p className='text-lg leading-relaxed mb-6'>{about.p1}</p>
          <p className='text-lg leading-relaxed mb-6'>{about.p2}</p>
          <p className='text-lg leading-relaxed'>{about.p3}</p>
        </MotionFade>
      </div>
    </div>
  );
}

