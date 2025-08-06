import { productImages } from './images';

export const products = [
  {
    id: 1,
    name: "Simba Cement 32.5 R",
    image: productImages.cement32,
    description: "A product of National Cement Company, Simba Cement prides itself in its Kenyan roots and endeavours to bring out the best in cement products in the country by employing the latest cutting-edge technologies that ensures we remain ahead of the game and set some of the highest international standards in our business for products to come. Advantages Of Simba Cement 32.5R include: • Faster drying and settling time • Greater comprehensive strength • Better coverage comparatively • UNBS certified • Suitable for all general purpose applications • No breakage or spillage due to eco-friendly packing • High grade of fineness.",
    price: 550,
    originalPrice: 750,
    badge: "SAVE Ksh 200",
    inStock: true,
    rating: 4.5
  },
  {
    id: 2,
    name: "Simba Power 42.5N",
    image: productImages.cement42,
    description:
    "42.5 bag Simba Power 42.5N is a high-grade cement used in specialized construction projects, such as bridges, towers, pavements, highways, and high-rise towers. It's a stronger class of cement that can withstand higher pressures and loads.",
    price: 690,
    originalPrice: 850,
    badge: "SAVE Ksh 110",
    inStock: true,
    rating: 4.5
  },
  {
    id: 3,
    name: "Painting Blocks (60 mm)",
    image: productImages.paintingBlocks,
    description: "These are rectangular shaped concrete paving blocks which are; economical and durable, come in a variety of colours and thickness. They are suitable for use in parking areas, pathways, commercial and domestic roads since they offer an attractive, practical and long lasting option for pavement material.",
    price: 640,
    originalPrice: 800,
    badge: "SAVE Ksh 200",
    inStock: true,
    rating: 4.5
  },
  {
    id: 4,
    name: "Deformed Steel Bar",
    image: productImages.steelBar,
    description: "Deformed Steel Bars reinforced concrete is perhaps the most important and widely used building material. Available in various sizes for different construction projects.",
    sizes: [
      { size: "Y8 - 1.05kg", price: "KSh 170" },
      { size: "Y10 - 1.64kg", price: "KSh 2,000" },
      { size: "Y12 - 2.37kg", price: "KSh 230" },
      { size: "Y16 - 4.22kg", price: "KSh 350" },
      { size: "Y20 - 6.59kg", price: "KSh 540" },
      { size: "Y25 - 10.30kg", price: "KSh 2,540" }
    ],
    badge: "Save Ksh 450",
    contactForPricing: true,
    rating: 4.5
  },
  {
    id: 5,
    name: "Binding Wire 16 Gauge (25kg)",
    image: productImages.bindingWire,
    description: "25Kg Roll Shop for this Binding Wire 16G 25kg 1Roll on Kenya's largest online store. For All your Quality Assured Trusted Brands. ✅ Features: • Made Of Galvanized, Plastic Coated Annealed And Stainless Steel Wire • Soft, Good Ductility And High Strength • Used For Binding Reinforcement Construction • Made Of Mild Steel Inker • Easily Bent And Tied In A Knot • Matte Or Shiny Finish 📏 Specifications: • Gauge: 16 • Weight: 25 Kg" ,
    price: 3250,
    originalPrice: 3800,
    badge: "SAVE Ksh 250",
    inStock: true,
    rating: 4
  },
  {
    id: 6,
    name: "Hoop Iron 16 Gauge (20 kg)",
    image: productImages.hoopIron,
    description: "20kg Roll Durable galvanized hoop iron for masonry and roofing reinforcement. Rust-resistant and ideal for securing structures.",
    price: 3450,
    originalPrice: 4200,
    badge: "SAVE Ksh 250",
    inStock: true,
    rating: 5
  }
];
