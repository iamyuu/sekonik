import { APP_FEATURES } from '@/config/app'

export function FrontFeatures() {
  return (
    <section className="bg-muted py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-8 text-center">Why Choose Our Preloved Electronics</h2>
        <div className="grid grid-auto-fit-[250px] gap-6">
          {APP_FEATURES.map(feature => (
            <div key={feature.title} className="bg-card rounded-lg p-6">
              <div className="mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-card-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
