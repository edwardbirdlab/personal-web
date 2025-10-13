export default function CV() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Edward Bird</h1>
        <p className="text-xl text-gray-600 mb-4">PhD in Genetics</p>
        <div className="text-gray-700">
          <p>4104 Spook Rock Way, Apt. 301, Manhattan, KS 66502</p>
          <p>(405) 274-3539 | <a href="mailto:edwardbird@ksu.edu" className="text-blue-600 hover:text-blue-800">edwardbird@ksu.edu</a></p>
        </div>
      </div>

      {/* Education */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-800 pb-2">Education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">PhD in Genetics, Interdepartmental Genetics | August 2025</h3>
            <p className="text-gray-700">Kansas State University, Manhattan, KS</p>
            <p className="text-gray-600 mt-2">
              <strong>Dissertation:</strong> Genomic Resources and Bioinformatics Pipelines for Vector-Pathogen Research:
              Chromosome-Scale Genome Assembly and Transcriptomic Analysis of Insect-Pathogen Interactions in Culicoides
              sonorensis with Metagenomic Surveillance of Antimicrobial Resistance in House Flies
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">BS in Microbiology, Molecular and Cellular Biology | May 2019</h3>
            <p className="text-gray-700">Oklahoma State University, Stillwater, OK</p>
            <p className="text-gray-600">Degree Option: Research | Transcript Designation: Undergraduate Research Scholar</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-800 pb-2">Experience</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Postdoctoral Researcher | August 2025–Current</h3>
            <p className="text-gray-700 font-medium">ORISE, United States Department of Agriculture – Arthropod Borne Disease Research Unit</p>
            <p className="text-gray-600 mb-2">Manhattan, KS | Supervisor: Dana Nayduch</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Develop and implement computational solutions for pathogen surveillance and epidemiological tracking</li>
              <li>Lead bioinformatics tool and pipeline development</li>
              <li>Design risk assessment frameworks and geospatial mapping of pathogen and AMR distribution</li>
              <li>Monitor pesticide resistance genes in arthropod pests impacting agricultural systems</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Graduate Research Assistant | August 2020–2025</h3>
            <p className="text-gray-700 font-medium">Kansas State University & USDA-ABADRU</p>
            <p className="text-gray-600 mb-2">Supervisor: Kristopher Silver</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Nextflow pipeline development for high-throughput genomic analysis and metagenomics</li>
              <li>Eukaryotic genome assembly and annotation using long-read and hybrid sequencing</li>
              <li>Comparative transcriptomics analysis of vector-pathogen interactions</li>
              <li>Wet lab sequencing workflows including library preparation and quality control</li>
              <li>Collaborative research across multiple interdisciplinary projects</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Research Assistant | November 2019–2020</h3>
            <p className="text-gray-700 font-medium">Next Generation Sequencing Lab, Veterinary Diagnostic Laboratory</p>
            <p className="text-gray-600 mb-2">Kansas State University | Supervisor: Rachel Palinski</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Independent research on genomic factors contributing to pathogenicity of Histophilus somni</li>
              <li>Development of multiplex PCR and whole genome sequencing workflows</li>
              <li>DNA/RNA extraction and library preparation for Illumina and MinION platforms</li>
              <li>Bioinformatics pipeline development for metagenomics and clinical sample analysis</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Research Technician | August 2019–November 2019</h3>
            <p className="text-gray-700 font-medium">Integrated Genomics Facility, Plant Pathology Department</p>
            <p className="text-gray-600 mb-2">Kansas State University | Supervisor: Alina Akhunova</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>DNA and RNA library preparation and quality control</li>
              <li>Sample preparation and loading of Illumina NextSeq and MiSeq platforms</li>
              <li>Qualitative and quantitative analysis using qPCR, Qubit, Bioanalyzer, and Tape Station</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Undergraduate Research Assistant | February 2017–July 2019</h3>
            <p className="text-gray-700 font-medium">National Institute of Microbial Forensics & Food and Agricultural Biosecurity</p>
            <p className="text-gray-600 mb-2">Oklahoma State University | Supervisor: Astri Wayadande</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Assembly and annotation of six leafhopper genomes</li>
              <li>Genomic and transcriptomic comparisons for host specificity studies</li>
              <li>Annotation of flesh fly and rat microbiomes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-800 pb-2">Awards and Scholarships</h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Schendel-Mages Fellowship, Kansas State University Entomology (2024) — $650</li>
          <li>Abstract of Excellence Award, Bionexus Kansas City (2024) — $200</li>
          <li>Graduate Student of the Month, College of Agriculture, Kansas State University (January 2023)</li>
          <li>Graduate Student Council Travel Award, Kansas State University (2022) — $675</li>
          <li>Popenoe Student Travel Award, Kansas State University (2022) — $500</li>
          <li>Student Governing Board Travel Award, Kansas State University (2022) — $100</li>
          <li>Research and State Finalist, Graduate Student Council, Kansas State University (January 2022)</li>
        </ul>
      </section>

      {/* Service */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-800 pb-2">Service</h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Bioinformatics Mentorship (2022–Present)</li>
          <li>Undergraduate Research Experience Mentor (2022)</li>
          <li>Graduate Student Council Representative, Popenoe Entomology Club (2022)</li>
          <li>K-GRAD Research Symposium Session Moderator (2022)</li>
          <li>Three-Minute Thesis Moderator (2022 & 2023)</li>
        </ul>
      </section>

      {/* Skills Summary */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-800 pb-2">Skills Summary</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Bioinformatics & Pipeline Development</h3>
            <p className="text-gray-700">
              Nextflow, Apptainer/Docker, genome assembly & annotation, transcriptomics, metagenomics,
              AMR detection, comparative genomics, Python, R, HPC systems
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Molecular Techniques</h3>
            <p className="text-gray-700">
              PCR/qPCR, DNA/RNA extraction, Illumina library prep, Oxford Nanopore library prep,
              Aviti sequencing, Qubit, Bioanalyzer, TapeStation
            </p>
          </div>
        </div>
      </section>

      {/* Publications Note */}
      <section className="bg-blue-50 border-l-4 border-blue-500 p-6">
        <h2 className="text-2xl font-bold mb-3">Publications</h2>
        <p className="text-lg">
          For a complete list of publications, presentations, and detailed research descriptions,
          please visit the{' '}
          <a href="/publications" className="text-blue-600 hover:text-blue-800 underline font-medium">
            Publications page
          </a>.
        </p>
      </section>
    </div>
  );
}
