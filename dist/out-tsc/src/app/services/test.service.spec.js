import { TestBed } from '@angular/core/testing';
import { TestService } from './test.service';
describe('TestService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(TestService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=test.service.spec.js.map