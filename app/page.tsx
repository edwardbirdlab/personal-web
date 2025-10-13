import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Edward Bird, PhD</h1>
        <p className="text-xl text-gray-600 mb-6">
          Bioinformatician | Postdoctoral Researcher | ORISE at USDA-ABADRU
        </p>
        <div className="text-lg space-y-2">
          <p><strong>Location:</strong> Manhattan, Kansas</p>
          <p><strong>Email:</strong> <a href="mailto:edwardbird@ksu.edu" className="text-blue-600 hover:text-blue-800">edwardbird@ksu.edu</a></p>
          <p><strong>Phone:</strong> <a href="tel:4052743539" className="text-blue-600 hover:text-blue-800">(405) 274-3539</a></p>
        </div>
      </section>

      {/* About Me Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-gray-300 pb-2">About Me</h2>
        <div className="text-lg leading-relaxed space-y-4">
          <p>
            I am a computational biologist based in Manhattan, Kansas, specializing in developing and applying software-driven 
            approaches to biological and agricultural research. My work focuses on creating reproducible workflows and 
            computational tools that transform complex biological data into meaningful insights, with an emphasis on genomics, 
            vector biology, pathogen surveillance, and antimicrobial resistance.
          </p>
          <p>
            Trained in molecular and genetic biology, I’ve spent my career bridging the gap between experimental science and 
            computation. I develop scalable pipelines using Nextflow and, and build specialized custom Python tools to address 
            emerging challenges and specialized research. More recently, I have expanded to include AI and machine learning into 
            my skill set, developing computer vision and pose estimation models for behavioral analysis to quantify fly worry 
            behavior livestock systems.
          </p>
          <p>
            I believe that the most impactful science happens when computational and experimental disciplines work hand in hand. 
            My goal is to make computational biology more accessible to researchers from traditional biological backgrounds, lowering 
            the barriers that often limit interdisciplinary discovery. By collaborating with domain experts and developing tools 
            that are intuitive, reproducible, and adaptable, I aim to advance biological research and help train the next generation 
            of scientists who bridge the gap between biology and computation.
          </p>
          <p>
            Outside of research, I enjoy camping, hiking, and spending time with my cats.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-gray-300 pb-2">Education</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">PhD in Genetics</h3>
            <p className="text-lg text-gray-700 mb-2">Kansas State University | August 2025</p>
            <p className="text-gray-600 italic">Interdepartmental Genetics</p>
            <p className="mt-3">
              <strong>Dissertation:</strong> Genomic Resources and Bioinformatics Pipelines for Vector-Pathogen Research:
              Chromosome-Scale Genome Assembly and Transcriptomic Analysis of Insect-Pathogen Interactions in Culicoides
              sonorensis with Metagenomic Surveillance of Antimicrobial Resistance in House Flies
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">BS in Microbiology, Molecular and Cellular Biology</h3>
            <p className="text-lg text-gray-700 mb-2">Oklahoma State University | May 2019</p>
            <p className="text-gray-600">
              <strong>Degree Option:</strong> Research
            </p>
            <p className="text-gray-600">
              <strong>Transcript Designation:</strong> Undergraduate Research Scholar
            </p>
          </div>
        </div>
      </section>

      {/* Current Research Projects Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-gray-300 pb-2">Current Research Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/projects/metagenomic-surveillance" className="block bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">
              House Fly-Based Resistome (AMR/Insecticide) Surveillance
            </h3>
            <p className="text-gray-700">
              Using house flies to track pathogens and resistance, helping scientists and farmers understand both 
              current threats and emerging trends.
            </p>
          </Link>

          <Link href="/projects/risk-mapping" className="block bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">
              Mapping Emerging Pathogen Risks in Novel Environments
            </h3>
            <p className="text-gray-700">
              Detecting pathogens in novel environments and creating interactive risk maps to inform 
              stakeholders of potential health threats.
            </p>
          </Link>

          <Link href="/projects/fly-worry-ai" className="block bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">
              AI-Based Fly Worry Behavior Evaluation
            </h3>
            <p className="text-gray-700">
              Using artificial intelligence to evaluate the effect of fly worry behavior in livestock systems
              and its impact on agricultural productivity.
            </p>
          </Link>

          <Link href="/projects/culicoides-genomics" className="block bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">
              Comparative Genomics of Culicoides sonorensis
            </h3>
            <p className="text-gray-700">
              Chromosome-scale genome assembly revealing novel gene expansions and structural variation to
              understand biological processes in this important disease vector.
            </p>
          </Link>
        </div>
      </section>

      {/* Previous Research Projects Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-gray-300 pb-2">Previous Research Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/projects/transcriptomics-vector-competence" className="block bg-gray-50 border-2 border-gray-200 p-6 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-3 text-gray-700">
              Transcriptomics of Vector Competence
            </h3>
            <p className="text-gray-600">
              Using comparative transcriptomics to investigate drivers of vector competence in Culicoides
              sonorensis and their interactions with various arboviruses.
            </p>
          </Link>

          <Link href="/projects/housefly-resistome" className="block bg-gray-50 border-2 border-gray-200 p-6 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-3 text-gray-700">
              Characterizing the Resistome of House Flies
            </h3>
            <p className="text-gray-600">
              Comprehensive analysis of antimicrobial resistant bacteria carried by house flies in cattle
              operations and their role as sources and disseminators of resistance.
            </p>
          </Link>

          <Link href="/projects/dam-behavioral-quantification" className="block bg-gray-50 border-2 border-gray-200 p-6 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-3 text-gray-700">
              DAM: Quantifying Fly Behavior
            </h3>
            <p className="text-gray-600">
              Using Drosophila Activity Monitors to quantify circadian rhythm activities and behavioral changes
              in response to pathogen infection.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
