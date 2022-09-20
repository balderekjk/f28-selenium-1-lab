const { Builder, Capabilities, By } = require('selenium-webdriver');

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
  await driver.get('http://localhost:5500/movieList/index.html');
});

afterAll(async () => {
  await driver.quit();
});

test('I can delete Movie', async () => {
  const movie = 'The Matrix';

  const listText = await driver.findElement(By.xpath('//ul')).getText();

  await driver.findElement(By.xpath('//input')).sendKeys(movie);

  await driver.findElement(By.xpath('//button')).click();

  await driver.findElement(By.xpath('//li/button')).click();

  expect(listText).toEqual('');
});
