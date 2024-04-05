import Image from "next/image";

const Energy = ({ locale }) => {
  if (locale === "pl")
    return (
      <section id="energy" className="my-dynamic scroll-mt-14">
        <div className="wrapper leading-9">
          <h2
            className={`py-dynamic-heading text-center text-3xl md:text-5xl font-bold text-main-bg`}
          >
            Energria odnawialna
          </h2>
          <p className="py-6">
            PODLASIAK ANDRZEJ CYLWIK Spółka Komandytowa realizuje Projekt
            dofinansowany z Funduszy Europejskich{" "}
            <strong>
              <em>Energia odnawialna w PODLASIAK ANDRZEJ CYLWIK</em>
            </strong>{" "}
            nr WND-RPPD.11.01.00-20-0050/23.
          </p>
          <p className="py-6">
            W oparciu o zidentyfikowane wyzwania i problemy oraz cele
            strategiczne Spółki w zakresie rozwoju działalności OZE określone
            zostały następujące cele Projektu:
          </p>
          <ul className="list-decimal<strong></strong> pl-8">
            <li>
              Wytwarzanie do <strong>1438,64</strong> MWh energii elektrycznej
              rocznie z 2 instalacji fotowoltaicznych o mocy łącznej{" "}
              <strong>1 623,01</strong> kW w okresie od 2024 r. do 2026 r.
            </li>
            <li>
              Zmniejszenie rocznej emisji CO2 do atmosfery do{" "}
              <strong>1 168,18</strong> MgCO2 rocznie w okresie od 2024 r. do
              2026 r.
            </li>
            <li>
              Zwiększenie przychodu przedsiębiorstwa ze sprzedaży energii
              elektrycznej o ok. <strong>0,4%</strong> rocznie w porównaniu do
              2018 r. w okresie od 2024 r. do 2026 r.
            </li>
          </ul>
          <p className="py-6">
            Ponadto, wartością dodaną inwestycji będzie aspekt:
          </p>
          <ul className="list-disc pl-8">
            <li>
              <strong>społeczny</strong> – realizacja inwestycji wpłynie na
              zwiększenie wolnych środków będących do dyspozycji
              przedsiębiorstwa. Środki te zostaną przeznaczone na planowane
              zwiększenie konkurencyjności przedsiębiorstwa w okresie
              najbliższych lat. Redukcja emisji CO2 do atmosfery poprawi jakość
              powietrza w okolicy i wpłynie pozytywnie na wizerunek
              przedsiębiorstwa;
            </li>
            <li>
              <strong>techniczny</strong> – przedsiębiorstwo zastosuje
              nowoczesną i ekologiczną metodę wytwarzania energii ze źródła
              odnawialnego;
            </li>
            <li>
              <strong>ekonomiczny</strong> – dzięki inwestycji przedsiębiorstwo
              zwiększy przychód o 0,4% rocznie. Kwota ta zostanie wykorzystana
              na rozwój przedsiębiorstwa poprzez finansowanie kolejnych
              projektów rozwojowych.
            </li>
          </ul>

          <p className="py-6">
            Efektem Projektu będzie zmniejszenie emisji CO2, CO, NOx, SO2 oraz
            pyłów do środowiska, ponadto nastąpi wzrost przychodów oraz zysków z
            działalności operacyjnej firmy z tytułu działalności w zakresie
            wytwarzania e.e.
          </p>

          <p>
            Wartość Projektu: <strong>6 607 166,40 PLN</strong>
          </p>
          <p>
            Wkład Funduszy Europejskich:
            <strong>2 103 866,87 PLN</strong>
          </p>
          <div className="w-full flex justify-center py-3">
            <Image
              alt="Logo dofinansowanie"
              src="/eu.png"
              width="604"
              height="63"
            />
          </div>
        </div>
      </section>
    );
};

export default Energy;
