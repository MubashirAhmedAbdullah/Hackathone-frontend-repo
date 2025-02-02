import React from 'react';
import { Image, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const AboutUs = () => {
  return (
    <div className="p-10 bg-gray-100 min-h-screen flex flex-col items-center text-center">
      <div className="max-w-6xl bg-white p-12 rounded-lg shadow-lg text-left">
        <div className='text-center'>
        <Image src='https://www.saylaniwelfare.com/static/media/logo_saylaniwelfare.22bf709605809177256c.png' alt="Saylani Welfare Logo" preview={false} className="w-48 mx-auto mb-8" />
        </div>
        
        <Title level={1} className="text-center"><span className='text-[#0072BB] underline'>Saylani Welfare International Trust</span></Title>
        
        <Paragraph className="text-gray-700">
          <span className='text-center text-lg'>Saylani Welfare International Trust is one of Pakistan’s leading non-profit organizations, dedicated to serving
          humanity with a mission to uplift and improve the lives of the underprivileged. Established in 1999 under the
          leadership of Allama Bashir Farooqi, Saylani Welfare operates on the principles of social welfare, community
          service, and economic empowerment. The organization works in multiple domains, including food distribution,
          education, healthcare, disaster relief, skills development, and employment generation, aiming to create a
          self-sufficient and poverty-free society.</span>
        </Paragraph>
        
        <Title level={2} className="mt-8"><span className='text-[#0072BB] underline'>Our Mission</span></Title>
        <Paragraph className="text-gray-700 text-lg leading-relaxed">
          <span className='text-lg'>Our mission is to provide comprehensive social services to the needy, ensuring that no one goes hungry, uneducated,
          or without access to medical care. We strive to uplift underprivileged individuals through initiatives that empower
          them with skills, education, and financial support, enabling them to lead dignified and independent lives.</span>
        </Paragraph>
        
        <Title level={2} className="mt-8"><span className='text-[#0072BB] underline'>Our Core Services</span></Title>
        <Paragraph className="text-gray-700 text-lg leading-relaxed">
          <span className='text-lg'>Saylani Welfare Trust is committed to bringing positive change in society through multiple welfare projects:</span>
        </Paragraph>
        <ul className="list-disc text-gray-700 text-lg pl-8">
          <li><strong>Food Program:</strong> Distributes free meals to thousands daily across Pakistan.</li>
          <li><strong>Healthcare Services:</strong> Provides free medical treatment, medicines, surgeries, and diagnostic facilities.</li>
          <li><strong>Education & Vocational Training:</strong> Offers free IT courses, vocational training, and school education, empowering youth for future employment.</li>
          <li><strong>Financial Assistance:</strong> Supports widows, orphans, and families in need, ensuring financial stability.</li>
          <li><strong>Clean Water Initiative:</strong> Provides clean drinking water through filtration plants and borewells in deprived areas.</li>
          <li><strong>Disaster Relief:</strong> Assists in emergencies such as floods, earthquakes, and pandemics by providing shelter, food, and rehabilitation.</li>
          <li><strong>Employment & Business Support:</strong> Helps individuals start small businesses and provides skill-based training for self-employment.</li>
          <li><strong>Housing & Shelter Projects:</strong> Constructs homes for the homeless and supports low-income families in securing shelter.</li>
        </ul>
        
        <Title level={2} className="text-red-600 mt-8"><sapn className="text-[#0072BB] underline">Founder’s Vision</sapn></Title>
        <Paragraph className="text-gray-700 text-lg leading-relaxed">
          <span className='text-lg'>
          Allama Bashir Farooqi, the visionary behind Saylani Welfare Trust, believes in a world where no one suffers due to
          lack of resources. His tireless efforts focus on creating a self-sufficient society by eliminating poverty,
          empowering individuals through education, and ensuring access to basic necessities such as food, healthcare, and
          shelter. His dedication has helped millions of people achieve a better standard of living, making Saylani Welfare
          a beacon of hope for many. He envisions a future where every person, regardless of their background, has the
          opportunity to lead a prosperous and dignified life.
          </span>
        </Paragraph>
        
        
        <Paragraph className="text-center text-gray-600 text-lg mt-6">
        <span className='text-lg'>Visit our official website or contact us to learn more about our initiatives and how you can be part of this
        transformative journey. Together, we can create a brighter future for those in need.</span>
        </Paragraph>
      </div>
    </div>
  );
};

export default AboutUs;
