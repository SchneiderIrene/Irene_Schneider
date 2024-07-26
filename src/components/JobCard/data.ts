import { Job } from "./types"

const jobsData: Job[] = [
  {
    title: "Front-End Softwareentwickler",
    company: "LeafGrow ",
    companyDescription: "Startup",
    link: "https://leafgrow-app-foign.ondigitalocean.app/#/",
    period: "April 2024 – bis heute",
    location: "Deutschland",
    description: [
      {
        titleDescription:
          "Entwurf und Implementierung der Frontend-Architektur mit React für skalierbare und wartbare Anwendungen.",
        span: [
            "Entwurf der Architektur:", 
            "Implementierung:",
            "Skalierbarkeit:",
            "Wartbarkeit:"
        ],
        li: [
            "Umfasst die Planung und Erstellung der Struktur einer Anwendung. Dies beinhaltet die Auswahl geeigneter Designmuster, modulare Entwicklung und Sicherstellung der Trennung von Verantwortlichkeiten.",
            "Umsetzung der architektonischen Entscheidungen mit React. Dies beinhaltet das Erstellen von Komponenten, die Konfiguration des Routings (mit React Router), das Erstellen des globalen Zustands und die Verwaltung des Lebenszyklus der Komponenten.",
            "Sicherstellen, dass die Anwendung problemlos erweitert werden kann und größere Daten- und Benutzerzahlen verarbeiten kann, ohne an Leistung zu verlieren.",
            "Gewährleistung, dass der Code leicht zu warten und zu aktualisieren ist. Dazu gehört das Schreiben von sauberem und gut dokumentiertem Code, die Verwendung modularer und wiederverwendbarer Komponenten sowie die Implementierung von Tests."
        ]
,     
      },
      {
        titleDescription:
          "State-Management mit Redux zur Sicherstellung einer konsistenten Zustandsverwaltung",
        span: [
            "State-Management: ", 
            "Redux: ",
            "Konsistenz: ",
        ],
        li: [
           "Verwaltung des Zustands der Anwendung, um sicherzustellen, dass die Daten konsistent sind und in allen Komponenten korrekt dargestellt werden.",
           "Nutzung der Redux-Bibliothek zur zentralisierten Verwaltung des Zustands. Dies beinhaltet das Erstellen von Actions, Reducern und Store.",
           "Sicherstellen, dass der Zustand der Anwendung einheitlich und leicht nachverfolgbar ist. Dies ist wichtig für die Fehlersuche und das vorhersehbare Verhalten der Anwendung."
        ]
      },
      {
        titleDescription:
          "Nahtlose Integration von Frontend und Backend mittels API und Node.js",
        span: [
            "Integration:  ", 
            "API: ",
            "Node.js: ",
        ],
        li: [
           "Konfiguration der Interaktion zwischen der Client-Seite (Frontend) und der Server-Seite (Backend) über eine API.",
           "Erstellung und Nutzung einer API zum Datenaustausch zwischen Frontend und Backend. Dies kann RESTful API oder GraphQL umfassen.",
           "Verwendung von Node.js zur Erstellung der Serverlogik. Dies kann die Konfiguration des Servers, das Routing von Anfragen und die Verwaltung der Datenbank umfassen."
        ]
      },
      {
        titleDescription:
          "Effiziente Handhabung von API-Anfragen und Fehlerbehebung",
        span: [
            "API-Anfragen:  ", 
            "Fehlerbehebung: ",
        ],
        li: [
           "Erstellung und Ausführung von HTTP-Anfragen an die API. Dies beinhaltet die Nutzung von Bibliotheken wie Axios oder Fetch.",
           "Umgang mit Fehlern bei der Ausführung von API-Anfragen. Dies kann die Einrichtung globaler Fehlerbehandler, die Verwendung von try-catch-Blöcken und die Bereitstellung verständlicher Fehlermeldungen für Benutzer umfassen."
        ]
      },
      {
        titleDescription:
          "Entwicklung intuitiver Benutzeroberflächenkomponenten und interaktiver Features",
        span: [
            "Benutzeroberflächenkomponenten:  ", 
            "Interaktive Features: ",
        ],
        li: [
           "Erstellung von Benutzeroberflächen (UI) mit React-Komponenten. Dies umfasst die Erstellung von Formularen, Buttons, Modalen und anderen UI-Elementen.",
           "Entwicklung interaktiver Elemente wie Animationen, Übergänge und interaktive Karten, um das Benutzererlebnis zu verbessern."
        ]
      },
      {
        titleDescription:
          "Implementierung sicherer Funktionen für Benutzerregistrierung und -authentifizierung",
        span: [
            "Benutzerregistrierung:  ", 
            "Authentifizierung: ",
        ],
        li: [
           "Erstellung eines Systems zur Benutzerregistrierung. Dies umfasst die Validierung von Formularen, das Senden von Daten an den Server und die Bearbeitung der Antworten.",
           "Einrichtung von Benutzerauthentifizierungssystemen. Dies kann die Nutzung von JWT (JSON Web Tokens), OAuth oder anderen Methoden umfassen."
        ]
      },
      {
        titleDescription:
          "Verwaltung und Aktualisierung von Benutzerprofilen",
        span: [
            "Benutzerprofile:  ", 
            "Aktualisierung: ",
        ],
        li: [
           "Erstellung und Verwaltung von Benutzerprofilen. Dies umfasst die Anzeige von Benutzerinformationen, die Möglichkeit zur Bearbeitung des Profils und das Hochladen von Avataren.",
           "Sicherstellen, dass Benutzer ihre Informationen aktualisieren und diese Daten auf dem Server speichern können."
        ]
      },
      {
        titleDescription:
          "Personalisierung von Inhalten basierend auf Benutzerpräferenzen",
        span: [
            "Personalisierung:  ", 
            "Benutzerpräferenzen: ",
        ],
        li: [
           "Anpassung der angezeigten Inhalte basierend auf den Präferenzen des Benutzers. Dies kann Empfehlungen, personalisierte Newsfeeds und Interface-Einstellungen umfassen.",
           "Speichern und Nutzen der Benutzerpräferenzen, um die Interaktion mit der Anwendung zu verbessern."
        ]
      },
      {
        titleDescription:
          "Arbeit in einem hochkooperativen Teamumfeld und Hervorragend abgestimmte Teamarbeit",
        span: [
            "Teamumfeld:  ", 
            "Kooperation: ",
            "Effektive Zusammenarbeit:",
            "Erfolg des Projekts:"
        ],
        li: [
           "Zusammenarbeit mit Entwicklern, Designern und Projektmanagern.",
           "Nutzung von Versionskontrollsystemen (z.B. Git), Teilnahme an Teammeetings und Diskussionen.",
           "Wissens- und Erfahrungsaustausch, gemeinsames Lösen von Problemen.",
           "Beitrag zum erfolgreichen Abschluss, Einhaltung von Terminen und Erreichung der Ziele."
        ]
      },
    ],
  },
  {
    title: "индекс2",
    company: "",
    companyDescription: "",
    link: "",
    period: "",
    location: "",
    description: [
      {
        titleDescription:
          "",
        span: [
            "", 
            "",
            "",
            ""
        ],
        li: [
            "",
            "",
            "",
            ""
        ]
,     
      },
    ],
  },
  {
    title: "индекс3",
    company: "",
    companyDescription: "",
    link: "",
    period: "",
    location: "",
    description: [
      {
        titleDescription:
          "",
        span: [
            "", 
            "",
            "",
            ""
        ],
        li: [
            "",
            "",
            "",
            ""
        ]
,     
      },
    ],
  },
]

export default jobsData
