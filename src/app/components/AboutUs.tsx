import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Link } from 'react-router-dom';
import heroImage from 'figma:asset/949dc479ecb1c60bbe8821885a6fcaad87099e4a.png';

export default function AboutUs() {
  return (
    <div className="w-full">
      {/* Hero Section - "From Complexity to Clarity" */}
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
        <ImageWithFallback 
          src={heroImage}
          alt="IROPKE Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.5)] z-[1]"></div>
        <div className="relative z-[2] max-w-[1440px] mx-auto px-[20px] md:px-[40px] lg:px-[160px] text-center">
          <h1 className="text-white font-['Google_Sans',sans-serif] text-[32px] md:text-[42px] lg:text-[52px] leading-[1.2] font-medium">
            Iropke: From Complexity to Clarity
          </h1>
        </div>
      </section>

      {/* Mission Section - Bright Yellow Background */}
      <section className="w-full bg-[#FFED4E] py-[60px] md:py-[80px] lg:py-[100px]">
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[40px] lg:px-[160px]">
          <div className="mb-[30px] md:mb-[40px]">
            <p className="font-['Roboto',sans-serif] text-[12px] md:text-[14px] tracking-[0.1em] uppercase text-[#232329] font-medium">
              OUR MISSION
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] md:gap-[60px]">
            <div>
              <h2 className="font-['Google_Sans',sans-serif] text-[28px] md:text-[34px] lg:text-[38px] leading-[1.2] text-[#232329] mb-[20px] font-medium">
                We solve problems for our clients.
              </h2>
              <p className="font-['Roboto',sans-serif] text-[14px] md:text-[16px] leading-[1.6] text-[#232329]">
                The name "Iropke" comes from a Korean expression that means we can bind to create better things above for good intentions, so a digital agency. We develop strategies, build brands, and deliver exceptional, lasting results.
              </p>
            </div>

            <div>
              <h2 className="font-['Google_Sans',sans-serif] text-[28px] md:text-[34px] lg:text-[38px] leading-[1.2] text-[#232329] mb-[20px] font-medium">
                Solving Problems with Purpose
              </h2>
              <p className="font-['Roboto',sans-serif] text-[14px] md:text-[16px] leading-[1.6] text-[#232329]">
                Some services are essential to society—but often involve little attention or investment. At Iropke, we take on basic overlooked challenges in internal infrastructure, government services, and contribute to the public good.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Better, Together */}
      <section className="w-full bg-[var(--color-background)] py-[60px] md:py-[80px] lg:py-[100px]">
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[40px] lg:px-[160px]">
          <div className="mb-[30px] md:mb-[40px]">
            <p className="font-['Roboto',sans-serif] text-[12px] md:text-[14px] tracking-[0.1em] uppercase text-[#232329] font-medium">
              OUR VALUES
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] md:gap-[60px] lg:gap-[80px] items-start">
            <div className="bg-white p-[40px] md:p-[50px] lg:p-[60px] rounded-[var(--radius-card)] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)]">
              <h2 className="font-['Google_Sans',sans-serif] text-[28px] md:text-[34px] lg:text-[38px] leading-[1.2] text-[#232329] mb-[30px] md:mb-[40px] font-medium">
                Better, Together, for the Next Generation
              </h2>

              <div className="space-y-[30px]">
                <div>
                  <h3 className="font-['Google_Sans',sans-serif] text-[20px] md:text-[24px] leading-[1.2] text-[#232329] mb-[15px] font-medium">
                    Technology for the Better
                  </h3>
                  <p className="font-['Roboto',sans-serif] text-[14px] md:text-[16px] leading-[1.6] text-[#43434e]">
                    Technology is like clay that can be shaped and reformed to match the world's changing and increasing needs. With the necessary technologies, we can do everything we want.
                  </p>
                </div>

                <div>
                  <h3 className="font-['Google_Sans',sans-serif] text-[20px] md:text-[24px] leading-[1.2] text-[#232329] mb-[15px] font-medium">
                    Work for the Better
                  </h3>
                  <p className="font-['Roboto',sans-serif] text-[14px] md:text-[16px] leading-[1.6] text-[#43434e]">
                    We depend square on unity and clarity to create true value through collaboration, even in a work-only environment where harmony may thrive.
                  </p>
                </div>

                <div>
                  <h3 className="font-['Google_Sans',sans-serif] text-[20px] md:text-[24px] leading-[1.2] text-[#232329] mb-[15px] font-medium">
                    Society for the Better
                  </h3>
                  <p className="font-['Roboto',sans-serif] text-[14px] md:text-[16px] leading-[1.6] text-[#43434e]">
                    To truly live a better world, we actively share knowledge, technology, and know-how with society—and we're committed to this pledge—delivering our best values.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-[var(--radius-card)] overflow-hidden shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)]">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1765256931300-ceeaed648d21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGFic3RyYWN0fGVufDF8fHx8MTc2OTE1MzYyNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Technology and Innovation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-white py-[60px] md:py-[80px] lg:py-[100px]">
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[40px] lg:px-[160px]">
          <div className="mb-[30px] md:mb-[40px]">
            <p className="font-['Roboto',sans-serif] text-[12px] md:text-[14px] tracking-[0.1em] uppercase text-[#232329] font-medium">
              OUR BUSINESS
            </p>
          </div>

          <h2 className="font-['Google_Sans',sans-serif] text-[28px] md:text-[34px] lg:text-[38px] leading-[1.2] text-[#232329] mb-[40px] md:mb-[60px] font-medium">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] md:gap-[40px]">
            {/* IT Consulting */}
            <div className="group">
              <div className="relative h-[220px] md:h-[260px] mb-[20px] rounded-[var(--radius-card)] overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1765020553734-2c050ddb9494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBtZWV0aW5nfGVufDF8fHx8MTc2OTEzMzYzNXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="IT Consulting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-['Google_Sans',sans-serif] text-[20px] md:text-[24px] leading-[1.2] text-[#232329] mb-[15px] font-medium">
                IT Consulting
              </h3>
              <p className="font-['Roboto',sans-serif] text-[14px] leading-[1.6] text-[#43434e] mb-[15px]">
                Think with insight | Recommend consultants to chart your digital strategy
              </p>
              <ul className="space-y-[8px]">
                <li className="font-['Roboto',sans-serif] text-[14px] leading-[1.6] text-[#43434e] flex items-start">
                  <span className="mr-[8px]">•</span>
                  <span>Proof-of-Concept (PoC) development and validation</span>
                </li>
                <li className="font-['Roboto',sans-serif] text-[14px] leading-[1.6] text-[#43434e] flex items-start">
                  <span className="mr-[8px]">•</span>
                  <span>Hybrid UI/UX governance</span>
                </li>
                <li className="font-['Roboto',sans-serif] text-[14px] leading-[1.6] text-[#43434e] flex items-start">
                  <span className="mr-[8px]">•</span>
                  <span>System architecture and infrastructure planning</span>
                </li>
              </ul>
            </div>

            {/* Web Service Development */}
            <div className="group">
              <div className="relative h-[220px] md:h-[260px] mb-[20px] rounded-[var(--radius-card)] overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjkwODM2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Web Development"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-['Google_Sans',sans-serif] text-[20px] md:text-[24px] leading-[1.2] text-[#232329] mb-[15px] font-medium">
                Web Service Development & Management
              </h3>
              <p className="font-['Roboto',sans-serif] text-[14px] leading-[1.6] text-[#43434e] mb-[15px]">
                Backed by strategy, designed with beauty, and built for flexibility—Creativity meets code.
              </p>
              <ul className="space-y-[8px]">
                <li className="font-['Roboto',sans-serif] text-[14px] leading-[1.6] text-[#43434e] flex items-start">
                  <span className="mr-[8px]">•</span>
                  <span>Web service development</span>
                </li>
                <li className="font-['Roboto',sans-serif] text-[14px] leading-[1.6] text-[#43434e] flex items-start">
                  <span className="mr-[8px]">•</span>
                  <span>E-commerce system development</span>
                </li>
                <li className="font-['Roboto',sans-serif] text-[14px] leading-[1.6] text-[#43434e] flex items-start">
                  <span className="mr-[8px]">•</span>
                  <span>Future-enabled severless</span>
                </li>
                <li className="font-['Roboto',sans-serif] text-[14px] leading-[1.6] text-[#43434e] flex items-start">
                  <span className="mr-[8px]">•</span>
                  <span>Multi-lingual web development</span>
                </li>
              </ul>
            </div>

            {/* SEO */}
            <div className="group">
              <div className="relative h-[220px] md:h-[260px] mb-[20px] rounded-[var(--radius-card)] overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1684835609103-57dc56e07433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW8lMjBkaWdpdGFsJTIwbWFya2V0aW5nfGVufDF8fHx8MTY5MTU3MDMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="SEO"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-['Google_Sans',sans-serif] text-[20px] md:text-[24px] leading-[1.2] text-[#232329] mb-[15px] font-medium">
                Search Engine Optimization (SEO)
              </h3>
              <p className="font-['Roboto',sans-serif] text-[14px] leading-[1.6] text-[#43434e] mb-[15px]">
                If it can't be found, it doesn't exist. Iropke will even make your business better.
              </p>
              <ul className="space-y-[8px]">
                <li className="font-['Roboto',sans-serif] text-[14px] leading-[1.6] text-[#43434e] flex items-start">
                  <span className="mr-[8px]">•</span>
                  <span>Analytics Blog (SEM)</span>
                </li>
                <li className="font-['Roboto',sans-serif] text-[14px] leading-[1.6] text-[#43434e] flex items-start">
                  <span className="mr-[8px]">•</span>
                  <span>E-commerce Key (Ecommerce + ERP)</span>
                </li>
                <li className="font-['Roboto',sans-serif] text-[14px] leading-[1.6] text-[#43434e] flex items-start">
                  <span className="mr-[8px]">•</span>
                  <span>With/without paid ads</span>
                </li>
                <li className="font-['Roboto',sans-serif] text-[14px] leading-[1.6] text-[#43434e] flex items-start">
                  <span className="mr-[8px]">•</span>
                  <span>Content marketing</span>
                </li>
                <li className="font-['Roboto',sans-serif] text-[14px] leading-[1.6] text-[#43434e] flex items-start">
                  <span className="mr-[8px]">•</span>
                  <span>Improvement / analysis</span>
                </li>
                <li className="font-['Roboto',sans-serif] text-[14px] leading-[1.6] text-[#43434e] flex items-start">
                  <span className="mr-[8px]">•</span>
                  <span>Organic traffic (Incl. Local listing, Ency Refer...)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Background */}
      <section className="w-full bg-[#43434e] py-[80px] md:py-[100px]">
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[40px] lg:px-[160px] text-center">
          <h2 className="font-['Google_Sans',sans-serif] text-[32px] md:text-[38px] lg:text-[42px] leading-[1.2] text-white mb-[30px] md:mb-[40px] font-medium">
            Let's solve it together
          </h2>
          <Link to="/contact">
            <button className="bg-transparent border-2 border-white text-white px-[30px] py-[15px] rounded-[var(--radius-md)] hover:bg-white hover:text-[#43434e] transition-all duration-300 font-['Roboto',sans-serif] text-[14px] md:text-[16px] font-medium min-w-[160px]">
              Start New Project
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
