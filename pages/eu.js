import { useRouter } from 'next/router';
import Resume from '../src/components/Resume'; 
import { resumeData } from '../src/data/resumeData.js';

export default function Index() {
  const router = useRouter();
  const { theme = 'modern' } = router.query;

  return (
    <Resume data={resumeData} theme={theme} />
  );
}