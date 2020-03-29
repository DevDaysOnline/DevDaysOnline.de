<template>
  <Layout>
    <div>
      <h2>Deine Unterstützung für die Community</h2>
      <p>
        Der Virus, der aktuell alle Bereiche des öffentlichen Lebens durcheinanderbringt, hat auch die deutsche
        Entwickler-Community hart getroffen.
        Mit dem
        <a
          href="https://www.dotnet-day-franken.de"
        >.NET Day Franken</a>,
        der
        <a href="https://dotnet-cologne.de">dotnet Cologne</a>
        den
        <a href="https://md-devdays.de/">Magdeburger Developer Days</a> mussten gleich drei große
        Community-Konferenzen ihren Termin absagen oder zumindest verschieben..
      </p>
      <p>
        Und das ist leichter gesagt als getan. Diese Events haben organisatorische Vorlaufzeiten von mehreren Monaten.
        Und bereits während der Vorbereitung fallen Kosten an – Kosten, die bei dem knapp kalkulierten Budget solcher
        Veranstaltungen keine geringe Belastung darstellen.
      </p>
      <p>
        Die
        <b>dev-days-online</b> wurden ins Leben gerufen, um einerseits Sprechern und Wissensdurstigen
        eine Plattform zu bieten, die nicht vom Virus betroffen ist. Andererseits, um die betroffenen Community-Konferenzen zu unterstützen.
      </p>
      <h3>So kannst du helfen!</h3>
      <p>
        Wenn du möchtest, zahlst du einen Beitrag deiner Wahl (ab 5 €), entweder über PayPal oder per Überweisung.
        Empfänger ist zunächst der dotnet Köln/Bonn e.V., der seit über zehn Jahren das rechtliche Fundament für die dotnet Cologne darstellt.
        Anschließend wird der Erlös dieser freiwilligen Aktion zu gleichen Teilen an die Veranstalter ausgezahlt.
      </p>
      <p>
        Eine Rechnung wird auf Wunsch ab einem Betrag von mindestens 100 € ausgestellt, schicke dazu bitte eine E-Mail mit den notwendigen Angaben an
        <a
          href="mailto:info@dotnet-koelnbonn.de"
        >info@dotnet-koelnbonn.de</a>
      </p>

      <h3>PayPal</h3>
<p>Wenn Du als Firma für Deine Mitarbeiter zahlen möchten, wählen einen Betrag pro Teilnehmer. Im nächsten Schritt kannst Du dann die Anzahl der Teilnehmer angeben.</p>

      <PayPal />
      <br/>
      <h3>Überweisung</h3>
      <p>Überweise den Betrag deiner Wahl an:</p>
      <p>
        Kreissparkasse Köln:
        <b>IBAN DE31370502990002009889</b>
      </p>
    </div>
  </Layout>
</template>


<script>
import PayPal from "~/components/PayPal202004.vue";
export default {
  components: {
    PayPal
  },
  metaInfo: {
    title: "Unterstützen"
  }
};
</script>
