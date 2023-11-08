
ID's -> ##in HTML sparsam verwenden##

1. IDs sollten eindeutig auf der Seite sein.

2. IDs haben globalen Gültigkeitsbereich, was zKonflikten führen kann.
    - sollt nicht doppelt verwendet werden, was gegen die Eindeutigkeitsregel für IDs in HTML verstößt.

3. CSS-Selektoren mit IDs führen zu spezifischem und schwer wartbarem CSS.

4. Verwende Klassen für wiederverwendbare Stile und IDs nur für eindeutige Referenzen oder Verweisziele.

5.Achte auf semantische und sinnvolle Namensgebung für IDs.

-----

##CSS Klassen##

#Selektoren:# CSS-Klassen werden mit einem Punkt (.) vor dem Klassennamen selektiert, z. B. .meine-klasse.

#Einzigartigkeit:# Klassen sollten eindeutig sein, um Verwechslungen zu vermeiden. Der gleiche Klassenname sollte nicht mehrmals auf derselben Seite verwendet werden.

#Kombination von Klassen:# Du kannst mehrere Klassen auf ein Element anwenden, indem du sie durch Leerzeichen trennst, z. B. <div class="klasse1 klasse2">.

#Kaskadierung:# CSS-Klassen können in der Reihenfolge ihres Auftretens kaskadiert werden. Regeln, die weiter unten im Stylesheet definiert sind, haben Vorrang vor früheren Regeln.

#Spezifität:# CSS-Selektoren haben eine Spezifität, die bestimmt, welche Regeln auf ein Element angewendet werden. Spezifischere Selektoren haben Vorrang.

#!important:# Die Verwendung von !important in einer Regel gibt dieser Regel Vorrang vor anderen Regeln, sollte aber sparsam eingesetzt werden.

#Vererbung:# CSS-Eigenschaften werden von übergeordneten Elementen an untergeordnete Elemente vererbt, es sei denn, sie werden überschrieben.

#Wiederverwendbarkeit:# Klassen fördern die Wiederverwendbarkeit von Stilen und ermöglichen eine konsistente Gestaltung über mehrere Elemente hinweg.

#Namensgebung:# Benenne Klassen semantisch und beschreibend, um den Code lesbar und wartbar zu halten.




##ZU BEACHTEN##

Klassename
    - section__one
    - section-one

*Beide Ansätze sind gültig und haben ihre Vor- und Nachteile. Die Wahl hängt von deinen persönlichen Präferenzen und den Anforderungen deines Projekts ab. Wichtig ist, dass du konsistent bleibst und einen Stil wählst, den du und dein Entwicklungsteam leicht verstehen und pflegen können.*

-----


##Pseudo Elemnte##
1. ::before

2. ::after

3. ::first-line -> die erste Zeile innerhalb eines Textblocks selektieren und spezielle Stile auf diese Zeile anwenden

4. ::first-letter -> die erste Buchstabe eines Textelements auszuwählen und spezielle Stile darauf anzuwenden

5. ::selection -> Text auswählen, den ein Benutzer auf deiner Webseite markiert.
