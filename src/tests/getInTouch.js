/**
 * This example uses the page-objects defined at:
 *   page-objects/google/search.js
 *   page-objects/google/searchResults.js
 *
 *  For more information on working with page objects, see:
 *   https://nightwatchjs.org/guide/concepts/page-object-model.html
 *
 */

describe('google search with consent form - page objects', function() {
  const homePage = browser.page.homePage(); // first page-object

  before(async () => homePage.navigate());

  after(async (browser) => browser.quit());

  it('should find nightwatch.js in results', function(browser) {
    // Hacer click en el botón “Get in touch”
    homePage.section.headerMenu.openGetInTouchForm();

    // Validar que el formulario se abre, validando:
    // - Que se despliega el popupß
    // - El titulo
    homePage.expect.section('@getInTouchModal').to.be.visible;
    homePage.section.getInTouchModal.expect.element('@title').text.to.equal('Get In Touch');    

    // Hacer click en el botón ‘Send’ (sin completar ningún campo)
    homePage.section.getInTouchModal.submit();

    // Validar que los diferentes campos obligatorios se despliegan en rojo
    homePage.section.getInTouchModal.expect.element('@name').attribute('class').contain('wpforms-error')
    homePage.section.getInTouchModal.expect.element('@email').attribute('class').contain('wpforms-error')
    homePage.section.getInTouchModal.expect.element('@company').attribute('class').contain('wpforms-error')
    homePage.section.getInTouchModal.expect.element('@message').attribute('class').contain('wpforms-error')

    // Ir completando uno a uno los campos obligatorios y validar que cuando se completan ya no se marcan en rojo (sin hacer click en el botón ‘Send’)
    homePage.section.getInTouchModal.sendKeys('@name', 'test name')
    homePage.section.getInTouchModal.expect.element('@name').attribute('class').not.contain('wpforms-error')
    homePage.section.getInTouchModal.sendKeys('@email', 'test@email.com')
    homePage.section.getInTouchModal.expect.element('@email').attribute('class').not.contain('wpforms-error')
    homePage.section.getInTouchModal.sendKeys('@company', 'test company')
    homePage.section.getInTouchModal.expect.element('@company').attribute('class').not.contain('wpforms-error')
    homePage.section.getInTouchModal.sendKeys('@message', 'test message')
    homePage.section.getInTouchModal.expect.element('@message').attribute('class').not.contain('wpforms-error')

  });
});
