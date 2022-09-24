0.4
selain->palvelin: 
HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
selain->palvelin: 
HTML GET https://studies.cs.helsinki.fi/exampleapp/notes
palvelin-->selain: 
HTML koodi 

Selain suorittaa notes html koodia joka pyytää lataamaan headin sisällä olevat .css sekä .js tiedostot

selain->palvelin: 
HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
palvelin-->selain: 
main.css tiedosto
selain->palvelin: 
HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
palvelin-->selain: 
main.js tiedosto


Selain suorittaa main.js-koodin, joka pyytää JSON-datan palvelimelta

selain->palvelin: 
HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
palvelin-->selain: 
[
{
"content": "asd",
"date": "2022-09-24T08:41:43.568Z"
}...

Selain suorittaa tapahtumankäsittelijän, joka renderöi muistiinpanot näytölle

0.5
selain -> palvelin:
HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
palvelin -> selain:
spa HTML koodi

Selain suorittaa spa html koodia joka pyytää lataamaan headin sisällä olevat .css sekä .js tiedostot

selain -> palvelin:
HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
palvelin -> selain:
main.css tiedosto
selain -> palvelin:
HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
palvelin -> selain:
spa.js tiedosto

Selain suorittaa spa.js koodin joka pyytää data.json tiedostoa
selain -> palvelin:  https://studies.cs.helsinki.fi/exampleapp/data.json
palvelin -> selain: data.json tiedosto

0.6
selain -> palvelin:
HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
palvelin -> selain:
201 created

Tässä SPA:ssa koodissa luodaan uusi muistiinpano, mutta tapahtumakäsittelijällä estetään oletusarvoisen lomakkeen lähettämisen uudelleen lataamisen estämiseksi
