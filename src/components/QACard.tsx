import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QAItem } from "@/data/qaData";

interface QACardProps {
  qa: QAItem;
  searchTerm?: string;
}

const highlightText = (text: string, searchTerm: string) => {
  if (!searchTerm) return text;
  
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  const parts = text.split(regex);
  
  return parts.map((part, index) => 
    regex.test(part) ? (
      <mark key={index} className="bg-accent text-accent-foreground px-1 rounded">
        {part}
      </mark>
    ) : (
      part
    )
  );
};

export const QACard = ({ qa, searchTerm = "" }: QACardProps) => {
  return (
    <Card className="hover:shadow-medium transition-shadow duration-200 border-border/50 hover:border-border">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-foreground leading-snug">
            {highlightText(qa.question, searchTerm)}
          </h3>
          <Badge variant="outline" className="shrink-0 text-xs">
            {qa.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-muted-foreground leading-relaxed">
          {highlightText(qa.answer, searchTerm)}
        </p>
      </CardContent>
    </Card>
  );
};