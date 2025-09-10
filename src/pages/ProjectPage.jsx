import Works from '../sections/Works';
import InertiaMedia from '../components/InertiaMedia';
import { useMediaQuery } from 'react-responsive';

const ProjectPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">      
      <InertiaMedia />
      <Works />
    </section>
    
  );
};

export default ProjectPage;
