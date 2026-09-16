import React, { useState } from 'react';
import {
  Compass,
  Layers,
  MapPin,
  Waves,
  Mountain,
  CloudSun,
  Info,
  Maximize2,
  Minimize2,
  CheckCircle2
} from 'lucide-react';

export type SenegalMapMode =
  | 'administrative'
  | 'relief'
  | 'climat'
  | 'hydrographie'
  | 'cartographie'
  | 'regional';

interface SenegalMapProps {
  initialMode?: SenegalMapMode;
  title?: string;
  description?: string;
  highlightedFeatures?: string[];
  allowModeSwitch?: boolean;
}

interface RegionInfo {
  id: string;
  name: string;
  chefLieu: string;
  superficie: string;
  zone: string;
  description: string;
  relief: string;
  climat: string;
  vegetation: string;
  hydrographie: string;
  coord: { x: number; y: number };
}

const REGIONS_DATA: Record<string, RegionInfo> = {
  dakar: {
    id: 'dakar',
    name: 'Dakar',
    chefLieu: 'Dakar (Capitale du Sénégal)',
    superficie: '550 km² (plus petite région)',
    zone: 'Presqu\'île du Cap-Vert (Extrême Ouest africain)',
    description: 'Pointe des Almadies (point le plus à l\'Ouest d\'Afrique). Métropole macrocéphale abritant près d\'un quart de la population.',
    relief: 'Collines volcaniques des Mamelles (105 m, phare de Dakar) et plateaux bas calcaires.',
    climat: 'Microclimat côtier adouci toute l\'année par l\'alizé maritime frais.',
    vegetation: 'Végétation anthropisée, parcs et niayes (maraîchage).',
    hydrographie: 'Façade maritime atlantique sur 3 côtés, absence de cours d\'eau permanent.',
    coord: { x: 105, y: 265 }
  },
  thies: {
    id: 'thies',
    name: 'Thiès',
    chefLieu: 'Thiès',
    superficie: '6 601 km²',
    zone: 'Centre-Ouest / Petite Côte',
    description: 'Carrefour ferroviaire et routier stratégique. Phosphates de Taïba, cimenteries, pêche et grand tourisme sur la Petite Côte (Mbour, Saly).',
    relief: 'Plateau de Thiès (falaise de Thiès s\'élevant à ~130 m).',
    climat: 'Climat de transition soudano-sahélien côtier avec brises de mer.',
    vegetation: 'Savane arborée, baobabs, forêts classées de Bandia et Thiès.',
    hydrographie: 'Littoral atlantique, marigots saisonniers.',
    coord: { x: 165, y: 270 }
  },
  saint_louis: {
    id: 'saint_louis',
    name: 'Saint-Louis',
    chefLieu: 'Saint-Louis (Ndar)',
    superficie: '19 044 km²',
    zone: 'Nord (Basse Vallée du Fleuve Sénégal)',
    description: 'Ancienne capitale coloniale, grande cité de pêcheurs maritimes et grenier de riziculture irriguée grâce au barrage de Diama.',
    relief: 'Plaines alluviales très basses et cordons dunaires côtiers (Langue de Barbarie).',
    climat: 'Sahélien maritime, chaud et aride atténué par l\'alizé sur la côte.',
    vegetation: 'Steppe à épineux (acacias), mangroves dégradées et cultures irriguées (riz, canne à sucre à Richard-Toll).',
    hydrographie: 'Fleuve Sénégal (embouchure mobile), barrage anti-sel de Diama, Lac de Guiers au Sud.',
    coord: { x: 235, y: 110 }
  },
  louga: {
    id: 'louga',
    name: 'Louga',
    chefLieu: 'Louga',
    superficie: '29 188 km²',
    zone: 'Nord-Ouest / Ferlo occidental',
    description: 'Zone pastorale par excellence, terre de parcours du bétail et de forte tradition d\'émigration internationale.',
    relief: 'Grandes plaines sablonneuses du Ferlo et dunes fossiles.',
    climat: 'Sahélien sec et chaud, soumis à l\'harmattan avec 9 mois de saison sèche (< 400 mm/an).',
    vegetation: 'Steppe arbustive à acacias à gomme, tapis d\'herbes discontinues après l\'hivernage.',
    hydrographie: 'Lac de Guiers (réservoir d\'eau douce alimenté par le fleuve Sénégal pour Keur Momar Sarr).',
    coord: { x: 235, y: 195 }
  },
  matam: {
    id: 'matam',
    name: 'Matam',
    chefLieu: 'Matam',
    superficie: '25 083 km²',
    zone: 'Nord-Est (Moyenne Vallée du Fleuve Sénégal)',
    description: 'Région frontalière avec la Mauritanie (le fleuve Sénégal sert de frontière). Gisements de phosphates de Matam.',
    relief: 'Plaine du Walo (terres d\'inondation fertiles) et plateau du Diéri (terres de brousse sableuse).',
    climat: 'Sahélien continental très aride et caniculaire (souvent > 42°C en saison sèche).',
    vegetation: 'Steppe sahélienne clairsemée, gommiers, balanites et épineux.',
    hydrographie: 'Le fleuve Sénégal borde toute la frontière nord-est.',
    coord: { x: 440, y: 165 }
  },
  diourbel: {
    id: 'diourbel',
    name: 'Diourbel',
    chefLieu: 'Diourbel',
    superficie: '4 769 km²',
    zone: 'Centre (Cœur du Bassin arachidier)',
    description: 'Haut lieu religieux et économique avec la sainte ville de Touba. Capitale historique de la culture de l\'arachide.',
    relief: 'Plaines tabulaires très uniformes d\'altitude inférieure à 40 m.',
    climat: 'Soudano-sahélien avec alternance stricte de 8 mois de saison sèche et 4 mois d\'hivernage.',
    vegetation: 'Savane arborée anthropisée dominée par le baobab et le kad (Faidherbia albida).',
    hydrographie: 'Absence de fleuve pérenne ; dépendance absolue aux forages profonds dans la nappe maestrichtienne.',
    coord: { x: 220, y: 260 }
  },
  fatick: {
    id: 'fatick',
    name: 'Fatick',
    chefLieu: 'Fatick',
    superficie: '7 935 km²',
    zone: 'Centre-Ouest / Delta du Sine-Saloum',
    description: 'Région amphibie des îles du Saloum (îles du Gandoul). Pêche, parcs à huîtres et production maraîchère.',
    relief: 'Plaines basses marécageuses, tannes (sols salés) et réseau de chenaux d\'eau salée (bolongs).',
    climat: 'Soudanien côtier, humide lors de l\'hivernage.',
    vegetation: 'Mangroves denses de palétuviers sur les estuaires et savane à rôniers.',
    hydrographie: 'Estuaire géant du fleuve Sine-Saloum (« fleuve inverse » envahi par l\'eau de mer salée).',
    coord: { x: 195, y: 320 }
  },
  kaolack: {
    id: 'kaolack',
    name: 'Kaolack',
    chefLieu: 'Kaolack',
    superficie: '4 157 km²',
    zone: 'Centre (Bassin arachidier / Port fluvial)',
    description: 'Grand port fluvial et carrefour marchand sur le Saloum. Capitale industrielle de l\'exploitation du sel marin des Salins du Saloum.',
    relief: 'Plaines basses alluviales et collines résiduelles latéritiques.',
    climat: 'Soudanien avec des pluies entre 500 et 750 mm par an.',
    vegetation: 'Savane boisée, baobabs géants, rôniers et parcelles d\'arachide.',
    hydrographie: 'Fleuve Saloum (eau très salée en saison sèche, favorable aux salins).',
    coord: { x: 245, y: 325 }
  },
  kaffrine: {
    id: 'kaffrine',
    name: 'Kaffrine',
    chefLieu: 'Kaffrine',
    superficie: '11 853 km²',
    zone: 'Centre-Est',
    description: 'Zone agricole stratégique : carrefour de production de céréales locales (mil, maïs) et bassin arachidier oriental.',
    relief: 'Plateau bas sédimentaire tabulaire recouvert de sables roux et latérite.',
    climat: 'Soudanien continental chaud.',
    vegetation: 'Savane arborée et forêts classées abritant le néré et le caïlcédrat.',
    hydrographie: 'Vallée fossile du Baobolong et marigots temporaires.',
    coord: { x: 310, y: 320 }
  },
  tambacounda: {
    id: 'tambacounda',
    name: 'Tambacounda',
    chefLieu: 'Tambacounda',
    superficie: '42 706 km² (la plus vaste région du Sénégal)',
    zone: 'Est et Sud-Est',
    description: 'Porte d\'entrée de l\'Afrique de l\'Ouest continentale (routes et rail vers le Mali). Abrite le grand Parc National du Niokolo-Koba.',
    relief: 'Plateaux latéritiques cuirassés s\'élevant doucement vers le Sud-Est.',
    climat: 'Soudanien chaud recevant entre 700 et 1 000 mm de pluie.',
    vegetation: 'Savane boisée dense et forêts claires ; forêts galeries le long des cours d\'eau.',
    hydrographie: 'Fleuve Gambie qui le traverse avec ses affluents (Koulountou) et rivière Falémé formant frontière avec le Mali.',
    coord: { x: 480, y: 345 }
  },
  kedougou: {
    id: 'kedougou',
    name: 'Kédougou',
    chefLieu: 'Kédougou',
    superficie: '16 896 km²',
    zone: 'Extrême Sud-Est (Contreforts du Fouta Djallon)',
    description: 'Poumon minier du pays : exploitation industrielle (Sabodala) et artisanale de l\'or, gisements de fer. Pays Bassari et Bédik.',
    relief: 'Socle ancien de roches dures (granite, schistes) et collines culminant à 581 m à Nepen Diakha (point culminant du Sénégal).',
    climat: 'Soudano-guinéen frais sur les hauteurs, fortes pluies (> 1 100 mm/an).',
    vegetation: 'Forêt claire montagnarde, savane boisée luxuriante et chutes d\'eau (Dindéfélo).',
    hydrographie: 'Haut bassin du fleuve Gambie et chutes pittoresques.',
    coord: { x: 620, y: 470 }
  },
  kolda: {
    id: 'kolda',
    name: 'Kolda',
    chefLieu: 'Kolda',
    superficie: '13 718 km²',
    zone: 'Haute-Casamance (Sud)',
    description: 'Zone d\'élevage bovin réputé (race Ndama résistante à la mouche tsé-tsé) et de cultures vivrières abondantes.',
    relief: 'Plateau ondulé bas s\'abaissant vers la vallée fluviale.',
    climat: 'Soudano-guinéen humide et arrosé (> 1 000 mm de pluie par an).',
    vegetation: 'Savane arborée dense et forêts humides semi-caducifoliées.',
    hydrographie: 'Prend sa source ici : le fleuve Casamance s\'écoule d\'Est en Ouest.',
    coord: { x: 380, y: 450 }
  },
  sedhiou: {
    id: 'sedhiou',
    name: 'Sédhiou',
    chefLieu: 'Sédhiou',
    superficie: '7 293 km²',
    zone: 'Moyenne-Casamance (Sud)',
    description: 'Région carrefour bordée par le fleuve Casamance et le fleuve Soungrougrou. Agriculture vivrière, agrumes et mangues.',
    relief: 'Plaines alluviales basses fertiles et bas plateaux sablo-argileux.',
    climat: 'Guinéen maritime très humide, hivernage long (juin à octobre).',
    vegetation: 'Forêts denses, fromagers monumentaux, rôniers et mangroves d\'eau saumâtre.',
    hydrographie: 'Fleuve Casamance et son grand affluent le Soungrougrou.',
    coord: { x: 285, y: 450 }
  },
  ziguinchor: {
    id: 'ziguinchor',
    name: 'Ziguinchor',
    chefLieu: 'Ziguinchor',
    superficie: '7 339 km²',
    zone: 'Basse-Casamance (Extrême Sud-Ouest)',
    description: 'Façade atlantique sud, rizières traditionnelles diolas, haut lieu touristique (Cap Skirring) et grand port de commerce.',
    relief: 'Plaines côtières très basses et chenaux amphibies.',
    climat: 'Guinéen maritime chaud et très pluvieux (souvent 1 200 à 1 500 mm/an).',
    vegetation: 'Forêt tropicale dense semi-caducifoliée, fromagers géants, teck et mangroves impénétrables de palétuviers.',
    hydrographie: 'Vaste estuaire navigable du fleuve Casamance ouvrant sur l\'Atlantique.',
    coord: { x: 195, y: 465 }
  }
};

export const SenegalMap: React.FC<SenegalMapProps> = ({
  initialMode = 'administrative',
  title,
  description,
  highlightedFeatures = [],
  allowModeSwitch = true
}) => {
  const [activeMode, setActiveMode] = useState<SenegalMapMode>(initialMode);
  const [selectedRegionId, setSelectedRegionId] = useState<string>('dakar');
  const [hoveredRegionId, setHoveredRegionId] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [showLegend, setShowLegend] = useState<boolean>(true);

  const selectedRegion = REGIONS_DATA[selectedRegionId] || REGIONS_DATA.dakar;

  return (
    <div
      className={`rounded-2xl border border-amber-200/80 bg-linear-to-b from-amber-50/50 via-white to-amber-50/30 p-3 sm:p-5 my-6 shadow-sm transition-all ${
        isExpanded ? 'fixed inset-2 z-50 overflow-y-auto bg-white p-4 sm:p-6 shadow-2xl' : ''
      }`}
    >
      {/* En-tête de la carte */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-amber-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-amber-600 text-white shadow-2xs">
              <Compass className="w-4 h-4" />
            </span>
            <h3 className="text-base sm:text-lg font-black text-amber-950">
              {title || 'Carte Officielle du Sénégal — Classe de 6ème'}
            </h3>
          </div>
          <p className="text-xs text-amber-800/80 mt-0.5 font-medium">
            {description ||
              'Repères géographiques nationaux conformes aux programmes officiels du Ministère'}
          </p>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={() => setShowLegend(!showLegend)}
            className="px-2.5 py-1 text-xs font-bold rounded-lg border border-amber-300 bg-white text-amber-900 hover:bg-amber-50 transition flex items-center gap-1.5"
            title="Afficher/Masquer la légende"
          >
            <Layers className="w-3.5 h-3.5 text-amber-700" />
            <span className="hidden xs:inline">Légende</span>
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 text-xs font-bold rounded-lg border border-amber-300 bg-white text-amber-900 hover:bg-amber-50 transition"
            title={isExpanded ? 'Réduire la carte' : 'Agrandir la carte'}
          >
            {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Sélecteur de couches thématiques */}
      {allowModeSwitch && (
        <div className="flex flex-wrap items-center gap-1.5 py-2.5 overflow-x-auto">
          <span className="text-[11px] font-black uppercase tracking-wider text-amber-900 mr-1 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5" /> Couches :
          </span>

          <button
            onClick={() => setActiveMode('administrative')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              activeMode === 'administrative'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
            }`}
          >
            <MapPin className="w-3 h-3" />
            <span>14 Régions & Frontières</span>
          </button>

          <button
            onClick={() => setActiveMode('hydrographie')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              activeMode === 'hydrographie'
                ? 'bg-cyan-600 text-white shadow-xs'
                : 'bg-white text-gray-700 hover:bg-cyan-50 border border-gray-200'
            }`}
          >
            <Waves className="w-3 h-3" />
            <span>Réseau Hydrographique</span>
          </button>

          <button
            onClick={() => setActiveMode('relief')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              activeMode === 'relief'
                ? 'bg-amber-700 text-white shadow-xs'
                : 'bg-white text-gray-700 hover:bg-amber-50 border border-gray-200'
            }`}
          >
            <Mountain className="w-3 h-3" />
            <span>Relief & Géologie</span>
          </button>

          <button
            onClick={() => setActiveMode('climat')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              activeMode === 'climat'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200'
            }`}
          >
            <CloudSun className="w-3 h-3" />
            <span>Climat & Végétation</span>
          </button>

          <button
            onClick={() => setActiveMode('cartographie')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              activeMode === 'cartographie'
                ? 'bg-purple-700 text-white shadow-xs'
                : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
            }`}
          >
            <Compass className="w-3 h-3" />
            <span>Outils Cartographiques</span>
          </button>
        </div>
      )}

      {/* Cadre SVG interactif de la Carte du Sénégal */}
      <div className="relative my-2 bg-gradient-to-br from-sky-50 via-slate-50 to-amber-50/40 rounded-xl border border-amber-200 overflow-hidden shadow-inner">
        <svg
          viewBox="0 0 760 540"
          className="w-full h-auto max-h-[550px] select-none cursor-crosshair"
          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.05))' }}
        >
          {/* Définitions des filtres et motifs */}
          <defs>
            {/* Océan Atlantique motif vagues légères */}
            <linearGradient id="oceanGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="100%" stopColor="#bae6fd" />
            </linearGradient>

            {/* Dégradés climatiques */}
            <linearGradient id="sahelGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#fde047" stopOpacity="0.75" />
            </linearGradient>
            <linearGradient id="soudanGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#bbf7d0" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#86efac" stopOpacity="0.75" />
            </linearGradient>
            <linearGradient id="guineeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4ade80" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0.85" />
            </linearGradient>

            {/* Dégradés géologiques */}
            <linearGradient id="sedimentaireGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fef3c7" />
              <stop offset="100%" stopColor="#fde68a" />
            </linearGradient>
            <linearGradient id="socleGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fca5a5" />
              <stop offset="100%" stopColor="#f87171" />
            </linearGradient>
          </defs>

          {/* Océan Atlantique fond ouest */}
          <rect x="0" y="0" width="760" height="540" fill="#f8fafc" />
          <path
            d="M 0,0 L 220,0 L 220,110 L 160,240 L 110,265 L 140,290 L 155,340 L 150,480 L 160,540 L 0,540 Z"
            fill="url(#oceanGrad)"
            opacity="0.6"
          />

          {/* Label Océan Atlantique */}
          <g transform="translate(45, 180) rotate(-75)">
            <text
              className="text-[13px] font-black tracking-widest fill-sky-800/60 uppercase"
              letterSpacing="3"
            >
              OCÉAN ATLANTIQUE (Façade Ouest &gt; 700 km)
            </text>
          </g>

          {/* Pays Voisins - Terres Extérieures */}
          {/* Mauritanie (Nord) */}
          <g id="mauritanie">
            <path
              d="M 220,0 L 760,0 L 760,220 L 610,220 Q 500,120 340,65 Q 260,80 220,110 Z"
              fill="#f1f5f9"
              stroke="#cbd5e1"
              strokeWidth="1.5"
            />
            <text x="390" y="45" className="text-xs font-black fill-gray-500 uppercase tracking-wider">
              MAURITANIE (Nord - Séparée par le Fleuve Sénégal)
            </text>
          </g>

          {/* Mali (Est) */}
          <g id="mali">
            <path
              d="M 610,220 L 760,220 L 760,540 L 670,540 L 630,470 L 610,220 Z"
              fill="#f1f5f9"
              stroke="#cbd5e1"
              strokeWidth="1.5"
            />
            <text
              x="660"
              y="320"
              className="text-xs font-black fill-gray-500 uppercase tracking-wider"
              transform="rotate(60, 660, 320)"
            >
              MALI (Est - Rivière Falémé)
            </text>
          </g>

          {/* Guinée et Guinée-Bissau (Sud) */}
          <g id="guinee_sud">
            <path
              d="M 160,510 L 670,540 L 160,540 Z"
              fill="#f1f5f9"
              stroke="#cbd5e1"
              strokeWidth="1.5"
            />
            <text x="210" y="530" className="text-[11px] font-black fill-gray-500 uppercase">
              GUINÉE-BISSAU (Sud)
            </text>
            <text x="480" y="530" className="text-[11px] font-black fill-gray-500 uppercase">
              RÉPUBLIQUE DE GUINÉE (Sud - Fouta Djallon)
            </text>
          </g>

          {/* TERRITOIRE DU SÉNÉGAL (Base Polygon) */}
          {/* Si mode relief : affichage géologique 2 grands ensembles */}
          {activeMode === 'relief' && (
            <g id="geologie-relief-layer">
              {/* Bassin Sédimentaire (> 75% du territoire) */}
              <path
                d="M 220,110 Q 260,80 340,65 Q 500,120 610,220 L 540,360 L 480,420 L 160,510 L 150,480 L 155,340 L 140,290 L 110,265 L 160,240 Z"
                fill="url(#sedimentaireGrad)"
                stroke="#d97706"
                strokeWidth="1.5"
              />
              {/* Socle Ancien (Sud-Est: Kédougou & Tambacounda oriental) */}
              <path
                d="M 610,220 L 630,470 L 670,540 L 480,420 L 540,360 Z"
                fill="url(#socleGrad)"
                stroke="#dc2626"
                strokeWidth="2"
              />
              <text x="540" y="470" className="text-[11px] font-extrabold fill-red-900">
                SOCLE ANCIEN (Roches dures, Or de Sabodala)
              </text>
              <text x="270" y="240" className="text-xs font-extrabold fill-amber-900">
                BASSIN SÉDIMENTAIRE (&gt; 75% du territoire national)
              </text>

              {/* Points de relief remarquables */}
              {/* Les Mamelles de Dakar */}
              <circle cx="110" cy="265" r="7" fill="#b45309" stroke="#fff" strokeWidth="2" />
              <text x="90" y="250" className="text-[10px] font-black fill-amber-950 bg-white">
                Mamelles (105 m)
              </text>

              {/* Point culminant Nepen Diakha */}
              <polygon points="635,465 645,485 625,485" fill="#dc2626" stroke="#fff" strokeWidth="2" />
              <text x="560" y="495" className="text-[11px] font-black fill-red-950">
                ▲ Nepen Diakha (581 m - Sommet du Sénégal)
              </text>

              {/* Plateaux */}
              <rect x="180" y="245" width="45" height="20" rx="4" fill="#f59e0b" opacity="0.3" />
              <text x="175" y="258" className="text-[9px] font-bold fill-amber-900">
                Plateau de Thiès
              </text>
              <text x="290" y="170" className="text-[10px] font-bold fill-amber-900">
                Plaines du Ferlo
              </text>
            </g>
          )}

          {/* Si mode climat : affichage des 3 domaines bioclimatiques */}
          {activeMode === 'climat' && (
            <g id="climat-layer">
              {/* Domaine Sahélien au Nord */}
              <path
                d="M 220,110 Q 260,80 340,65 Q 500,120 610,220 L 590,240 L 190,210 Z"
                fill="url(#sahelGrad)"
                stroke="#ca8a04"
                strokeWidth="1.5"
              />
              <text x="310" y="125" className="text-xs font-black fill-yellow-950">
                DOMAINE SAHÉLIEN (&lt; 400 mm/an — Steppe à épineux & acacias)
              </text>

              {/* Domaine Soudanien au Centre */}
              <path
                d="M 190,210 L 590,240 L 540,390 L 160,400 L 155,340 L 140,290 L 110,265 L 160,240 Z"
                fill="url(#soudanGrad)"
                stroke="#16a34a"
                strokeWidth="1.5"
              />
              <text x="240" y="300" className="text-xs font-black fill-green-950">
                DOMAINE SOUDANIEN (400 à 900 mm/an — Savane arborée & baobabs)
              </text>

              {/* Domaine Guinéen au Sud */}
              <path
                d="M 160,400 L 540,390 L 630,470 L 670,540 L 160,510 L 150,480 Z"
                fill="url(#guineeGrad)"
                stroke="#15803d"
                strokeWidth="1.5"
              />
              <text x="220" y="470" className="text-xs font-black fill-emerald-950">
                DOMAINE GUINÉEN (&gt; 1 000 mm/an — Forêt dense & Mangroves)
              </text>

              {/* Vents et Masses d'Air */}
              {/* Alizé maritime */}
              <g id="vent-alize">
                <path d="M 60,140 L 160,200" stroke="#0284c7" strokeWidth="3" markerEnd="url(#arrow)" />
                <text x="30" y="130" className="text-[10px] font-black fill-sky-800">
                  ALIZÉ MARITIME (Frais et humide)
                </text>
              </g>

              {/* Harmattan */}
              <g id="vent-harmattan">
                <path d="M 640,160 L 480,220" stroke="#ea580c" strokeWidth="3" strokeDasharray="4,3" />
                <text x="510" y="180" className="text-[10px] font-black fill-orange-800">
                  HARMATTAN (Chaud, sec et poussiéreux de l'Est)
                </text>
              </g>

              {/* Mousson */}
              <g id="vent-mousson">
                <path d="M 100,510 L 250,410" stroke="#059669" strokeWidth="3.5" />
                <text x="40" y="525" className="text-[10px] font-black fill-emerald-800">
                  MOUSSON (Humide et pluvieuse — Hivernage juin à oct.)
                </text>
              </g>
            </g>
          )}

          {/* Si mode administratif ou par défaut : Carte des 14 Régions */}
          {(activeMode === 'administrative' || activeMode === 'regional' || activeMode === 'cartographie') && (
            <g id="regions-layer">
              {/* Saint-Louis */}
              <path
                d="M 220,110 Q 260,80 340,65 Q 400,90 410,130 L 320,160 L 230,160 Z"
                fill={selectedRegionId === 'saint_louis' ? '#93c5fd' : '#dbeafe'}
                stroke="#3b82f6"
                strokeWidth="1.2"
                className="cursor-pointer hover:fill-blue-200 transition"
                onClick={() => setSelectedRegionId('saint_louis')}
                onMouseEnter={() => setHoveredRegionId('saint_louis')}
                onMouseLeave={() => setHoveredRegionId(null)}
              />
              {/* Matam */}
              <path
                d="M 410,130 Q 500,120 610,220 L 520,260 L 400,210 L 320,160 Z"
                fill={selectedRegionId === 'matam' ? '#fde68a' : '#fef08a'}
                stroke="#eab308"
                strokeWidth="1.2"
                className="cursor-pointer hover:fill-amber-200 transition"
                onClick={() => setSelectedRegionId('matam')}
                onMouseEnter={() => setHoveredRegionId('matam')}
                onMouseLeave={() => setHoveredRegionId(null)}
              />
              {/* Louga */}
              <path
                d="M 230,160 L 320,160 L 400,210 L 350,250 L 210,250 L 180,210 Z"
                fill={selectedRegionId === 'louga' ? '#fed7aa' : '#ffedd5'}
                stroke="#f97316"
                strokeWidth="1.2"
                className="cursor-pointer hover:fill-orange-200 transition"
                onClick={() => setSelectedRegionId('louga')}
                onMouseEnter={() => setHoveredRegionId('louga')}
                onMouseLeave={() => setHoveredRegionId(null)}
              />
              {/* Dakar (Cap-Vert) */}
              <path
                d="M 105,260 L 135,255 L 140,275 L 115,280 Z"
                fill={selectedRegionId === 'dakar' ? '#ef4444' : '#fca5a5'}
                stroke="#b91c1c"
                strokeWidth="2"
                className="cursor-pointer hover:fill-red-400 transition animate-pulse"
                onClick={() => setSelectedRegionId('dakar')}
                onMouseEnter={() => setHoveredRegionId('dakar')}
                onMouseLeave={() => setHoveredRegionId(null)}
              />
              {/* Thiès */}
              <path
                d="M 135,255 L 180,240 L 210,270 L 180,310 L 145,295 Z"
                fill={selectedRegionId === 'thies' ? '#c4b5fd' : '#ede9fe'}
                stroke="#8b5cf6"
                strokeWidth="1.2"
                className="cursor-pointer hover:fill-purple-200 transition"
                onClick={() => setSelectedRegionId('thies')}
                onMouseEnter={() => setHoveredRegionId('thies')}
                onMouseLeave={() => setHoveredRegionId(null)}
              />
              {/* Diourbel */}
              <path
                d="M 210,250 L 270,250 L 260,285 L 210,285 Z"
                fill={selectedRegionId === 'diourbel' ? '#a7f3d0' : '#d1fae5'}
                stroke="#10b981"
                strokeWidth="1.2"
                className="cursor-pointer hover:fill-emerald-200 transition"
                onClick={() => setSelectedRegionId('diourbel')}
                onMouseEnter={() => setHoveredRegionId('diourbel')}
                onMouseLeave={() => setHoveredRegionId(null)}
              />
              {/* Fatick */}
              <path
                d="M 180,310 L 240,300 L 230,345 L 155,340 Z"
                fill={selectedRegionId === 'fatick' ? '#bae6fd' : '#e0f2fe'}
                stroke="#0284c7"
                strokeWidth="1.2"
                className="cursor-pointer hover:fill-sky-200 transition"
                onClick={() => setSelectedRegionId('fatick')}
                onMouseEnter={() => setHoveredRegionId('fatick')}
                onMouseLeave={() => setHoveredRegionId(null)}
              />
              {/* Kaolack */}
              <path
                d="M 240,300 L 280,295 L 275,345 L 230,345 Z"
                fill={selectedRegionId === 'kaolack' ? '#fbcfe8' : '#fce7f3'}
                stroke="#db2777"
                strokeWidth="1.2"
                className="cursor-pointer hover:fill-pink-200 transition"
                onClick={() => setSelectedRegionId('kaolack')}
                onMouseEnter={() => setHoveredRegionId('kaolack')}
                onMouseLeave={() => setHoveredRegionId(null)}
              />
              {/* Kaffrine */}
              <path
                d="M 280,295 L 380,270 L 380,345 L 275,345 Z"
                fill={selectedRegionId === 'kaffrine' ? '#ddd6fe' : '#f5f3ff'}
                stroke="#7c3aed"
                strokeWidth="1.2"
                className="cursor-pointer hover:fill-violet-200 transition"
                onClick={() => setSelectedRegionId('kaffrine')}
                onMouseEnter={() => setHoveredRegionId('kaffrine')}
                onMouseLeave={() => setHoveredRegionId(null)}
              />
              {/* Tambacounda */}
              <path
                d="M 380,270 L 520,260 L 610,220 L 630,420 L 510,430 L 380,345 Z"
                fill={selectedRegionId === 'tambacounda' ? '#fde047' : '#fef9c3'}
                stroke="#ca8a04"
                strokeWidth="1.2"
                className="cursor-pointer hover:fill-yellow-200 transition"
                onClick={() => setSelectedRegionId('tambacounda')}
                onMouseEnter={() => setHoveredRegionId('tambacounda')}
                onMouseLeave={() => setHoveredRegionId(null)}
              />
              {/* Kédougou */}
              <path
                d="M 630,420 L 650,470 L 670,540 L 570,530 L 510,430 Z"
                fill={selectedRegionId === 'kedougou' ? '#fca5a5' : '#fee2e2'}
                stroke="#ef4444"
                strokeWidth="1.2"
                className="cursor-pointer hover:fill-rose-200 transition"
                onClick={() => setSelectedRegionId('kedougou')}
                onMouseEnter={() => setHoveredRegionId('kedougou')}
                onMouseLeave={() => setHoveredRegionId(null)}
              />
              {/* Kolda */}
              <path
                d="M 340,410 L 460,410 L 460,500 L 340,500 Z"
                fill={selectedRegionId === 'kolda' ? '#bbf7d0' : '#dcfce7'}
                stroke="#22c55e"
                strokeWidth="1.2"
                className="cursor-pointer hover:fill-green-200 transition"
                onClick={() => setSelectedRegionId('kolda')}
                onMouseEnter={() => setHoveredRegionId('kolda')}
                onMouseLeave={() => setHoveredRegionId(null)}
              />
              {/* Sédhiou */}
              <path
                d="M 260,410 L 340,410 L 340,500 L 260,500 Z"
                fill={selectedRegionId === 'sedhiou' ? '#fed7aa' : '#ffedd5'}
                stroke="#ea580c"
                strokeWidth="1.2"
                className="cursor-pointer hover:fill-amber-200 transition"
                onClick={() => setSelectedRegionId('sedhiou')}
                onMouseEnter={() => setHoveredRegionId('sedhiou')}
                onMouseLeave={() => setHoveredRegionId(null)}
              />
              {/* Ziguinchor */}
              <path
                d="M 150,440 L 260,440 L 260,500 L 150,500 Z"
                fill={selectedRegionId === 'ziguinchor' ? '#a5f3fc' : '#cffafe'}
                stroke="#0891b2"
                strokeWidth="1.2"
                className="cursor-pointer hover:fill-cyan-200 transition"
                onClick={() => setSelectedRegionId('ziguinchor')}
                onMouseEnter={() => setHoveredRegionId('ziguinchor')}
                onMouseLeave={() => setHoveredRegionId(null)}
              />
            </g>
          )}

          {/* L'ENCLAVE DE LA GAMBIE (Enclave Centrale le long du fleuve Gambie sur plus de 300 km) */}
          <g id="gambie-enclave">
            <path
              d="M 160,355 L 380,355 Q 400,375 380,395 L 160,395 Z"
              fill="#e2e8f0"
              stroke="#64748b"
              strokeWidth="1.8"
              strokeDasharray="3,2"
            />
            <text x="210" y="380" className="text-[11px] font-black fill-slate-700 uppercase tracking-widest">
              LA GAMBIE (Enclave &gt; 300 km)
            </text>
          </g>

          {/* RÉSEAU HYDROGRAPHIQUE DU SÉNÉGAL (Lignes bleues principales) */}
          {/* Toujours visible ou renforcé en mode hydrographie */}
          <g id="hydrographie-network">
            {/* Fleuve Sénégal (1790 km, frontière Nord) */}
            <path
              d="M 625,230 Q 560,160 510,140 Q 420,70 345,65 Q 265,75 240,85 Q 210,95 205,120"
              fill="none"
              stroke="#0284c7"
              strokeWidth={activeMode === 'hydrographie' ? '5' : '3'}
              strokeLinecap="round"
            />
            <text x="350" y="55" className="text-[10px] font-black fill-blue-900">
              Fleuve Sénégal (1 790 km)
            </text>

            {/* Lac de Guiers */}
            <ellipse
              cx="255"
              cy="125"
              rx="12"
              ry="22"
              fill="#38bdf8"
              stroke="#0284c7"
              strokeWidth="2"
            />
            <text x="270" y="130" className="text-[9px] font-black fill-sky-950">
              Lac de Guiers (Keur Momar Sarr)
            </text>

            {/* Barrage de Diama */}
            <rect x="200" y="112" width="10" height="6" fill="#1e3a8a" stroke="#fff" strokeWidth="1" />
            <text x="145" y="115" className="text-[9px] font-bold fill-blue-950">
              Barrage de Diama
            </text>

            {/* Barrage de Manantali (en amont au Mali) */}
            <circle cx="630" cy="225" r="5" fill="#1e3a8a" stroke="#fff" strokeWidth="1" />
            <text x="640" y="225" className="text-[9px] font-bold fill-blue-950">
              Manantali
            </text>

            {/* Rivière Falémé (Frontière Mali) */}
            <path
              d="M 625,230 L 640,300 L 660,420"
              fill="none"
              stroke="#0ea5e9"
              strokeWidth="2.5"
              strokeDasharray="4,2"
            />
            <text x="650" y="360" className="text-[9px] font-black fill-sky-800" transform="rotate(75, 650, 360)">
              Rivière Falémé
            </text>

            {/* Fleuve Gambie */}
            <path
              d="M 640,490 Q 560,440 500,410 L 380,375 L 160,375"
              fill="none"
              stroke="#0284c7"
              strokeWidth={activeMode === 'hydrographie' ? '4.5' : '2.5'}
            />
            <text x="470" y="400" className="text-[9px] font-black fill-sky-900">
              Fleuve Gambie (Niokolo-Koba)
            </text>

            {/* Fleuve Koulountou */}
            <path d="M 520,480 L 500,410" fill="none" stroke="#38bdf8" strokeWidth="2" />
            <text x="525" y="450" className="text-[8px] font-bold fill-sky-700">
              Koulountou
            </text>

            {/* Fleuve Casamance */}
            <path
              d="M 380,450 Q 280,440 180,460"
              fill="none"
              stroke="#0284c7"
              strokeWidth={activeMode === 'hydrographie' ? '4.5' : '2.5'}
            />
            <text x="210" y="445" className="text-[10px] font-black fill-cyan-950">
              Fleuve Casamance
            </text>

            {/* Sine-Saloum (Estuaire salé) */}
            <path
              d="M 260,325 Q 210,325 160,335"
              fill="none"
              stroke="#0369a1"
              strokeWidth="3.5"
            />
            <text x="175" y="325" className="text-[9px] font-black fill-blue-900">
              Saloum & Sine (Estuaire marin)
            </text>
          </g>

          {/* Points des Villes Principales & Chefs-lieux */}
          <g id="villes-principales">
            {/* Dakar (Capitale) */}
            <circle cx="105" cy="265" r="5" fill="#dc2626" stroke="#fff" strokeWidth="2" />
            <text x="65" y="280" className="text-[11px] font-black fill-red-700">
              DAKAR ★
            </text>

            {/* Pointe des Almadies */}
            <polygon points="98,260 93,264 93,256" fill="#b91c1c" />
            <text x="35" y="255" className="text-[8px] font-black fill-red-800">
              Pte Almadies (Extrême Ouest)
            </text>

            {/* Saint-Louis */}
            <circle cx="215" cy="115" r="4" fill="#1e40af" stroke="#fff" strokeWidth="1.5" />
            <text x="145" y="105" className="text-[10px] font-black fill-blue-950">
              Saint-Louis
            </text>

            {/* Thiès */}
            <circle cx="160" cy="270" r="3.5" fill="#4338ca" stroke="#fff" strokeWidth="1.5" />
            <text x="165" y="270" className="text-[9px] font-bold fill-indigo-950">
              Thiès
            </text>

            {/* Kaolack */}
            <circle cx="245" cy="325" r="3.5" fill="#0369a1" stroke="#fff" strokeWidth="1.5" />
            <text x="250" y="325" className="text-[9px] font-bold fill-sky-950">
              Kaolack
            </text>

            {/* Ziguinchor */}
            <circle cx="195" cy="465" r="4" fill="#047857" stroke="#fff" strokeWidth="1.5" />
            <text x="195" y="480" className="text-[10px] font-black fill-emerald-950">
              Ziguinchor
            </text>

            {/* Tambacounda */}
            <circle cx="480" cy="345" r="3.5" fill="#b45309" stroke="#fff" strokeWidth="1.5" />
            <text x="485" y="345" className="text-[9px] font-bold fill-amber-950">
              Tambacounda
            </text>

            {/* Kédougou */}
            <circle cx="620" cy="470" r="3.5" fill="#b91c1c" stroke="#fff" strokeWidth="1.5" />
            <text x="625" y="470" className="text-[9px] font-bold fill-rose-950">
              Kédougou
            </text>
          </g>

          {/* OUTILS CARTOGRAPHIQUES OBLIGATOIRES (Leçon 3) */}
          {/* Rose des Vents (Orientation vers le Nord) */}
          <g id="rose-des-vents" transform="translate(680, 80)">
            <circle cx="0" cy="0" r="32" fill="#ffffff" stroke="#94a3b8" strokeWidth="1" opacity="0.9" />
            {/* Aiguille Nord */}
            <polygon points="0,-28 6,-4 0,0 -6,-4" fill="#dc2626" />
            {/* Aiguille Sud */}
            <polygon points="0,28 6,4 0,0 -6,4" fill="#475569" />
            {/* Aiguille Est */}
            <polygon points="28,0 4,6 0,0 4,-6" fill="#64748b" />
            {/* Aiguille Ouest */}
            <polygon points="-28,0 -4,6 0,0 -4,-6" fill="#64748b" />
            {/* Points collatéraux */}
            <line x1="-15" y1="-15" x2="15" y2="15" stroke="#94a3b8" strokeWidth="1" />
            <line x1="-15" y1="15" x2="15" y2="-15" stroke="#94a3b8" strokeWidth="1" />
            <text x="-4" y="-31" className="text-[11px] font-black fill-red-600">
              N
            </text>
            <text x="-3" y="39" className="text-[10px] font-bold fill-slate-700">
              S
            </text>
            <text x="32" y="3" className="text-[10px] font-bold fill-slate-700">
              E
            </text>
            <text x="-42" y="3" className="text-[10px] font-bold fill-slate-700">
              O
            </text>
          </g>

          {/* Échelle Numérique & Graphique (Leçon 3) */}
          <g id="echelle-cartographique" transform="translate(50, 490)">
            <rect x="0" y="0" width="180" height="38" rx="6" fill="#ffffff" stroke="#cbd5e1" opacity="0.95" />
            <text x="10" y="15" className="text-[10px] font-extrabold fill-slate-800">
              Échelle Numérique : 1 / 2 500 000
            </text>
            {/* Ligne segmentée échelle graphique */}
            <line x1="10" y1="28" x2="160" y2="28" stroke="#1e293b" strokeWidth="3" />
            <line x1="10" y1="24" x2="10" y2="32" stroke="#1e293b" strokeWidth="2" />
            <line x1="60" y1="24" x2="60" y2="32" stroke="#1e293b" strokeWidth="2" />
            <line x1="110" y1="24" x2="110" y2="32" stroke="#1e293b" strokeWidth="2" />
            <line x1="160" y1="24" x2="160" y2="32" stroke="#1e293b" strokeWidth="2" />
            <text x="8" y="36" className="text-[8px] font-bold fill-slate-700">
              0
            </text>
            <text x="50" y="36" className="text-[8px] font-bold fill-slate-700">
              50 km
            </text>
            <text x="100" y="36" className="text-[8px] font-bold fill-slate-700">
              100 km
            </text>
            <text x="150" y="36" className="text-[8px] font-bold fill-slate-700">
              150 km
            </text>
          </g>

          {/* Coordonnées Géographiques Absolues (Leçon 9) */}
          <g id="coordonnees-nationales" opacity="0.7">
            <text x="10" y="15" className="text-[9px] font-mono fill-slate-500">
              16°41'N (Nord)
            </text>
            <text x="10" y="530" className="text-[9px] font-mono fill-slate-500">
              12°08'N (Sud)
            </text>
            <text x="660" y="535" className="text-[9px] font-mono fill-slate-500">
              11°21'O (Est)
            </text>
            <text x="25" y="275" className="text-[9px] font-mono fill-slate-500">
              17°32'O (Ouest)
            </text>
          </g>
        </svg>
      </div>

      {/* Légende interactive didactique */}
      {showLegend && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3 bg-white/90 rounded-xl border border-amber-200 text-xs">
          <div className="space-y-1.5">
            <span className="font-black text-amber-900 uppercase tracking-wider block">
              ● Symboles Ponctuels
            </span>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="w-3 h-3 rounded-full bg-red-600 border border-white"></span>
              <span>Dakar (Capitale) & Pointe des Almadies</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-700 border border-white"></span>
              <span>Chefs-lieux des 14 régions administratives</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="font-bold text-red-600">▲</span>
              <span>Nepen Diakha (581 m) & Mamelles (105 m)</span>
            </div>
          </div>

          <div className="space-y-1.5">
            <span className="font-black text-amber-900 uppercase tracking-wider block">
              ━ Symboles Linéaires
            </span>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="w-5 h-1 bg-blue-600 rounded-sm"></span>
              <span>Fleuves permanents (Sénégal, Gambie, Casamance)</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="w-5 h-1 bg-sky-400 border-dashed"></span>
              <span>Frontières fluviales (Falémé / Mali)</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="w-5 h-1 bg-slate-500 border-dotted"></span>
              <span>Enclave gambienne (&gt; 300 km)</span>
            </div>
          </div>

          <div className="space-y-1.5">
            <span className="font-black text-amber-900 uppercase tracking-wider block">
              ■ Symboles de Surface
            </span>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="w-4 h-3 bg-yellow-200 border border-yellow-400 rounded-xs"></span>
              <span>Zone sahélienne (&lt; 400 mm) / Steppe</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="w-4 h-3 bg-green-200 border border-green-400 rounded-xs"></span>
              <span>Zone soudanienne (400-900 mm) / Savane</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="w-4 h-3 bg-emerald-300 border border-emerald-500 rounded-xs"></span>
              <span>Zone guinéenne (&gt; 1 000 mm) / Forêt & Mangrove</span>
            </div>
          </div>
        </div>
      )}

      {/* Fiche Pédagogique Interactive de la Région Sélectionnée */}
      <div className="mt-3 p-3.5 sm:p-4 rounded-xl bg-amber-100/70 border border-amber-300/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 mb-2 border-b border-amber-200">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-white bg-amber-800 px-2 py-0.5 rounded-md uppercase">
              Région sélectionnée
            </span>
            <h4 className="text-base font-black text-amber-950">{selectedRegion.name}</h4>
            <span className="text-xs text-amber-800 font-medium">({selectedRegion.zone})</span>
          </div>
          <span className="text-xs font-bold text-amber-900 bg-white/80 px-2.5 py-1 rounded-full border border-amber-200">
            Superficie : {selectedRegion.superficie}
          </span>
        </div>

        <p className="text-xs text-amber-950 font-medium leading-relaxed mb-3">
          {selectedRegion.description}
        </p>

        {/* Détails géographiques scolaires de la région */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-[11px]">
          <div className="p-2 bg-white/80 rounded-lg border border-amber-200">
            <span className="font-extrabold text-amber-900 block flex items-center gap-1">
              <Mountain className="w-3 h-3 text-amber-700" /> Relief & Géologie
            </span>
            <span className="text-gray-700 mt-0.5 block">{selectedRegion.relief}</span>
          </div>

          <div className="p-2 bg-white/80 rounded-lg border border-amber-200">
            <span className="font-extrabold text-amber-900 block flex items-center gap-1">
              <CloudSun className="w-3 h-3 text-amber-700" /> Climat & Vents
            </span>
            <span className="text-gray-700 mt-0.5 block">{selectedRegion.climat}</span>
          </div>

          <div className="p-2 bg-white/80 rounded-lg border border-amber-200">
            <span className="font-extrabold text-amber-900 block flex items-center gap-1">
              <span className="text-green-600">🌿</span> Végétation
            </span>
            <span className="text-gray-700 mt-0.5 block">{selectedRegion.vegetation}</span>
          </div>

          <div className="p-2 bg-white/80 rounded-lg border border-amber-200">
            <span className="font-extrabold text-amber-900 block flex items-center gap-1">
              <Waves className="w-3 h-3 text-blue-600" /> Hydrographie
            </span>
            <span className="text-gray-700 mt-0.5 block">{selectedRegion.hydrographie}</span>
          </div>
        </div>

        {/* Boutons de sélection rapide des 14 régions */}
        <div className="mt-3 pt-2.5 border-t border-amber-200/80 flex flex-wrap gap-1.5 items-center">
          <span className="text-[10px] font-black uppercase tracking-wider text-amber-900 mr-1">
            Explorer une région :
          </span>
          {Object.keys(REGIONS_DATA).map(regId => {
            const reg = REGIONS_DATA[regId];
            const isSel = selectedRegionId === regId;
            return (
              <button
                key={regId}
                onClick={() => setSelectedRegionId(regId)}
                className={`px-2 py-0.5 rounded-md text-[11px] font-bold transition ${
                  isSel
                    ? 'bg-amber-800 text-white shadow-2xs'
                    : 'bg-white/80 text-amber-950 hover:bg-white border border-amber-200'
                }`}
              >
                {reg.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
