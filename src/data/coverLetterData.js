export const coverLetterData = {
  personalInfo: {
    name: "Pottepalem Ravi",
    address: "Bangalore, India",
    phone: "+91 9493152900",
    email: "ravip.iiit@gmail.com",
    linkedin: "llinkedin.com/in/ravip2900"
  },
  letterContent: {
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    company: {
      name: "Hiring Manager",
      address: "Tech Company Inc.\n456 Corporate Blvd\nBusiness City, ST 67890"
    },
    subject: "Application for Senior Software Developer Position",
    salutation: "Dear Hiring Manager,",
    body: [
      'I am excited to apply for the Senior Software Developer position. With 10 years of experience building high performance, scalable web platforms, I have developed strong expertise in full stack development, system design, technical analysis, and complex enterprise integrations. In my current role as Lead Software Engineer at Lowe’s, I lead post purchase customer journey experiences including order modification, cancellation, returns, and order tracking, while integrating with enterprise systems such as order management, delivery, payment, fraud verification, returns, and tracking services',
      'Throughout my career, I have worked across modern frontend, backend, cloud, and DevOps technologies including React, Next.js, Redux, Node.js, Spring Boot, JavaScript, TypeScript, AWS, GCP, Kubernetes, Docker, and Jenkins. I have contributed to customer facing product experiences, performance, SEO, accessibility, scalable micro frontend architecture, and independent deployment pipelines. One of my key recent contributions was leading the development of an AI order agent that helps users retrieve order details, answer order related questions, and modify eligible orders.',
      'I am looking for an opportunity where I can continue building scalable systems, contribute to meaningful products, and grow further toward an Architect role. I bring strong ownership, practical problem solving, and experience delivering solutions from design to deployment, including in startup environments where I owned the complete technical function. I would welcome the opportunity to discuss how my experience and skills can contribute to your team’s success.'
    ],
    closing: "Sincerely,",
    signature: "Pottepalem Ravi"
  }
};
