
import { Product } from "../context/CartContext";

export const products: Product[] = [
  {
    id: "1",
    name: "Modern Lounge Chair",
    category: "chairs",
    price: 699,
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop",
    ],
    description: "Inspired by mid-century modern design, this lounge chair combines comfort with timeless style. The gently curved seat and solid wood frame create a striking silhouette that works in any room.",
    dimensions: {
      width: 75,
      height: 80,
      depth: 70,
    },
    materials: ["Solid walnut", "Premium leather", "High-density foam"],
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name: "Minimalist Dining Table",
    category: "tables",
    price: 1299,
    images: [
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=2073&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=2070&auto=format&fit=crop",
    ],
    description: "This sleek dining table is designed with clean lines and a minimalist aesthetic. The solid wood construction ensures durability while the refined finish adds an elegant touch to your dining space.",
    dimensions: {
      width: 180,
      height: 75,
      depth: 90,
    },
    materials: ["Solid oak", "Steel", "Natural oil finish"],
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    name: "Sculptural Coffee Table",
    category: "tables",
    price: 849,
    images: [
      "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=2126&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599327286062-40b0a7f4b271?q=80&w=2070&auto=format&fit=crop",
    ],
    description: "This unique coffee table functions as both a practical surface and a work of art. The organic shape and mixed materials create visual interest in any living space.",
    dimensions: {
      width: 120,
      height: 40,
      depth: 70,
    },
    materials: ["Solid oak", "Tempered glass", "Brass accents"],
    inStock: true,
    featured: true,
  },
  {
    id: "4",
    name: "Modular Sectional Sofa",
    category: "sofas",
    price: 3299,
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop",
    ],
    description: "This versatile sectional sofa adapts to your space and lifestyle. Rearrange the modules to create the perfect configuration for any room size or social setting.",
    dimensions: {
      width: 320,
      height: 85,
      depth: 150,
    },
    materials: ["Kiln-dried hardwood frame", "High-resiliency foam", "Performance fabric"],
    inStock: true,
    featured: true,
  },
  {
    id: "5",
    name: "Essential Nightstand",
    category: "bedroom",
    price: 499,
    images: [
      "https://images.unsplash.com/photo-1595514535113-e971c8bd6635?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551298211-7a0d12203559?q=80&w=1974&auto=format&fit=crop",
    ],
    description: "This practical nightstand combines clean lines with hidden storage. The minimalist design keeps your bedroom looking uncluttered while providing space for essentials.",
    dimensions: {
      width: 50,
      height: 60,
      depth: 45,
    },
    materials: ["Solid ash", "Powder-coated steel"],
    inStock: true,
  },
  {
    id: "6",
    name: "Statement Armchair",
    category: "chairs",
    price: 899,
    images: [
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=2000&auto=format&fit=crop",
    ],
    description: "This bold armchair makes a statement in any room. The sculptural form provides exceptional comfort while adding visual interest to your space.",
    dimensions: {
      width: 80,
      height: 85,
      depth: 75,
    },
    materials: ["Solid beech", "Down-filled cushion", "Wool upholstery"],
    inStock: true,
  },
  {
    id: "7",
    name: "Platform Bed Frame",
    category: "bedroom",
    price: 1499,
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595526051245-4506e0005bd0?q=80&w=2070&auto=format&fit=crop",
    ],
    description: "This low-profile platform bed creates a serene, modern bedroom aesthetic. The integrated headboard provides comfort for reading in bed while maintaining clean lines.",
    dimensions: {
      width: 200,
      height: 35,
      depth: 210,
    },
    materials: ["Solid oak", "Premium plywood"],
    inStock: true,
  },
  {
    id: "8",
    name: "Floating Shelving Unit",
    category: "storage",
    price: 799,
    images: [
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?q=80&w=2148&auto=format&fit=crop",
    ],
    description: "This modular shelving system appears to float on your wall, creating a light and airy display space. Customize the configuration to suit your needs and space.",
    dimensions: {
      width: 240,
      height: 180,
      depth: 30,
    },
    materials: ["Solid ash", "Powder-coated steel"],
    inStock: true,
  }
];

export const getProducts = (): Product[] => {
  return products;
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getCategories = (): string[] => {
  const categories = products.map(product => product.category);
  return [...new Set(categories)];
};
