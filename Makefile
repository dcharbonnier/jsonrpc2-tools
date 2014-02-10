MOCHA_OPTS= --check-leaks
REPORTER = dot

check: test

test: test-unit

test-unit:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		$(MOCHA_OPTS)

plato-report:
ifndef CI
	./node_modules/.bin/plato -r -d ./plato lib test
endif

test-cov: clean lib-cov
	@COVERAGE="jsonrpc2-tool-cov" $(MAKE) test REPORTER=html-cov > coverage.html

lib-cov:
	@./node_modules/.bin/jscoverage lib lib-cov

jshint:
	@./node_modules/.bin/jshint lib test

clean:
	rm -fr lib-cov


.PHONY: test test-unit test-cov clean gist jshint plato-report




