import Image from "next/image";

const CDN = "https://moroccanoilprofessionals.com/cdn/shop/files";

export default function App() {
  return (
    <section className="mo-section">
      <div className="mo-image-text">
        <div>
          <Image
            src={`${CDN}/homepage_mobile_app.png?v=1771359984&width=1000`}
            alt="Dental Nutrition Education app"
            width={1000}
            height={750}
          />
        </div>
        <div className="mo-image-text__content">
          <h3>
            <strong>Education anytime, anywhere</strong>
          </h3>
          <p>
            Access inspirational and educational videos, plus self-guided
            learning on nutrition, dental health, product application, and more.
            Ask our Dental Nutrition Experts about all things dental nutrition!
            Available for iOS and Android mobile and tablet devices.
          </p>
          <div className="mo-app-badges">
            <a href="https://apps.apple.com/us/app/dental-nutrition/id123456789">
              <Image
                src={`${CDN}/Download_on_the_App_Store_Badge_US-UK_blk_092917_f35fc401-e659-497d-8a28-743b47d549d0.png?v=1771450952&width=1200`}
                alt="Download on the App Store"
                width={160}
                height={44}
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.dentalnutrition">
              <Image
                src={`${CDN}/GetItOnGooglePlay_Badge_Web_color_English.png?v=1771450230&width=1200`}
                alt="Get it on Google Play"
                width={160}
                height={44}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}