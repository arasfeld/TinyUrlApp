import { TypographyH1 } from '@/components/ui/typography';
import { UrlForm } from '@/components/UrlForm';
import './App.css';

function App() {
  return (
    <div className="flex w-full flex-col gap-6">
      <TypographyH1>Tiny URL Service</TypographyH1>
      <UrlForm className="max-w-sm" />
    </div>
  );
}

export default App;
