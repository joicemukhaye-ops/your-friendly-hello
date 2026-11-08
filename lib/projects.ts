import warehouseA from "@/assets/warehouse-a.jpg";
import warehouseB from "@/assets/warehouse-b.jpg";
import warehouseC from "@/assets/warehouse-c.jpg";
import skylightA from "@/assets/skylight-a.jpg";
import skylightB from "@/assets/skylight-b.jpg";
import skylightC from "@/assets/skylight-c.jpg";
import coffeeA from "@/assets/coffee-a.jpg";
import coffeeB from "@/assets/coffee-b.jpg";
import coffeeC from "@/assets/coffee-c.jpg";
import theresaA from "@/assets/theresa-a.jpg";
import theresaB from "@/assets/theresa-b.jpg";
import theresaC from "@/assets/theresa-c.jpg";
import qualityFrame from "@/assets/quality-frame.jpg";

export const qualityImage = qualityFrame;

export interface ProjectPhoto {
  src: string;
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  sector: "Industrial" | "Institutional" | "Agro-industrial";
  location: string;
  materials: string;
  scope: string;
  summary: string;
  highlights: string[];
  photos: ProjectPhoto[];
}

export const projects: Project[] = [
  {
    slug: "processing-warehouse-kayunga",
    title: "Processing Warehouse",
    sector: "Industrial",
    location: "Kayunga, Kangulumira",
    materials: "Concrete and Steel",
    scope: "Design + Build",
    summary:
      "A ground-up processing warehouse combining reinforced concrete walling with a purpose-engineered steel truss roof and ventilated block infill. Creed handled structural design, foundations, block-work, steel fabrication and roofing through to boundary walling and site works.",
    highlights: [
      "Engineered steel trusses fabricated and erected on site",
      "Ventilated block walling for natural cross-airflow",
      "Ridge-vented roof sheeting for heat extraction",
      "Boundary walling, hardstanding and external works",
    ],
    photos: [
      { src: warehouseA, caption: "Steel truss roof frame erected over concrete block walls." },
      { src: warehouseB, caption: "Sunset progress: purlin assembly and vent-block walling." },
      { src: warehouseC, caption: "Completed roof with ridge vents; perimeter walling underway." },
    ],
  },
  {
    slug: "kisubi-mapeera-glass-skylight",
    title: "Kisubi SSS. Mapeera Boy's Dormitory Glass Skylight",
    sector: "Institutional",
    location: "Kisubi, Namulanda, Entebbe, Kampala",
    materials: "Steel hollow sections, G26 iron sheets, laminated glass, aluminium",
    scope: "Fabrication + Installation",
    summary:
      "A laminated glass skylight set into a dormitory roof to flood the interior with daylight without compromising weather-tightness. Creed fabricated the hollow-section support grid, set out the aluminium glazing bars and integrated the assembly with new G26 roof sheeting.",
    highlights: [
      "Hollow-section steel grid designed for glazing loads",
      "Laminated safety glass in aluminium capping",
      "Fully sealed flashings against the existing roof line",
      "Works completed around an occupied school programme",
    ],
    photos: [
      { src: skylightA, caption: "Laminated glass panels seated in the aluminium glazing grid." },
      { src: skylightB, caption: "New purlin layout set out over the dormitory gable." },
      { src: skylightC, caption: "Roof sheeting installed over the new steel roof structure." },
    ],
  },
  {
    slug: "coffee-drier-warehouse-gomba",
    title: "Coffee Drier Warehouse",
    sector: "Agro-industrial",
    location: "Gomba",
    materials: "Concrete and Steel",
    scope: "Design + Build",
    summary:
      "A drying and storage facility for coffee, built from excavation and reinforced foundations through to a clear-span steel portal frame and roof. The slab was designed for heavy loading and continuous drying operations.",
    highlights: [
      "Reinforced strip foundations and column bases",
      "Power-floated slab designed for loading traffic",
      "Clear-span steel portal frame for obstruction-free storage",
      "Long-span roof sheeting with generous eaves",
    ],
    photos: [
      { src: coffeeA, caption: "Slab pour and finishing in progress on the drier floor." },
      { src: coffeeB, caption: "Reinforcement cages set in excavated foundation trenches." },
      { src: coffeeC, caption: "Completed steel frame and roof over the drier warehouse." },
    ],
  },
  {
    slug: "st-theresa-girls-dormitory",
    title: "St. Theresa Girls Primary School Dormitory",
    sector: "Institutional",
    location: "Kisubi, Entebbe, Kampala",
    materials: "Structural steel, G26 iron sheets",
    scope: "Structural steel + Roofing",
    summary:
      "A full structural steel roof to a new girls' dormitory block. Creed fabricated, transported and erected the beams and rafters, then completed the G26 iron sheet covering ready for ceiling and finishes.",
    highlights: [
      "Fabricated steel beams craned and set on ring beam",
      "Rafter and purlin layout set out for long-span cover",
      "Corrosion protection applied before erection",
      "G26 iron sheet roof covering and flashings",
    ],
    photos: [
      { src: theresaA, caption: "Steel beams landed and levelled on the concrete ring beam." },
      { src: theresaB, caption: "Rafters braced and aligned across the dormitory block." },
      { src: theresaC, caption: "Completed roof structure ready for iron sheet covering." },
    ],
  },
];
