const formatVolumeIconPath = require('../assets/scripts/main');


test('icon level 3', () => {
	expect(formatVolumeIconPath(100)).toMatch(/volume-level-3/);
});
test('icon level 2', () => {
	expect(formatVolumeIconPath(66)).toMatch(/volume-level-2/);
});
test('icon level 1', () => {
	expect(formatVolumeIconPath(33)).toMatch(/volume-level-1/);
});
test('icon level 1', () => {
	expect(formatVolumeIconPath(0)).toMatch(/volume-level-0/);
});
