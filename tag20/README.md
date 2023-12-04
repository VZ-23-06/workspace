## SASS steht für "Syntactically Awesome Stylesheets", während SCSS für "Sassy CSS" steht.

SCSS ist im Grunde eine Erweiterung von SASS und folgt einer CSS-ähnlicheren Syntax mit geschweiften Klammern und Semikolons, was es für diejenigen, die bereits mit CSS vertraut sind, einfacher macht, sich einzuarbeiten.

**Beide Varianten werden dann in reguläres CSS kompiliert, das von Webbrowsern verstanden und interpretiert werden kann.**

style.css.map -> ist eine sogenannte Source Map
Diese Map-Datei enthält Informationen, die den Browsern helfen, den kompilierten CSS-Code auf die ursprünglichen SASS- oder SCSS-Dateien zurückzuführen.

## Starte SASS
+ brew install sass/sass/sass

**wie die Ordner Struktur** --> sass --watch assets/scss/main.scss assets/css/style.css
- dein-projekt/
  - assets/
    - css/
      - style.css
    - scss/
      - main.scss
      
## 

# Warum beginnt man mit einem "_" ?
-  Die Namenskonvention mit einem vorangestellten Unterstrich (_variables.scss) deutet oft darauf hin, dass es sich um eine Teildatei handelt, die in eine Haupt-SCSS-Datei (main.scss) importiert wird.

- Die Datei wird normalerweise als Teil einer partiellen Dateistruktur betrachtet, was bedeutet, dass sie mit einem führenden Unterstrich (_) beginnt. Sie wird nicht eigenständig kompiliert, sondern in andere Haupt-SCSS-Dateien importiert, um ihre Variablen zu nutzen.

- die Verwendung von Teil- und Hauptdateien hilft, den Code zu organisieren und zu strukturieren, insbesondere in größeren Projekten, indem sie die Wiederverwendbarkeit von Code und die Lesbarkeit erhöhen.
##

# Syntax
SASS
- verwendet eine Einrückungsyntax ohne geschweifte Klammern und Semikolons, um die Struktur von Stylesheets zu definieren

SCSS (Sassy CSS) 
- hingegen verwendet eine CSS-ähnliche Syntax mit geschweiften Klammern und Semikolons, was sie näher an herkömmlichem CSS macht.