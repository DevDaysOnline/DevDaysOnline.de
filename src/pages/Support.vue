<template>
  <Layout>
    <div>
      <h2>Unterstützen</h2>
      <p>
        Diese Ausgabe der dev-days-online wird unter anderem zur Unterstützung der Veranstalter der
        Community Konferenzen
        <a
          href="https://www.dotnet-day-franken.de"
        >.NET Day Franken 2020</a>,
        der
        <a href="https://dotnet-cologne.de">dotnet Cologne 2020</a>
        den
        <a href="https://md-devdays.de/">Magdeburger Developer Days 2020</a> veranstaltet.
      </p>
      <p>
        Alle Konferenzen musste auf Grund von COVID-19 abgesagt, oder wenn möglich verschoben werden.
        Jedoch sind schon in der Vorbereitung nicht unerhebliche Kosten angefallen, auf denen die Veranstalter mit dem schon
        knappen Budget sitzenbleiben.
      </p>
      <p>
        Du kannst helfen! Zahle freiwillig einen Betrag Deiner Wahl (ab 5 €), entweder bei Paypal oder per Überweisung.
        Der dotnet Köln/Bonn e.V. sammelt alle Zahlungen ein, und die erlöse werden zu gleichen Teilen unter den Veranstaltern
        ausgezahlt.
        <br />Eine
        <b>Rechnung</b> wird erst ab einem Betrag von
        <b>mindestens 100 €</b> nach Aufforderung ausgestellt,
        schicke dazu im Anschluss eine E-Mail mit den notwendigen Angaben an
        <a href="mailto:info@dotnet-koelnbonn.de">info@dotnet-koelnbonn.de</a>
      </p>

      <h3>PayPal</h3>
      <p>
        Wenn Du per PayPal unterstützen willst, so wähle hier einen Grund Betrag und auf der Folgeseite mit der Anzahl den
        gewünschten Multiplikator.
      </p>

      <PayPal />
      <h3>Überweisung</h3>
      <p>Überweise den Betrag deiner Wahl an:</p>
      <p>Kreissparkasse Troisdorf: <b>IBAN DE123408154711</b></p>
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