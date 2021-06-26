import { UrlSantizePipe } from './url-santize.pipe';

describe('UrlSantizePipe', () => {
  it('create an instance', () => {
    const pipe = new UrlSantizePipe();
    expect(pipe).toBeTruthy();
  });
});
