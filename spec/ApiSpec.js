'use strict';

const request = require("request");
const base_url = "https://cloud-api.yandex.net/v1/";

describe("GET /disk/", function() {
    it("Unauthorized request. Successful test", function(done) {
        request.get(base_url + 'disk/', function(error, response, body) {
            expect(response.statusCode).toBe(401);
            let responseObject = JSON.parse(body);
            expect(responseObject.error).not.toBeUndefined();
            done();
        });
    });
});
