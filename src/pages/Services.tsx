import { Link } from 'react-router-dom'
import { CtaBand } from '../components/CtaBand'
import { Reveal, Stagger, StaggerItem } from '../components/Reveal'
import { ServiceCard } from '../components/ServiceCard'
import { SERVICES, SERVICES_SOURCE_NOTE } from '../data/services'

export function Services() {
  return (
    <>
      <section className="page-hero page-hero--editorial">
        <div className="container">
          <p className="section__eyebrow">Services</p>
          <h1 className="display-lg">Help explained for ordinary owners</h1>
          <p className="section__lead section__lead--wide">
            Educate first — then WhatsApp us when you are ready. Every category below comes from our
            Google Business Profile.
          </p>
          <p className="notice-banner" style={{ marginTop: '1.5rem' }}>
            {SERVICES_SOURCE_NOTE}
          </p>
        </div>
      </section>

      <section className="section band-ivory">
        <div className="container">
          <Stagger className="service-grid service-grid--editorial">
            {SERVICES.map((service) => (
              <StaggerItem key={service.slug}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal>
            <p className="services-home__more" style={{ marginTop: '2rem' }}>
              <Link to="/contact">Not sure which fits? Talk to Hilsham →</Link>
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand tone="green" />
    </>
  )
}
