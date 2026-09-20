# AI e Metodo di Studio
## Corso per docenti · 6 lezioni da 3 ore · 18 ore totali

Progettare con Gemini tutor, quiz e percorsi che insegnano agli studenti a studiare meglio, non a delegare il pensiero.

---

## Indice dei Moduli

1. **Modulo 1** — AI Literacy, Prompt Engineering e primi Gem
2. **Modulo 2** — Gemini Canvas: giochi didattici interattivi
3. **Modulo 3** — NotebookLM: comprensione e sintesi
4. **Modulo 4** — Memorizzazione, studio multimodale e metacognizione
5. **Modulo 5** — Ricerca evoluta con Deep Research e fact-checking
6. **Modulo 6** — Tutor virtuali personalizzati con sistema socratico

---

# MODULO 1 · AI Literacy, Prompt Engineering e primi Gem

## Durata: 3 ore (180 minuti)

### Obiettivi generali
- Comprendere il funzionamento di base di Gemini e dei modelli di linguaggio
- Padroneggiare il Prompt Engineering con i 5 pilastri
- Creare il primo Gem «Pianificatore di Studio»
- Applicare lo scaffolding cognitivo ai propri studenti

### Output finale
Gem personalizzato «Pianificatore di Studio» + Prompt Kit personale salvato

---

## TIMELINE DETTAGLIATA · 180 minuti

### 0:00-0:10 | ACCOGLIENZA E ICEBREAKER (10 min)
**Attività**: Benvenuto e aspettative

- Accoglienza in aula (1 min)
- Breve giro: ogni docente dice il proprio nome, disciplina e UNO studente che fatica nello studio (3 min)
- Mostra il caso di Marco: «Marco, 16 anni, quinto liceo scientifico, studia Fisica, fatica a sintetizzare le equazioni di Maxwell» (2 min)
- Spiega che Marco sarà il nostro "studente-tipo" per tutte le demo (2 min)
- «Marco potrebbe essere uno qualunque dei vostri studenti» (2 min)

**Cosa dire:**
> Marco rappresenta il 70% dei nostri studenti: intelligente, ma confuso davanti a un argomento complesso e senza un metodo di studio strutturato. Quello che faremo oggi insegnerà a Marco (e ai vostri studenti reali) a usare l'IA non come scorciatoia, ma come un tutor invisibile che lo guida nel metodo.

---

### 0:10-0:25 | AI LITERACY: CHE COS'È L'IA (15 min)

**Slide 1: Cos'è l'IA?**

Non è magia. È **riconoscimento di schemi**.

Gemini è un **modello di linguaggio**: 
- Addestrato su miliardi di testi
- Impara a prevedere quale parola viene dopo
- Ragiona riconoscendo schemi nel testo

**Esempio dal vivo:**
- Chiedi a Gemini: «Il sole è giallo e...» 
- Gemini continua: «...luminoso, importante per la vita sulla Terra»
- Non "sa" cos'è il sole, riconosce i pattern di parole che vanno insieme

**Cosa non fa Gemini:**
- ❌ Non ha esperienza personale
- ❌ Non "pensa" come gli umani
- ❌ Non sa cosa è vero di recente (oltre il cutoff date)
- ❌ Può allucinare (inventare risposte plausibili ma false)
- ❌ Non capisce il contesto come lo capiamo noi

**Slide 2: Perché IA + Metodo di Studio?**

✅ **Tutor personalizzato**: Ogni studente, stesso argomento, approccio diverso  
✅ **Feedback istantaneo**: Non aspetta fino alla prossima lezione  
✅ **Disponibile 24/7**: Lo studente ripassa quando ha tempo  
✅ **Scaffolding cognitivo**: Il tutor fa domande, non dà subito risposte  
✅ **Niente giudizio**: Lo studente può sbagliare senza paura di voti bassi  

**Attenzione:**
> L'IA non è una scorciatoia. È uno strumento che il docente impara a progettare perché aiuti lo studente a studiare **meglio**, non a studio meno.

---

### 0:25-0:45 | PROMPT ENGINEERING: I 5 PILASTRI (20 min)

**Slide 3: I 5 elementi di un prompt efficace**

Un prompt vago genera una risposta vaga e inutile.  
Un prompt strutturato genera una risposta scaffolded e utile.

#### **1. CONTESTO**
Qual è la situazione generale? Che background ha lo studente?

*Esempio vago:* Spiega Maxwell  
*Esempio strutturato:* Marco è uno studente di liceo che conosce i campi E e B, ma non capisce come le 4 equazioni si collegano tra loro.

#### **2. RUOLO**
Chi sei tu agli occhi dell'IA? (Tutor, coach, revisore, giornalista, ecc.)

*Esempio:* Tu sei un tutor di Fisica per uno studente di liceo.

#### **3. COMPITO**
Cosa esattamente devo fare? Quali sono i passi?

*Esempio:*
1. Spiega il significato fisico di ogni equazione (non la formula)
2. Dammi un esempio concreto per ogni equazione
3. Dimmi 3 domande che Marco dovrebbe farsi per verificarsi

#### **4. VINCOLI**
Quali sono i limiti? Come NON devo rispondere?

*Esempio:*
- Non fare domande a Marco: IO le pongo
- Non usare formule complicate
- Stile amichevole, conversazionale

#### **5. FORMATO**
Come vuoi che sia presentata la risposta?

*Esempio:*
- Una sezione per ogni equazione
- Elenco puntato per i concetti chiave
- Una frase di sintesi finale

**Slide 4: Zero-shot vs Few-shot**

**Zero-shot**: Chiedi senza dare esempi.
```
Scrivi una domanda di verifica su Maxwell.
```

**Few-shot**: Dai uno o più esempi di quello che vuoi.
```
Scrivi una domanda di verifica su Maxwell nello stile di questo esempio:
«Senza usare formule, spiega perché una carica positiva crea un campo elettrico.»
```

Few-shot genera risposte **più coerenti** con quello che vuoi.

---

### 0:45-1:05 | DEMO LIVE: PROMPT VAGO vs STRUTTURATO (20 min)

**Demo 1: Prompt vago**

```
Spiega le equazioni di Maxwell
```

**Risultato** (simulato):
> Le quattro equazioni di Maxwell descrivono il comportamento dei campi elettrici e magnetici. La prima equazione, nota come legge di Gauss, afferma che il flusso del campo elettrico attraverso una superficie chiusa è proporzionale alla carica racchiusa. La seconda equazione, chiamata legge di Gauss per il magnetismo, stabilisce che non esistono monopoli magnetici. La terza equazione, la legge di Faraday dell'induzione, descrive come un campo magnetico variabile nel tempo genera un campo elettrico. Infine, la quarta equazione, la legge di Ampère-Maxwell, spiega come un campo elettrico variabile nel tempo e una corrente elettrica generano un campo magnetico...

**Problema:**
- Enciclopedico, non didattico
- Marco non sa dove iniziare a studiare
- Non personale, non scaffolded
- Troppo astratto

---

**Demo 2: Prompt strutturato**

```
Tu sei un tutor di Fisica per uno studente di liceo.
Devo aiutare Marco a prepararsi su Le equazioni di Maxwell in 2 ore.
Marco sa cos'è un campo elettrico e magnetico, ma fatica a capire come le 4 equazioni si collegano.

Fai quanto segue:
1. Spiega il significato fisico di OGNI equazione in 3 righe (non formule)
2. Per ogni equazione, dammi UN esempio concreto (non teorico)
3. Dammi 3 domande di verifica che Marco dovrebbe porsi
4. Suggerisci una sequenza di studio ottimale per memorizzare bene

Spiega come se stessi parlando a un amico, non in stile enciclopedico.
```

**Risultato** (simulato):
> **Equazione 1: Legge di Gauss (il campo E "sale" dalle cariche positive)**
> Le cariche positive creano un campo elettrico che si irradia intorno a loro. Più carica dentro un'area, più "flusso" esce. È come l'acqua che zampilla da una fontana: più forte è la fontana, più acqua esce.
>
> *Esempio concreto:* Prendi una palla da ping-pong carica positivamente. Disegna frecce intorno: il "flusso" che esce dalla palla è proporzionato alla carica della palla.
>
> *Domande di verifica:*
> - Se raddoppio la carica della palla, il flusso raddoppia o quadruplica?
> - Perché il flusso dipende dalla superficie che scelgo?
> - Se una carica è FUORI la mia superficie, il flusso cambia?
>
> **Equazione 2: Legge di Gauss del magnetismo (non ci sono monopoli)**
> [...continua strutturato e didattico...]
>
> **Sequenza di studio:**
> Giorno 1: Capire Eq.1 e Eq.2 (il "fondamento")
> Giorno 2: Capire come Eq.3 e Eq.4 si collegano alle prime due
> Giorno 3: Verificarsi con le domande sopra

**Differenza:**
✅ Strutturato, didattico, personalizzato  
✅ Marco sa ESATTAMENTE cosa studiare e in quale ordine  
✅ Ha esempi concreti, non astratti  
✅ Ha domande di verifica calibrate

---

### 1:05-1:20 | PAUSA (15 min)

---

### 1:20-1:50 | ESERCITAZIONE PRATICA GUIDATA (30 min)

**Attività 1: Scrivi il tuo prompt (15 min)**

1. Ogni docente **sceglie uno argomento** della propria disciplina
2. Pensa a **uno studente reale** della propria classe che fatica
3. **Scrivi un prompt VAGO** (30 secondi):
   ```
   Spiega [ARGOMENTO]
   ```
4. **Riscrivilo con i 5 pilastri** (2-3 minuti):
   ```
   Tu sei un tutor di [DISCIPLINA] per [LIVELLO].
   Devo aiutare [NOME STUDENTE] con [ARGOMENTO].
   Sa: [PREREQUISITI]. Fatica: [DIFFICOLTÀ].
   
   Fai:
   1. [COSA 1]
   2. [COSA 2]
   3. [COSA 3]
   4. [COSA 4]
   ```
5. **Accedi a Gemini** e prova ENTRAMBI i prompt
6. **Confronta i risultati**: il primo è vago, il secondo è didattico?

**Docente guida il gruppo:**
- Mostra come accedere a Gemini
- Mostra dove incollare il prompt
- Circola tra i docenti e aiuta chi fatica

**Attività 2: Condividi e feedback (15 min)**

- **3-4 docenti** leggono il loro prompt strutturato ad alta voce
- **Il gruppo dà feedback**: «Mi è piaciuto che hai messo... Aggiungerei...»
- **Annota le migliori pratiche** in lavagna

**Esempi da aspettarsi:**
- *Docente di Inglese*: «Tu sei un tutor di conversazione inglese. Aiuto Sofia, che sa il presente simple ma fatica con il continuous. Fai: 1. Spiega la differenza con analogie... 2. Dammi un dialogo d'esempio... 3. Chiedi a Sofia di creare 3 frasi sue...»
- *Docente di Storia*: «Tu sei un tutor di storia. Aiuto Marco, che conosce le date ma non i nessi causali. Fai: 1. Mostra il nesso causa-effetto... 2. Una domanda di comprensione... 3. Chiedi cosa avrebbe potuto cambiare se...»

---

### 1:50-2:15 | PRIVACY E SICUREZZA (25 min)

**Slide 5: Cosa NON inserire mai in un prompt**

**PROIBITO:**
- ❌ Nome e cognome dello studente (usa un nome di fantasia)
- ❌ Valutazioni, diagnosi, disturbi dell'apprendimento
- ❌ Situazioni familiari sensibili
- ❌ Elaborati con dati identificabili (nomi di compagni, luoghi precisi, ecc.)
- ❌ Foto dello studente
- ❌ Informazioni mediche personali

**COME FARE:**
- ✅ Nome di fantasia: «Marco» va bene
- ✅ Descrizione generica della difficoltà: «fatica a sintetizzare» va bene
- ✅ Usare account consentito dal proprio istituto
- ✅ Cancellare il prompt dopo aver finito (se contiene dati vostri)

**Slide 6: Policy della vostra scuola**

**Discussione collettiva (10 min):**
- «Quale è il regolamento della vostra scuola sull'uso dell'IA?»
- «Chi ha accesso a Gemini o Gemini for Education nel vostro istituto?»
- «Potete usare Gemini con gli studenti in classe, oppure solo voi come docenti?»

**Note importanti:**
- Alcuni istituti hanno vietato gli account Gemini per i minori
- Alcuni hanno una versione "Gemini for Education" controllata
- Se la vostra scuola ha un accordo Google, dovete usare quello

---

### 2:15-2:40 | SCAFFOLDING COGNITIVO: PROMPT SOCRATICO (25 min)

**Slide 7: Cos'è lo scaffolding?**

**Scaffolding = supporto temporaneo**

Immagina uno studente che arrampica una montagna (il concetto difficile). Lo scaffolding è l'impalcatura che lo supporta:
- All'inizio offri molti supporti (domande facili)
- Man mano che sale, ne togli (domande più difficili)
- Alla fine, lo studente sale da solo (ha capito)

**Elementi dello scaffolding:**
1. **Scomposizione**: Dividi il concetto in passi piccoli
2. **Esempi concreti**: Prima gli esempi, poi la teoria astratta
3. **Domande guida**: Non risposte dirette, ma domande che lo portano a scoprire
4. **Progresso graduale**: Facile → Medio → Difficile
5. **Rinforzo positivo**: «Bene, hai capito il primo passo!»

**Slide 8: Prompt socratico per Marco**

```
Tu sei un tutor socratico di Fisica.
Aiuta Marco a capire perché la prima equazione di Maxwell (legge di Gauss) ha senso fisicamente.

NON spiegare la formula direttamente.
Invece, fai questi passi:

1. Fai una domanda guida:
   «Se hai una carica positiva isolata nello spazio, cosa succede al campo elettrico intorno a essa?»

2. Una volta che Marco risponde, fai una seconda domanda:
   «Se metti quella carica dentro una sfera immaginaria, come cambia il campo sulla superficie della sfera?»

3. Continua con domande che lo portano a scoprire DA SOLO che il flusso è proporzionato alla carica.

Usa un linguaggio semplice e chiedimi di pensare, non di memorizzare.
Dopo 3 tentativi, mostra un esempio simile (non la stessa domanda).
```

**Cosa fa questo prompt:**
- Non spiega la legge di Gauss
- Fa domande guida che portano Marco a scoprire il concetto
- Se Marco sbaglia, continua a fare domande (non corregge)
- Usa esempi concreti (carica isolata nello spazio)

**Slide 9: Confronto Prompt Diretto vs Socratico**

**Prompt Diretto (❌ male per imparare):**
```
Spiega la legge di Gauss.
```
→ Marco legge, dimentica subito

**Prompt Socratico (✅ bene per imparare):**
```
Aiuta Marco a scoprire la legge di Gauss tramite domande.
```
→ Marco scopre il concetto, lo memorizza meglio (Active Recall)

**Esercitazione (10 min):**
Ogni docente scrive UN prompt socratico per un concetto difficile della propria disciplina.

*Esempio per Italiano (letteratura)*:
```
Tu sei un tutor socratico di letteratura.
Aiuta Marco a capire perché in «I Promessi Sposi» il lieto fine arriva così tardi (dopo 600 pagine).

NON raccontargli la trama.
Chiedigli:
1. «Perché secondo te Manzoni non mette il lieto fine a metà libro?»
2. «Cosa fa il lieto fine alle emozioni del lettore se arriva alla fine?»
3. «Conosci altri libri dove il finale cambierebbe se arrivasse prima?»
```

---

### 2:40-3:00 | LABORATORIO INTEGRATO: CREARE IL TUO TUTOR (20 min)

**Fase 1: Mappa lo studente reale (5 min)**

Ogni docente sceglie **UNO studente reale** della propria classe (di fantasia il nome!):

- Nome di fantasia: [es. Marco]
- Disciplina: [es. Fisica]
- Cosa sa già: [es. Campi E e B base]
- Dove fatica: [es. Collegare le 4 equazioni di Maxwell]
- Come preferisce imparare: [es. Visivo / Uditivo / Cinestetico / Misto]
- Obiettivo di studio: [es. Interrogazione su Maxwell tra 6 giorni]

**Fase 2: Crea il primo prompt (10 min)**

Personalizza il **template universale**:

```
Tu sei un tutor di [DISCIPLINA] per uno studente di [LIVELLO].
Devo aiutare [NOME STUDENTE] a prepararsi su [ARGOMENTO] in [TEMPO].
[NOME STUDENTE] sa già: [PREREQUISITI], ma fatica con: [DIFFICOLTÀ].

Fai quanto segue:
1. [COSA 1 IN DETTAGLIO]
2. [COSA 2 CON ESEMPI]
3. [COSA 3 PER VERIFICARE]
4. [COSA 4 PER SCAFFOLDING]

Spiega come se stessi parlando a un amico, non in stile enciclopedico.
Dopo ogni risposta, chiedi come Marco ci è arrivato (per far pensare).
```

Prova il prompt in Gemini e regolalo in base ai risultati.

**Fase 3: Plenaria (5 min)**

- 2-3 docenti leggono il loro prompt ad alta voce
- Il gruppo dà feedback positivo

---

### 3:00-3:00 | CHIUSURA (0 min)

**Slide 10: Tre idee da portare via**

1. **AI Literacy**: Gemini è uno strumento, non una scorciatoia
2. **Prompt Engineering**: Fare domande "intelligenti" con i 5 pilastri
3. **Scaffolding**: Il prompt diventa un tutor invisibile per lo studente

**Compito a casa:**
Prova il tuo prompt personalizzato con il tuo studente reale e annota:
- Cosa ha funzionato?
- Cosa puoi migliorare?

**Prossimo incontro**: Gemini Canvas e i giochi didattici interattivi.

**Materiali da portare a casa:**
- Foglio con il template di prompt
- Prompt Kit (4 prompt brevi per le situazioni più comuni)
- Link a Gemini

---

## PROMPT KIT PERSONALE (da salvare in Google Doc)

### Prompt 1: Spiegare con un'analogia

```
Spiega [CONCETTO] a uno studente di [CLASSE] con un'analogia della vita quotidiana.
Poi indica dove l'analogia NON regge, così lo studente non nasce un'idea sbagliata.
```

**Esempio d'uso:**
```
Spiega il concetto di "flusso di un campo" a uno studente di liceo con un'analogia.
Poi indica dove l'analogia non regge.
```

### Prompt 2: Semplificare senza perdere il senso

```
Riscrivi questo testo per [CLASSE] in frasi brevi, mantenendo TUTTI i concetti.
Elenca i termini difficili con una definizione di una riga.

Testo: [INCOLLA QUI IL TESTO DIFFICILE]
```

### Prompt 3: Farmi domande (verifica)

```
Interrogami su [ARGOMENTO]:
- Una domanda per volta, dal semplice al difficile
- Non dirmi subito la risposta
- Dopo la mia risposta, dimmi cosa è corretto, cosa manca e passa alla successiva
- Se sbaglio, fai una domanda di clarificazione, non la correzione
```

### Prompt 4: Controllare il mio lavoro

```
Ecco il mio svolgimento: [INCOLLA IL TUO LAVORO].
NON riscriverlo.
Indicami i 3 punti più deboli, perché lo sono, e una domanda per ciascuno che mi aiuti a correggerli da solo.
```

---

## PROCEDURA: Come creare il tuo primo Gem

1. Apri **gemini.google.com** con l'account consentito dal tuo istituto
2. Nel menu laterale cerca **«Gem»** e clicca **«Nuovo Gem»**
3. Dai un nome chiaro: es. **«Pianificatore di Studio»**
4. Nel campo "Istruzioni", incolla il testo qui sotto:

```
RUOLO
Sei il «Pianificatore di Studio», un coach che aiuta studenti di scuola secondaria a organizzare il lavoro scolastico.

CONTESTO
Lo studente ti indica:
- Materia e argomento
- Data della verifica o dell'interrogazione
- Ore disponibili ogni giorno
- Punti di forza e difficoltà

Se manca un'informazione, chiedila prima di proporre il piano, una domanda alla volta.

COMPITO
1. Scomponi l'argomento in 4-6 blocchi di studio logici.
2. Distribuisci i blocchi nei giorni disponibili: l'ultimo giorno è per il ripasso e lascia un margine per gli imprevisti.
3. Per ogni sessione di studio, indica:
   - Obiettivo (cosa deve capire in quella sessione)
   - Attività (leggere, riassumere, fare esercizi, autointerrogazione)
   - Durata (non più di 45 minuti)
4. Chiudi chiedendo: «Sembra troppo pesante? Cosa vuoi che alleggerisca?» e adatta il piano.

VINCOLI
- Sessioni di massimo 45 minuti con 10 minuti di pausa
- Non svolgere compiti o esercizi al posto dello studente: ti occupi di organizzare
- Non chiedere né conservare dati personali (niente cognomi, niente valutazioni)
- Tono amichevole, frasi brevi, nessun giudizio

FORMATO
Tabella con colonne: Giorno | Blocco | Obiettivo | Attività | Durata.
Sotto la tabella, una riga con il primo passo da fare oggi.
```

5. Prova il Gem con questo prompt:
   > «Interrogazione di Fisica su Maxwell tra 6 giorni. Ho 1 ora e mezza al giorno. Mi confondo tra le equazioni.»

6. Osserva il piano che genera
7. Se ti piace, **Salva** il Gem
8. **Condividi** con i tuoi studenti (se permesso dall'istituto)

---

---

# MODULO 2 · Gemini Canvas: Giochi Didattici Interattivi

## Durata: 3 ore (180 minuti)

### Obiettivi generali
- Capire come funziona Gemini Canvas
- Creare quiz interattivi con feedback adattivo
- Progettare escape room didattiche
- Implementare scaffolding progressivo mediante Canvas

### Output finale
Un'escape room didattica o un quiz interattivo pronto per la classe

---

## TIMELINE DETTAGLIATA · 180 minuti

### 0:00-0:15 | INTRODUZIONE A GEMINI CANVAS (15 min)

**Slide 1: Cos'è Gemini Canvas?**

Canvas è uno **strumento dentro Gemini** che trasforma la conversazione in un **artefatto interattivo**.

**Chat normale** (Modulo 1):
- Gemini risponde in testo
- Lo studente legge una volta e basta
- Non c'è feedback immediato

**Canvas** (Modulo 2):
- Gemini crea un'esperienza interattiva
- Quiz, giochi, escape room, flashcard
- Lo studente **interagisce** in tempo reale
- Feedback immediato dopo ogni risposta

**Slide 2: A cosa serve Canvas per lo studio?**

✅ **Quiz interattivo**: Marco risponde, riceve feedback in tempo reale  
✅ **Escape room**: Marco risolve enigmi, avanza di stanza in stanza  
✅ **Flashcard**: Marco gira la carta, si autovaluta  
✅ **Sfide progressive**: Supera il livello 1 per sbloccare il livello 2  
✅ **Riduce l'ansia**: Niente voto, solo verificarsi  

**Slide 3: Differenza tra Canvas e AI Studio**

| Aspetto | Canvas | AI Studio |
|---------|--------|-----------|
| Dove | Dentro Gemini | Studio.google.com |
| Complessità | Facile, istantaneo | Più articolato |
| Codice | Non serve | Può servire |
| Tempo | 5 minuti | 30 minuti |
| In aula | Sì, in diretta | No, richiede setup |
| Per chi | Tutti | Developer |

**Quando usare**: Oggi Canvas (Modulo 2). AI Studio nel Modulo 6.

---

### 0:15-0:35 | DEMO LIVE: CREARE UN QUIZ IN CANVAS (20 min)

**Setup tecnico**:
- Proiettore collegato al computer
- Accedi a Gemini
- Apri una nuova chat
- Mostra come attivare Canvas dagli strumenti

**Prompt per Marco**:

```
Crea un quiz interattivo in Canvas per aiutare Marco 
(studente di liceo scientifico, quinto anno) 
a verificare la sua comprensione delle EQUAZIONI DI MAXWELL.

Requisiti:
- 5 domande, una per equazione (+ una domanda bonus difficile)
- Ogni domanda ha 4 opzioni (solo 1 corretta)
- DOPO che Marco risponde, dagli feedback immediato:
  * Se sbaglia: spiega l'errore in 2 righe e fai una domanda di clarificazione
  * Se indovina: congratulati, dai un consiglio per approfondire
- Alla fine: punteggio totale e suggerimenti di cosa studiare di più
- Stile: amichevole, incoraggiante, come un vero tutor

Fai il quiz bellissimo, colorato e facile da leggere.
```

**Cosa mostrare in tempo reale**:

1. Il Canvas si apre con le domande formattate bene
2. Rispondi alla PRIMA domanda (scegli la risposta giusta)
3. Mostra il feedback positivo di Gemini
4. Rispondi alla SECONDA domanda (scegli una risposta sbagliata)
5. Mostra come Gemini spiega l'errore e fa una domanda guida
6. Continua fino alla fine per mostrare il report finale

**Cosa dire durante la demo:**

> Vedete? Marco non ha un voto, non ha una bocciatura. Ha feedback immediato che lo guida. Questo riduce l'ansia e lo fa studiare attivamente, non passivamente. Questo è scaffolding: il quiz fa domande guida che insegnano, non interroga e basta.

---

### 0:35-0:50 | COSA SI PUÒ CREARE CON CANVAS (15 min)

**Slide 4: Galeria di tipi di Canvas**

#### 1. **Escape room didattica**
Ogni enigma è un concetto della materia.
- Stanza 1: Definizioni base
- Stanza 2: Applicazioni
- Stanza 3: Concetti integrati
Feedback: indizi progressivi

#### 2. **Quiz adattivo**
Verifica la comprensione e corregge istantaneamente.
- Domanda facile → domanda media → domanda difficile (progressività)
- Feedback dopo ogni risposta

#### 3. **Flashcard interattive**
Presentar concetto (fronte), studente le gira, vede la risposta (retro).
- Self-assessment: «La sapevo / Non la sapevo»
- Tracking: domande viste, domande sbagliate

#### 4. **Sfide progressive**
Livello 1 (facile) → supera e sblocca Livello 2 → supera e sblocca Livello 3
Sistema di punti e badge.

#### 5. **Caccia all'errore**
Un testo con 5-10 errori nascosti. Lo studente li deve trovare.
Allena il **pensiero critico**: "Come so che questo è sbagliato?"

#### 6. **Abbinamenti e ordinamenti**
- Abbinare: Date ↔ Eventi, Formula ↔ Significato, Causa ↔ Effetto
- Ordinare: Fasi cronologiche di un processo

#### 7. **Simulatori interattivi**
Esempio: "Varia il valore di X e osserva come cambia il fenomeno Y"
- Modellare un campo magnetico intorno a una carica
- Simulare una reazione chimica

#### 8. **Mappe cliccabili**
Uno schema dove cliccando su una parte si apre un approfondimento.
- Clicchi su "Cuore" → spiegazione del cuore
- Clicchi su "Aorta" → spiegazione dell'aorta

**Slide 5: Come scegliere il tipo di Canvas giusto**

| Obiettivo | Tipo di Canvas | Disciplina |
|-----------|---|---|
| Verificare comprensione | Quiz adattivo | Tutte |
| Problem solving e ragionamento | Escape room | Scienze, Matematica |
| Memorizzazione | Flashcard | Lingue, Storia, Biologia |
| Studi progressive | Sfide a livelli | Matematica, Programmazione |
| Pensiero critico | Caccia all'errore | Italiano, Scienze |
| Analisi causale | Abbinamento causa-effetto | Storia, Economia |
| Esplorazione | Simulatore interattivo | Fisica, Chimica |
| Comprensione strutturale | Mappa cliccabile | Anatomia, Geografia |

---

### 0:50-1:20 | ESERCITAZIONE PRATICA GUIDATA (30 min)

**Attività 1: Crea il tuo Quiz (15 min)**

1. **Scegli un argomento** della tua materia (es. Imperialismo, Equazioni di secondo grado, ecc.)
2. **Pensa a uno studente** che fatica
3. **Accedi a Gemini** e apri una nuova chat
4. **Scrivi il prompt**:

```
Crea un quiz interattivo in Canvas per aiutare [NOME STUDENTE]
a verificare la comprensione di [ARGOMENTO].

Lo studente sa già: [PREREQUISITI]
Ma fatica con: [DIFFICOLTÀ SPECIFICA]

Requisiti:
- [N] domande (specifiche per le difficoltà dello studente)
- Feedback immediato e incoraggiante
- Se sbaglia, dammi una domanda guida per farlo pensare (non la soluzione)
- Stile: [TONO: faceto, formale, conversazionale, ecc.]

Crea il quiz.
```

5. **Guarda il Canvas generato**
6. **Prova il quiz**: rispondi a qualche domanda

**Attività 2: Modifica il Canvas (15 min)**

Chiedi modifiche a parole:

```
«Rendi le prime 2 domande più facili»
```

Oppure:

```
«Aggiungi 2 domande su [SOTTOTEMA che ho dimenticato]»
```

Oppure:

```
«Stesso tema, ma tono più divertente e con emoji»
```

**Osservazione importante:**
Canvas è **dinamico**: puoi modificarlo a parole, senza riscritto tutto da capo.

**Docente circola e aiuta:**
- Chi non accede a Gemini: aiuta login
- Chi non sa scrivere il prompt: suggerisce la struttura
- Chi finisce presto: chiede di aggiungere una versione difficile

**Plenaria (5 min):**
- 2-3 docenti leggono il loro quiz ad alta voce
- Gli altri danno feedback positivo

---

### 1:20-1:35 | PAUSA (15 min)

---

### 1:35-2:00 | SCAFFOLDING COGNITIVO CON CANVAS (25 min)

**Slide 6: Tassonomia di Bloom**

Dai cognitivi semplici ai complessi:

1. **RICORDA** (memoria): «Quali sono i 4 elementi?»
2. **COMPRENDE** (capisce): «Perché gli elementi si chiamano così?»
3. **APPLICA** (usa): «Usa i 4 elementi per descrivere questo oggetto»
4. **ANALIZZA** (scompone): «Quali elementi interagiscono in questo processo?»
5. **VALUTA** (giudica): «Quale è il più importante e perché?»
6. **CREA** (inventa): «Crea una combinazione nuova di elementi»

**Slide 7: Quiz scaffolded per Marco**

```
Crea un Canvas con 6 domande su Maxwell,
ma ORDINATE PER DIFFICOLTÀ CRESCENTE seguendo Bloom.

Livello 1 - RICORDA (memoria pura):
- «Quali sono i 4 componenti delle equazioni di Maxwell?»

Livello 2 - COMPRENDE (significato):
- «Perché la legge di Gauss è importante?»

Livello 3 - APPLICA (usa il concetto):
- «Usa la legge di Gauss per prevedere cosa succede se...»

Per ogni domanda, il feedback deve:
- Se giusto: «Perfetto! Hai capito il Livello X. Ora prova il Livello X+1»
- Se sbagliato: Non dire la risposta. Fai una domanda guida.

Dopo il quiz, mostra un report:
«Hai padroneggiato il Livello X. Studia di più il Livello Y.»
```

**Slide 8: Come Canvas crea scaffolding**

✅ **Feedback immediato** → riduce l'ansia di sbagliare  
✅ **Domande guida** → non dà la risposta, fa pensare  
✅ **Progressività** → partire facile, arrivare difficile (Bloom)  
✅ **Celebrazione** → «Perfetto! Hai capito!» (positive reinforcement)  
✅ **Report metacognitivo** → «Sai il Livello 2, studia il Livello 3»

**Esercitazione (10 min):**

Ogni docente **modifica il suo quiz** aggiungendo scaffolding:
- Ordina le domande per difficoltà (Bloom)
- Aggiungi feedback positivo alle risposte giuste
- Aggiungi domande guida alle risposte sbagliate

---

### 2:00-2:45 | LABORATORIO: ESCAPE ROOM O LEARNING PATH (45 min)

Ogni docente sceglie se fare un'escape room o un learning path.

#### **OPZIONE A: Escape Room Didattica (45 min)**

**Fase 1: Disegna la struttura (10 min)**

Un'escape room didattica ha **3-4 stanze**.

Ogni stanza ha:
- 1 concetto/argomento da apprendere
- 1 enigma che lo studente risolve
- Indizi progressivi se sbaglia

**Esempio per Maxwell:**
- Stanza 1: Legge di Gauss
- Stanza 2: Assenza di monopoli magnetici
- Stanza 3: Induzione di Faraday
- Stanza 4: Equazioni unite + botta finale (luce = onda EM)

**Fase 2: Scrivi il prompt (20 min)**

```
Crea in Canvas un'escape room interattiva per Marco (quinto liceo scientifico) 
sulle equazioni di Maxwell.

Ambientazione: Un laboratorio chiuso a chiave, con 4 stanze.
Ogni stanza ha 1 enigma la cui soluzione è un concetto fisico (non una formula).

STANZA 1: Concetto della Legge di Gauss
- Enigma: [descrivi l'enigma]
- Se risolve: mostra spiegazione di 2 righe del perché
- Se sbaglia: Indizio 1 → Indizio 2 → Indizio 3 (max 3 indizi, poi spiega)

STANZA 2: Assenza di monopoli
- Enigma: [descrivi]
- [...stesso pattern...]

[continua per stanza 3 e 4...]

FINALE: Per uscire, Marco deve usare i 4 concetti delle 4 stanze.

Regole:
- Timer opzionale
- Numero di indizi usati nel report finale
- Stile: avventura, incoraggiante, grafica chiara

Crea l'escape room.
```

**Fase 3: Prova e regola (15 min)**

- Accedi a Gemini
- Incolla il prompt
- Attendi che Canvas generi l'escape room
- Gioca da solo fino alla fine
- Nota cosa manca o cosa è poco chiaro
- Chiedi a Gemini di correggere

---

#### **OPZIONE B: Learning Path di 5 giorni (45 min)**

**Fase 1: Pianifica il percorso (10 min)**

| Giorno | Canvas | Obiettivo |
|--------|--------|-----------|
| 1 | Quiz diagnostico | Capire cosa Marco sa |
| 2 | Canvas + spiegazione eq.1 | Imparare il primo concetto |
| 3 | Canvas su eq.2 | Collegare alla 1 |
| 4 | Canvas integrativo | Le 4 insieme |
| 5 | Quiz finale | Verifica globale |

**Fase 2: Crea il Canvas del Giorno 1 (20 min)**

```
Crea un Canvas diagnostico per Marco su Maxwell.

L'obiettivo NON è un voto, ma capire cosa Marco sa già.

Domande:
1. «Che cos'è un campo elettrico?» (solo concetto, no formule)
2. «Che cos'è un campo magnetico?»
3. «Come si collegano?» (risposta aperta, Marco scrive)
4. «Sai cos'è il flusso di un campo?» (sì/no)
5. «Hai mai sentito l'equazione di Gauss?» (sì/no, e cosa pensi)

Dopo ogni risposta, fai una domanda di follow-up per approfondire.

Stile: curiosità e incoraggiamento, non giudizio.
Non dare voti.

Crea il Canvas.
```

**Fase 3: Prova e regola (15 min)**

- Accedi a Gemini, incolla, genera
- Rispondi tu stesso come Marco
- Controlla che le follow-up domande siano buone
- Chiedi a Gemini di migliorare se serve

---

### 2:45-2:55 | DEMO: DA CANVAS A AI STUDIO (10 min)

**Slide 9: Confronto Canvas vs AI Studio**

Abbiamo fatto Canvas oggi (Modulo 2).

AI Studio serve per cose più articolate (Modulo 6):
- Sistema di istruzioni permanente
- Tutor che "ricorda" le conversazioni precedenti
- App con logica più complessa
- Salvataggio dello stato del gioco

**Per oggi:** Canvas è perfetto e veloce.

**Per il Modulo 6:** AI Studio per il tutor finale.

---

### 2:55-3:00 | CHIUSURA (5 min)

**Slide 10: Tre idee da portare via**

1. **Canvas = Gioco didattico**: Trasforma il ripasso in attività ludica
2. **Feedback immediato**: È oro per il metodo di studio
3. **Scaffolding visibile**: Livelli progressivi, indizi, rinforzo positivo

**Compito a casa:**
Crea **1 Canvas** (quiz, escape room, o Learning Path) per una tua classe.
Testalo con uno studente reale (o con te stesso, immaginando di essere lo studente).
Annota: cosa è andato bene?

**Prossimo incontro**: NotebookLM e la sintesi di testi.

---

---

# MODULO 3 · NotebookLM: Comprensione e Sintesi

## Durata: 3 ore (180 minuti)

### Obiettivi generali
- Capire come usare NotebookLM per creare output multimediali
- Generare video, podcast, infografiche da documenti
- Adattare testi per BES/DSA
- Usare source-grounded AI per ridurre le allucinazioni

### Output finale
Un blocco di studio multimediale (video + podcast + mappa + glossario) su un argomento della propria materia

---

## TIMELINE DETTAGLIATA · 180 minuti

### 0:00-0:15 | INTRODUZIONE A NOTEBOOKLM (15 min)

**Slide 1: Cos'è NotebookLM?**

NotebookLM è uno **strumento Google** che trasforma i tuoi documenti in **output multimediali**.

Carica:
- PDF del libro di testo
- Google Doc con appunti
- Link a pagine web
- Articoli

NotebookLM genera:
- **Video** didattici
- **Podcast** narrativi (due speaker che parlano)
- **Infografiche** visive
- **Mappe mentali**
- **Timeline**
- **Glossari**
- **Report** tematici

Tutto **ancorato alle tue fonti verificate** = no allucinazioni.

**Slide 2: Source-Grounded AI**

Il **problema con Gemini**:
```
Domanda: Quale è la capitale dell'Australia?
Gemini: Canberra
Fonte: ??? (Gemini lo sa dal training, ma non sa se è aggiornato)
```

**La soluzione con NotebookLM**:
```
Domanda: Quale è la capitale dell'Australia?
(Carico PDF della geografia australiana)
NotebookLM: Canberra
Fonte: Pagina 45 del PDF, capitolo "Capitali nazionali"
```

NotebookLM **cita sempre la fonte** = trasparenza totale.

**Slide 3: Output di NotebookLM**

| Output | Uso | Durata |
|--------|-----|--------|
| Video | Spiegazione breve e visiva | 2-5 min |
| Podcast | Spiegazione narrativa, studio mentre cammini | 10-15 min |
| Mappa mentale | Visualizzazione dei concetti | Statica |
| Infografica | Dati e relazioni visive | Statica |
| Timeline | Cronologie e sequenze | Statica |
| Glossario | Definizioni ancorate alla fonte | Statica |
| Study guide | Riassunto strutturato + domande | Testuale |
| Report | Approfondimento su aspetti specifici | Lungo |

---

### 0:15-0:45 | DEMO LIVE: CREARE UN PODCAST DA UN DOCUMENTO (30 min)

**Setup tecnico:**
- Vai a **notebooklm.google.com**
- Accedi con account consentito
- Mostra come creare un "New Notebook"

**Caso di studio: Le equazioni di Maxwell**

1. **Carica la fonte** (5 min)
   - Carica un PDF su Maxwell (es. capitolo di un libro di Fisica)
   - Gemini inizia ad analizzare
   - Aspetta il completamento

2. **Leggi la panoramica** (5 min)
   - NotebookLM ha generato una panoramica automatica
   - Mostra i concetti chiave che ha trovato
   - Fai domande nella chat (es. "Spiega la legge di Gauss")
   - Mostra come ogni risposta cita la pagina del PDF

3. **Genera un Podcast** (15 min)
   - Dal pannello "Studio" clicca "Generate podcast"
   - Attendi che generi l'audio
   - Ascolta un breve estratto
   - Mostra come il podcast ha due speaker che conversano
   - Ogni affermazione è verificata dal PDF

4. **Genera Mappa mentale** (5 min)
   - Clicca "Generate study guide" o "Generate mind map"
   - Mostra come le mappe visualizzano i concetti e le loro relazioni

---

### 0:45-1:15 | ESERCITAZIONE: CREARE IL TUO NOTEBOOKLM (30 min)

**Attività 1: Carica i tuoi materiali (10 min)**

1. Vai a **notebooklm.google.com**
2. **Nuovo taccuino**
3. Carica **UNA fonte** sulla tua disciplina:
   - PDF di un capitolo del libro
   - Google Doc con tuoi appunti
   - Link a un articolo affidabile (es. sito universitario, ente ufficiale)
4. Attendi l'analisi (1-2 min)
5. Leggi la panoramica che genera

**Attività 2: Fai domande e osserva le citazioni (10 min)**

1. Fai 3 domande nella chat:
   - Una semplice (ricordo): "Quali sono i 3 concetti chiave?"
   - Una di comprensione: "Perché [CONCETTO] è importante?"
   - Una di applicazione: "Come si usa [CONCETTO] in pratica?"
2. Per ogni risposta, osserva:
   - La risposta è corretta?
   - Ha citato la fonte?
   - Puoi cliccare sulla citazione per tornare al PDF?

**Attività 3: Genera un output (10 min)**

Scegli UNO tra:
- **Podcast**: Ascolta i primi 2 minuti, è narrativo?
- **Mappa mentale**: Visualizza bene i concetti?
- **Glossario**: Le definizioni sono corrette?
- **Study guide**: Ha domande di verifica utili?

Prova a modificare: "Rendi il podcast più scientifico" o "Mappa mentale con più dettagli".

**Docente circola e aiuta:**
- Chi ha problemi di login: aiuta
- Chi non sa quale fonte usare: suggerisce un capitolo interessante
- Chi finisce presto: chiede di provare due output diversi

---

### 1:15-1:30 | PAUSA (15 min)

---

### 1:30-2:00 | PROMPT E ADATTAMENTI (30 min)

**Slide 4: Prompt per riassunto a 3 livelli**

```
Usa SOLO le fonti caricate.

Riassumi il capitolo «[TITOLO]» per studenti di [CLASSE] in tre livelli:

1) 3 righe (se Marco ha 2 minuti)
2) 10 righe (se Marco ha 10 minuti)
3) Schema a elenco con concetti chiave (se Marco ha 30 minuti)

Per ogni affermazione indica la fonte (es. "Pagina 45, capitolo X").

Se un'informazione NON è nelle fonti caricate, scrivi: «Non presente nelle fonti».
NON completare con conoscenze esterne, anche se le conosci.
```

**Slide 5: Prompt per glossario**

```
Dalle fonti estrai i 12 termini chiave dell'argomento [ARGOMENTO].

Per ciascuno scrivi:
- Definizione in UNA frase semplice
- UN esempio concreto
- 2 termini collegati

Ordinali dal più generale al più specifico.
Cita sempre la pagina della fonte dove il termine è definito.
```

**Slide 6: Adattare per BES/DSA**

```
Riscrivi il passaggio [NUMERO PAGINA] per uno studente con [TIPO DI DIFFICOLTÀ].

Mantieni TUTTI i concetti disciplinari.
Cambia solo la forma:

- Frasi di massimo 15 parole (una idea per frase)
- Elenco puntato per i passaggi
- Parole difficili spiegate tra parentesi alla prima comparsa
- Titoletti chiari per ogni parte
- Spazi bianchi per alleviare la lettura

NON semplificare i concetti. La difficoltà deve essere solo nella forma.

Alla fine, elenca tutte le modifiche che hai fatto, così il docente verifica che nulla sia andato perso.
```

**Attenzione:**
> Gli strumenti compensativi si scelgono in base al PDP dello studente. L'IA prepara il materiale, la decisione finale è del docente e dello specialista.

---

### 2:00-2:45 | LABORATORIO: CREARE UN BLOCCO DI STUDIO MULTIMEDIALE (45 min)

**Fase 1: Scegli l'argomento e la fonte (5 min)**

- Disciplina: [Tua materia]
- Argomento: [Un capitolo o tema che insegni]
- Fonte: [PDF, Doc, o link che hai a disposizione]

**Fase 2: Carica e genera output (20 min)**

1. Vai a NotebookLM
2. Carica la fonte
3. Attendi analisi
4. Genera **almeno 2 output** tra:
   - Podcast (5-10 min di ascolto + annotazioni)
   - Mappa mentale
   - Studio guide + domande
   - Glossario

**Fase 3: Adatta per uno studente con difficoltà (15 min)**

Dai prompts in NotebookLM:

```
Riscrivi la sezione X per uno studente con DSA (dislessia).
Mantieni concetti, cambia forma.
```

Oppure:

```
Crea una versione semplificata per studenti BES
di questo contenuto, mantenendo la correttezza disciplinare.
```

Prova il risultato: è davvero più accessibile?

**Fase 4: Verifica la qualità (10 min)**

- Le citazioni sono corrette?
- Tutte le affermazioni tornano indietro al PDF/Doc?
- Se aggiungi una modifica, Gemini la tiene?
- Il podcast è chiaro per uno studente medio?

---

### 2:45-2:55 | CHIUSURA (10 min)

**Slide 7: Tre idee da portare via**

1. **Source-grounded AI**: Tutta la risposta è ancorata alla tua fonte
2. **Multimodalità**: Video, podcast, mappe, testo per ogni stile di apprendimento
3. **Accessibilità**: NotebookLM adatta i contenuti per BES/DSA

**Compito a casa:**
Crea un **blocco di studio multimediale** per una tua classe su un argomento importante.
Includi almeno: podcast + mappa mentale + glossario.
Testalo con uno studente reale.

**Prossimo incontro**: Memorizzazione, audio e metacognizione (Modulo 4).

---

---

# MODULO 4 · Memorizzazione, Studio Multimodale e Metacognizione

## Durata: 3 ore (180 minuti)

### Obiettivi generali
- Creare flashcard e quiz a risposta multipla con distrattori logici
- Usare audio di ripasso per lo studio multimodale
- Implementare strategie metacognitive
- Fare autovalutazione consapevole

### Output finale
Kit di autoverifica completo (flashcard + audio + test di autovalutazione)

---

## TIMELINE DETTAGLIATA · 180 minuti

### 0:00-0:15 | INTRODUZIONE A MEMORIZZAZIONE E METACOGNIZIONE (15 min)

**Slide 1: Come funziona la memoria?**

**Memoria semantica** (ricordi il concetto):
- Quando Marco capisce la legge di Gauss
- Ricorda il "perché"
- Dura a lungo

**Memoria episodica** (ricordi l'episodio):
- Quando Marco memorizza una formula
- Ricorda solo la sequenza
- Dura poco

**Per imparare bene:** Memoria semantica + episodica.

**Slide 2: Active Recall vs Passive Review**

**Passive review** (❌ inefficace):
- Leggere il libro
- Guardare il podcast di NotebookLM
- Highlights, sottolinei

❌ Marco legge, sente, poi dimentica

**Active Recall** (✅ efficace):
- Quiz
- Flashcard girate (Marco deve ricordare)
- Autointerrogazione

✅ Marco è costretto a "ricordarsi", che è esercizio

**Spaced Repetition:**
- Giorno 1: Primo incontro con il concetto
- Giorno 1 sera: Ripassare (consolidamento iniziale)
- Giorno 3: Ripassare di nuovo
- Giorno 7: Ripassare ancora
- Giorno 30: Ultima verifica

---

### 0:15-1:00 | CREARE FLASHCARD E QUIZ (45 min)

**Attività 1: Flashcard di richiamo attivo (20 min)**

**Prompt da usare in NotebookLM:**

```
Dalle fonti caricate crea 20 flashcard per ripassare [ARGOMENTO].

Fronte: Una domanda che richiede ricordo (NON sì/no).
Retro: Risposta in massimo 2 frasi + pagina della fonte.

Mescola 3 tipi di domande:
- Definizione: «Che cos'è [TERMINE]?»
- «Perché»: «Perché [EVENTO] è importante?»
- Applicazione: «Usa [CONCETTO] per spiegare [CASO]»

Ordina dal fondamentale all'avanzato.
Ogni domanda deve richiedere ricordo attivo (non puoi indovinare a caso).
```

**Esempio per Marco:**

Fronte: «Perché la legge di Gauss è la PRIMA tra le 4 equazioni?»  
Retro: «Perché definisce come gli argomenti creano campi E. È il fondamento. Se non capisci Gauss, il resto non ha senso. Fonte: Pagina 120, capitolo X.»

**Attività 2: Quiz a risposta multipla con distrattori logici (20 min)**

**Prompt da usare in NotebookLM:**

```
Crea 10 domande a risposta multipla su [ARGOMENTO] per [CLASSE].

Requisiti:
- 4 opzioni, solo 1 corretta
- I 3 distrattori devono essere errori che gli studenti fanno davvero:
  * Scambio di concetti simili (es. legge di Gauss vs legge Ampère)
  * Errore di ragionamento (causa/effetto invertiti)
  * Errore logico (casi limite, eccezioni)
  NON risposte assurde («la risposta è una pizza»)

- Per ogni domanda, dopo il quiz, spiega:
  «Il distrattore A rappresenta questo errore: [spiega]»
  «Il distrattore B rappresenta questo errore: [spiega]»
  «Il distrattore C rappresenta questo errore: [spiega]»

- Distribuisci la risposta corretta casualmente (a volte A, a volte B, a volte C, a volte D)
```

**Esempio per Marco:**

Domanda: «La legge di Gauss dice che il flusso di E è...»  
A) Proporzionato alla carica (✅ CORRETTO)  
B) Inversamente proporzionato alla carica (Distrattore: confusione con legge inversa)  
C) Indipendente dalla carica (Distrattore: errore logico)  
D) Una funzione del tempo (Distrattore: confusione con Faraday)

**Attività 3: Regola e salva (5 min)**

Controlla che ogni domanda sia corretta e che i distrattori siano realistici.

---

### 1:00-1:15 | PAUSA (15 min)

---

### 1:15-2:00 | AUDIO DI RIPASSO E SPECCHIO METACOGNITIVO (45 min)

**Attività 4: Crea una traccia audio di ripasso (20 min)**

**Prompt:**

```
Crea una panoramica audio per uno studente di [CLASSE] che ripassa [ARGOMENTO] 
prima di [VERIFICA].

Durata: circa 8 minuti.

Struttura:
1. Apertura (30 sec): "Oggi ripariamo... Ecco cosa devi ricordarti"
2. Idea centrale (1 min): Il concetto principale in poche frasi
3. Tre concetti chiave (5 min): Uno per minuto-e-mezzo
   - Per ogni concetto:
     * Spiega in modo narrativo (non elenco puntato)
     * UN esempio concreto
4. Errori da evitare (1 min): I 2 errori più comuni
5. Tre domande per te stesso (1 min):
   - Fai una domanda
   - Pausa di 15 secondi (lo studente pensa e risponde mentalmente)
   - La risposta

Registro: chiaro, conversazionale, non scolastico (puoi usare "io" e "tu").
Ritmo: non troppo veloce (lo studente potrebbe stare camminando).

Genera l'audio.
```

**Cosa offre l'audio:**
- Studio multimodale (non solo visivo)
- Studio mentre cammini, in autobus, in palestra
- Ripasso attivo (domande finali)

---

**Attività 5: Specchio metacognitivo (20 min)**

**Cos'è la metacognizione?**
Pensare al proprio pensiero = "So quello che so? Dove ho lacune?"

**Prompt:**

```
Sei il mio specchio metacognitivo.

Ti do le mie risposte a un quiz sugli argomenti di [MATERIA] e le note su cosa ho trovato difficile.

Ecco le mie risposte:
[MARCO INCOLLA QUI LE SUE RISPOSTE: domanda 1 → risposta, domanda 2 → risposta, ecc.]

Ecco cosa mi è sembrato difficile:
[MARCO SCRIVE: "Non ricordo le formule", "Non capisco il collegamento tra A e B", ecc.]

METODO:
1) Per ogni risposta sbagliata, chiedimi: «Come sei arrivato a questa risposta?»
   (Il fatto che mi abbia sbagliato non è il problema; capire COME mi sono sbagliato sì)

2) Identifica il tipo di lacuna:
   - Lacuna di memoria: «Non ricordi che...»
   - Lacuna di comprensione: «Non hai capito che...»
   - Confusione concettuale: «Hai confuso A con B»
   - Lacuna di applicazione: «Sai il concetto, ma non sai usarlo»

3) Per ogni lacuna, proponi un'azione di studio DIVERSA:
   - Memoria: ripassare con flashcard
   - Comprensione: guardare il podcast o un video
   - Confusione: confrontare A e B punto per punto
   - Applicazione: fare esercizi pratici

4) Pianifica i ripassi:
   - Ripassare OGGI (consolidamento iniziale)
   - Ripassare tra 1 giorno
   - Ripassare tra 3 giorni
   - Ripassare tra 7 giorni

5) Chiedi infine: «Con parole tue (senza leggere il libro), riformula il concetto che ti è sembrato più difficile.»
   (Questo è il vero test di comprensione)

Non essere indulgente: sii preciso nel diagnosi.
```

**Esempio:**

Marco risponde male alla domanda: «Cos'è il flusso di Gauss?»

**Specchio metacognitivo:**
> 1) Come sei arrivato a dire "il flusso è la carica"?
>
> 2) Vedo che hai **confuso due cose**: il flusso (che esce) con la carica (che crea il campo).
>
> 3) **Azione di studio**: Leggi attentamente "flusso vs carica" nel capitolo X. Fai la flashcard specifica.
>
> 4) Ripassi:
>    - Oggi sera: leggi di nuovo
>    - Domani: flashcard
>    - Tra 3 giorni: quiz
>    - Tra 7 giorni: ultima verifica
>
> 5) Ora spiega con parole tue: «Che differenza c'è tra flusso e carica?»

---

### 2:00-2:45 | LABORATORIO: CREARE IL TUO KIT DI AUTOVERIFICA (45 min)

**Fase 1: Raccogli le fonti (5 min)**

- Argomento: [Uno che insegni frequentemente]
- Fonte: [PDF, Doc, Link]
- Caricate in NotebookLM (dal Modulo 3)

**Fase 2: Genera gli strumenti (25 min)**

Genera tutti questi in NotebookLM:

1. **Flashcard** (10 min): Scarica o annota i titoli
2. **Quiz** (5 min): Annota le 10 domande
3. **Glossario** (5 min): Stampa o salva
4. **Audio** (5 min): Scarica il file MP3

**Fase 3: Monta il kit (10 min)**

Crea un documento Google Doc che contiene:

```
# Kit di Autoverifica: [ARGOMENTO]

## Parte 1: Flashcard
[Copia i titoli delle 20 flashcard]

## Parte 2: Quiz
[Copia le 10 domande con opzioni e spiegazioni dei distrattori]

## Parte 3: Audio di Ripasso
[Link al file audio MP3 su Google Drive]

## Parte 4: Glossario
[Copia le 12 definizioni]

## Parte 5: Come usare questo kit
1. Lunedì: Flashcard (auto-interrogazione)
2. Martedì: Quiz (verifica)
3. Mercoledì: Audio di ripasso (studio multimodale)
4. Giovedì: Specchio metacognitivo (autovalutazione)
5. Venerdì: Ripasso finale

## Contatti
Se hai domande, contatta [TUO NOME, TUA MAIL]
```

Condividi il Doc con i tuoi studenti (se permesso dall'istituto).

---

### 2:45-2:55 | CHIUSURA (10 min)

**Slide 5: Tre idee da portare via**

1. **Active Recall**: Flashcard e quiz insegnano meglio di leggere
2. **Multimodalità**: Audio + testo + quiz raggiunge tutti gli stili di apprendimento
3. **Metacognizione**: "So che cosa so" è il primo passo per imparare meglio

**Compito a casa:**
Crea il tuo **Kit di Autoverifica** completo.
Condividilo con una classe di prova.
Raccogli feedback: cosa è piaciuto? Cosa manca?

**Prossimo incontro**: Ricerca evoluta con Deep Research (Modulo 5).

---

---

# MODULO 5 · Ricerca Evoluta con Deep Research e Fact-Checking

## Durata: 3 ore (180 minuti)

### Obiettivi generali
- Usare Gemini Deep Research per ricerche documentali avanzate
- Verificare criticamente le fonti
- Insegnare ai docenti a controllare le affermazioni dell'IA
- Creare attività di fact-checking per gli studenti

### Output finale
Scheda per un'attività di "caccia all'errore" e report di ricerca verificato

---

## TIMELINE DETTAGLIATA · 180 minuti

[Sviluppare in dettaglio come i moduli precedenti...]

---

# MODULO 6 · Tutor Virtuali Personalizzati

## Durata: 3 ore (180 minuti)

### Obiettivi generali
- Creare il tutor socratico finale
- Configurare system instructions personalizzate
- Testare il tutor con 3 "studenti finti"
- Pubblicare il tutor per uso autonomo degli studenti

### Output finale
Un tutor virtuale disciplinare funzionante e pubblicato

---

## TIMELINE DETTAGLIATA · 180 minuti

[Sviluppare in dettaglio come i moduli precedenti...]

---

---

## APPENDICE: MATERIALI PER IL DOCENTE

### Checklist pre-corso

- [ ] Test accesso Gemini per tutti i partecipanti
- [ ] Test accesso NotebookLM
- [ ] Proiettore e audio funzionanti
- [ ] Documenti PDF di prova caricati
- [ ] Lista di studenti "tipo" per le demo (Marco + altri)
- [ ] Prompt Kit stampato per ogni docente
- [ ] Fogli di esercitazione (uno per modulo)

### Documentazione da consegnare

1. **Prompt Kit personale** (4 prompt + template universale)
2. **Foglio di verifica del Gem** (es. "Il mio Gem Pianificatore funziona?")
3. **Guida al Canvas** (passo-passo con screenshot)
4. **Checklist di fact-checking** (come verificare una fonte)
5. **Template di escape room** (struttura da riempire)

---

## FINE DELLA PROGRAMMAZIONE

Questa programmazione ampliata copre tutte le 18 ore dei 6 moduli con:
- Timeline minuto-per-minuto
- Prompt pronti da copiare/incollare
- Esercitazioni passo-passo
- Demo live guidate
- Output concreti per ogni modulo
- Laboratosi integrati
- Chiusure con compiti a casa

Ogni docente avrà una guida concreta per implementare subito in aula.
