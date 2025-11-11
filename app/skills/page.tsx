import Link from 'next/link';

interface Skill {
  name: string;
  projects: Array<{ name: string; url: string }>;
}

export default function Skills() {
  const bioinformaticsSkills: Skill[] = [
    {
      name: "Nextflow workflow development with Apptainer/Docker containerization",
      projects: [
        { name: "BALROG-MON Pipeline", url: "/projects/metagenomic-surveillance" },
        { name: "BALROG-ISO Pipeline", url: "/projects/metagenomic-surveillance" },
      ]
    },
    {
      name: "Eukaryotic genome assembly, annotation, and comparative genomics",
      projects: [
        { name: "Culicoides Genomics", url: "/projects/culicoides-genomics" },
      ]
    },
    {
      name: "Transcriptomics analysis (differential expression, pathway analysis)",
      projects: [
        { name: "Vector Competence Transcriptomics", url: "/projects/transcriptomics-vector-competence" },
      ]
    },
    {
      name: "Bacterial genome analysis and antimicrobial resistance detection",
      projects: [
        { name: "Metagenomic Surveillance", url: "/projects/metagenomic-surveillance" },
        { name: "House Fly Resistome", url: "/projects/housefly-resistome" },
      ]
    },
    {
      name: "Metagenomics and metagenomic AMR surveillance pipelines",
      projects: [
        { name: "Metagenomic Surveillance", url: "/projects/metagenomic-surveillance" },
        { name: "House Fly Resistome", url: "/projects/housefly-resistome" },
      ]
    },
  ];

  const datascienceSkills: Skill[] = [
    {
      name: "Python (pandas, numpy) for data analysis and pipeline development",
      projects: [
        { name: "BALROG Pipelines", url: "/projects/metagenomic-surveillance" },
        { name: "Risk Mapping", url: "/projects/risk-mapping" },
      ]
    },
    {
      name: "R for statistical analysis and visualization",
      projects: [
        { name: "Vector Competence Transcriptomics", url: "/projects/transcriptomics-vector-competence" },
        { name: "House Fly Resistome", url: "/projects/housefly-resistome" },
      ]
    },
    {
      name: "Geospatial mapping and risk assessment modeling",
      projects: [
        { name: "Risk Mapping", url: "/projects/risk-mapping" },
      ]
    },
    {
      name: "Machine learning and AI for behavior analysis",
      projects: [
        { name: "Fly Worry AI", url: "/projects/fly-worry-ai" },
      ]
    },
    {
      name: "Computer vision for behavioral quantification",
      projects: [
        { name: "Fly Worry AI", url: "/projects/fly-worry-ai" },
        { name: "DAM Behavioral Analysis", url: "/projects/dam-behavioral-quantification" },
      ]
    },
  ];

  const wetLabSkills: Skill[] = [
    {
      name: "PCR, qPCR, and primer design",
      projects: [
        { name: "Vector Competence Studies", url: "/projects/transcriptomics-vector-competence" },
      ]
    },
    {
      name: "DNA/RNA extraction and library preparation",
      projects: [
        { name: "Multiple Projects", url: "/cv" },
      ]
    },
    {
      name: "Illumina sequencing (NextSeq, MiSeq)",
      projects: [
        { name: "Multiple Projects", url: "/cv" },
      ]
    },
    {
      name: "Oxford Nanopore (MinION) library prep and sequencing",
      projects: [
        { name: "BALROG-MON", url: "/projects/metagenomic-surveillance" },
        { name: "Culicoides Genomics", url: "/projects/culicoides-genomics" },
      ]
    },
    {
      name: "Aviti library preparation and sequencing",
      projects: [
        { name: "Recent Projects", url: "/cv" },
      ]
    },
    {
      name: "Library QC (Qubit, Bioanalyzer, TapeStation)",
      projects: [
        { name: "Multiple Projects", url: "/cv" },
      ]
    },
  ];

  const SkillSection = ({ title, skills }: { title: string; skills: Skill[] }) => (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 border-b-2 border-gray-300 dark:border-gray-700 pb-2">{title}</h2>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-3">{skill.name}</h3>
            <div className="flex flex-wrap gap-2">
              <span className="text-gray-600 dark:text-gray-400 text-sm">Applied in:</span>
              {skill.projects.map((project, pIndex) => (
                <span key={pIndex}>
                  <Link
                    href={project.url}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm underline"
                  >
                    {project.name}
                  </Link>
                  {pIndex < skill.projects.length - 1 && <span className="text-gray-400 dark:text-gray-500"> • </span>}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Skills & Expertise</h1>

      <div className="mb-8 text-lg text-gray-700 dark:text-gray-300">
        <p>
          My expertise spans computational biology, data science, and molecular techniques. Each skill
          has been developed and applied across multiple research projects, demonstrating practical
          proficiency and depth of knowledge.
        </p>
      </div>

      <SkillSection title="Bioinformatics & Pipeline Development" skills={bioinformaticsSkills} />
      <SkillSection title="Data Science & Machine Learning" skills={datascienceSkills} />
      <SkillSection title="Wet Lab & Sequencing" skills={wetLabSkills} />

      <section className="mt-12 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 dark:border-blue-400 p-6">
        <h2 className="text-2xl font-bold mb-3">Additional Expertise</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li className="text-lg">High-performance computing (HPC) and cloud infrastructure</li>
          <li className="text-lg">Version control with Git and collaborative development</li>
          <li className="text-lg">Scientific writing and manuscript preparation</li>
          <li className="text-lg">Data visualization and figure generation</li>
          <li className="text-lg">Project management and collaborative research</li>
          <li className="text-lg">Mentorship and training in bioinformatics methods</li>
        </ul>
      </section>
    </div>
  );
}
