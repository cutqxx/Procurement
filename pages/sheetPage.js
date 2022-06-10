const { expect } = require("@playwright/test");

exports.sheetPage = class sheetPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page, context, browser) {
    this.browser = browser;
    this.page = page;
    this.context = context;
    this.BUTTON_ADD_POTREBNOST = "div.nav-buttons div.mdc-button__ripple";
    this.UPLOAD_FILES = "div.modal-tooltip input";
    this.NAME_PROJECT = "h4.header-view__title";
    this.BUTTON_VNESTI_IN_FORMA = "text=Внести";
    this.FORMA_PRORABOKTA_POTREBNOSTI =
      "//html/body/div[2]/div/header/div/section[2]/div/div[2]/button/div";
    this.BUTTON_RASSCHITAT_IN_FORMA = 'button:has-text("Рассчитать")';
    this.CHECK_ADD_POTREBNOST = "div.table-board-td >> nth=0";
  }

  async click_button_open_forma(n) {
    await this.page.click(`div.nav-buttons div.mdc-button__ripple >> nth=${n}`);
  }

  async add_pid_in_forma() {
    await this.page.click(this.PID_BUTTON);
    await this.page.locator(this.PID).waitFor();
    await this.page.click(this.PID);
    await this.page.click(this.BUTTON_ADD_PID);
    await this.page.waitForTimeout(1000);
  }

  async click_button_vnesti_in_forma() {
    await this.page.click(this.BUTTON_VNESTI_IN_FORMA);
  }
  // --- Внесение данных в формы заполнения табличных данных:
  // --- Загрузка новой потребности:
  async add_potrebnost() {
    await this.page.click(this.BUTTON_ADD_POTREBNOST);
    await this.page.setInputFiles(this.UPLOAD_FILES, "./Example/potreb.xlsx");
    await this.page.waitForTimeout(500);
  }

  async check_add_potreb() {
    await expect(this.page.locator(this.CHECK_ADD_POTREBNOST)).toHaveText("А.3");
  }

  // --- Предварительная проработка потребности:
  async fill_the_fields_prorabotka_potrebnosti() {
    await this.page.click(this.GENPODRYADCHICK);
    await this.page.click(this.SELECTOR_OPTION);
    await this.page.click(this.DATEPICKER_1);
    await this.page.click(this.DATE);
    await this.page.click(this.IZGOTOVITEL_POLE);
    await this.page.click(this.SELECTOR_OPTION);
    await this.page.click(this.POSTAVSHIK_POLE);
    await this.page.click(this.SELECTOR_OPTION);
    await this.page.click(this.DATE_VIBORA_ODCI);
    await this.page.click(this.DATE);
    await this.page.click(this.DATE_RAZRABOTKI_KDNO);
    await this.page.click(this.DATE);
    await this.page.click(this.DATE_SOGLASOVANIYA_KDNO);
    await this.page.click(this.DATE);
    await this.page.fill(this.COMMENT_ZAKUPKA, "Комментарий к закупке");
    await this.page.fill(this.ORIENTIR_CENA, "230");
    await this.page.waitForTimeout(1000);
  }

  async data_entry_check_after_prorabotka_potrebnosti(){
    scroll_general_table()
    await expect(this.page.locator(this.CHECK_ORIENTIR_CENA)).toHaveText('230,00');
    await expect(this.page.locator(this.CHECK_ORIENTIR_STOIMOST)).toHaveText('575 000,00');
  }

  // --- форма "Контрактация"
  async fill_the_fields_kontraknaciya(){
    await this.page.click(this.IZGOTOVITEL)
    await this.page.click(this.SELECTOR_OPTION)
    await this.page.click(this.POSTAVSHIK)
    await this.page.click(this.SELECTOR_OPTION)
    await this.page.fill(this.NOMER_I_DATA_DOGOVORA_S_POSTAVSHIKOM, "№1 от 20.02.22")
    await this.page.fill(this.NOMER_I_DATA_SPECIFIKACII_S_POSTAVSHIKOM, "№2 от 24.02.22")
    await this.page.fill(this.BAZIS_POSTAVKI, "Москва")
    await this.page.fill(this.NAME_MTR_FAKTICH,"Кирпич лучший")
    await this.page.click(this.ED_IZM_FAKTICH)
    await this.page.click(this.SELECTOR_OPTION)
    await this.page.fill(this.KOEFFICIENT_PERESCHETA, "1")
    await this.page.fill(this.KOLVO_KONTRAKTACII_FAKTICH, "750")
    await this.page.fill(this.CENA_KONTRAKTACII_FAKTICH,"200")
    await this.page.fill(this.COMMENT_ZAKUPKA, "Комментарий закупка")
  }



// --- Скролл таблицы:
  async scroll_general_table() {
    await this.page .locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page .locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();await this.page .locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();await this.page .locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();await this.page .locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();await this.page .locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();await this.page .locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();await this.page .locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();await this.page .locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();await this.page .locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
    await this.page.locator("div.table-board-td >> nth=-1").scroll_into_view_if_needed();
  }
};
