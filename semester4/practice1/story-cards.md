# Story cards

## Warenkorb füllen
* Der Kunde kann durch einen Klick auf ein Pizza-Icon eine Pizza dem Warenkorb
  hinzufügen, der Preis wird automatisch berechnet und angezeigt
* Der Kunde kann Pizzan durch einen Klick auf ein `x` entfernen
* **Test 1:** Der Warenkorb wird befüllt mit 3 Salami, 2 Tonno und 1 Margherita
  Pizzen. Die Gesamtsumme sollte 27,50 € betragen
* **Test 2:** Es wird ein Warenkorb befüllt, danach wird eine Pizza durch einen
  Klick auf `x`entfernt.

## Bestellung abschicken
* Der Kunde kann die Bestellung abschicken, sobald das Adress-Feld ausgegraut
  und mindestens eine Pizza im Warenkorb ist. Davor ist der Bestellen-Button
  deaktiviert
* **Test 3:** Das Adressfeld wird befüllt (Warenkorb leer), der Bestellen-Button
  sollte deaktiviert sein
* **Test 4:** Der Warenkorb wird befüllt (Adressfeld leer), der Bestellen-Button
  sollte deaktiviert sein
* **Test 5:** Das Adressfeld und der Warenkorb werden befüllt, der
  Bestellen-Button sollte aktiviert sein

# Status einer Pizza ändern
* Wenn der Pizzabäcker oder der Fahrer den Status einer Pizza ändern,
  sollte nach einem Refresh die aktualisierte Liste der Pizzen angezeigt werden.
* Sobald der Status einer Pizza auf fertig gesetzt wird, verschwindet sie aus
  der Liste auf dem Pizzabäcker-View
* Sobald alle Pizzen einer Bestellung fertig sind, taucht die Bestellung auf dem
  Fahrer-View auf
* **Test 6:** Der Status einer Pizza wird geändert, danach aktualisiert. Der
  Status sollte übernommen worden sein
* **Test 7:** Der Status einer Pizza wird auf _fertig_ gesetzt, danach wird
  der Pizzabäcker-View aktualisiert. Die Pizza sollte nicht mehr auftauchen
* **Test 8:** Der Status aller Pizzen einer Bestellung wird auf _fertig_
  gesetzt, danach wird der Fahrer-View aktualisiert. Die Bestellung sollte dort
  auftauchen

## Status einer Bestellung ändern
* Sobald der Status einer Bestellung auf _ausgeliefert_ gesetzt wird, sollte
sie aus dem Fahrer-View verschwinden
* **Test 9:** Der Status einer Bestellung wird auf _ausgeliefert_ gesetzt,
danach wird der Fahrer-View aktualisiert. Die Bestellung sollte verschwunden
sein


## Sonstiges
* Die Seite des Fahrers und des Bäckers werden automatisch all 5 Sek.
  aktualisiert
