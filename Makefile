publish:
	npm publish --dry-run

link:
	npm link

install:
	npm ci

make lint:
	npx eslint .

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

brain-progression:
	node bin/brain-progression.js