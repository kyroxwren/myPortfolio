export const metadata = {
  title: 'resume',
  description: 'Check out my work experience.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My work experience</h1>
      <div>
        <h1 className='font-bold text-xl'>PandaPy - Pretoria</h1>
        <h2 className='className="font-semibold mb-6 tracking-tighter"'>INTERN JUNIOR DEVELOPER l 05/2023 to 03/2024</h2>
          <ul className='mb-4'>
            <li>Contributed to the development of a web application that streamlined HR and machine data tracking for a mining company, significantly improving data management and operational efficiency.</li>
            <li>Designed and implemented dynamic UI/UX components using React and JavaScript, resulting in an enhanced user experience and improved application usability.</li>
            <li>Improved software performance and reliability by identifying, debugging, and resolving complex coding challenges.</li>
          </ul>
      </div>
      <div>
      <h1 className='font-bold text-xl'>Growth Ventures - Pretoria</h1>
        <h2 className='className="font-semibold mb-6 tracking-tighter"'>Junior Data Analyst l 06/2023 to Current</h2>
          <ul className='mb-4'>
            <li>Design and generate visually compelling graphs, charts, and reports tailored for internal stakeholders and external clients, aiding in data-driven decision-making processes.</li>
            <li>Analyse and organize raw datasets, ensuring data accuracy, consistency, and completeness to facilitate meaningful insights.</li>
            <li>Assist in administrative efforts, including maintaining documentation, streamlining workflows, and coordinating team activities to enhance overall operational efficiency.</li>
          </ul>
      </div>
      <div>
      <h1 className='font-bold text-xl'>Econest - Pretoria</h1>
        <h2 className='className="font-semibold mb-6 tracking-tighter"'>INTERN JUNIOR DEVELOPER l 07/2024 to 12/2024</h2>
          <ul className='mb-4'>
            <li>Contributed to the development of a SaaS product, with several implemented changes successfully deployed for client use, improving overall functionality and user experience.</li>
            <li>Managed and optimized company databases by importing data and creating refined SQL scripts to streamline table cleanup and ensure data integrity.</li>
            <li>Identified and resolved critical frontend bugs, enhancing dropdown functionality, improving data presentation, and optimizing UI performance.</li>
          </ul>
      </div>
    </section>
  )
}
