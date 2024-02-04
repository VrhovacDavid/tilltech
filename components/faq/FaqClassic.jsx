'use client'

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FaqContent = [
  {
    title: "Warum sollte ich nicht einfach einen Vollzeit Designer einstellen?",
    desc: "Gute Frage! Zum einen liegen die jährlichen Kosten für einen erfahrenen Vollzeit Designer jetzt bei über CHF125’000, zuzüglich der Sozialleistungen (und viel Glück bei der Suche nach einem verfügbaren). Abgesehen davon hast du möglicherweise nicht immer genug Arbeit, um sie dauerhaft beschäftigt zu halten, sodass du für Zeiten zahlst, in denen du ihre Dienste nicht in Anspruch nehmen kannst.",
    expand: "a",
},
{
    title: "Gibt es eine Begrenzung für die Anzahl der Anfragen, die ich haben kann?",
    desc: "Sobald du abonniert bist, kannst du so viele Designanfragen in deine Warteschlange aufnehmen, wie du möchtest, und sie werden nacheinander geliefert.",
    expand: "b",
},
{
    title: "Wie schnell werde ich meine Designs erhalten?",
    desc: "Im Durchschnitt werden die meisten Anfragen in nur zwei Tagen oder weniger abgeschlossen. Allerdings können komplexere Anfragen länger dauern.",
    expand: "c",
},
{
    title: "Wer sind die Designer?",
    desc: "Du wirst vielleicht überrascht sein, dies zu hören, aber TillTech ist tatsächlich eine Agentur mit nur einer Person. Das bedeutet, du wirst direkt mit mir, dem Gründer von TillTech, zusammenarbeiten. Allerdings werden Power-Up-Anfragen wie Animationen oder individuelle Illustrationen von Partnerdesignern bereitgestellt.",
    expand: "d",
},
{
    title: "Wie funktioniert die Pause-Funktion?",
    desc: "Wir verstehen, dass du möglicherweise nicht genug Designarbeiten hast, um den gesamten Monat auszufüllen. Genau hier kommt die Möglichkeit zur Pausierung deines Abonnements ins Spiel. Die Abrechnungszyklen basieren auf einem Zeitraum von 31 Tagen. Angenommen, du meldest dich an und nutzt den Service 21 Tage lang und entscheidest dann, dein Abonnement zu pausieren. Das bedeutet, dass der Abrechnungszyklus pausiert wird und du noch 10 Tage Service zur Verfügung hast, die du jederzeit in der Zukunft nutzen kannst.",
    expand: "e",
},
{
    title: "In welchen Programmen wird das Design erstellt?",
    desc: "Die meisten Anfragen werden mit Figma erstellt.",
    expand: "f",
},
];
const FaqContentTwo = [
 
{
  title: "Wie kann ich Designs anfragen?",
  desc: "TillTech bietet eine Menge Flexibilität bei der Anfrage von Designs über Trello. Einige gängige Methoden, wie Kunden Designs anfragen, sind direkt über Trello, das Teilen von Google-Dokumenten oder Wireframes oder sogar das Aufnehmen eines kurzen Loom-Videos (für diejenigen, die ihre Anfragen lieber nicht schriftlich verfassen). Grundsätzlich ist alles fair game, was mit Trello verknüpft oder geteilt werden kann.",
  expand: "g",
},
{
  title: "Was ist, wenn mir das Design nicht gefällt?",
  desc: "Kein Problem! Wir werden das Design so lange überarbeiten, bis du zu 100% zufrieden bist.",
  expand: "h",
},
{
  title: "Gibt es Designarbeiten, die nicht abgedeckt werden?",
  desc: "Ja, TillTech deckt folgende Designarbeiten nicht ab: 3D-Modellierung, animierte Grafiken (GIFs usw.), Dokumentgestaltung (medizinische Formulare usw.), komplexe Verpackungen und umfangreiche Printgestaltung (Zeitschriften, Bücher usw.).",
  expand: "i",
},
{
  title: "Was ist, wenn ich nur eine einzelne Anfrage habe?",
  desc: "Das ist kein Problem. Du kannst dein Abonnement pausieren, wenn du fertig bist, und zurückkehren, wenn du weitere Designbedürfnisse hast. Du musst den Rest deines Abonnements nicht verfallen lassen.",
  expand: "j",
},
{
  title: "Gibt es Rückerstattungen, wenn mir der Service nicht gefällt?",
  desc: "Aufgrund der hochwertigen Qualität der Arbeit werden keine Rückerstattungen ausgestellt.",
  expand: "k",
},
{
  title: "Welche Zahlungsmethoden werden akzeptiert?",
  desc: "Wir akzeptieren eine Vielzahl von Zahlungsmethoden, darunter Kreditkarten (Visa, MasterCard, American Express), PayPal und Banküberweisungen. Wir sind bestrebt, dir die bequemsten Optionen für die Bezahlung unserer Dienstleistungen anzubieten.",
  expand: "l",
},

];

const FaqClassic = () => {
  return (
    <div className="accordion-style-four">
      <div className="faq-wrraper">
        <div className="row">
          <div className="col-lg-6 ">
            <Accordion allowZeroExpanded>
              <div className="row">
                {FaqContent.map((item, i) => (
                  <div className="col-lg-12" key={i}>
                    <AccordionItem className="card">
                      <AccordionItemHeading className="card-header">
                        <AccordionItemButton>
                          <h5 className="mb-0 p-2">
                            <button className="btn btn-link">
                              {item.title}
                            </button>{" "}
                          </h5>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      {/* Accordion Heading */}
                      <AccordionItemPanel className="card-body fadeInUp">
                        <p>{item.desc}</p>
                      </AccordionItemPanel>
                      {/* Accordion Body Content */}
                    </AccordionItem>
                  </div>
                ))}
              </div>
            </Accordion>
          </div>
          {/* End.col */}

          <div className="col-lg-6  ">
            <Accordion allowZeroExpanded>
              <div className="row">
                {FaqContentTwo.map((item, i) => (
                  <div className="col-lg-12" key={i}>
                    <AccordionItem className="card">
                      <AccordionItemHeading className="card-header">
                        <AccordionItemButton>
                          <h5 className="mb-0 p-2 ">
                            <button className="btn btn-link">
                              {item.title}
                            </button>{" "}
                          </h5>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      {/* Accordion Heading */}
                      <AccordionItemPanel className="card-body fadeInUp">
                        <p>{item.desc}</p>
                      </AccordionItemPanel>
                      {/* Accordion Body Content */}
                    </AccordionItem>
                  </div>
                ))}
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqClassic;
