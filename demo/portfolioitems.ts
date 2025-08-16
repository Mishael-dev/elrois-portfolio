export interface PortfolioItem {
  id: string; // Unique identifier for the piece
  title: string; // A simple, descriptive name for the piece
  media: string; // URL to the artwork image
  description: string; // Short narrative about the piece
  date: string; // Year or full date when the artwork was completed
  tags: string[]; // List of tags/categories for filtering
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Whispers of the Sea",
    media:
      "https://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/elroi-portfolio/gettyimages-1190200652-1024x1024.jpg",
    description:
      "An abstract piece capturing the calm and chaos of ocean waves colliding with the shore. This work explores the timeless dialogue between serenity and turbulence, showing how beauty often arises out of contrast. The sweeping strokes mimic the rhythm of tides, while layered textures evoke both the depth and unpredictability of the sea. Hints of light and shadow suggest the fleeting balance between peace and disruption, reminding viewers of nature’s duality. The painting invites reflection, encouraging the audience to find stillness even amidst movement. It is both meditative and dynamic, embodying the eternal whispers of the ocean’s voice.",
    date: "2021",
    tags: ["abstract", "ocean", "painting"],
  },
  {
    id: "2",
    title: "Urban Echoes",
    media:
      "https://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/elroi-portfolio/gettyimages-1190200652-1024x1024.jpg",
    description:
      "A modern exploration of city life, blending geometric forms with muted tones. This piece reflects the endless pulse of urban environments, where silence and noise coexist in layered harmony. Angular structures represent towering buildings, while soft gradients capture fleeting human presence among the chaos. The muted palette conveys the quiet loneliness often felt in crowded spaces, yet subtle lines of light break through, symbolizing resilience and connection. ‘Urban Echoes’ seeks to capture not only the visual rhythm of a city but also its emotional undertones—nostalgia, ambition, and the constant search for belonging within sprawling concrete landscapes.",
    date: "2022",
    tags: ["modern", "city", "digital"],
  },
  {
    id: "3",
    title: "Golden Horizon",
    media:
      "https://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/elroi-portfolio/gettyimages-1190200652-1024x1024.jpg",
    description:
      "Inspired by sunsets, this work reflects warmth, hope, and endless possibilities. Radiant hues of gold, amber, and crimson spread across the canvas, symbolizing transitions between endings and beginnings. The horizon, bathed in glowing light, represents a threshold—one that promises renewal beyond the fading day. Layers of color merge fluidly, emphasizing harmony between nature’s cycles and human emotions. ‘Golden Horizon’ aims to evoke feelings of gratitude for fleeting beauty, while also inspiring optimism for what lies ahead. It is a celebration of light as a universal language, offering viewers comfort and a reminder that every dusk leads to dawn.",
    date: "2023",
    tags: ["sunset", "nature", "landscape"],
  },
  {
    id: "4",
    title: "Silent Conversations",
    media:
      "https://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/elroi-portfolio/gettyimages-1190200652-1024x1024.jpg",
    description:
      "A minimalist approach to the human connection through muted colors and empty spaces. This piece embodies the profound dialogues that often occur without words—expressed instead through subtle gestures, silences, and presence. The sparse composition emphasizes what is unsaid, drawing attention to the stillness between forms. The muted tones evoke vulnerability, while deliberate voids reflect distance, longing, or reflection. ‘Silent Conversations’ encourages viewers to find meaning within absence and to embrace the delicate threads that connect us beyond speech. It is an invitation to slow down, to listen with more than ears, and to feel the weight of quiet communication.",
    date: "2020",
    tags: ["minimalist", "portrait", "conceptual"],
  },
  {
    id: "5",
    title: "Dream in Motion",
    media:
      "https://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/elroi-portfolio/gettyimages-1190200652-1024x1024.jpg",
    description:
      "Fluid brushstrokes and blurred edges represent fleeting thoughts and imagination. This work seeks to capture the transient quality of dreams—the way they drift in and out of focus, shifting between clarity and obscurity. Colors flow seamlessly into one another, embodying the constant evolution of memory and perception. Movement dominates the composition, suggesting both chaos and freedom, as if the canvas itself is alive with thought. ‘Dream in Motion’ highlights the beauty of impermanence, inviting viewers to embrace the unknown and the uncertain. It mirrors the human experience of chasing visions, where reality and fantasy often merge into a single stream.",
    date: "2019",
    tags: ["expressionism", "dream", "motion"],
  },
];

export function getPortfolioItems() {
  return portfolioItems;
}
