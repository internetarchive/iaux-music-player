import { expect } from '@open-wc/testing';
import sinon from 'sinon';
import { generateBookReaderManifest } from '../src/photo-viewer/bookreader-utils';

// mock fetch reference https://gist.github.com/lkrych/ad537915c69f09ad597767655d2b9211
function jsonOk(body: any) {
  const mockResponse = new window.Response(JSON.stringify(body), {
    // the fetch API returns a resolved window Response object
    status: 200,
    headers: {
      'Content-type': 'application/json',
    },
  });
  return Promise.resolve(mockResponse);
}
const MOCK_JSON = {
  result: {
    identifier: 'bar-item',
    title: 'Bar Item',
  },
};

let stub: any;
beforeEach(() => {
  stub = sinon.stub(window, 'fetch'); // add stub
  stub.onCall(0).returns(jsonOk(MOCK_JSON));
});

afterEach(() => {
  sinon.restore();
});

describe('`generateBookReaderManifest`', () => {
  it('creates a BookReader manifest', async () => {
    const manifest = await generateBookReaderManifest({
      images: ['foo1.jpg', 'foo2.jpg', 'foo3.jpg'] as unknown as any,
      itemIdentifier: 'bar-item',
      itemTitle: 'Bar Item',
      baseHost: 'foobar.org',
    });

    expect(manifest.data).to.exist;
    expect(manifest.brOptions).to.exist;
    expect(manifest.metadata).to.exist;

    expect(manifest.data).to.deep.equal({
      bookUrl: '/details/bar-item',
      id: 'bar-item',
      isRestricted: false,
      streamOnly: false,
      subPrefix: 'bar-item',
    });

    expect(manifest.brOptions.ppi).to.exist;
    expect(manifest.brOptions.enableSearch).to.equal(false);
    expect(manifest.brOptions.enableBookmarks).to.equal(false);
    expect(manifest.brOptions.plugins.textSelection.enabled).to.equal(false);
    expect(manifest.brOptions.data.length).to.equal(2);
    expect(manifest.brOptions.data[0][0].height).to.equal(300);
    expect(manifest.brOptions.data[0][0].width).to.equal(300);
    expect(manifest.brOptions.data[0][0].pageSide).to.equal('R');
    expect(manifest.brOptions.data[0][0].leafNum).to.equal(0);
    expect(manifest.brOptions.data[0][0].uri).to.equal(
      'https://foobar.org/download/bar-itemfoo1.jpg'
    );

    expect(manifest.brOptions.data[1].length).to.equal(2);
    expect(manifest.brOptions.data[1][0].pageSide).to.equal('L');
    expect(manifest.brOptions.data[1][0].uri).to.equal(
      'https://foobar.org/download/bar-itemfoo2.jpg'
    );

    expect(manifest.brOptions.data[1][1].pageSide).to.equal('R');
    expect(manifest.brOptions.data[1][1].uri).to.equal(
      'https://foobar.org/download/bar-itemfoo3.jpg'
    );
  });
});
