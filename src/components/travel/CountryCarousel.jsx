import Image from "@/components/common/Image";

export default function CountryCarousel({ countries }) {
  return <div className="tl-country-carousel">{countries.map((country) => <article key={country.id} className="tl-card"><Image src={country.image} alt={country.name} loading="lazy" /><h3>{country.name}</h3></article>)}</div>;
}
