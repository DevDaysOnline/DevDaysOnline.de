<template>
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="USE4SDPSG55WC" />
        <table>
          <tr>
            <td>
              <input type="hidden" name="on0" value="Unterstützung" />Unterstützung
            </td>
          </tr>
          <tr>
            <td>
              <select name="os0">
                <option value="Zwanzig">Zwanzig €20,00 EUR</option>
                <option value="Zehn">Zehn €10,00 EUR</option>
                <option value="Fünf">Fünf €5,00 EUR</option>
                <option value="Fünfzig">Fünfzig €50,00 EUR</option>
                <option value="Fünfundsiebzig">Fünfundsiebzig €75,00 EUR</option>
                <option value="Einhundert">Einhundert €100,00 EUR</option>
              </select>
            </td>
          </tr>
        </table>
        <input type="hidden" name="currency_code" value="EUR" />
        <input
          type="image"
          src="https://www.paypalobjects.com/de_DE/DE/i/btn/btn_paynowCC_LG.gif"
          border="0"
          name="submit"
          alt="Jetzt einfach, schnell und sicher online bezahlen – mit PayPal."
        />
        <img
          alt
          border="0"
          src="https://www.paypalobjects.com/de_DE/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
</template>