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
            I am a bioinformatician based in Manhattan, Kansas, specializing in computational approaches to biological
            and agricultural research. My work focuses on integrating bioinformatic and computational techniques to
            solve complex problems in genomics, pathogen surveillance, and antimicrobial resistance detection.
          </p>
          <p>
            With traditional training in molecular and genetic biology, I have spent much of my career advancing my
            computational and programming skills to build novel tools and workflows that address critical research
            questions in vector-pathogen interactions, metagenomic surveillance, and comparative genomics.
          </p>
          <p>
            Beyond research, I enjoy camping, hiking, and spending time with cats. My goal is to facilitate the
            integration of bioinformatics in biological and agricultural systems to advance scientific discovery.
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
              Metagenomic Surveillance of Antimicrobial and Insecticide Resistance
            </h3>
            <p className="text-gray-700">
              Using house flies as xenosurveillance tools to monitor pathogens and antimicrobial resistance in
              agricultural environments through the BALROG pipeline suite.
            </p>
          </Link>

          <Link href="/projects/risk-mapping" className="block bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">
              Risk Mapping for Force Health Protection
            </h3>
            <p className="text-gray-700">
              Developing risk assessment frameworks and geospatial mapping of pathogen and antimicrobial resistance
              distribution in novel environments.
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
