import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success screen ', () => {
  it('is defined', async () => {
    const el = await fixture(html`<loan-error></loan-error>`);
    expect(el).dom.exist;
  });
});

describe('error screen', () => {
  it('is defined', async () => {
    const el = await fixture(html`<loan-success></loan-success>`);
    expect(el).dom.exist;
  });
});
