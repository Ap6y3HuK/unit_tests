import { AnyResource } from 'src/app/home/resources/AnyResource';
import { async, fakeAsync, getTestBed, TestBed, tick } from '@angular/core/testing';

describe('AnyResource', () => {
  let responseFromServer: string;

  describe('WITHOUT TestBed', () => {
    let anyResource: AnyResource;

    beforeEach(() => {
      responseFromServer = undefined;
      anyResource = new AnyResource();

    });

    it('should fetched data in 2 sec', fakeAsync(() => {

      anyResource.getDataWithStableDelay().subscribe((response) => {
        responseFromServer = response
        expect(responseFromServer).toBe('Data fetched in 2 sec');
      });

      tick(2000);
      // expect(responseFromServer).toBe('Data fetched in 2 sec');

    }));

    it('should fetched data in unknown time', (done) => {

      anyResource.getDataWithRandomDelay().subscribe((response) => {
        responseFromServer = response;
        expect(responseFromServer).toBe('Data fetched in unknown time');
        done();
      });
    });
  });

  describe('WITH TestBed', () => {
    let anyResource: AnyResource;
    beforeEach(() => {
      responseFromServer = undefined;
      anyResource = undefined;

      TestBed.configureTestingModule({
        providers: [
          AnyResource
        ]
      });

      anyResource = TestBed.get(AnyResource);
    });

    it('should fetched data in 2 sec', fakeAsync(() => {
      expect(anyResource).toBeDefined();

      anyResource.getDataWithStableDelay().subscribe((response) => {
        responseFromServer = response
      });

      tick(2000);
      expect(responseFromServer).toBe('Data fetched in 2 sec');
    }));

    it('should fetched data in unknown time', async(() => {

      anyResource.getDataWithRandomDelay().subscribe((response) => {
        responseFromServer = response;
        expect(responseFromServer).toBe('Data fetched in unknown time');
      });
    }));

  });
});
