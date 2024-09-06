import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import PageLayout from "../components/page-layout";
import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-1",
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "c_heroSection",
      "slug",
      "c_relatedArticles.name",
      "c_relatedArticles.c_shortDescriptionV1",
      "c_relatedArticles.c_image",
      "c_relatedArticles.c_author",
      "c_relatedProducts.name",
      "c_relatedProducts.slug",
      "c_relatedProducts.c_shortDescriptionV1",
      "c_relatedProducts.c_image",
    ],
    filter: {
      entityIds: ["home-bank"],
    },
    localization: {
      locales: ["en"],
    },
  },
};

export const getPath = () => {
  return `index.html`;
};
export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: "FINS | Homepage",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: "Static page example meta description.",
        },
      },
    ],
  };
};

const Search: Template<TemplateRenderProps> = ({ document }) => {
  const { _site, c_heroSection, c_relatedArticles, c_relatedProducts } =
    document;

  return (
    <PageLayout _site={_site}>
    <main>
    <section
      className="hero"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      }}
    >
      <article>
        <h1>Empowering Your Financial Journey with the Nation's Most Trusted Bank.</h1>
      </article>
      <form className="lead-form" aria-label="Lead Generation Form">
        <fieldset>
          <legend>Schedule an Appointment with our Wealth Expert</legend>
          <p>Call us at 1800-CAP-FINS</p>
          {/* 
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" aria-label="Name" required />
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" aria-label="Phone Number" required />
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" aria-label="Email Address" required />
          <button type="submit" aria-label="Submit Form">Submit</button> 
          */}
        </fieldset>
      </form>
    </section>
    
    <section className="products">
      <h2>Our Popular Products</h2>

      <article>
        <figure>
          <img
            src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Free Checking"
            aria-label="Free Checking Image"
            className="product-image"
          />
          <figcaption>
            <h3>Free Checking</h3>
            <p>A simple and easy checking account packed with features and benefits.</p>
            <a href="#" className="cta-button" aria-label="Learn More About Free Checking">
              Learn More
            </a>
          </figcaption>
        </figure>
      </article>

      <article>
        <figure>
          <img
            src="https://images.unsplash.com/photo-1592495989226-03f88104f8cc?q=80&w=3012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Wealth Management"
            aria-label="Wealth Management Image"
            className="product-image"
          />
          <figcaption>
            <h3>Wealth Management</h3>
            <p>Your financial journey begins with a trusted partner.</p>
            <a href="#" className="cta-button" aria-label="Learn More About Wealth Management">
              Learn More
            </a>
          </figcaption>
        </figure>
      </article>

      <article>
        <figure>
          <img
            src="https://images.unsplash.com/photo-1634757439914-23b8acb9d411?q=80&w=2811&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Loans and Financing"
            aria-label="Loans and Financing Image"
            className="product-image"
          />
          <figcaption>
            <h3>Loans and Financing</h3>
            <p>
              Whether it's a home, car, education, or your dream vacation, we're with you every step
              of the way.
            </p>
            <a href="#" className="cta-button" aria-label="Learn More About Loans and Financing">
              Learn More
            </a>
          </figcaption>
        </figure>
      </article>
    </section>

    <section className="insights">
      <h2>Insights</h2>

      <article>
        <img
          src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Article 1 Image"
          aria-label="Article 1 Image"
          className="product-image"
        />
        <h3>Article 1</h3>
        <a href="#" className="cta-button" aria-label="Read More About Article 1">
          Read More
        </a>
      </article>

      <article>
        <img
          src="https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Article 2 Image"
          aria-label="Article 2 Image"
          className="product-image"
        />
        <h3>Article 2</h3>
        <a href="#" className="cta-button" aria-label="Read More About Article 2">
          Read More
        </a>
      </article>

      <article>
        <img
          src="https://images.unsplash.com/photo-1457992666942-6e060d53be8c?q=80&w=2846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Article 3 Image"
          aria-label="Article 3 Image"
          className="product-image"
        />
        <h3>Article 3</h3>
        <a href="#" className="cta-button" aria-label="Read More About Article 3">
          Read More
        </a>
      </article>
    </section>

    <section
      className="locator"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1519219788971-8d9797e0928e?q=80&w=2888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      }}
    >
      <h2>Start Your Financial Journey Today</h2>
      <div className="search-container">
        <input type="text" placeholder="Yext AI Search.." name="search" />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
      {/* 
      <form aria-label="Wealth Management Locator Form">
        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" aria-label="City" required />
        <label htmlFor="postal">Postal Code:</label>
        <input type="text" id="postal" name="postal" aria-label="Postal Code" required />
        <label htmlFor="state">State:</label>
        <input type="text" id="state" name="state" aria-label="State" required />
        <button type="submit" aria-label="Submit Form">Get In Touch</button>
      </form>
      */}
    </section>
    </main>

    </PageLayout>
  );
};

export default Search;
