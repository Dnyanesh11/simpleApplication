import { HttpExamplePage } from './app.po';

describe('http-example App', () => {
  let page: HttpExamplePage;

  beforeEach(() => {
    page = new HttpExamplePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
