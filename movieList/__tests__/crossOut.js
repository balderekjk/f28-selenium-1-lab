const { Builder, Capabilities, By } = require('selenium-webdriver');

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
  await driver.get('http://localhost:5500/movieList/index.html');
});

afterAll(async () => {
  await driver.quit();
});

test('On click movie title will cross out and show message', async () => {
  const movie = 'The Matrix';

  await driver.findElement(By.xpath('//input')).sendKeys(movie);

  await driver.findElement(By.xpath('//button')).click();

  let movieTitle = await driver.findElement(By.xpath('//li/span'));

  await movieTitle.click();

  // let crossedOut = await driver.findElement(
  //   By.xpath('//span[contains(@class, checked)]')
  // );

  let asideText = await driver.findElement(By.id('message')).getText();

  expect(asideText).toEqual(`${movie} watched!`);
});
