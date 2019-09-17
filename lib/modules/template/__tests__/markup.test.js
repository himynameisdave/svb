const {
  getCSS,
  getJS,
} = require('../markup.js');


describe('modules/template/markup', () => {
  describe('getCSS', () => {
    it('should return expected CSS <link /> tag', () => {
      const mockFileName = 'bundle.css';
      const expected = `<link rel="stylesheet" href="./${mockFileName}">`;
      expect(getCSS(mockFileName)).toBe(expected);
    });
  });
  describe('getJS', () => {
    it('should return expected JS <script /> tag', () => {
      const mockFileName = 'bundle.js';
      const expected = `<script src="./${mockFileName}" async defer></script>`;
      expect(getJS(mockFileName)).toBe(expected);
    });
  });
});
