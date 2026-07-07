import { chai } from 'vitest';
import { chaiA11yAxe } from 'chai-a11y-axe';

// Registers `expect(el).to.be.accessible()` (axe-core audit) on vitest's
// chai instance.
chai.use(chaiA11yAxe);
