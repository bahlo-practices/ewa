# Fragen
### 1) Wo erfolgt der eigentliche Aufruf zur Erstellung einer HTML-Seite?
In der `generateView()` der jeweiligen PageTemplate-Klasse.

### 2) Was tun die Methoden getViewData(), generateView() und processReceivedData()?
- `getViewData()`: Holt sich Daten, die für die Ausgabe benötigt werden
- `generateView()`: Gibt den HTML-Content für den View aus.
- `porcessReceiveData()`: Behandelt POST und GET-Daten

### 3) Wo wird der HTML-Rahmen erzeugt? Wo wird er ausgegeben?
In der `page.php`, dort werden Header und Footer ausgegeben und die
`generateView()` der untergeordneten `Block`-Dateien aufgerufen, die wiederum
HTML ausgeben.

