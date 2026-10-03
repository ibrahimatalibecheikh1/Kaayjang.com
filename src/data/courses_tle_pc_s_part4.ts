import { LessonContent } from './courses';

// =========================================================================
// PHYSIQUE-CHIMIE CLASSE DE TERMINALE S (SÉRIES S1, S2) — PARTIE 4 (PHYSIQUE ONDES & NUCLÉAIRE)
// Conforme au programme officiel national du Sénégal (Baccalauréat Série S)
// Leçons S-10 à S-13 : Oscillateurs mécaniques, Circuits RLC, Ondes & Optique ondulatoire, Physique Nucléaire
// Leçons exhaustives sans résumé, démonstrations intégrales pas-à-pas et figures/schémas obligatoires
// =========================================================================

export const SVG_PC_TLE_S_RLC_RESONANCE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" className="w-full h-auto">
  <rect width="760" height="380" rx="16" fill="#f8fafc" stroke="#6366f1" stroke-width="2"/>
  <text x="380" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#312e81">
    FIGURE S-10 : CIRCUIT RLC SÉRIE EN RÉGIME FORCÉ & COURBE DE RÉSONANCE D'INTENSITÉ
  </text>
  <text x="380" y="50" text-anchor="middle" font-size="12" fill="#4338ca">
    Impédance Z(ω) = √[R² + (Lω - 1/Cω)²] et résonance pour ω₀ = 1/√(LC) où I_max = U / R
  </text>

  <!-- Axes -->
  <line x1="80" y1="320" x2="680" y2="320" stroke="#334155" stroke-width="2" />
  <line x1="120" y1="340" x2="120" y2="80" stroke="#334155" stroke-width="2" />
  <text x="660" y="340" font-size="13" font-weight="bold" fill="#1e293b">Pulsation ω (rad/s)</text>
  <text x="80" y="90" font-size="13" font-weight="bold" fill="#1e293b">Intensité I (A)</text>

  <!-- Sharp Resonance curve for small R -->
  <path d="M 120 310 Q 280 300 360 260 Q 390 200 400 100 Q 410 200 440 260 Q 520 300 640 310" fill="none" stroke="#dc2626" stroke-width="3.5" />
  <text x="415" y="95" font-size="12" font-weight="bold" fill="#dc2626">Faible résistance R₁ (Résonance aiguë)</text>

  <!-- Broad curve for higher R -->
  <path d="M 120 310 Q 300 305 370 250 Q 400 180 430 250 Q 500 305 640 310" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="6,3" />
  <text x="445" y="185" font-size="12" font-weight="bold" fill="#2563eb">Forte résistance R₂ (Résonance floue)</text>

  <!-- Peak point -->
  <circle cx="400" cy="100" r="6" fill="#dc2626" />
  <line x1="400" y1="100" x2="400" y2="320" stroke="#dc2626" stroke-dasharray="3,3" stroke-width="1.5" />
  <text x="390" y="338" font-size="12" font-weight="bold" fill="#dc2626">ω₀ = 1/√(LC)</text>

  <line x1="120" y1="100" x2="400" y2="100" stroke="#dc2626" stroke-dasharray="3,3" stroke-width="1.5" />
  <text x="65" y="105" font-size="12" font-weight="bold" fill="#dc2626">I₀ = U/R</text>

  <!-- Bandwidth marks at I0 / sqrt(2) -->
  <line x1="120" y1="164" x2="430" y2="164" stroke="#16a34a" stroke-dasharray="3,3" stroke-width="1.5" />
  <text x="50" y="168" font-size="11" font-weight="bold" fill="#16a34a">I₀ / √2</text>
  <circle cx="388" cy="164" r="4" fill="#16a34a" />
  <circle cx="412" cy="164" r="4" fill="#16a34a" />
  <text x="380" y="155" font-size="11" font-weight="bold" fill="#16a34a">Bande passante Δω = R/L</text>

  <rect x="60" y="220" width="280" height="90" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="75" y="242" font-size="11" font-weight="bold" fill="#312e81">À la résonance d'intensité :</text>
  <text x="75" y="262" font-size="11" fill="#4338ca">• Impédance minimale : Z_min = R</text>
  <text x="75" y="280" font-size="11" fill="#4338ca">• Déphasage nul : φ = 0 (u et i en phase)</text>
  <text x="75" y="298" font-size="11" fill="#4338ca">• Facteur de qualité Q = Lω₀/R = 1/(RCω₀)</text>
</svg>`;

export const SVG_PC_TLE_S_YOUNG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" className="w-full h-auto">
  <rect width="760" height="380" rx="16" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
  <text x="380" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#38bdf8">
    FIGURE S-11 : INTERFÉRENCES LUMINEUSES — FENTES D'YOUNG & INTERFRANGE i
  </text>
  <text x="380" y="50" text-anchor="middle" font-size="12" fill="#7dd3fc">
    Différence de marche δ = d₂ - d₁ = (a · x) / D et interfrange i = (λ · D) / a
  </text>

  <!-- Monochromatic Laser Source -->
  <rect x="40" y="185" width="60" height="30" rx="4" fill="#dc2626" />
  <text x="70" y="205" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Laser λ</text>
  <line x1="100" y1="200" x2="240" y2="200" stroke="#ef4444" stroke-width="2.5" />

  <!-- Double Slits Barrier -->
  <line x1="240" y1="80" x2="240" y2="180" stroke="#64748b" stroke-width="4" />
  <line x1="240" y1="190" x2="240" y2="210" stroke="#64748b" stroke-width="4" />
  <line x1="240" y1="220" x2="240" y2="320" stroke="#64748b" stroke-width="4" />
  <!-- Slits S1 and S2 -->
  <circle cx="240" cy="185" r="3" fill="#38bdf8" />
  <text x="220" y="185" font-size="11" font-weight="bold" fill="#38bdf8">S₁</text>
  <circle cx="240" cy="215" r="3" fill="#38bdf8" />
  <text x="220" y="225" font-size="11" font-weight="bold" fill="#38bdf8">S₂</text>
  <text x="250" y="204" font-size="10" fill="#94a3b8">écart a</text>

  <!-- Screen at distance D -->
  <line x1="620" y1="80" x2="620" y2="320" stroke="#f8fafc" stroke-width="4" />
  <text x="635" y="95" font-size="13" font-weight="bold" fill="#f8fafc">Écran (E)</text>

  <!-- Rays from S1 and S2 to Point M -->
  <line x1="240" y1="185" x2="620" y2="140" stroke="#ef4444" stroke-width="1.8" />
  <line x1="240" y1="215" x2="620" y2="140" stroke="#ef4444" stroke-width="1.8" />
  <circle cx="620" cy="140" r="5" fill="#ef4444" />
  <text x="630" y="145" font-size="12" font-weight="bold" fill="#ef4444">Point M(x)</text>

  <!-- Central point O -->
  <circle cx="620" cy="200" r="4" fill="#38bdf8" />
  <text x="630" y="205" font-size="11" fill="#38bdf8">O (Frange centrale)</text>
  <line x1="240" y1="200" x2="620" y2="200" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,4" />
  <text x="430" y="215" font-size="12" fill="#94a3b8">Distance D</text>

  <!-- Fringes pattern visualization on screen -->
  <g opacity="0.9">
    <rect x="670" y="125" width="25" height="10" fill="#ef4444" />
    <rect x="670" y="145" width="25" height="10" fill="#ef4444" />
    <rect x="670" y="165" width="25" height="10" fill="#ef4444" />
    <rect x="670" y="185" width="25" height="15" fill="#ef4444" stroke="#ffffff" />
    <rect x="670" y="210" width="25" height="10" fill="#ef4444" />
    <rect x="670" y="230" width="25" height="10" fill="#ef4444" />
    <rect x="670" y="250" width="25" height="10" fill="#ef4444" />
    <text x="705" y="197" font-size="11" font-weight="bold" fill="#ef4444">Franges</text>
  </g>

  <rect x="60" y="280" width="480" height="80" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="75" y="302" font-size="11" font-weight="bold" fill="#38bdf8">Conditions d'interférences au Bac S :</text>
  <text x="75" y="322" font-size="11" fill="#f8fafc">• Frange brillante (ondes en phase) : δ = k · λ ⟺ x = k · (λ·D / a) (k ∈ Z)</text>
  <text x="75" y="342" font-size="11" fill="#f8fafc">• Frange sombre (ondes en opposition) : δ = (k + 1/2) · λ ⟺ x = (k + 1/2) · i</text>
</svg>`;

// =========================================================================
// LEÇON S-10 : OSCILLATIONS MÉCANIQUES LIBRES ET AMORTIES
// =========================================================================
export const LESSON_10_PC_TLE_S: LessonContent = {
  id: `pc-tle-s-cours-10`,
  number: `Leçon S-10`,
  title: `Oscillations Mécaniques Libres et Amorties`,
  subject: `Physique-Chimie`,
  classLevel: `Terminale S`,
  level: `Terminale S (S1 & S2)`,
  readTime: `80 min de dynamique oscillatoire et énergie`,
  description: `Système solide-ressort horizontal, pendule élastique et pendule simple, établissement de l'équation différentielle x'' + ω₀²x = 0, période propre T₀ = 2π√(m/k), bilan énergétique (conservation de Em), amortissement visqueux et régimes pseudopériodique, apériodique et critique.`,
  image: {
    caption: `Figure S-10 : Oscillations mécaniques d'un pendule élastique et conversion mutuelle des énergies cinétique et potentielle.`,
    svgContent: SVG_PC_TLE_S_RLC_RESONANCE
  },
  diagram: {
    title: `Oscillateurs Mécaniques`,
    svgContent: SVG_PC_TLE_S_RLC_RESONANCE
  },
  introduction: `Le mouvement oscillatoire périodique d'un corps autour d'une position d'équilibre stable est l'un des phénomènes les plus universels de toute la physique : battement d'un pendule d'horloge, vibrations des suspensions d'un véhicule roulant sur les pistes sénégalaises, ondes sismiques ou mouvements atomiques dans un cristal solide. 
Ce chapitre de Terminale S traite de l'oscillateur harmonique mécanique élémentaire : le système solide-ressort. En appliquant la deuxième loi de Newton ou le théorème de l'énergie mécanique, on établit l'équation différentielle linéaire du second ordre régissant la position x(t), on démontre l'expression de la période propre T₀, et on étudie l'influence des forces de frottement fluide sur l'amortissement du mouvement.`,
  conclusion: `En conclusion, l'oscillateur mécanique harmonique non amorti est régi par l'équation canonique : x''(t) + (k/m) x(t) = 0. Sa pulsation propre est ω₀ = √(k/m) et sa période propre est T₀ = 2π√(m/k). L'énergie mécanique totale : E_m = E_c + E_pe = 1/2 m v² + 1/2 k x² = 1/2 k X_m² est strictement conservée au cours du temps, oscillant continuellement entre forme cinétique et forme potentielle élastique. En présence de frottements visqueux f = -h·v, l'énergie mécanique se dissipe en chaleur par effet Joule mécanique, conduisant au régime pseudopériodique de pseudo-période T ≈ T₀.`,
  sections: [
    {
      title: `I. L'OSCILLATEUR ÉLASTIQUE HORIZONTAL NON AMORTI`,
      subsections: [
        {
          subtitle: `A. Dispositif et force de rappel élastique`,
          content: [
            `Un solide de masse m glisse sans frottement sur un plan horizontal le long d'un axe Ox. Il est attaché à l'extrémité d'un ressort hélicoïdal à spires non jointives, de masse négligeable, de longueur à vide L₀ et de raideur k (en N/m).`,
            `La position d'équilibre O correspond au ressort non déformé (x = 0).`,
            `Lorsque le solide est écarté d'une position x(t), le ressort exerce sur lui une force de rappel élastique proportionnelle à l'allongement et dirigée vers la position d'équilibre :`,
            `T = - k · x · i.`
          ]
        },
        {
          subtitle: `B. Établissement de l'équation différentielle par le PFD`,
          content: [
            `Bilan des forces extérieures appliquées au solide :`,
            `1. Le poids P = m · g (vertical descendant).`,
            `2. La réaction normale du support R_N (verticale ascendante). Comme le mouvement est horizontal, P + R_N = 0.`,
            `3. La force de rappel du ressort T = - k · x · i.`,
            `Deuxième loi de Newton : ∑ F_ext = m · a ⟹ T = m · a ⟹ - k · x · i = m · x'' · i.`,
            `En projetant sur l'axe Ox et en divisant par m :`,
            `x''(t) + (k / m) · x(t) = 0.`,
            `En posant la pulsation propre ω₀ = √(k / m) (en rad/s), on obtient l'équation canonique :`,
            `x''(t) + ω₀² · x(t) = 0.`
          ]
        },
        {
          subtitle: `C. Solution sinusoïdale et période propre T₀`,
          content: [
            `La solution générale de cette équation différentielle est une fonction sinusoïdale du temps de la forme :`,
            `x(t) = X_m · cos(ω₀ · t + φ),`,
            `où X_m est l'amplitude maximale (en mètres), ω₀ la pulsation propre (rad/s) et φ la phase à l'origine t = 0 (en radians).`,
            `La période propre T₀ d'oscillation vaut :`,
            `T₀ = 2π / ω₀ = 2π √( m / k ).`,
            `Propriété d'isochronisme des petites oscillations : La période propre T₀ ne dépend absolument pas de l'amplitude X_m ! Que l'on étire le ressort de 2 cm ou de 5 cm, la durée d'un aller-retour complet est rigoureusement identique.`
          ]
        }
      ]
    },
    {
      title: `II. ÉTUDE ÉNERGÉTIQUE DE L'OSCILLATEUR HARMONIQUE`,
      subsections: [
        {
          subtitle: `A. Énergie cinétique, énergie potentielle et conservation`,
          content: [
            `1. Énergie cinétique : E_c(t) = 1/2 · m · v(t)² = 1/2 · m · [- ω₀ X_m sin(ω₀ t + φ)]² = 1/2 m ω₀² X_m² sin²(ω₀ t + φ).`,
            `Comme ω₀² = k/m, on a : E_c(t) = 1/2 k X_m² sin²(ω₀ t + φ).`,
            `2. Énergie potentielle élastique : E_pe(t) = 1/2 · k · x(t)² = 1/2 k X_m² cos²(ω₀ t + φ).`,
            `3. Énergie mécanique totale :`,
            `E_m = E_c + E_pe = 1/2 k X_m² [sin²(...) + cos²(...)] = 1/2 k X_m² = 1/2 m v_max² = CONSTANTE.`,
            `Démonstration alternative par dérivation temporelle : Comme le système est conservatif (pas de frottement), d(E_m)/dt = 0 :`,
            `d(1/2 m x'² + 1/2 k x²)/dt = m x' x'' + k x x' = x' (m x'' + k x) = 0.`,
            `Comme x' n'est pas constamment nul, on retrouve immédiatement l'équation : m x'' + k x = 0.`
          ]
        }
      ]
    },
    {
      title: `III. LES OSCILLATIONS MÉCANIQUES AMORTIES`,
      subsections: [
        {
          subtitle: `A. Classification des régimes d'amortissement`,
          content: [
            `En présence d'une force de frottement fluide opposée à la vitesse : f = - h · v (avec h > 0 coefficient de frottement) :`,
            `L'équation différentielle devient : m x'' + h x' + k x = 0 ⟺ x'' + (h/m) x' + ω₀² x = 0.`,
            `Selon la valeur du coefficient d'amortissement h par rapport à la valeur critique h_c = 2√(km) :`,
            `1. Régime pseudopériodique (Frottement faible h < h_c) : Le système effectue des oscillations amorties dont l'amplitude décroît exponentiellement au cours du temps. La durée entre deux passages successifs par le maximum est la pseudo-période T ≈ T₀.`,
            `2. Régime apériodique (Frottement fort h > h_c) : Le système revient lentement à sa position d'équilibre sans jamais osciller ni dépasser l'origine.`,
            `3. Régime critique (h = h_c) : Le système revient à l'équilibre dans le temps le plus court possible sans aucune oscillation. C'est le réglage idéal des amortisseurs automobiles et des aiguilles de galvanomètre.`
          ]
        }
      ]
    }
  ]
};

// =========================================================================
// LEÇON S-11 : CIRCUITS ÉLECTRIQUES RLC EN RÉGIME LIBRE ET FORCÉ
// =========================================================================
export const LESSON_11_PC_TLE_S: LessonContent = {
  id: `pc-tle-s-cours-11`,
  number: `Leçon S-11`,
  title: `Circuits Électriques RLC en Régime Libre et Forcé`,
  subject: `Physique-Chimie`,
  classLevel: `Terminale S`,
  level: `Terminale S (S1 & S2)`,
  readTime: `80 min d'électrocinétique et résonance`,
  description: `Décharge oscillante d'un condensateur dans une bobine inductive (RLC libre), analogie électromécanique, période propre T₀ = 2π√(LC), circuit RLC en régime sinusoïdal forcé, impédance Z, déphasage φ, et résonance d'intensité (facteur de qualité Q et bande passante).`,
  image: {
    caption: `Figure S-11 : Résonance d'intensité dans un circuit RLC série et influence de la résistance sur l'acuité du pic.`,
    svgContent: SVG_PC_TLE_S_RLC_RESONANCE
  },
  diagram: {
    title: `Circuits RLC et Résonance`,
    svgContent: SVG_PC_TLE_S_RLC_RESONANCE
  },
  introduction: `L'étude des oscillations électromagnétiques est le pendant électrique direct des oscillations mécaniques. Les télécommunications modernes (radiodiffusion FM, téléphonie mobile 4G/5G, récepteurs Wi-Fi au Sénégal) reposent toutes sur la capacité d'un circuit oscillant RLC à sélectionner une fréquence porteuse précise parmi des milliers d'ondes captées par l'antenne : c'est le phénomène de résonance électrique. 
Ce chapitre de Terminale S établit l'équation différentielle de la décharge oscillante libre, dresse le tableau magistral de l'analogie formelle entre grandeurs mécaniques et électriques, et développe la théorie du régime sinusoïdal forcé avec construction de Fresnel et résonance d'intensité.`,
  conclusion: `En conclusion, le circuit RLC série en régime forcé soumis à une tension sinusoïdale u(t) = U_m cos(ωt) est caractérisé par son impédance globale : Z = √[R² + (Lω - 1/(Cω))²]. L'intensité efficace vaut I = U / Z. À la pulsation de résonance ω₀ = 1/√(LC), la réactance s'annule (Lω₀ = 1/(Cω₀)) : l'impédance est minimale (Z = R) et l'intensité est maximale I_max = U / R. La bande passante à -3 dB vaut Δω = R / L et le facteur de qualité Q = Lω₀ / R mesure l'acuité de la sélection radio.`,
  sections: [
    {
      title: `I. OSCILLATIONS ÉLECTRIQUES LIBRES DANS LE CIRCUIT RLC`,
      subsections: [
        {
          subtitle: `A. Établissement de l'équation différentielle de décharge`,
          content: [
            `Soit un condensateur de capacité C initialement chargé sous une tension E, qu'on décharge à t = 0 dans une bobine d'inductance L et de résistance r en série avec un résistor R (résistance totale R_t = R + r).`,
            `Loi des mailles : u_C + u_L + u_R = 0.`,
            `Relations constitutives : u_R = R_t · i, u_L = L · (di/dt), et i = dq/dt = C · (du_C/dt).`,
            `En substituant di/dt = C · (d²u_C / dt²) :`,
            `u_C + R_t C (du_C / dt) + L C (d²u_C / dt²) = 0.`,
            `En divisant par LC :`,
            `d²u_C / dt² + (R_t / L) · (du_C / dt) + (1 / LC) · u_C = 0.`,
            `Circuit LC idéal non amorti (R_t = 0) : d²u_C/dt² + ω₀² u_C = 0 avec ω₀ = 1/√(LC).`,
            `Période propre de Thomson : T₀ = 2π / ω₀ = 2π √(LC).`
          ]
        },
        {
          subtitle: `B. Tableau d'analogie électromécanique parfaite`,
          content: [
            `• Élongation mécanique x(t) ⟷ Charge électrique q(t) (ou tension u_C).`,
            `• Vitesse v = dx/dt ⟷ Intensité du courant i = dq/dt.`,
            `• Masse (inertie) m ⟷ Inductance de la bobine L (inertie électromagnétique).`,
            `• Raideur du ressort k ⟷ Inverse de la capacité 1/C.`,
            `• Frottement mécanique h ⟷ Résistance électrique R_t (dissipation Joule).`,
            `• Énergie cinétique 1/2 m v² ⟷ Énergie magnétique 1/2 L i².`,
            `• Énergie potentielle 1/2 k x² ⟷ Énergie électrostatique 1/2 q²/C = 1/2 C u_C².`
          ]
        }
      ]
    },
    {
      title: `II. CIRCUIT RLC EN RÉGIME SINUSOÏDAL FORCÉ ET RÉSONANCE`,
      subsections: [
        {
          subtitle: `A. Impédance et construction de Fresnel`,
          content: [
            `Le circuit RLC série est alimenté par un Générateur Basse Fréquence (GBF) imposant une tension alternative sinusoïdale u(t) = U_m cos(ωt).`,
            `Le circuit répond en régime permanent par un courant de même pulsation ω déphasé de φ :`,
            `i(t) = I_m cos(ωt - φ).`,
            `Expression de l'impédance Z du dipôle RLC série :`,
            `Z = √[ R² + ( Lω - 1 / (Cω) )² ].`,
            `Loi d'Ohm en courant alternatif : U_m = Z × I_m ⟺ U = Z × I.`,
            `Déphasage de la tension par rapport à l'intensité :`,
            `tan(φ) = ( Lω - 1 / (Cω) ) / R, et cos(φ) = R / Z (facteur de puissance).`
          ]
        },
        {
          subtitle: `B. Phénomène de résonance d'intensité`,
          content: [
            `L'intensité efficace I = U / Z est maximale lorsque l'impédance Z est MINIMALE.`,
            `Puisque Z = √[R² + (Lω - 1/Cω)²], le terme sous la racine est minimal lorsque le terme au carré s'annule :`,
            `Lω - 1 / (Cω) = 0 ⟺ L C ω² = 1 ⟺ ω = ω₀ = 1 / √(LC).`,
            `À cette pulsation de résonance ω₀ :`,
            `1. Z_min = R (le circuit se comporte comme une résistance pure).`,
            `2. L'intensité atteint son pic maximal absolu : I_max = U / R.`,
            `3. Le déphasage est nul : φ = 0 (la tension et le courant sont rigoureusement en phase).`,
            `4. Surtension aux bornes du condensateur : U_C = Q × U où Q = (1/R)√(L/C) est le facteur de qualité. Si Q > 1, la tension aux bornes du condensateur peut être dangereusement supérieure à la tension délivrée par le générateur !`
          ]
        }
      ]
    }
  ]
};

// =========================================================================
// LEÇON S-12 : PHÉNOMÈNES ONDULATOIRES : MÉCANIQUES ET OPTIQUE ONDULATOIRE
// =========================================================================
export const LESSON_12_PC_TLE_S: LessonContent = {
  id: `pc-tle-s-cours-12`,
  number: `Leçon S-12`,
  title: `Phénomènes Ondulatoires : Ondes Mécaniques et Optique Ondulatoire`,
  subject: `Physique-Chimie`,
  classLevel: `Terminale S`,
  level: `Terminale S (S1 & S2)`,
  readTime: `80 min de physique ondulatoire intégrale`,
  description: `Propagation d'une onde mécanique progressive, retard temporel τ, double périodicité spatio-temporelle λ = vT, diffraction par une ouverture, interférences lumineuses des fentes d'Young, différence de marche δ = ax/D, franges d'interférence et mesure de l'interfrange i = λD/a.`,
  image: {
    caption: `Figure S-12 : Dispositif interférentiel des fentes d'Young, différence de marche des rayons et alternance de franges brillantes et sombres.`,
    svgContent: SVG_PC_TLE_S_YOUNG
  },
  diagram: {
    title: `Ondes et Interférences Lumineuses`,
    svgContent: SVG_PC_TLE_S_YOUNG
  },
  introduction: `La physique moderne est dominée par le concept universel d'onde. Une onde est la propagation d'une perturbation dans l'espace sans transport global de matière, mais avec transport d'énergie et de quantité de mouvement (houle atlantique sur les plages de Dakar, ondes sonores de la parole, séismes, lumière). 
Au XIXe siècle, les expériences historiques de Thomas Young et d'Augustin Fresnel ont démontré de manière irréfutable la nature ondulatoire de la lumière grâce aux deux phénomènes signatures exclusifs des ondes : la diffraction et les interférences. 
Ce chapitre de Terminale S développe la cinématique des ondes mécaniques progressives et établit la théorie complète du dispositif des trous ou fentes d'Young au Baccalauréat.`,
  conclusion: `En conclusion, les interférences lumineuses prouvent la nature ondulatoire de la lumière. Le dispositif des fentes d'Young éclairé par une source monochromatique de longueur d'onde λ produit sur un écran placé à distance D un réseau régulier de franges parallèles d'interfrange : i = (λ · D) / a, où a est l'écart entre les deux sources cohérentes. La mesure expérimentale précise de l'interfrange i sur un écran permet de mesurer la longueur d'onde d'un laser avec une précision nanométrique : λ = (a · i) / D.`,
  sections: [
    {
      title: `I. LES ONDES MÉCANIQUES PROGRESSIVES`,
      subsections: [
        {
          subtitle: `A. Définition, célérité et retard temporel`,
          content: [
            `Une onde mécanique progressive est le phénomène de propagation d'une perturbation locale dans un milieu matériel élastique.`,
            `Onde transversale : La déformation est perpendiculaire à la direction de propagation (onde sur une corde, vagues à la surface de l'eau).`,
            `Onde longitudinale : La déformation est parallèle à la direction de propagation (onde de compression d'un ressort, onde sonore dans l'air).`,
            `Célérité v : Vitesse de propagation de l'onde (en m/s) : v = d / Δt.`,
            `Notion de retard temporel τ (tau) : Un point M situé à la distance x de la source S reproduit fidèlement le mouvement de S avec un retard temporel τ = x / v :`,
            `y_M(t) = y_S(t - τ) = y_S(t - x / v).`
          ]
        },
        {
          subtitle: `B. La double périodicité des ondes sinusoïdales`,
          content: [
            `Une onde progressive sinusoïdale présente une double périodicité :`,
            `1. Périodicité temporelle T (la période, en secondes) : La plus petite durée au bout de laquelle un point donné du milieu vibre dans le même état (T = 1/f).`,
            `2. Périodicité spatiale λ (la longueur d'onde, en mètres) : La plus petite distance séparant deux points du milieu vibrant EN PHASE à un instant donné.`,
            `Relation fondamentale des ondes : La longueur d'onde est la distance parcourue par l'onde pendant une période temporelle T :`,
            `λ = v × T = v / f.`
          ]
        }
      ]
    },
    {
      title: `II. LE PHÉNOMÈNE DE DIFFRACTION`,
      subsections: [
        {
          subtitle: `A. Diffraction des ondes mécaniques et lumineuses`,
          content: [
            `Lorsqu'une onde rencontre un obstacle ou une ouverture de largeur a du même ordre de grandeur que sa longueur d'onde (a ≤ λ), elle ne se propage plus en ligne droite : elle s'étale et contourne l'obstacle. Ce phénomène est la DIFFRACTION.`,
            `Pour la lumière monochromatique de longueur d'onde λ traversant une fente fine rectiligne de largeur a, le demi-angle de diffraction θ (écart angulaire de la tache centrale) vaut :`,
            `θ = λ / a (avec θ en radians, λ et a dans la même unité de longueur).`,
            `Largeur de la tache centrale sur un écran à distance D : L = 2 D tan(θ) ≈ 2 D θ = (2 λ D) / a.`
          ]
        }
      ]
    },
    {
      title: `III. INTERFÉRENCES LUMINEUSES : LE DISPOSITIF DES FENTES D'YOUNG`,
      subsections: [
        {
          subtitle: `A. Conditions d'obtention d'interférences stables`,
          content: [
            `Pour observer des interférences lumineuses stables dans le temps, il faut impérativement :`,
            `1. Deux sources lumineuses SYNCHRONES (même fréquence et même longueur d'onde λ).`,
            `2. Deux sources COHÉRENTES (présentant un déphasage constant au cours du temps).`,
            `Réalisation pratique : On éclaire deux fentes fines très rapprochées S₁ et S₂ distantes de a par un même faisceau laser monochromatique (division du front d'onde).`
          ]
        },
        {
          subtitle: `B. Démonstration de la différence de marche δ`,
          content: [
            `Considérons un point M de l'écran repéré par son abscisse x par rapport au centre O.`,
            `Soit d₁ = S₁M et d₂ = S₂M les trajets parcourus par les deux rayons lumineux.`,
            `La différence de marche optique est : δ = d₂ - d₁.`,
            `Démonstration géométrique dans l'approximation des petits angles (a << D et x << D) :`,
            `d₂² - d₁² = [ D² + (x + a/2)² ] - [ D² + (x - a/2)² ] = 2 a x.`,
            `Or d₂² - d₁² = (d₂ - d₁) (d₂ + d₁). Comme d₁ ≈ D et d₂ ≈ D, on a d₂ + d₁ ≈ 2D.`,
            `Donc : δ × (2D) = 2 a x ⟺`,
            `δ = (a × x) / D.`
          ]
        },
        {
          subtitle: `C. Positions des franges et formule de l'interfrange i`,
          content: [
            `1. Franges brillantes (Interférences constructives) : Les ondes arrivent en phase ⟺ δ = k · λ (avec k ∈ Z appelé ordre d'interférence) :`,
            `(a · x) / D = k · λ ⟺ x_k = k × (λ · D / a).`,
            `Pour k = 0 : x₀ = 0 correspond à la frange centrale brillante.`,
            `2. Franges sombres (Interférences destructives) : Les ondes arrivent en opposition de phase ⟺ δ = (k + 1/2) · λ :`,
            `x'_k = (k + 1/2) × (λ · D / a).`,
            `3. Définition et formule de l'interfrange i : L'interfrange est la distance séparant les centres de deux franges brillantes (ou deux franges sombres) consécutives :`,
            `i = x_(k+1) - x_k = [ (k + 1) λ D / a ] - [ k λ D / a ] ⟹`,
            `i = (λ × D) / a.`
          ]
        }
      ]
    }
  ]
};

// =========================================================================
// LEÇON S-13 : PHYSIQUE NUCLÉAIRE : RADIOACTIVITÉ ET RÉACTIONS NUCLÉAIRES
// =========================================================================
export const LESSON_13_PC_TLE_S: LessonContent = {
  id: `pc-tle-s-cours-13`,
  number: `Leçon S-13`,
  title: `Physique Nucléaire : Radioactivité et Réactions Nucléaires`,
  subject: `Physique-Chimie`,
  classLevel: `Terminale S`,
  level: `Terminale S (S1 & S2)`,
  readTime: `80 min de physique atomique et énergétique`,
  description: `Structure du noyau atomique, défaut de masse Δm, énergie de liaison et courbe d'Aston, lois de conservation de Soddy, désintégrations α, β⁻, β⁺ et désexcitation γ, loi de décroissance radioactive N(t) = N₀e^(-λt), période T = t₁/₂, activité A(t), réactions de fission et de fusion, et bilan énergétique d'Einstein E = mc².`,
  image: {
    caption: `Figure S-13 : Courbe de décroissance radioactive exponentielle N(t) et courbe d'Aston de l'énergie de liaison par nucléon.`,
    svgContent: SVG_PC_TLE_S_YOUNG
  },
  diagram: {
    title: `Physique Nucléaire`,
    svgContent: SVG_PC_TLE_S_YOUNG
  },
  introduction: `La physique nucléaire explore le cœur le plus intime de la matière : le noyau atomique d'un diamètre de l'ordre de 10⁻¹⁵ mètre (le femtomètre ou fermi). Découverte par Henri Becquerel en 1896 puis élucidée par Pierre et Marie Curie, la radioactivité naturelle est la transmutation spontanée de noyaux atomiques instables s'accompagnant de l'émission de particules énergétiques et de rayonnements électromagnétiques. 
En 1905, Albert Einstein révolutionne la physique en établissant l'équivalence universelle entre la masse et l'énergie : E = m·c². Ce chapitre de Terminale S étudie la stabilité nucléaire, démontre la loi de décroissance radioactive, calcule les bilans d'énergie de liaison et analyse les réactions provoquées de fission et de fusion thermonucléaire.`,
  conclusion: `En conclusion, la physique nucléaire en Terminale S repose sur trois lois inviolables : 1) Les lois de conservation de Soddy (conservation absolue du nombre de charge Z et du nombre de masse A), 2) La loi cinétique de décroissance radioactive : N(t) = N₀ e^(-λt) avec demi-vie radioactive T = t₁/₂ = (ln 2) / λ et activité A(t) = λ·N(t) mesurée en Becquerels (1 Bq = 1 désintégration/s), 3) Le bilan énergétique d'Einstein pour toute réaction nucléaire : ΔE = [∑ m_produits - ∑ m_réactifs] × c². L'énergie libérée sous forme cinétique et rayonnante vaut E_libérée = |Δm| × c² (avec 1 u = 931,5 MeV/c²).`,
  sections: [
    {
      title: `I. STRUCTURE DU NOYAU, DÉFAUT DE MASSE ET ÉNERGIE DE LIAISON`,
      subsections: [
        {
          subtitle: `A. Composition nucléaire et isotopes`,
          content: [
            `Un noyau atomique de symbole notationnel ^A_Z X est constitué de A nucléons :`,
            `• Z protons (nombre de charge ou numéro atomique).`,
            `• N = A - Z neutrons.`,
            `Isotopes : Des noyaux possédant le même nombre de protons Z mais des nombres de neutrons N différents (exemples de l'hydrogène : le protium ¹₁H, le deutérium ²₁H et le tritium ³₁H ; ou du carbone : ¹²₆C et ¹⁴₆C radioactif).`
          ]
        },
        {
          subtitle: `B. Défaut de masse et relation d'Einstein`,
          content: [
            `Fait expérimental remarquable : La masse mesurée d'un noyau atomique stable M_noyau est TOUJOURS STRICTEMENT INFÉRIEURE à la somme des masses de ses nucléons constitutifs pris séparément au repos !`,
            `Définition du défaut de masse Δm :`,
            `Δm = [ Z × m_p + (A - Z) × m_n ] - M_noyau > 0.`,
            `Énergie de liaison du noyau E_l : Énergie qu'il faut fournir à un noyau au repos pour le dissocier entièrement en ses nucléons séparés immobiles :`,
            `E_l = Δm × c².`,
            `Énergie de liaison par nucléon E_l / A : Mesure directe de la STABILITÉ d'un noyau (plus E_l/A est grande, plus le noyau est solidement lié et stable). Le maximum de stabilité est atteint pour le Fer 56 (⁵⁶₂₆Fe) avec E_l/A ≈ 8,8 MeV/nucléon.`,
            `Courbe d'Aston : Représente -E_l/A en fonction de A. Elle met en évidence les deux voies de libération d'énergie nucléaire :`,
            `• La fission nucléaire pour les noyaux très lourds (A > 200, comme l'Uranium 235).`,
            `• La fusion thermonucléaire pour les noyaux très légers (A < 20, comme Deutérium + Tritium).`
          ]
        }
      ]
    },
    {
      title: `II. LES DÉSINTÉGRATIONS RADIOACTIVES SPONTANÉES`,
      subsections: [
        {
          subtitle: `A. Les lois de conservation de Soddy`,
          content: [
            `Lors de toute désintégration ou réaction nucléaire :`,
            `^A₁_Z₁ X₁ + ^A₂_Z₂ X₂ ➔ ^A₃_Z₃ X₃ + ^A₄_Z₄ X₄ :`,
            `1. Conservation du nombre de masse A : A₁ + A₂ = A₃ + A₄.`,
            `2. Conservation du nombre de charge Z : Z₁ + Z₂ = Z₃ + Z₄.`
          ]
        },
        {
          subtitle: `B. Les différents types de radioactivité`,
          content: [
            `1. Radioactivité α (alpha) : Émission d'un noyau d'Hélium 4 (⁴₂He) par des noyaux lourds instables :`,
            `^A_Z X ➔ ^(A-4)_(Z-2) Y + ⁴₂He.`,
            `2. Radioactivité β⁻ (bêta moins) : Émission d'un électron (⁰₋₁e) lorsqu'un neutron en excès se transforme en proton dans le noyau (¹₀n ➔ ¹₁p + ⁰₋₁e + anti-neutrino) :`,
            `^A_Z X ➔ ^A_(Z+1) Y + ⁰₋₁e.`,
            `3. Radioactivité β⁺ (bêta plus) : Émission d'un positon (positron ⁰₊₁e) lorsqu'un proton se transforme en neutron (¹₁p ➔ ¹₀n + ⁰₊₁e + neutrino) :`,
            `^A_Z X ➔ ^A_(Z-1) Y + ⁰₊₁e.`,
            `4. Désexcitation γ (gamma) : Émission d'un rayonnement électromagnétique de très haute énergie (photons γ) par un noyau fils produit dans un état excité Y* :`,
            `^A_Z Y* ➔ ^A_Z Y + γ.`
          ]
        }
      ]
    },
    {
      title: `III. LOI DE DÉCROISSANCE RADIOACTIVE ET DATATION`,
      subsections: [
        {
          subtitle: `A. Établissement de la loi exponentielle N(t) = N₀ e^(-λt)`,
          content: [
            `La désintégration d'un noyau radioactif individuel est un phénomène aléatoire, spontané et inéluctable.`,
            `Pour une population de N(t) noyaux radioactifs à l'instant t, le nombre de désintégrations dN pendant la durée infinitésimale dt est proportionnel à N(t) et à dt :`,
            `dN = - λ × N(t) × dt, où λ (lambda) est la constante radioactive propre au nucléide (en s⁻¹).`,
            `Équation différentielle : dN / dt + λ · N = 0.`,
            `Par intégration avec la condition initiale N(0) = N₀ à t = 0 :`,
            `N(t) = N₀ × e^(- λ · t).`,
            `Demi-vie radioactive (ou période) T = t₁/₂ : Durée au bout de laquelle la moitié des noyaux initiaux se sont désintégrés : N(T) = N₀ / 2 :`,
            `N₀ e^(-λ T) = N₀ / 2 ⟺ e^(-λ T) = 1/2 ⟺ - λ T = ln(1/2) = - ln(2) ⟹`,
            `T = t₁/₂ = ln(2) / λ ≈ 0,693 / λ.`
          ]
        },
        {
          subtitle: `B. Activité d'un échantillon et datation au Carbone 14`,
          content: [
            `Définition de l'activité : Nombre de désintégrations par seconde dans l'échantillon :`,
            `A(t) = - dN / dt = λ × N(t) = A₀ × e^(- λ · t), avec A₀ = λ · N₀.`,
            `Unité légale : Le Becquerel (Bq). 1 Bq = 1 désintégration par seconde.`,
            `Datation au Carbone 14 : Chez les êtres vivants, le rapport ¹⁴C / ¹²C reste constant grâce aux échanges respiratoires et alimentaires avec l'atmosphère. À la mort de l'organisme, les échanges cessent et le Carbone 14 (demi-vie T = 5 730 ans) se désintègre sans être renouvelé.`,
            `La mesure de l'activité résiduelle A(t) permet de calculer avec précision l'âge archéologique de l'échantillon fossile :`,
            `t = (1 / λ) × ln(A₀ / A(t)) = [ T / ln(2) ] × ln(A₀ / A(t)).`
          ]
        }
      ]
    },
    {
      title: `IV. RÉACTIONS NUCLÉAIRES PROVOQUÉES : FISSION ET FUSION`,
      subsections: [
        {
          subtitle: `A. Fission de l'Uranium 235 et réaction en chaîne`,
          content: [
            `La fission est la cassure d'un noyau lourd fissile sous l'impact d'un neutron thermique lent :`,
            `²³⁵₉₂U + ¹₀n ➔ ⁹⁴₃₈Sr + ¹⁴⁰₅₄Xe + 2 ¹₀n.`,
            `Les 2 ou 3 neutrons libérés peuvent à leur tour provoquer la fission d'autres noyaux d'Uranium 235 : c'est la réaction en chaîne, contrôlée dans les réacteurs nucléaires civils ou explosive dans les armes atomiques.`
          ]
        },
        {
          subtitle: `B. Fusion thermonucléaire de l'hydrogène`,
          content: [
            `La fusion est l'union de deux noyaux légers pour former un noyau plus lourd avec libération d'une énergie colossale (moteur thermique du Soleil et des étoiles) :`,
            `²₁H (deutérium) + ³₁H (tritium) ➔ ⁴₂He + ¹₀n + Énergie.`,
            `Pour vaincre la répulsion coulombienne entre les charges positives des noyaux, il faut porter le plasma à une température extrême de plus de 100 millions de degrés (projet mondial ITER).`
          ]
        }
      ]
    }
  ]
};
