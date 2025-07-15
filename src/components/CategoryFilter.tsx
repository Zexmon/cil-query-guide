import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Filter, ChevronDown } from "lucide-react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

export const CategoryFilter = ({ categories, selectedCategory, onCategorySelect }: CategoryFilterProps) => {
  return (
    <div className="flex items-center gap-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            {selectedCategory || "All Categories"}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 max-h-64 overflow-y-auto">
          <DropdownMenuItem onClick={() => onCategorySelect(null)}>
            <span className={selectedCategory === null ? "font-medium" : ""}>
              All Categories
            </span>
          </DropdownMenuItem>
          {categories.map((category) => (
            <DropdownMenuItem 
              key={category} 
              onClick={() => onCategorySelect(category)}
            >
              <span className={selectedCategory === category ? "font-medium" : ""}>
                {category}
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      
      {selectedCategory && (
        <Badge variant="default" className="gap-1">
          {selectedCategory}
          <button 
            onClick={() => onCategorySelect(null)}
            className="ml-1 hover:bg-primary-foreground/20 rounded-full p-0.5"
          >
            ×
          </button>
        </Badge>
      )}
    </div>
  );
};