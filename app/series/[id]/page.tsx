import SeriesClient from './SeriesClient';
import seriesData from '../../data/series.json';

export function generateStaticParams() {
  return seriesData.map((series) => ({
    id: series.id,
  }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <SeriesClient id={id} />;
}
