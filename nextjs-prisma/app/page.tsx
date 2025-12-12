import ContactForm from "./src/frontend/components/ContactForm";
import InformationCard from "./src/frontend/components/InformationCard";
import ProductCard from "./src/frontend/components/ProductCards";

export default function Page() {
  return (
    <>
      {/*HERO SECTION*/}
      <section className="flex flex-col mx-10 sm:mx-30 pb-20">
        <div className="flex justify-center py-30 px-2 ">
          <h1 className="text-3xl sm:text-6xl text-vitrine-grey-100 text-center font-bold bg-vitrine-grey-100/10 p-2 rounded-2xl shadow-md whitespace-pre-line shadow-vitrine-red-500">
            UN PRODUIT POUR CHAQUE BESOIN
          </h1>
        </div>
        <div className="flex flex-col p-12 gap-12 justify-center bg-vitrine-grey-100/10 rounded-2xl shadow shadow-vitrine-grey-100">
          <div className="flex justify-center">
            <h2 className="text-2xl sm:text-4xl font-bold text-vitrine-grey-100 pt-2 text-shadow-vitrine-red-100-lg">
              Produits proposés
            </h2>
          </div>
          <div className="flex flex-col justify-center sm:flex-row gap-6">
            <ProductCard
              title={"Application web"}
              description={
                "Outils numériques réalisés sur mesure afin d’accroître votre productivité"
              }
            />
            <ProductCard
              title={"Développement d’API"}
              description={
                "Des API robustes et sécurisées pour connecter vos applications et automatiser vos processus."
              }
            />
            <ProductCard
              title={"Conception d’interface"}
              description={
                "Des interfaces intuitives et esthétiques, pensées pour offrir une expérience utilisateur fluide et engageante."
              }
            />
          </div>
        </div>
      </section>
      {/*TARIFS SECTIONS*/}
      <section className="flex flex-col mx-10 sm:mx-30 pb-20">
        <div className="flex flex-col justify-center gap-12 p-12 bg-vitrine-grey-100/10 rounded-2xl shadow shadow-vitrine-grey-100">
          <div className="flex justify-center">
            <h2 className="text-2xl sm:text-4xl font-bold text-vitrine-grey-100 pt-2 text-shadow-vitrine-red-100-lg">
              Tarifs forfaitaires
            </h2>
          </div>
          <div className="flex gap-6 flex-col sm:justify-center sm:flex-row">
            <ProductCard
              title={"Page simple"}
              description={"Page web statique ou simple avec design basique"}
              price="200€/page"
            />
            <ProductCard
              title={"API légère"}
              description={
                "API REST basique pour interagir avec votre front-end"
              }
              price="300€/composant + pages associées"
            />
            <ProductCard
              title={"Module backend complet"}
              description={
                "Développement backend complet avec base de données et logique métier"
              }
              price="400€/module + pages associées"
            />
          </div>
        </div>
      </section>
      {/*CONTACT SECTIONS*/}
      <section className="flex flex-col sm:flex-row p-6 pb-20 mx-5">
        <div className="sm:justify-around flex sm:flex-row gap-6 flex-col">
          <div className="">
            <ContactForm />
          </div>
          <div className="justify-items-end sm:max-w-1/3">
            <InformationCard
              title={"Informations et conditions générales d’utilisation"}
              content_1={
                "Remplissez ce formulaire et je vous répondrai sous 48h. Toutes vos informations restent confidentielles et ne seront utilisées que pour traiter votre demande."
              }
              content_2={
                "Vos informations personnelles, y compris votre adresse e-mail, seront conservées uniquement pour la durée nécessaire au traitement de votre demande et au maximum 2 ans, conformément au RGPD. Vous pouvez à tout moment demander leur suppression ou leur modification."
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}
