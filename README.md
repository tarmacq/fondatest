# Fondatest, rebrand

Static rebrand of **fondatest-algerie.com**, built on the design system already in this
folder (`styles.css`, `app.js`, the logo mark, Bai Jamjuree, the flat ink / flame / paper
palette, square corners, hairline rules, skewed accents). No gradients, no rounded corners.

All copy, tables, references, equipment and contact details are taken from the live site.
Nothing is invented. Where the source site has a menu entry with no page behind it
(Sondages carottés, Essais pressiométriques, Formulation des bétons, Ecrasement des bétons
et affaissements, Pathologie des bétons), the entry is listed but not linked, because there
is no content to reproduce.

## Pages

Same paths as the source site.

| Path | Source page |
| --- | --- |
| `/` | Accueil |
| `/nos-metiers/` | Nos Métiers |
| `/category/controle-de-fondations-speciales-et-profondes/` | Controle de fondations spéciales et profondes |
| `/controle-de-fondations-speciales-profondes/` | the article of the same name |
| `/controle-transparence-essais-soniques/` | Contrôle par transparence, essais soniques |
| `/controle-impedance-reflexion/` | Contrôle par impédance / Réflexion |
| `/essais-de-chargement/` | Essais de chargement |
| `/category/etudes-geotechniques/` | Etudes géotechniques |
| `/category/diagnostics-structures/` | Diagnostics structures |
| `/diagnostic-structures-essais-a-lultrason/` | Essais à l'ultrason |
| `/diagnostic-structures-controle-enrobages-ferroscan/` | Contrôle des enrobages au ferroscan |
| `/suivi-inclinometrique/` | Suivi inclinométrique |
| `/category/cat-references/` | Nos Références |
| `/references-controle-fondations-controle-beton/` | Références activités contrôle fondations et contrôle béton |
| `/references-geotechnique/` | Références activité géotechnique |
| `/agrement-et-attestations-de-bonne-execution/` | Agrément et attestations de bonne éxecution |
| `/notre-equipe/` | Notre équipe |
| `/notre-materiel/` | Notre Materiel |
| `/nous-contacter/` | Nous Contacter |
| `/nos-projets/` | Nos projets |

The two category archives that return no article on the source site
(`etudes-geotechniques`, `cat-references`) are rebuilt as index pages over the material
that does exist.

## Assets

`assets/site/` holds the photographs and diagrams pulled from the source site, and
`assets/docs/` the agrément, the attestations de bonne exécution and the three CVs.
On the source site the diagram files are served from broken `localhost` URLs; the working
copies were taken from the `srcset` attributes.

## Map

The Google My Maps embed (`mid=1LtZo42uuvO-ZOIuLToctr0zVTNwTXEUD`) appears on the home
page, on Notre équipe and on Nous Contacter, matching where the source site places it.

## Notes

- Paths are absolute under `/share/demo/fondatest-rebrand`, so the site needs to be served
  from that prefix.
- `vercel.json` at the repo root sets `cleanUrls`, so `/nos-metiers/` resolves to
  `nos-metiers/index.html`.
- The contact form is a `mailto:` form; the source site used Contact Form 7, which needs a
  backend.
