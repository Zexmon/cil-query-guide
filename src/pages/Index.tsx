import { useState, useMemo } from "react";
import { qaData, categories } from "@/data/qaData";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { QACard } from "@/components/QACard";
import { Stats } from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { BookOpen, Zap } from "lucide-react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredData = useMemo(() => {
    return qaData.filter((item) => {
      const matchesSearch = searchTerm === "" || 
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === null || item.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const clearAll = () => {
    setSearchTerm("");
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-hover text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white/20 rounded-lg">
              <BookOpen className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">CIL Manual</h1>
              <p className="text-xl opacity-90">Coal India Limited Procurement Guide</p>
            </div>
          </div>
          <p className="text-lg opacity-80 max-w-2xl">
            Your comprehensive guide to public procurement procedures, policies, and best practices. 
            Search through {qaData.length}+ questions and answers covering all aspects of procurement.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          <div className="max-w-2xl mx-auto">
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Search questions, answers, or topics..."
            />
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
            
            {(searchTerm || selectedCategory) && (
              <Button 
                variant="outline" 
                onClick={clearAll}
                className="self-start lg:self-auto"
              >
                Clear All Filters
              </Button>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8">
          <Stats 
            totalQuestions={qaData.length}
            filteredQuestions={filteredData.length}
            selectedCategory={selectedCategory}
          />
        </div>

        {/* Results */}
        {filteredData.length === 0 ? (
          <div className="text-center py-16">
            <div className="p-4 bg-muted/50 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Zap className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No results found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or clearing the filters.
            </p>
            <Button onClick={clearAll} variant="outline">
              Clear All Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredData.map((qa, index) => (
              <QACard key={index} qa={qa} searchTerm={searchTerm} />
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>CIL Manual • {qaData.length} Questions & Answers • Coal India Limited</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
