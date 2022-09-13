interface HomeHeaderEventBannerCardProps {
  imgUrl: string;
  url: string;
}

function HomeHeaderEventBannerCard({ imgUrl, url }: HomeHeaderEventBannerCardProps) {
  return (
    <div className="w-full ">
      <a href={url} target="_blank">
        <img src={imgUrl} />
      </a>
    </div>
  );
}

export default HomeHeaderEventBannerCard;
