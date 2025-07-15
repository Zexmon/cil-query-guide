import { Card, CardContent } from "@/components/ui/card";
import { FileText, Search, Filter } from "lucide-react";

interface StatsProps {
  totalQuestions: number;
  filteredQuestions: number;
  selectedCategory: string | null;
}

export const Stats = ({ totalQuestions, filteredQuestions, selectedCategory }: StatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="border-border/50">
        <CardContent className="flex items-center gap-3 p-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total Questions</p>
            <p className="font-semibold text-lg">{totalQuestions}</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-border/50">
        <CardContent className="flex items-center gap-3 p-4">
          <div className="p-2 bg-accent/10 rounded-lg">
            <Search className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Search Results</p>
            <p className="font-semibold text-lg">{filteredQuestions}</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-border/50">
        <CardContent className="flex items-center gap-3 p-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Filter className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Category</p>
            <p className="font-semibold text-lg truncate">
              {selectedCategory || "All Categories"}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};