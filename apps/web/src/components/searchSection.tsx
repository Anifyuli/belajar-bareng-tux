import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';

export function SearchSection() {
  return (
    <div className="mt-6 w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
      {/* Main container */}
      <div className="flex flex-col items-center gap-2 lg:gap-4 mx-auto justify-around">
        {/* Responsive form */}
        <div className="w-full max-w-xl flex items-center">
          <Input
            placeholder="Search articles in here"
            className="w-full md:w-[500px] lg:w-[600px] text-sm mx-4"
          />
          <Button type="submit" className="flex items-center md:gap-x-2">
            <Search className="w-4 h-4" />
            <span className="hidden md:inline">Search</span>
          </Button>
        </div>

        {/* Categories */}
        <div className="w-full max-w-2xl flex flex-wrap items-center gap-2 md:gap-4 justify-center md:justify-center">
          <p className="text-sm whitespace-nowrap">Categories:</p>
          <ToggleGroup type="single" className="flex">
            <ToggleGroupItem value="tutorials">Tutorials</ToggleGroupItem>
            <ToggleGroupItem value="news">News</ToggleGroupItem>
            <ToggleGroupItem value="stories">Stories</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  );
}
