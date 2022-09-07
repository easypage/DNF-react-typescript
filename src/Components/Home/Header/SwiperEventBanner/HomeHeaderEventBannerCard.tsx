interface HomeHeaderEventBannerCardProps {
  imgUrl: string;
}

function HomeHeaderEventBannerCard({ imgUrl }: HomeHeaderEventBannerCardProps) {
  return (
    <div className="bgi" style={{ height: 100, backgroundColor: 'gray' }}>
      Slide 1{imgUrl}
    </div>
  );
}

export default HomeHeaderEventBannerCard;
