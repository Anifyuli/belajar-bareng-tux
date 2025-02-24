import { ArticlePreview } from '@/components/articlePreview';
import { SearchSection } from '@/components/searchSection';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function HomePage() {
  return (
    <div className="flex flex-col gap-1">
      <div className="py-1">
        <SearchSection />
      </div>

      {/* Home articles section */}
      <div className="flex flex-col px-4 sm:px-8 md:px-16">
        <div className="flex items-center justify-between">
          <p className="md:text-lg lg:text-2xl font-bold mx-4 mb-0">Articles</p>
          {/* Dropdown Select */}
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a topic" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Topics</SelectLabel>
                <SelectItem value="distros">Distros</SelectItem>
                <SelectItem value="linux">Linux kernel</SelectItem>
                <SelectItem value="packages">Packages</SelectItem>
                <SelectItem value="tips_tricks">Tips & Tricks</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Horizontal line */}
        <hr className="border-t-2 border-gray-400 my-4" />

        {/* Latest articles container */}
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          <ArticlePreview />
          <ArticlePreview />
          <ArticlePreview />
        </div>
      </div>
    </div>
  );
}
