import VideoClient from './VideoClient';
import videosData from '../../data/video.json';

export function generateStaticParams() {
  return videosData.map((video) => ({
    id: video.id,
  }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <VideoClient id={id} />;
}
