import Image from "@/components/common/Image";

export default function ServiceCard({ title, teaser, description, image, href }) {
  return <article className="travlink-service-card" tabIndex="0"><Image className="travlink-service-card__image" src={image} alt="" /><div className="travlink-service-card__content"><h2 className="travlink-service-card__title">{title}</h2>{teaser ? <p className="travlink-service-card__teaser">{teaser}</p> : null}<p className="travlink-service-card__description">{description}</p><a className="travlink-service-card__cta" href={href}>Explore <span aria-hidden="true">→</span></a></div></article>;
}
