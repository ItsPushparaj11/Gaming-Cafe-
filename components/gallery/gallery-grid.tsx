"use client";

import { useState } from "react";
import { Monitor, Gamepad, Car, Coffee, Trophy, X } from "lucide-react";

const categories = [
  { id: "all", label: "All", icon: null },
  { id: "pc", label: "PC Zone", icon: Monitor },
  { id: "ps5", label: "PS5 Rooms", icon: Gamepad },
  { id: "racing", label: "Racing Sim", icon: Car },
  { id: "cafe", label: "Cafe", icon: Coffee },
  { id: "events", label: "Events", icon: Trophy },
];

const galleryItems = [
  {
    id: 1,
    category: "pc",
    title: "Gaming PC Setup",
    description: "RTX 4070 powered gaming stations with 240Hz monitors",
  },
  {
    id: 2,
    category: "pc",
    title: "RGB Battle Station",
    description: "Full RGB gaming setup with premium peripherals",
  },
  {
    id: 3,
    category: "ps5",
    title: "PS5 Squad Room",
    description: "Private gaming room with 65\" 4K TV",
  },
  {
    id: 4,
    category: "ps5",
    title: "Duo Gaming Room",
    description: "Cozy room for 2-player gaming sessions",
  },
  {
    id: 5,
    category: "racing",
    title: "Racing Simulator",
    description: "Professional racing setup with triple monitors",
  },
  {
    id: 6,
    category: "racing",
    title: "Racing Cockpit",
    description: "Full motion racing seat with force feedback",
  },
  {
    id: 7,
    category: "cafe",
    title: "Lounge Area",
    description: "Comfortable seating for relaxing between games",
  },
  {
    id: 8,
    category: "cafe",
    title: "Snack Bar",
    description: "Refreshments and gaming fuel",
  },
  {
    id: 9,
    category: "events",
    title: "Tournament Finals",
    description: "Valorant Champions Cup final match",
  },
  {
    id: 10,
    category: "events",
    title: "Community Night",
    description: "Weekly gaming community meetup",
  },
  {
    id: 11,
    category: "pc",
    title: "Esports Corner",
    description: "Dedicated stations for competitive gaming",
  },
  {
    id: 12,
    category: "cafe",
    title: "Entrance",
    description: "Welcome to PixelArena Gaming Cafe",
  },
];

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {category.icon && <category.icon className="w-4 h-4" />}
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-[4/3] bg-background border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all text-left"
            >
              {/* Placeholder with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary" />
              
              {/* Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                {item.category === "pc" && <Monitor className="w-24 h-24" />}
                {item.category === "ps5" && <Gamepad className="w-24 h-24" />}
                {item.category === "racing" && <Car className="w-24 h-24" />}
                {item.category === "cafe" && <Coffee className="w-24 h-24" />}
                {item.category === "events" && <Trophy className="w-24 h-24" />}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground rounded">
                  {categories.find((c) => c.id === item.category)?.label}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <div
              className="max-w-4xl w-full bg-card border border-border rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-secondary flex items-center justify-center">
                {selectedImage.category === "pc" && (
                  <Monitor className="w-32 h-32 text-muted-foreground/30" />
                )}
                {selectedImage.category === "ps5" && (
                  <Gamepad className="w-32 h-32 text-muted-foreground/30" />
                )}
                {selectedImage.category === "racing" && (
                  <Car className="w-32 h-32 text-muted-foreground/30" />
                )}
                {selectedImage.category === "cafe" && (
                  <Coffee className="w-32 h-32 text-muted-foreground/30" />
                )}
                {selectedImage.category === "events" && (
                  <Trophy className="w-32 h-32 text-muted-foreground/30" />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-muted-foreground">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
