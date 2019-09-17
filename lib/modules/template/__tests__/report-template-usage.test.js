const reportTemplateUsage = require('../report-template-usage.js');


describe('modules/template/reportTemplateUsage', () => {
  jest.spyOn(console, 'log').mockImplementation(() => { });
  describe('when hasTemplate is true', () => {
    const hasTemplate = true;
    it('logs the template which we are using', () => {
      const mockFileName = 'template.html';
      reportTemplateUsage(hasTemplate, mockFileName);
      expect(console.log).toHaveBeenCalledWith(`📄 Using ${mockFileName} template`);
    });
    it('falls back to saying "Using the provided template" if no filename is provided', () => {
      reportTemplateUsage(hasTemplate);
      expect(console.log).toHaveBeenCalledWith('📄 Using the provided template');
    });
  });
  describe('when hasTemplate is false', () => {
    const hasTemplate = false;
    it('logs that the default template is being used instead', () => {
      reportTemplateUsage(hasTemplate);
      expect(console.log).toHaveBeenCalledWith('📄 Using the default HTML template instead');
    });
  });
});
