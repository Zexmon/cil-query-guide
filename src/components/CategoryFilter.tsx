import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

export const CategoryFilter = ({ categories, selectedCategory, onCategorySelect }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Filter className="h-4 w-4" />
        <span className="font-medium">Filter by category:</span>
      </div>
      <Button
        variant={selectedCategory === null ? "default" : "outline"}
        size="sm"
        onClick={() => onCategorySelect(null)}
        className="h-8"
      >
        All Categories
      </Button>
      {categories.map((category) => (
        <Badge
          key={category}
          variant={selectedCategory === category ? "default" : "secondary"}
          className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-3 py-1"
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </Badge>
      ))}
    </div>
  );
};