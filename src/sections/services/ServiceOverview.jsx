import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";

function ServiceOverview() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const services = [
    {
      number: "01",
      title: isEnglish
        ? "Fumigation & Pest Management"
        : "Ufukizaji na Usimamizi wa Wadudu",
      description: isEnglish
        ? "Professional pest treatment for residential, commercial, hospitality, industrial and institutional environments."
        : "Huduma za kitaalamu za kudhibiti wadudu katika makazi, biashara, hoteli, viwanda na taasisi.",
      image: "/services/fumigation.webp",
      href: "#pest-management",
    },
    {
      number: "02",
      title: isEnglish
        ? "Pest-Specific Control"
        : "Udhibiti wa Wadudu Maalum",
      description: isEnglish
        ? "Targeted solutions based on the pest, level of infestation and environment."
        : "Suluhisho maalum kulingana na aina ya mdudu, kiwango cha uvamizi na mazingira husika.",
      image: "/services/pest-control.webp",
      href: "#pest-management",
    },
    {
      number: "03",
      title: isEnglish
        ? "Inspection & Certification"
        : "Ukaguzi na Uthibitishaji",
      description: isEnglish
        ? "Inspection, assessment and service documentation to help identify pest risks and maintain clear records."
        : "Ukaguzi, tathmini na nyaraka za huduma kwa ajili ya kutambua changamoto za wadudu na kuweka kumbukumbu sahihi.",
      image: "/services/inspection.webp",
      href: "#inspection",
    },
    {
      number: "04",
      title: isEnglish
        ? "Preventive & Contract Management"
        : "Kinga na Usimamizi wa Mikataba",
      description: isEnglish
        ? "Ongoing programmes focused on monitoring, prevention, routine inspection and follow-up."
        : "Mipango endelevu inayolenga ufuatiliaji, kinga, ukaguzi wa mara kwa mara na huduma za ufuatiliaji.",
      image: "/services/preventive-management.webp",
      href: "#preventive-management",
    },
  ];

  return (
    <section className="service-overview">
      <div className="service-overview__hero">
        <div className="service-overview__hero-image">
          <img
            src="/services/fumigation.webp"
            alt={
              isEnglish
                ? "Professional pest management and fumigation service"
                : "Huduma ya kitaalamu ya kudhibiti wadudu na ufukizaji"
            }
          />
        </div>

        <div className="service-overview__hero-overlay" />

        <div className="container service-overview__hero-content">
          <div className="service-overview__eyebrow">
            <span />
            {isEnglish ? "OUR SERVICES" : "HUDUMA ZETU"}
          </div>

          <h1>
            {isEnglish ? (
              <>
                Professional solutions
                <br />
                for pest problems.
              </>
            ) : (
              <>
                Suluhisho za kitaalamu
                <br />
                kwa changamoto za wadudu.
              </>
            )}
          </h1>

          <p>
            {isEnglish
              ? "From targeted pest treatment to inspection and ongoing prevention, JEMOKIL provides practical pest management solutions for different environments."
              : "Kuanzia udhibiti maalum wa wadudu hadi ukaguzi na kinga endelevu, JEMOKIL hutoa suluhisho za vitendo kwa mazingira mbalimbali."}
          </p>

          <Link to="/contact" className="service-overview__hero-button">
            <span>
              {isEnglish ? "Request a Service" : "Omba Huduma"}
            </span>
            <ArrowUpRight size={19} />
          </Link>
        </div>

        <a
          href="#service-list"
          className="service-overview__scroll"
          aria-label={isEnglish ? "View services" : "Angalia huduma"}
        >
          <ArrowDown size={18} />
        </a>
      </div>

      <div id="service-list" className="service-overview__list">
        <div className="container">
          <div className="service-overview__intro">
            <div>
              <span className="section-label">
                {isEnglish ? "WHAT WE DO" : "TUNACHOFANYA"}
              </span>

              <h2>
                {isEnglish
                  ? "Services built around the problem."
                  : "Huduma zinazolenga kutatua tatizo."}
              </h2>
            </div>

            <p>
              {isEnglish
                ? "Every pest problem is different. Our services are structured to help identify the issue, apply the appropriate treatment and support prevention where needed."
                : "Kila changamoto ya wadudu ni tofauti. Huduma zetu zimeandaliwa kusaidia kutambua tatizo, kutoa huduma inayofaa na kusaidia kinga pale inapohitajika."}
            </p>
          </div>

          <div className="service-overview__grid">
            {services.map((service) => (
              <a
                href={service.href}
                className="service-overview__card"
                key={service.number}
              >
                <div className="service-overview__card-image">
                  <img src={service.image} alt={service.title} />
                </div>

                <div className="service-overview__card-content">
                  <span className="service-overview__number">
                    {service.number}
                  </span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <span className="service-overview__card-link">
                    {isEnglish ? "Explore service" : "Angalia huduma"}
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceOverview;