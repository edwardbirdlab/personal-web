export default function Publications() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Publications</h1>

      {/* In Review - 2025 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-700 dark:text-gray-300">In Review (2025)</h2>
        <ol className="space-y-4 list-decimal list-inside">
          <li className="text-lg leading-relaxed">
            <span className="font-medium">Nayduch, D., Scroggs, S.L.P., Shults, P., Brendel, L.A., Reister-Hendricks, L.M., Taylor, C., Bird, E., Lopez, B., Marshall, E.S.</span> (In Review - 2025).
            Detection of highly pathogenic avian influenza virus H5N1 in house flies on California farms during the 2024 outbreak.
            <em className="text-gray-600 dark:text-gray-400"> Scientific Reports</em>
          </li>
          <li className="text-lg leading-relaxed">
            <span className="font-medium">Bird, E., Pickens, V., Olds, C., Silver, K., Nayduch, D.</span> (In Review - 2025).
            BALROG-ISO: a high-throughput pipeline for Bacterial AntimicrobiaL Resistance annOtation of Genomes-ISOlate whole genome.
            <em className="text-gray-600 dark:text-gray-400"> MicroPubl Biol</em>
          </li>
        </ol>
      </section>

      {/* In Preparation - 2025 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-700 dark:text-gray-300">In Preparation (2025)</h2>
        <ol start={3} className="space-y-4 list-decimal list-inside">
          <li className="text-lg leading-relaxed">
            <span className="font-medium">Bird, E., Hall, B., Molik, D., Geib, S.M., Simmonds, T.J., Nayduch, D., Silver, K., Shults, P.</span> (In Preparation - 2025).
            A chromosome scale genome for Culicoides sonorensis shows novel gene expansion and structural variation across Diptera.
          </li>
          <li className="text-lg leading-relaxed">
            <span className="font-medium">Bird, E., Hall, B., Silver, K., Nayduch, D.</span> (In Preparation - 2025).
            Common transcriptomic responses of Culicoides sonorensis biting midges to infection with different arboviruses.
          </li>
          <li className="text-lg leading-relaxed">
            <span className="font-medium">Bird, E., Brendel, L., Silver, K., Nayduch, D.</span> (In Preparation - 2025).
            BALROG-MON: A Metagenomic Framework that Facilitates the Use of House Flies as Xenosurveillance Tools for Monitoring Pathogens and Antimicrobial Resistance.
          </li>
          <li className="text-lg leading-relaxed">
            <span className="font-medium">Osborne, C., Bird, E., Cooper, A.M.W., Silver, K.</span> (In Preparation - 2025).
            Examining RNA interference efficiency in cultured cells and larvae of the biting midge Culicoides sonorensis.
          </li>
          <li className="text-lg leading-relaxed">
            <span className="font-medium">Pickens, V., Nayduch, D., Purvis, T., Hall, B., Brendel, L., Brooke, G., Bird, E., Olds, C.</span> (In Preparation - 2025).
            Adult house flies (Diptera: Muscidae) reflect site-specific antimicrobial resistant bacteria in confined beef cattle operation environments.
          </li>
          <li className="text-lg leading-relaxed">
            <span className="font-medium">Pickens, V., Bird, E., Olds, C., Nayduch, D.</span> (In Preparation - 2025).
            Bridging the gap: Comparative genomics of antimicrobial resistant Escherichia coli carried by house flies (Diptera: Muscidae), manure, feed, and water sources at Kansas beef cattle operations.
          </li>
        </ol>
      </section>

      {/* Published - 2025 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-blue-800 dark:text-blue-400">Published (2025)</h2>
        <ol start={9} className="space-y-4 list-decimal list-inside">
          <li className="text-lg leading-relaxed">
            <span className="font-medium">Bird, E., Pickens, V., Molik, D., Silver, K., Nayduch, D.</span> (2025).
            BALROG-MON: a high-throughput pipeline for Bacterial AntimicrobiaL Resistance annOtation of Genomes-Metagenomic Oxford Nanopore.
            <em className="text-gray-600 dark:text-gray-400"> MicroPubl Biol.</em>
            {' '}<a href="https://doi.org/10.17912/micropub.biology.001427" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
              doi: 10.17912/micropub.biology.001427
            </a>
          </li>
          <li className="text-lg leading-relaxed">
            <span className="font-medium">Pickens, V., Hall, B., Yeater, K., Purvis, T., Bird, E., Brooke, G., Olds, C., Nayduch, D.</span> (2025).
            Bacterial abundance and antimicrobial resistance prevalence carried by adult house flies (Diptera: Muscidae) at Kansas dairy and beef cattle operations.
            <em className="text-gray-600 dark:text-gray-400"> Journal of Medical Entomology.</em>
            {' '}<a href="https://doi.org/10.1093/jme/tjaf052" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
              doi: 10.1093/jme/tjaf052
            </a>
          </li>
        </ol>
      </section>

      {/* Published - 2023 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-blue-800 dark:text-blue-400">Published (2023)</h2>
        <ol start={11} className="space-y-4 list-decimal list-inside">
          <li className="text-lg leading-relaxed">
            <span className="font-medium">Scroggs, S.L.P., Bird, E.J., Molik, D.C., Nayduch, D.</span> (2023).
            Vesicular Stomatitis Virus Elicits Early Transcriptome Response in Culicoides sonorensis Cells.
            <em className="text-gray-600 dark:text-gray-400"> Viruses, 15(10):2108.</em>
            {' '}<a href="https://doi.org/10.3390/v15102108" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
              doi: 10.3390/v15102108
            </a>
          </li>
          <li className="text-lg leading-relaxed">
            <span className="font-medium">Osborne, C., Cooper, A.M.W., Hall, B., Bird, E., Nayduch, D., Silver, K.</span> (2023).
            Evaluation of potential reference genes in the biting midge Culicoides sonorensis for real-time quantitative PCR analyses.
            <em className="text-gray-600 dark:text-gray-400"> Scientific Reports.</em>
            {' '}<a href="https://doi.org/10.1038/s41598-023-43750-2" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
              doi: 10.1038/s41598-023-43750-2
            </a>
          </li>
        </ol>
      </section>

      {/* Published - 2021 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-blue-800 dark:text-blue-400">Published (2021)</h2>
        <ol start={13} className="space-y-4 list-decimal list-inside">
          <li className="text-lg leading-relaxed">
            <span className="font-medium">Doerksen, T., Bird, E., Henningson, J., Palinski, R.</span> (2021).
            Near-complete Vesicular Stomatitis Virus genomes from the 2020 outbreak in Kansas.
            <em className="text-gray-600"> American Society for Microbiology.</em>
          </li>
        </ol>
      </section>

      {/* Published - 2019 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-blue-800 dark:text-blue-400">Published (2019)</h2>
        <ol start={14} className="space-y-4 list-decimal list-inside">
          <li className="text-lg leading-relaxed">
            <span className="font-medium">Youssef, N., Farag, I., Hahn, M., Premathilake, H., Fry, E., Hart, M., Elshahed, M., Bird, E., et al.</span> (2019).
            Candidatus Krumholzibacterium zodletonense gen. nov., sp nov, the first representative of the candidate phylum Krumholzibacteriota phyl. nov. recovered from an anoxic sulfidic spring using genome resolved metagenomics.
            <em className="text-gray-600 dark:text-gray-400"> Systematic and Applied Microbiology, 42(1):85-93.</em>
          </li>
        </ol>
      </section>

      {/* Published - 2018 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-blue-800 dark:text-blue-400">Published (2018)</h2>
        <ol start={15} className="space-y-4 list-decimal list-inside">
          <li className="text-lg leading-relaxed">
            <span className="font-medium">Pickens, V., Bird, E., Wayadande, A., Hoback, W.W.</span> (2018).
            Microbial interactions of flies and their impact in bacterial transmission.
            <em className="text-gray-600 dark:text-gray-400"> Oklahoma State Honors' Thesis.</em>
          </li>
        </ol>
      </section>
    </div>
  );
}
