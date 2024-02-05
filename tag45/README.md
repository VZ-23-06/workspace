- was ist Tailwind?
    - Tailwind CSS ist ein Utility-First-CSS-Framework
    - Es stellt eine umfangreiche Sammlung von Utility-Klassen zur Verfügung
    - Utility-Klassen, mit denen sich fast jedes Design direkt im HTML-Markup umsetzen lässt.


Instalation:
https://tailwindcss.com/

-> Tailwind Klassen
https://tailwind.build/classes

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


tailwind.config.js file öffnen -->

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

in die index.css oder app.cc einfügen

@tailwind base;
@tailwind components;
@tailwind utilities;




Vorteile von Tailwind CSS:
    - Effizienz: Schnelles Styling direkt im Markup ohne die Notwendigkeit, CSS-Dateien zu wechseln oder Klassennamen zu erfinden.
    - wird in der Praxis oft angewendet
    - Responsives Design: Tailwind macht es einfach, responsive Designs mit präfixierten Utility-Klassen zu erstellen

Nachteile von Tailwind CSS:
    - lerkurve: es kann zu Anfag überfordent sein, da man sich mit den ganzen Klassen auseinander setzten muss
    - Weniger geeignet für tiefgreifende CSS-Logik: Während Tailwind für die meisten Styling-Aufgaben hervorragend geeignet ist, kann es bei sehr spezifischen oder komplexen CSS-Effekten, die Pseudo-Elemente oder ausgeklügelte Selektoren erfordern, weniger effizient sein.

Manchmal reichen die vorgefertigen Klassen nicht, daher können wir die sogenanten Just-In-Time (JIT) verwenden. JIT ist ein Compiler-Feature 