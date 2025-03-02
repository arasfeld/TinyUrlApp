import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import './App.css';
import { TypographyH1, TypographyP } from './components/ui/typography';

interface Forecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

function App() {
  const [forecasts, setForecasts] = useState<Forecast[]>();

  useEffect(() => {
    populateWeatherData();
  }, []);

  const contents =
    forecasts === undefined ? (
      <TypographyP>
        <em>
          Loading... Please refresh once the ASP.NET backend has started. See{' '}
          <a href="https://aka.ms/jspsintegrationreact">
            https://aka.ms/jspsintegrationreact
          </a>{' '}
          for more details.
        </em>
      </TypographyP>
    ) : (
      <Table className="table table-striped" aria-labelledby="tableLabel">
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Temp. (C)</TableHead>
            <TableHead>Temp. (F)</TableHead>
            <TableHead>Summary</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {forecasts.map((forecast) => (
            <TableRow key={forecast.date}>
              <TableCell>{forecast.date}</TableCell>
              <TableCell>{forecast.temperatureC}</TableCell>
              <TableCell>{forecast.temperatureF}</TableCell>
              <TableCell>{forecast.summary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );

  return (
    <div>
      <TypographyH1 id="tableLabel">Weather forecast</TypographyH1>
      <TypographyP>
        This component demonstrates fetching data from the server.
      </TypographyP>
      {contents}
    </div>
  );

  async function populateWeatherData() {
    const response = await fetch('weatherforecast');
    if (response.ok) {
      const data = await response.json();
      setForecasts(data);
    }
  }
}

export default App;
